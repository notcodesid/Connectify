import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthPage from './auth/page';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';


function App() {
 

  return (
    <>
      <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
