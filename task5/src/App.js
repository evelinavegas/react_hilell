import './App.css';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import Users from './components/Users/Users';
// import Albums from './components/Albums/Albums';
import User from './components/User/User';
import Albums from './components/Albums/Albums';
import Photos from './components/Photos/Photos';


function App() {
  // let { id } = useParams();
  // const { idAlbum } = useParams()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />}/>
        <Route path="/:id" element={<User/>}/>
        <Route path='albums/:id' element={<Albums/>}></Route>
        <Route path='photos/:idAlbum' element={<Photos/>}></Route>

      </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
