import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/AdminPage";
import BoardListPage from "./pages/BoardListPage";
import BoardPage from "./pages/BoardPage";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";
import IdPasswordFindPage from "./pages/IdPasswordFindPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import WritePage from "./pages/WritePage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/admin/:adminId" element={<AdminPage/>}/>
        <Route path="/boards" element={<BoardListPage/>}/>
        <Route path="/boards/:boardId" element={<BoardPage/>}/>
        <Route path="/category" element={<CategoryPage/>}/>
        <Route path="/error/:errorType" element={<ErrorPage/>}/>
        <Route path="/findAccount" element={<IdPasswordFindPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/users/:userId" element={<UserPage/>}/>
        <Route path="/writeBoard" element={<WritePage/>}/>
      </Routes>
  );
}

export default App;
