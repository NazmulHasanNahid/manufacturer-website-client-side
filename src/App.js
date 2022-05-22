import logo from './logo.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Login from './components/Auth/Login';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home';
import Blog from './components/Pages/Blog';
import About from './components/Pages/About';
import SignUp from './components/Auth/SignUp';
import NotFound from './components/Shared/NotFound';
import Footer from './components/Shared/Footer';
import RequireAuth from './components/Auth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<RequireAuth><Blog/></RequireAuth>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
      </Header>
      
    </div>
  );
}

export default App;
