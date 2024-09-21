export function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export function randomQuiz(results){

  let random_answers = results.map((elem) =>
    elem.incorrect_answers.concat(elem.correct_answer)
  );


  const random_quiz = results.map((elem, ndx) => {
    shuffle(random_answers[ndx])
    return { ...elem, random_answers: random_answers[ndx] };
  });


  return random_quiz
}