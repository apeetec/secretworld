// CSS
import './App.css'

// Components
import StartScreen from './Components/StartScreen'

// React
import { useCallback,useEffect, useState } from 'react'

// Data
import {wordsList} from './data/words.jsx'
import Game from './Components/Game.jsx';
import GameOver from './Components/GameOver.jsx';

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},];
  // 3 etapas do jogo
  const guessesQty = 3;


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name); // start, game, end
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // Letras já adivinhadas
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(50);

  const pickWordAndCategory = useCallback(() => {

    // Escolher uma categoria aleatória
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];
    console.log(category);

    // Escolher uma palavra aleatória da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  }, [words]);
 

  // Função para iniciar o jogo
  const startGame = useCallback(() => {
    clearLetterStates();
    //pickworld e pickcategory
    const {word, category} = pickWordAndCategory();

    // Criar um array de letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());


    // Setar estados
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);


    // Funções

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Processo de digitar letras no input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    
    // Checar se a letra já foi utilizada
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }
    // Colocar a letra na lista de certas ou erradas
    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
      setScore((actualScore) => actualScore + 100);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    } 
}

// Limpar estados de letras
const clearLetterStates = () => {
  setGuessedLetters([]);
  setWrongLetters([]);
};
// Checar se o jogo acabou
useEffect(() => {
  if(guesses <= 0){
    // resetar todos os estados
    clearLetterStates();
    setGameStage(stages[2].name);
  }
}, [guesses]);

// Checar se o jogador venceu
useEffect(()=>{

  const uniqueLetters = [...new Set(letters)];
  if(guessedLetters.length === uniqueLetters.length){
    // Adicionar pontuação
    setScore((actualScore) => actualScore += 100);
    // Reiniciar o jogo com nova palavra
    startGame();
  }


}, [guessedLetters, letters, startGame]);

  // Função para reiniciar o jogo
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  }
  return (
    <>
      <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame} />}
        {gameStage === 'game' && <Game verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters} 
        wrongLetters={wrongLetters} 
        guesses={guesses} 
        score={score} />}
        {gameStage === 'end' && <GameOver retry={retry} score={score} />}
      </div>

    </>
  )
}

export default App
