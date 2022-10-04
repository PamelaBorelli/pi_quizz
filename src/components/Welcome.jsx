import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Quiz from "../img/question.png";


import './Welcome.css';

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <h2>Seja Bem-Vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANCE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quizz"/>
    </div>
  )
}

export default Welcome