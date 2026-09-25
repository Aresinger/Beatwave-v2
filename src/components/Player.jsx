

export default function Player({audio}) {
    console.log(audio)
  return (

    <div>
        <audio src={audio} controls autoPlay className="fixed bottom-2 transform -translate-x-1/2"/>
    </div>
  )
}
