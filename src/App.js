import './App.css';
import { Route, Routes } from 'react-router-dom';
import PostList from './pages/PostList';
import AddPost from './pages/AddPost';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './pages/About';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <div className='main-content'>
        <Sidebar/>
        <div className="content">
            <Routes>
              <Route index element={<PostList />} />
              <Route path='add_post' element={<AddPost />} />
              <Route path='about' element={<About />} />
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
