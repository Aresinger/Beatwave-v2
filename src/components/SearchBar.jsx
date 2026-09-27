import { useState } from "react";
import { fetchDeezerApi } from "../services/apiDeezer";

export default function SearchBar({ setResult }) {
  const [valueInput, setValueInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(valueInput);
    setResult(await fetchDeezerApi(valueInput));
  };

  return (
    <div className=" ml-5 mr-5 md:w-lg md:h-30  ">
      <form onSubmit={handleSubmit}>
        <div className="md:flex border rounded-2xl md:h-30 items-center justify-center">
          <label htmlFor="search" className=" font-bold m-2">
            Cerca per nome o artista
          </label>
          <input
            type="text"
            name="search"
            id="search"
            className="flex border border-solid m-5 rounded-md p-2"
            value={valueInput}
            onChange={(e) => setValueInput(e.target.value)}
          />
          <button className="m-2 rounded-2xl p-2  bg-blue-400 text-white cursor-pointer hover:transition-transform hover:scale-110 duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
