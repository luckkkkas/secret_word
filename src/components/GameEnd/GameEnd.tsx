interface IalterStage{
  alterStage: () => void,
  score: number
}

const GameEnd = ({alterStage, score}:IalterStage) => {
  return (
    <>
      <h1>Fim de jogo</h1>
      <h3>sua pontuação foi {score}</h3>
      <button onClick={alterStage}>Novo jogo!!</button>
    </>
  )
}

export default GameEnd