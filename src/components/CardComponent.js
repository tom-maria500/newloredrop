import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { listCards } from "../graphql/queries";
import { updateCard } from "../graphql/mutations";
import { onUpdateCard } from "../graphql/subscriptions";
import "../styles/CardComponent.css";

const CardComponent = forwardRef(({ gameId, client, timerActive }, ref) => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes in seconds

  useImperativeHandle(ref, () => ({
    stopTimer: () => setTimeLeft(0)
  }));

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const cardsResponse = await client.graphql({
          query: listCards,
          variables: { filter: { gameID: { eq: gameId } } },
        });
        const cardData = cardsResponse.data.listCards.items;
        setCards(cardData);

        const flippedState = cardData.reduce((state, card) => {
          state[card.id] = card.flipped || false;
          return state;
        }, {});
        setFlippedCards(flippedState);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();

    const subscription = client.graphql({
      query: onUpdateCard,
      variables: { filter: { gameID: { eq: gameId } } },
    }).subscribe({
      next: ({ value }) => {
        const updatedCard = value?.data?.onUpdateCard;
        if (updatedCard) {
          updateCardState(updatedCard);
        }
      },
      error: (err) => console.error("Subscription error:", err),
    });

    return () => subscription.unsubscribe();
  }, [gameId, client]);

  useEffect(() => {
    if (timerActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timerActive, timeLeft]);

  const updateCardState = (updatedCard) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );
    setFlippedCards((prevState) => ({
      ...prevState,
      [updatedCard.id]: updatedCard.flipped,
    }));
  };

  const flipCard = async (cardId) => {
    try {
      const newFlippedState = !flippedCards[cardId];
      setFlippedCards((prevState) => ({
        ...prevState,
        [cardId]: newFlippedState,
      }));

      await client.graphql({
        query: updateCard,
        variables: {
          input: {
            id: cardId,
            flipped: newFlippedState,
          },
        },
      });
    } catch (error) {
      console.error("Error flipping card:", error);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="card-container">
      <div className="content-container">
        <div className="info-section">
          <h3>Flip the cards to reveal the prompts and play!</h3>
          <h4> Time Left: </h4>
          <div className="timer-container">
            <div
              className="timer-bar"
              style={{ width: `${(timeLeft / 180) * 100}%` }}
            ></div>
            <span className="timer-text">{formatTime(timeLeft)}</span>
          </div>
        </div>
  
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`card ${flippedCards[card.id] ? "flipped" : ""}`}
              onClick={() => flipCard(card.id)}
            >
              {flippedCards[card.id] ? (
                <div className="card-content">{card.content}</div>
              ) : (
                <div className="card-back">
                  {index === 0
                    ? "Setting"
                    : index === 1
                    ? "Plot Twist"
                    : index === 2
                    ? "Character"
                    : "Click to Flip"}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});   

export default CardComponent;
