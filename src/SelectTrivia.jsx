import React,{useEffect,useState} from 'react';
import {categoryData,difficultyData} from "./data.jsx";
import Quiz from './Quiz.jsx';
import {randomQuiz} from './Helper.jsx';

export default function SelectTrivia(){

  const [quiz,setQuiz] = useState([])
  const [trivia,setTrivia] = useState({"category":"","difficulty":""});
  const [choices,setChoices] = useState({"choice1":null,"choice2":null,"choice3":null,"choice4":null,"choice5":null})



  useEffect(() =>{

  },[quiz])

  const categoryOptions = categoryData.trivia_categories.map((elem =>
    <option key={elem.id} value={elem.id}>{elem.name}</option>
    ));

  const difficultyOptions = difficultyData.map((elem =>
    <option key={elem.id} value={elem.level}>{elem.level}</option>
  ));

  const changeTrivia = e => {
    setTrivia({...trivia,[e.target.name]:e.target.value})
  };

  const changeAnswer = e =>{
    setChoices({...choices,[e.target.name]:e.target.value})
    console.log({...choices,[e.target.name]:e.target.value});
  }

  const createQuiz = async () => {
    const response = await fetch(`https://opentdb.com/api.php?amount=5&category=${trivia.category}&difficulty=${trivia.difficulty.toLowerCase()}&type=multiple`);

    const data = await response.json();
    console.log(data);
    setQuiz(randomQuiz(data.results));
    setChoices({"choice1":null,"choice2":null,"choice3":null,"choice4":null,"choice5":null})
    };


  useEffect(() =>{

  },[])

  return(
     <>
      <h5 className="text-center mb-5">QUIZ MAKER</h5> 
      <div className="d-flex"> 
      <select className="form-select" id="categorySelect" name="category" onChange={changeTrivia}> 
          <option value="">Select a Category</option>
          {categoryOptions}
       </select>
       <select className="form-select" id="difficultySelect" name="difficulty" onChange={changeTrivia}>
       <option value="">Select Difficulty</option>
         {difficultyOptions}
       </select>
       <button className="btn btn-outline-secondary rounded-start-0" id="createBtn" onClick={createQuiz}>Create</button>
     </div>

     <Quiz quiz={quiz} choices={choices} changeAnswer={changeAnswer}/>

    </>)

}