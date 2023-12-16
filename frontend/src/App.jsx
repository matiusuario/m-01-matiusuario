import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider';
import Header from "./components/Header";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoutes from './components/PrivateRoutes';
import CreatePost from './pages/CreatePost';
import { AddComment } from './components/AddComment';
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
          <Route element={<PrivateRoutes />}>
            <Route path='/publicaciones/nueva' element={<CreatePost />}/>
            <Route path='/publicaciones/:_id/comentar' element={<AddComment />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;
