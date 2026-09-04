export default function TrackCard({data,setAudio}) {
  return (
    <div
    //   
    
      className="
        flex items-center gap-4
        w-full max-w-xl
        p-3
        bg-white
        border border-gray-200
        rounded-xl
        shadow-sm
        cursor-pointer
        transition
        hover:shadow-md
        hover:scale-[1.01]
        mb-5
      "
      key={data.id}
    >
      <img
        src={data.album.cover_medium}
        alt={data.album.title}
        className="w-20 h-20 rounded-lg object-cover"
      />

      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg truncate">
          {data.title}
        </h3>

        <p className="text-gray-600">
          {data.artist.name}
        </p>

        <p className="text-sm text-gray-400 truncate">
          {data.album.title}
        </p>
      </div>

      <button
        type="button"
        className="
          w-10 h-10
          rounded-full
          bg-blue-500
          text-white
          cursor-pointer
          hover:bg-blue-800
        "
      onClick={() => setAudio(data?.preview)}
      >
        ▶
      </button>
    </div>
  );
}