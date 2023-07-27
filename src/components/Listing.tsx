import { useContext, useState } from 'react';
import { Player } from '../types';
import { Container } from './Container';
import { ListingRow } from './ListingRow';
import { PlayersContext } from '../state/PlayersContext';

export function Listing () {
  const { players } = useContext(PlayersContext);
  const [sortedPlayers, setSortedPlayers] = useState<Player[]>(players);

  const sortBy = (value: keyof Player) => {
    console.log('sort by ', value);

    const result = [...players].sort( (a:Player, b:Player):number => {
      const val1 = a[value];
      const val2 = b[value];

      switch (typeof val1) {
        case 'number': {
          const valb = val2 as number;
          return val1 - valb;
        }
        case 'string': {
          const valb = val2 as string;
          return val1.localeCompare(valb);
        }
        default:
          return 0;
      }
    });
    setSortedPlayers(result);
  }
  return (
    <Container wrapperClass='listing'>
      <h1>Listing</h1>
      <table>
        <thead>
          <tr>
            <td>
              <button onClick={() => sortBy('Rank')}>Rank</button>
            </td>
            <td>
              <button onClick={() => sortBy('PLAYER')}>PLAYER</button>
            </td>
            <td>
              <button onClick={() => sortBy('TEAM')}>TEAM</button>
            </td>
            <td>
              <button onClick={() => sortBy('GP')}>GP</button>
            </td>
            <td>
              <button onClick={() => sortBy('GS')}>GS</button>
            </td>
            <td>
              <button onClick={() => sortBy('MIN')}>MIN</button>
            </td>
            <td>
              <button onClick={() => sortBy('G')}>G</button>
            </td>
            <td>
              <button onClick={() => sortBy('ASST')}>ASST</button>
            </td>
            <td>
              <button onClick={() => sortBy('SHOTS')}>SHOTS</button>
            </td>
            <td>
              <button onClick={() => sortBy('SOG')}>SOG</button>
            </td>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player: Player) => {
            return <ListingRow key={player.Rank} {...player} />;
          })}
        </tbody>
      </table>
    </Container>
  );
}
