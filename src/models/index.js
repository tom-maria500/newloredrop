// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game, Player } = initSchema(schema);

export {
  Game,
  Player
};