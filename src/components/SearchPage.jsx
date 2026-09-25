import { useState } from 'react';
import SearchBar from './SearchBar'
import SearchResult from './SearchResult'
import Player from './Player';


export default function SearchPage() {
const [result,setResult] = useState(null);
const [audio,setAudio] = useState(null);
const [isShow, setIsShow] = useState(false);


  return (
    <div className='justify-center items-center flex flex-col gap-4'>
        <SearchBar setResult={setResult}/>
        <SearchResult result={result} setAudio={setAudio} />
        <Player audio={audio} isShow={isShow} setIsShow={setIsShow} />
    </div>
  )
}
