import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import welldone from '../img/welldone.jpg';

import './GameOver.css'

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id = "gameover">
        <h2>Fim de Jogo</h2>
        <p>Pontuação: {quizState.score}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.lenght}{" "} perguntas.</p>
        <img src = {welldone} alt = "Fim do Quiz"></img>
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div> 
  )
}
// comentario alatorio
export default GameOver