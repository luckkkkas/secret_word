import './GameStart.css'

export interface Ifunction{
  alterStage: () => void;
}

const GameStart = ({alterStage}:Ifunction) => {
  return (
    <>
      <h1>Novo Jogo!!</h1>
      <h4 className='gold-text'>Clique no botão abaixo para iniciar!!!</h4>
      <button onClick={alterStage}>começar</button>
    </>
  )
}

export default GameStart;