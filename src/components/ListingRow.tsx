import * as React from 'react';
import cn from 'classnames';
import { Player } from '../types';

export function ListingRow(props: Player) {
  return (
    <tr className='border border-x-0 border-t-0 border-b-1'>
      {Object.values(props).map((value: string | number, index: number) => (
        <td className={cn('border border-x-1 border-y-0 py-1 px-3')} key={`key_${index}${value}`}>
          {value}
        </td>
      ))}
    </tr>
  );
}
