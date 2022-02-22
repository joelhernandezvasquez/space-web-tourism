import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import page404 from "./components/page404";
import './style/main.scss';

const App = () => {
  return (
    <>

      HELLO REACT
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path = "/crew" element={<Crew />} />
          <Route path = "/technology" element={<Technology />} />
          <Route path="*"element={<page404/>}/>
      </Routes>
    </>
  );
}

export default App;
