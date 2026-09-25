export default function Player({ audio, isShow, setIsShow }) {
  console.log(audio);

  return (
    <>
      {/* {!isShow ? (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 ">
          <audio src={audio} controls autoPlay className="block" />
    
 
          <button onClick={() => setIsShow(!isShow)} >
           

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="  cursor-pointer size-6 absolute  bottom-16 text-black hover:scale-125 transition-transform duration-300 ease-in-out "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
              />
            </svg>
            
          </button>
     </div>
        
      ) : (
        <div className="fixed bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-5 shadow-lg flex items-center justify-center gap-4">

          <button onClick={() => setIsShow(!isShow)} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="cursor-pointer size-6 absolute bottom-2 left-1/2 -translate-x-1/2 text-black hover:scale-125 transition-transform duration-300 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
              />
            </svg>
          </button>

          </div>
        
      )} */}
      <div className="fixed bottom-20 md:bottom-2 left-1/2 -translate-x-1/2 ">
        <audio
          src={audio}
          controls
          autoPlay
          className={`transition-all  duration-700 ${isShow ? " opacity-100 translate-0" : "opacity-0 translate-y-20 pointer-events-none"}`}
        />
        <button onClick={() => setIsShow(!isShow)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`cursor-pointer size-6 absolute  ${isShow ? "translate-x-0 -translate-22" : "translate-x-0 -translate-5"} text-black hover:scale-125 transition-transform duration-300 ease-in-out`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d={!isShow ? "M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" : "M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"}
            />
          </svg>
        </button>
      </div>
    </>
  );
}

