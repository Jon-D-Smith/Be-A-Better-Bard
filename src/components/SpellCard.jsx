import { useState } from "react"
import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/src/styles.scss';


const SpellCard = ({audio, spellName, castingTime, components, range, save, duration, description, audioName}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(.1)


  const changeSize = () => {
    setIsExpanded(!isExpanded)
  }



  const expanded = () =>  (
  
  <div className="spellcard-container">
        <div className="spell-attributes">
          <p className="spell-name" onClick={changeSize}>{spellName}</p>
          <span className="spell-detail"><p>Casting Time:</p> <p>{castingTime}</p> </span>
          <span className="spell-detail"><p>Components:</p> <p>{components}</p> </span>
          <span className="spell-detail"><p>Range:</p> <p>{range}</p> </span>
          <span className="spell-detail"><p>Saving Throw:</p> <p>{save}</p> </span>
          <span className="spell-detail"><p>Duration:</p> <p>{duration}</p> </span>

        </div>
        <div className={`spell-content ${isExpanded ? "spell-expanded" : ""}`}>
          <div className="spell-overflow">
            <hr />
            <div className="spell-description">
                <p>{description}</p>
            </div>


            <AudioPlayer
                src={`${audio}`}
                onPlay={e => console.log('onPlay')}
                style={ { borderRadius: 0 , border: 0} }
                header={ audioName }
                onVolumeChange={(e) => setVolume(e.target.volume)}
                volume={volume}
                />
        </div>
        
      
    </div>
  </div>

  )

    return (
      <>
      {expanded()}
      </>
    )
}

export default SpellCard