export default function Animation(props){
  const piece = props.piece
  const imgalt = `Animation of Me`
  return (
    <div className={`aniDiv${props.side}`}>
      <img className='aniImg' style={props.aniImg} src={piece.animation} alt={piece.desc} />
    </div>
  )
}