import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import ProfileInfo from './components/ProfileInfo';
import MicrosoftLanding from './components/MicrosoftLanding';
import Googlelogin from './components/Googlelogin';




function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/landing-page' element={<Landing/>}/>
        <Route path='/ProfileInfo' element={<ProfileInfo/>}/>
        <Route path='/microsoftLanding' element={<MicrosoftLanding/>}/>

      </Routes>
      </BrowserRouter>
  

     
    </div>
  );
}

export default App;
