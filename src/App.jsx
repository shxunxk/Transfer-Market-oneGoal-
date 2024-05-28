import './App.css'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import News from './Pages/News.jsx';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<News/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
