import React, { useState, useEffect } from 'react';
import { shuffle } from './Helper.jsx';

export default function Quiz(props) {

  const questionnaire = props.quiz.map((elem,ndx) => {
    const name = `choice${ndx+1}`
    return (
             <div key={ndx} className="mb-3">
                <div className="mb-1">{elem.question}</div>
                <div className="row">
                  {elem.random_answers.map(ans =>
                      {
                        return (props.choices[name] == ans) ? <button key={ndx+ans} className= "btn btn-success mx-md-2 col-md mb-md-0 my-2" name={name} value={ans} onClick={props.changeAnswer}>{ans} </button> : <button key={ndx+ans} className= "btn btn-outline-success mx-md-2 col-md mb-md-0 my-2" name={name} value={ans} onClick={props.changeAnswer}>{ans}</button>
                      })}
                </div>
                   
             </div>)});
    
    const submitButton = Object.values(props.choices).includes(null) ? "" : <button className="btn btn-primary btn-lg"> Submit Quiz</button>

   

  useEffect(() => {
  }, []);

  return (
    <div className="mt-3">
      {/* {random_quiz.map((elem) => {
        <div key={elem.question}>{elem.question}</div>
        {elem.random_answers.map(ans =>
          {
            <button className= "btn btn-outline-secondary">{ans}</button>
          })}
      })}
       */}
       {questionnaire}
       {submitButton}
    </div>
  );
}
