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
import ToolsDetail from './components/Pages/ToolsDetail';
import Dashboard from './components/Dashboard/Dashboard';
import Myprofile from './components/Dashboard/Myprofile';
import AddTools from './components/Dashboard/AddTools';
import Myorder from './components/Dashboard/Myorder';
import AddReview from './components/Dashboard/AddReview';
import DashboardContainer from './components/Dashboard/DashboardContainer';

function App() {
  return (
    <div >
      <Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<RequireAuth><Blog/></RequireAuth>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/toolsdetail/:id' element={<RequireAuth><ToolsDetail/></RequireAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
          <Route index element={<DashboardContainer/>}></Route>
          <Route path='addTools' element={<AddTools/>}></Route>
          <Route path='myorder' element={<Myorder/>}></Route>
          <Route path='addreview' element={<AddReview/>}></Route>
          <Route path='myProfile' element={<Myprofile/>}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      
      <ToastContainer />
      </Header>
      
    </div>
  );
}

export default App;
