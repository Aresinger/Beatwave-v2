

export default function Player({audio}) {
    console.log(audio)
  return (

    <div>
        <audio src={audio} controls autoPlay className="fixed top-0"/>
    </div>
  )
}
