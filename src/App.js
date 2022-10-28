import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from './components/ProjectDetails';
import AppContainer from './components/AppContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer/>}/>
        <Route path="/project/:title" element={<ProjectDetails/>}/>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
