import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'


import Home from './pages/home';
import Header from './components/header';
import SideBar from './components/sidebar';
import Empty from './pages/empty';

import './assets/styles.scss'

function App() {

  return (
    <>
      <Header/>
      <SideBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/staking" element={<Empty/>} />
          <Route path="/coinflip" element={<Empty/>}/>
          <Route path="/dice" element={<Empty/>}/>
          <Route path="/tower" element={<Empty/>}/>
          <Route path="/roulette" element={<Empty/>}/>
          <Route path="/about" element={<Empty/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
