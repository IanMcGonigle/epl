import * as React from 'react';
import cn from 'classnames';
import { Player } from '../types';

export interface IPlayerCardProps {
  player: Player;
  comparisson?:Player|null;
  onClose: () => void;
}

export function PlayerCard({ player, onClose, comparisson }: IPlayerCardProps) {
  const tw: string = 'flex border border-t-0 border-x-0 border-b-slate-200';
  const dt =
    'w-1/4 border border-y-0 border-l-0 border-r-1 text-left font-semibold px-2 py-1';
  const dd = 'px-2  py-1';

  const ms = (property:string, base:string='', useHigher:boolean = true):string => {
    return useHigher
      ? cn(base, {
          'bg-lime-400 text-white':
            comparisson &&
            player[property as keyof Player] >
              comparisson[property as keyof Player],
        })
      : cn(base, {
          'bg-lime-400 text-white':
            comparisson &&
            player[property as keyof Player] <
              comparisson[property as keyof Player],
        });
  }
  return (
    <div className='border border-b-slate-200 relative'>
      <button
        className='absolute top-0 right-2 font-black text-xl'
        onClick={() => onClose()}
      >
        &times;
      </button>
      <h2 className='font-bold'>{player.PLAYER}</h2>
      <h3 className='font-bold'>{player.TEAM}</h3>
      <dl className={ms('Rank', 'flex border border-x-0 border-y-1', false)}>
        <dt className={dt}>RANK</dt>
        <dd className={dd}>{player.Rank}</dd>
      </dl>
      <dl className={ms('G', tw)}>
        <dt className={dt}>g</dt>
        <dd className={dd}>{player.G}</dd>
      </dl>
      <dl className={ms('ASST',tw)}>
        <dt className={dt}>ASST</dt>
        <dd className={dd}>{player.ASST}</dd>
      </dl>
      <dl className={ms('SOG',tw)}>
        <dt className={dt}>SOG</dt>
        <dd className={dd}>{player.SOG}</dd>
      </dl>
      <dl className={ms('SHOTS',tw)}>
        <dt className={dt}>SHOTS</dt>
        <dd className={dd}>{player.SHOTS}</dd>
      </dl>
      <dl className={ms('GP',tw)}>
        <dt className={dt}>GP</dt>
        <dd className={dd}>{player.GP}</dd>
      </dl>
      <dl className={ms('GS',tw)}>
        <dt className={dt}>GS</dt>
        <dd className={dd}>{player.GS}</dd>
      </dl>
      <dl className={ms('MIN',tw)}>
        <dt className={dt}>MIN</dt>
        <dd className={dd}>{player.MIN}</dd>
      </dl>
    </div>
  );
}
