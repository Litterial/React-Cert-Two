import React,{useState} from 'react';
import { redirect,Link, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import SelectTrivia from './SelectTrivia';


export default function Results(props){

  const location = useLocation();
  const {quiz,choices,score} = location.state ? location.state : {quiz:null,choices:null,score:null} 
  

  var final_score = <></>
    
  if(score < 2)
    final_score = <div className="bg-danger rounded py-2S text-white my-5">You scored {score} out of 5</div>
  
  else if (score < 4)
    final_score =<div className="bg-warning rounded py-2 text-white my-5">You scored {score} out of 5</div>
  
  else
    final_score = <div className="bg-success rounded py-2 text-white my-5">You scored {score} out of 5</div>

  

    console.log("test")

  if(location.state == null){
    return <SelectTrivia />
  }
   

  else{
    return(<>
      <h5>Results</h5>
      { quiz.map((elem,ndx) => {
          return (
            <div key={ndx} className="mb-3">
              <div className="mb-1">{elem.question}</div>
                <div className="row">
                  { elem.random_answers.map(ans =>
                    {
                      var selected_answer = choices[`choice${ndx+1}`]
                      if((ans == selected_answer && selected_answer == elem.correct_answer) || (ans == elem.correct_answer))
                        return <button key={ndx+ans} className= "btn btn-success mx-md-2 col-md mb-md-0 my-2">{ans} </button> 
                      else if(ans == selected_answer)
                        return <button key={ndx+ans} className= "btn btn-danger mx-md-2 col-md mb-md-0 my-2" >{ans} </button> 
                      else
                        return <div key={ndx+ans} className= "btn btn-outline-success mx-md-2 col-md mb-md-0 my-2 disabled" >{ans} </div> 
                    })}
                </div>
             
            </div>)})}


            {final_score}
            <Link to="/" className="btn btn-secondary btn-lg col-md-auto col-12 mt-3">Create a new quiz</Link>

            

      </>)
  }
  



}