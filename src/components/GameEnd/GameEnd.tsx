import {alterStage} from '../GameStart/GameStart'

const GameEnd = ({alterStage}:alterStage) => {
  return (
    <>
      <h1>Fim de jogo</h1>

      <button onClick={alterStage}>Novo jogo!!</button>
    </>
  )
}

export default GameEnd