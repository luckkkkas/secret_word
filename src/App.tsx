import GameStart from "./components/GameStart/GameStart"
import Game from "./components/Game/Game"
import GameEnd from "./components/GameEnd/GameEnd"
import './App.css'
import { useState } from "react";
import { wordList } from "./words/words";

interface IStage{
  id:number,
  name: string
}


function App() {
  const stage:IStage[] = [
    {id:1, name: "gameStart"},
    {id:2, name: "game"},
    {id:3, name: "gameEnd"},
  ]
  const [status, setStatus] = useState(stage[0].name);
  const [pickWord, setPickWord] = useState('');
  const [pickCategory, setPickCategory] = useState('');
  const [wordArray, setWordArray] = useState<string[]>([]);
  let [chances,setChances] = useState(5);

  const perderChance = () =>{
    setChances(chances -= 1);
    console.log(chances)
  }

  // if(chances <= 0){
  //   setStatus(stage[1].name);
  //  }
  

  const pickWordAndCategory = () => {
    const categories = Object.keys(wordList);
    const category = categories[Math.floor(Math.random()*Object.keys(categories).length)];
    
    // pegando palavra aleatória dentro da categoria
    const word = wordList[category][Math.floor(Math.random()* wordList[category].length)]
    
    return { category, word };
  }

  const tradeStage = () =>{
    const {category, word} = pickWordAndCategory();
    
    //criando o array com as letras
    let arrayPalavra = word.split("");
    arrayPalavra.map((e:string) => e.toLowerCase());
    setPickCategory(category);
    setPickWord(word);
    setWordArray(arrayPalavra);
  
    setStatus(stage[1].name)
  }
  const [setPickedWord] = useState("");
  //pegando as palavras
  //pegando categoria aleatória
  // ----------------------------------------
  

  return (
    <>
    {status === "gameStart" && <GameStart alterStage={tradeStage}/>}
    {status === "game" && <Game 
      tradeStage={tradeStage}
      dica={pickCategory}
      arrayWord={wordArray}
      perderChance={perderChance}
      chances={chances}
    />}
    {status === "gameEnd" && <GameEnd alterStage={tradeStage}/>}
    </>
  )
}

export default App
