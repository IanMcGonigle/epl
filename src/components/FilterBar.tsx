import * as React from 'react';
import { useState } from 'react';
import { Player } from '../types';

export interface IFilterBarProps {
  values:Array<Player>;
  onSelect: (item:Player) => void;
}

export function FilterBar ({values, onSelect}: IFilterBarProps) {
  const [userInput, setUserInput] = useState<string>('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <div className='filterBar'>
      <input
        className='border border-slate-200'
        type='search'
        onChange={onChange}
        value={userInput}
      />
      {userInput.length >= 2 && (
        <ul>
          {values
            .filter((i: Player) =>
              i.PLAYER.toLocaleLowerCase().includes(
                userInput.toLocaleLowerCase()
              )
            )
            .map((item: Player, index:number) => {
              return (
                <li
                  key={`filter_${index}${item.Rank}`}
                  role='button'
                  onClick={() => {
                    onSelect(item);
                    setUserInput('');
                  }}
                >
                  {item.PLAYER}
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
}
