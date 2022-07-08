import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from './components/ProjectDetails';
import AppContainer from './components/AppContainer';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer/>}/>
        <Route path="/project/:title" element={<ProjectDetails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
