import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider';
import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './App.css';
import "./styles/style.css";

function App() {

  return (
    <>
    <AuthProvider>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/publicaciones' element={<Posts />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
