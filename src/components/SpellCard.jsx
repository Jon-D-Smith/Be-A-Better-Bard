import { useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';


const SpellCard = ({spell}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(.1)
  const [isPlaying, setIsPlaying] = useState(false)


  const changeSize = () => {
    setIsExpanded(!isExpanded)
  }



  const content = () =>  (
  
  <div className="spellcard-container">
        <div className="spell-attributes" onClick={changeSize}>
          <p className={`spell-name ${isPlaying ? "spell-playing" : ""}`} >{spell.spellName} {isPlaying ? <span className="">&#x1F50A;</span> : <span className="icon-hide">&#x1F50A;</span>}</p>
          <span className="spell-detail"><p>Casting Time:</p> <p>{spell.castingTime}</p> </span>
          <span className="spell-detail"><p>Components:</p> <p>{spell.components}</p> </span>
          <span className="spell-detail"><p>Range:</p> <p>{spell.range}</p> </span>
          <span className="spell-detail"><p>Saving Throw:</p> <p>{spell.save}</p> </span>
          <span className="spell-detail"><p>Duration:</p> <p>{spell.duration}</p> </span>

        </div>
        <div className={`spell-content ${isExpanded ? "spell-expanded" : ""}`}>
          <div className="spell-overflow">
            <hr />
            <div className="spell-description">
                <p>{spell.description}</p>
            </div>


            <AudioPlayer
                src={`${spell.audio}`}
                onPlay={e => console.log('onPlay')}
                style={ {  border: 0} }
                header={ spell.audioName }
                onVolumeChange={(e) => setVolume(e.target.volume)}
                volume={volume}
                onPlaying={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                />
        </div>
        
      
    </div>
  </div>

  )

    return (
      <>
      {content()}
      </>
    )
}

export default SpellCard