import './App.css'
import Home from './Pages/Home.jsx'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import News from './Pages/News.jsx';
import Header from './Components/Header.jsx';
import CountriesList from './Pages/Countries.jsx';
import Highlights from './Pages/Streams.jsx';
import Match from './Pages/Match.jsx';
import MatchDetail from './Pages/MatchDetail.jsx';
import Details from './Pages/Details.jsx';

function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<News/>}/>
        {/* <Route path='/country' element={<CountriesList/>}/> */}
        <Route path='/streams' element={<Highlights/>}/>
        <Route path='/match' element={<Match/>}/>
        <Route path='/matchDetails/:id' element={<MatchDetail/>}/>
        <Route path='/details' element={<Details/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
