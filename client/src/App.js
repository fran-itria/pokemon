import { useEffect, useState } from 'react';
import './App.css';
import Detail from "./components/detailPage/Detail";
import Form from "./components/formPage/Form";
import Home from "./components/homePage/Home";
import Landing from "./components/landingPage/Landing";
import Nav from "./components/nav/Nav";
import { Route, Router, Routes, useLocation, useNavigate } from "react-router-dom";

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
        <Nav />
        :
        <Landing
          init={init}
          setInit={setInit}
        />}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/create' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
