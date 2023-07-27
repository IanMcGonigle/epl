import {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { PlayersContext } from './state/PlayersContext';
import { Player } from './types';
import { Navbar } from './components/Navbar';
import { Listing } from './components/Listing';
import { Compare } from './components/Compare';
import './App.css';

function App() {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    async function fetchItems():Promise<void> {
      const response:Response = await fetch('http://localhost:8888/players');
      const json = await response.json();
      setPlayers(json)
    }
    fetchItems();
  }, []);

  return (
    <div className='App'>
      <PlayersContext.Provider value={{players}}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Listing />}></Route>
          <Route path='compare' element={<Compare />}></Route>
        </Routes>
      </PlayersContext.Provider>
    </div>
  );
}

export default App;
