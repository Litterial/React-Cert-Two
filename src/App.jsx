import { Router,Route } from 'react-router-dom';
import './App.css'
import SelectTrivia from "./SelectTrivia.jsx"
import Results from "./Results.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (

    <>
    <Router>
      <Route path="/" component={SelectTrivia}/>
      <Route path="/results" component={Results} />
      </Router>
    </>

  )
}

export default App
