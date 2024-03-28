import { useState } from 'react'
import SpellCard from './components/SpellCard'

const spellList = [
  {
    id: 1,
    level: 3,
    spellName: "Fireball",
    castingTime: "1 Action",
    components: "V, S, M",
    range: "150ft/20ft S",
    save: "Dexterity",
    duration: "Instantanious",
    audio: "src/audio/tryme.mp3",
    description: "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried. At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
  }, 
  {
    id: 2,
    level: 2,
    spellName: "Calm Emotions",
    castingTime: "1 Action",
    components: "V, S",
    range: "60ft",
    save: "None",
    duration: "Up to 1 minute (C)",
    audio: "src/audio/RPG - A Long Way From Home.mp3",
    description: "You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects. You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the DM rules otherwise."
  }, 
]

const re = new RegExp("[ \\w-]+?(?=\\.)")

function App() {
  const [spells, setSpells] = useState(spellList)
  



  return (
    <>
    {spells.map(spell => 

    <SpellCard key={spell.id} audio={spell.audio} 
        spellName={spell.spellName} 
        castingTime={spell.castingTime} 
        components={spell.components} 
        range={spell.range} 
        save={spell.save} 
        duration={spell.duration}
        description={spell.description} 
        audioName={re.exec(spell.audio)}
        />
        
        )
        
        }
      
    </>
  )
}

export default App
