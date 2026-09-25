
import TrackCard from "./TrackCard";





export default function SearchResult({result,setAudio}) {


  return (
    <section className="mt-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5">

      {result?.data.map((data) => (
        <TrackCard data={data} key={data.id} setAudio={setAudio} />
      ))}
      </div>
    </section>
  );
}
