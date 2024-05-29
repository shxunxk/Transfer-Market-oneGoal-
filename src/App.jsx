import './App.css'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import News from './Pages/News.jsx';
import Header from './Components/Header.jsx';
import CountriesList from './Pages/Countries.jsx';
import Highlights from './Pages/Matches.jsx';

function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<News/>}/>
        <Route path='/country' element={<CountriesList/>}/>
        <Route path='/matches' element={<Highlights/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
