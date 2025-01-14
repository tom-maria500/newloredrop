/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame($filter: ModelSubscriptionGameFilterInput) {
    onCreateGame(filter: $filter) {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame($filter: ModelSubscriptionGameFilterInput) {
    onUpdateGame(filter: $filter) {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame($filter: ModelSubscriptionGameFilterInput) {
    onDeleteGame(filter: $filter) {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onCreatePlayer(filter: $filter) {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onUpdatePlayer(filter: $filter) {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer($filter: ModelSubscriptionPlayerFilterInput) {
    onDeletePlayer(filter: $filter) {
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard($filter: ModelSubscriptionCardFilterInput) {
    onCreateCard(filter: $filter) {
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard($filter: ModelSubscriptionCardFilterInput) {
    onUpdateCard(filter: $filter) {
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard($filter: ModelSubscriptionCardFilterInput) {
    onDeleteCard(filter: $filter) {
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
export const onCreateSubmission = /* GraphQL */ `
  subscription OnCreateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
  ) {
    onCreateSubmission(filter: $filter) {
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
export const onUpdateSubmission = /* GraphQL */ `
  subscription OnUpdateSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
  ) {
    onUpdateSubmission(filter: $filter) {
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
export const onDeleteSubmission = /* GraphQL */ `
  subscription OnDeleteSubmission(
    $filter: ModelSubscriptionSubmissionFilterInput
  ) {
    onDeleteSubmission(filter: $filter) {
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
