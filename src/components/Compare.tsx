import { useContext, useState, MouseEventHandler } from 'react';
import { PlayersContext } from '../state/PlayersContext';
import { Container } from './Container';
import { PlayerCard } from './PlayerCard';
import { Player } from '../types';
import { FilterBar } from './FilterBar';

export interface ICompareProps {
}


export function Compare() {
  const { players } = useContext(PlayersContext);
  const [playerA, setPlayerA] = useState<Player|null>(null);
  const [playerB, setPlayerB] = useState<Player|null>(null);

  return (
    <Container>
      <h1>Compare</h1>
      <FilterBar
        values={players}
        onSelect={(sel: Player) => {
          if (!playerA) {
            setPlayerA(sel);
            return;
          }
          if (!playerB) {
            setPlayerB(sel);
            return;
          }
        }}
      />
      <div className='flex my-3'>
        {playerA && (
          <div className='w-1/2 mx-1'>
            <PlayerCard
              player={playerA}
              comparisson={playerB}
              onClose={() => setPlayerA(null)}
            />
          </div>
        )}
        {playerB && (
          <div className='w-1/2 mx-1'>
            <PlayerCard
              player={playerB}
              comparisson={playerA}
              onClose={() => setPlayerB(null)}
            />
          </div>
        )}
      </div>
    </Container>
  );
}
