/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        creator
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        gameID
        points
        createdAt
        updatedAt
        gamePlayersId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
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
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        category
        gameID
        flipped
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSubmission = /* GraphQL */ `
  query GetSubmission($id: ID!) {
    getSubmission(id: $id) {
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
export const listSubmissions = /* GraphQL */ `
  query ListSubmissions(
    $filter: ModelSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubmissions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        playerID
        audioKey
        drawingKey
        transcript
        createdAt
        updatedAt
        playerSubmissionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
