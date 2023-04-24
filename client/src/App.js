import { useEffect, useState } from 'react';
import './App.css';
import Detail from "./components/detailPage/Detail";
import Create from "./components/createPage/Create";
import Home from "./components/homePage/Home";
import Landing from "./components/landingPage/Landing";
import Nav from "./components/nav/Nav";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [init, setInit] = useState(false)

  useEffect(() => {
    !init && navigate('/')
    init && navigate('/home')
  }, [init])

  return (
    <div className="App">
      {pathname !== '/' ?
        <Nav setInit={setInit}/>
        :
        <Landing
          setInit={setInit}
        />}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
