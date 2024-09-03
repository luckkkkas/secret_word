import { useEffect, useState } from 'react';
import './Game.css';

interface Igame {
  dica: string,
  arrayWord: Array<string>,
  chances: number,
  tradeStage: () => void,
  perderChance: () => void
}


const Game = ({ dica, arrayWord, tradeStage, perderChance, chances }: Igame) => {

  const [handleLetter, setHandleLetter] = useState("");
  const [guessesLetter, setGuessesLetter] = useState<string[]>([]);
  const [wrongLetter, setWrongLetter] = useState<string[]>([]);
  let [score, setScore] = useState<number>(0);

  const verifyLetter = (e: any) => {
    e.preventDefault();
    verifyCorrectLetter(handleLetter);
  }

  const verifyCorrectLetter = (letter: string) => {
    if (wrongLetter.find((e) => e === letter)) {
      setHandleLetter('');
     
      return null;
    }
    if (arrayWord.includes(letter)) {
      setGuessesLetter(prev => [...prev, letter]);
    }else{
      perderChance()
      setWrongLetter(prev => [...prev, letter]);
    }
    setHandleLetter('')
  }

  
  // guessesLetter.map((e) => e == arrayWord.includes(e))
  useEffect(()=> {
    
    const check = arrayWord.every(t => guessesLetter.includes(t))
    if(check) {
      setScore(score += 10);

      tradeStage();
      setGuessesLetter([]);
      setWrongLetter([]);
    }
  }, [guessesLetter] )

  return (
    <>
      <div className='flex'>
        <h1>Adivinhe a palavra!!!</h1>
        <p>Dica sobre a palavra: {dica}</p>
        <p>pontuação</p><small>{score}</small><br />
        <small className='goldText'>você ainda tem {chances} tentativas</small>
        <div className="yellow-block">
          {arrayWord.map((element, i) => (
            guessesLetter.includes(element) ?
              (<span key={i} className='white-block'>{element}</span>)
              : (<span key={i} className='white-block'></span>)))}
        </div>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={verifyLetter}>
          <input type="text" className='input-w' required maxLength={1} onChange={(e) => setHandleLetter(e.target.value)} value={handleLetter} />
          <button> jogar!</button>
        </form>
        <div className="wrong-letters">
          <p>letras usadas... </p>
          {wrongLetter.map((e, i) => <p key={i}> {e}, </p>)}
        </div>
      </div>
    </>
  )
}

export default Game