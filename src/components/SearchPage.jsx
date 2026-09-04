import { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import Player from './Player';


export default function SearchPage() {
const [result,setResult] = useState(null);
const [audio,setAudio] = useState(null);


  return (
    <div>
        <SearchBar setResult={setResult}/>
        <SearchResult result={result} setAudio={setAudio} />
        <Player audio={audio}/>
    </div>
  )
}
