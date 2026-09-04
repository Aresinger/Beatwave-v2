
import TrackCard from "./TrackCard";





export default function SearchResult({result,setAudio}) {


  return (
    <section className="mt-30 ">
      {result?.data.map((data) => (
        <TrackCard data={data} key={data.id} setAudio={setAudio} />
      ))}
    </section>
  );
}
