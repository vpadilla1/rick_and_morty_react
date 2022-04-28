import { createContext,useState /*useEffect */ } from 'react'
/* import api from '../API/api'




useEffect(() => {
    async function getCharacter() {
        setCharacter(await api.getCharacter(56))
    }
    getCharacter()
}, []) */

//const [character, setCharacter];
const CharacterContext = createContext({
    value:'default',
    setValue: () => {
        console.log('hpola');
    }
})




export default CharacterContext