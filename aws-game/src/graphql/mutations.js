/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      creator
      players {
        nextToken
        __typename
      }
      cards {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      creator
      players {
        nextToken
        __typename
      }
      cards {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      creator
      players {
        nextToken
        __typename
      }
      cards {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      username
      gameID
      game {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      submissions {
        nextToken
        __typename
      }
      points
      createdAt
      updatedAt
      gamePlayersId
      __typename
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      username
      gameID
      game {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      submissions {
        nextToken
        __typename
      }
      points
      createdAt
      updatedAt
      gamePlayersId
      __typename
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      username
      gameID
      game {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      submissions {
        nextToken
        __typename
      }
      points
      createdAt
      updatedAt
      gamePlayersId
      __typename
    }
  }
`;
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
      id
      content
      category
      gameID
      flipped
      createdAt
      updatedAt
      game {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
      id
      content
      category
      gameID
      flipped
      createdAt
      updatedAt
      game {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
      id
      content
      category
      gameID
      flipped
      createdAt
      updatedAt
      game {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      __typename
    }
  }
`;
export const createSubmission = /* GraphQL */ `
  mutation CreateSubmission(
    $input: CreateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    createSubmission(input: $input, condition: $condition) {
      id
      gameID
      playerID
      player {
        id
        username
        gameID
        points
        createdAt
        updatedAt
        gamePlayersId
        __typename
      }
      audioKey
      drawingKey
      transcript
      createdAt
      updatedAt
      playerSubmissionsId
      __typename
    }
  }
`;
export const updateSubmission = /* GraphQL */ `
  mutation UpdateSubmission(
    $input: UpdateSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    updateSubmission(input: $input, condition: $condition) {
      id
      gameID
      playerID
      player {
        id
        username
        gameID
        points
        createdAt
        updatedAt
        gamePlayersId
        __typename
      }
      audioKey
      drawingKey
      transcript
      createdAt
      updatedAt
      playerSubmissionsId
      __typename
    }
  }
`;
export const deleteSubmission = /* GraphQL */ `
  mutation DeleteSubmission(
    $input: DeleteSubmissionInput!
    $condition: ModelSubmissionConditionInput
  ) {
    deleteSubmission(input: $input, condition: $condition) {
      id
      gameID
      playerID
      player {
        id
        username
        gameID
        points
        createdAt
        updatedAt
        gamePlayersId
        __typename
      }
      audioKey
      drawingKey
      transcript
      createdAt
      updatedAt
      playerSubmissionsId
      __typename
    }
  }
`;
