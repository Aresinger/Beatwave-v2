import { useState } from 'react'
import { fetchDeezerApi } from '../services/apiDeezer';


export default function SearchBar({setResult}) {

    const [valueInput,setValueInput] = useState("");


const handleSubmit = async (e) => {
    e.preventDefault();
console.log(valueInput)
setResult(await fetchDeezerApi(valueInput)) ;


}


  return (
    <div className='self-center-safe border-1 m-5 mt-14 md:w-lg md:h-50 rounded-2xl flex-col '>
        <form onSubmit={handleSubmit}>
        <div >
            <label htmlFor="search" className='block m-2 font-bold'>Cerca per nome o artista</label>
        <input type="text" name="search" id="search" className='border-1 m-5 rounded-md p-2' value={valueInput} onChange={(e) => setValueInput(e.target.value)}/>
        <button  className='border-2 rounded-2xl p-2 bg-blue-400 text-white cursor-pointer hover:scale-125'>Cerca</button>
        
        </div>
            
        </form>
         
             
         
            
    </div>
  )
}
