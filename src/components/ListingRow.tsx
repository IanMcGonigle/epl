import * as React from 'react';
import { Player } from '../types';

export function ListingRow(props: Player) {
  return (
    <tr>
      { Object.values(props).map( (value:string|number, index:number) => <td key={`key_${index}${value}`}>{value}</td>) }
    </tr>
  );
}
