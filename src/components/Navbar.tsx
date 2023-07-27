import * as React from 'react';
import { Link } from 'react-router-dom';


export function Navbar() {
  return (
    <nav className='flex w-full'>
      <ul>
        <li><Link to='/'>List</Link></li>
        <li><Link to='/compare'>Compare</Link></li>
      </ul>
    </nav>
  );
}
