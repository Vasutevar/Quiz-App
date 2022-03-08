import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import * as reactRouterDom from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';


function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);


  const fetchQuestions = async (category = '', difficulty = '') => {

    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`                           //checks the category & difficulty fields is filled
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    setQuestion(data.results);

  };


  return (
    <reactRouterDom.BrowserRouter>
      <div className="app" style={{ backgroundImage: 'url("/ques1.png")' }}>
        <Header />
        <reactRouterDom.Routes >
          <reactRouterDom.Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} exact></reactRouterDom.Route>
          <reactRouterDom.Route path="/quiz" element={<Quiz name={name} question={question} score={score} setScore={setScore} setQuestion={setQuestion} />} exact></reactRouterDom.Route>
          <reactRouterDom.Route path="/result" element={<Result name={name} score={score} />} exact></reactRouterDom.Route>

        </reactRouterDom.Routes>



      </div>
      <Footer />
    </reactRouterDom.BrowserRouter>
  );
}

export default App; 
