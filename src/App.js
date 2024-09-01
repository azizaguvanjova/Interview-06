import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "2*(4+4) sonucu nedir?",
    answers: ["2", "4", "8", "16"],
    correct: 3
  },
  {
    question: "9*9 sonucu nedir?",
    answers: ["18", "81", "80", "79"],
    correct: 1
  },
  {
    question: "Formula 1'in 2022 şampiyonu kimdir?",
    answers: [
      "Max Verstappen",
      "Charles Leclerd",
      "Lewis Hamilton",
      "Lando Norris"
    ],
    correct: 0
  },
  {
    question: "Formula 1 takviminde ilk sırada hangi grand prix vardır?",
    answers: [
      "Bahreyn Grand Prix",
      "Suudi Arabistan Grand Prix",
      "Avustralya Grand Prix",
      "Emilia Romagna Grand Prix"
    ],
    correct: 0
  },
  {
    question: "Hangisi Formula 1 takımlarından değildir?",
    answers: [
      "Ford-AMG F1 Team",
      "Alfa Romeo F1 Team Orlen",
      "BWT Alpine F1 Team",
      "Oracle Red Bull Racing"
    ],
    correct: 0
  }
];

function App() {
  return <Quiz questions={QUESTIONS} />;
}

const Quiz = ({ questions }) => {
  // KODUNUZ BURAYA GELECEK
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore,setShowScore] = useState(false)


  const handleAnswer = (selectedAnswerındex) =>{
    if(selectedAnswerındex === questions[currentQuestionIndex].correct){
      setScore((prevScore) => prevScore +1)
    }

    const nextQuestionIndex = currentQuestionIndex +1
    if(nextQuestionIndex < questions.length){
      setCurrentQuestionIndex(nextQuestionIndex)
    }else {
      setShowScore(true)
    }
  }

  const handleForwardClick = ()=>{
    const nextQuestionIndex = currentQuestionIndex +1
    if(nextQuestionIndex < questions.length){
      setCurrentQuestionIndex(nextQuestionIndex)
      }else {
        setShowScore(true)
      }
    }

    const handleBackClick = ()=>{
      const nextQuestionIndex = currentQuestionIndex -1
      if(nextQuestionIndex >= 0){
        setCurrentQuestionIndex(nextQuestionIndex)
      }
    }

    const handleRerstart = () =>{
      setCurrentQuestionIndex(0)
      setScore(0)
      setShowScore(false)
    }

  
return (
  <div className="flex items-center justify-center min-h-screen bg-slate-300">
{showScore ? (
  <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
    <h2 className="text-2xl font-bold mb-4">Your Score: {(score / questions.length) *100}%</h2>
    <button
    onClick={handleRerstart}
    className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
    >tekrar başlat</button>
  </div>

) : (
  <div className="question-section">
    <h2 className="text-xl font-semibold mb-6">{questions[currentQuestionIndex].question}</h2>
    <div className="answer-section space-y-4">
            {questions[currentQuestionIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(index)}
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4">
                {answer}
              </button>
            ))}
          </div>
          <div className="mx-11">
          <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-4 mx-5 rounded-lg" onClick={handleBackClick}>Geri</button>
          
          <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-3 px-4 my-3 rounded-lg" onClick={handleForwardClick}>Ileri</button>
          
          
          </div>
          
  </div>
)
}    
  </div>
)
}



export default App;
