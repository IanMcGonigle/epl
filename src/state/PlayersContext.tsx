import React from 'react';
import { Player } from '../types';

type PlayersContextType = {
  players:Array<Player>;
};
export const PlayersContext = React.createContext<PlayersContextType>({ players:[]} as PlayersContextType);