import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import './Quiz.css';
import Question from '../../components/Questions/Question';

const Quiz = ({ name, question, setQuestion, score, setScore }) => {

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    console.log(question);

    setOptions(question && handleShuffle([
      question[currQues]?.correct_answer,
      ...question[currQues]?.incorrect_answers,          //spreading of false ans[appears seperately]
    ])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question, currQues]);                                       //called/rendered upon every change of question                     


  console.log(options);

  const handleShuffle = (optionss) => {                    //optionss from setOptions[!state]            
    return optionss.sort(() => Math.random() - 0.5)
  }


  return (
    <div className="quiz">
      <span className="subtitle">Welcome {name}</span>


      {question ? (
        <>
          <div className="quizInfo">
            <span>{question[currQues].category}</span>
            <span>Score : {score}</span>
          </div>


          <Question                                      //all values are taken are rendered from the states
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={question}
            options={options}
            correct={question[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestion}
          />

        </>
      ) : (<CircularProgress style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
      />)}
    </div>
  )
}

export default Quiz;