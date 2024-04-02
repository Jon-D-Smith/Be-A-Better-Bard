import { useState, useEffect } from 'react'
import { spellList } from './utils/spellsHelper'
import { levels } from './utils/categoryHelper'
import SpellCategory from './components/SpellCategory'


const re = new RegExp("[ \\w-]+?(?=\\.)")

function App() {
  const [spells, setSpells] = useState(null)

  useEffect(() => {
    setSpells(spellList)
    console.log('effect in use')
  }, [])
  
  return (
    <>

    {spells && levels.map(level => <SpellCategory descriptor={level.descriptor} filter={level.level} spellList={spells}/> )}

      
    </>
  )
}

export default App
