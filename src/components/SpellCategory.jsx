import { useEffect, useState } from "react"
import SpellCard from "./SpellCard"


const SpellCategory = ({ descriptor, filter, spellList }) => {
    const filteredSpellList = spellList.filter(spell => spell.level === filter)
    const [spells, setSpells] = useState(filteredSpellList)
    const [isExpanded, setIsExpanded] = useState(false)



    const changeSize = () => {
        setIsExpanded(!isExpanded)
        console.log(isExpanded)
      }

    return (
        <>
        <div className="category-box">
            <h2 onClick={changeSize}> { descriptor } </h2>
            <div className={`spell-content ${isExpanded ? "spell-expanded" : ""}`}>
                <div className="category-overflow">
                { spells.length > 0 && spells.map(spell => <SpellCard key={spell.id} spell={spell} />) }

                </div>
            </div>
        </div>
        </>
    )

}

export default SpellCategory