import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Theories from './pages/Theories';
import TheoryDetail from './pages/TheoryDetail';
import FanArt from './pages/FanArt';
import Resources from './pages/Resources';
import Profile from './pages/Profile';
import Styleguide from './pages/Styleguide';
import { Toaster } from './components/ui/Toast';

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:slug" element={<NewsDetail />} />
                <Route path="/theories" element={<Theories />} />
                <Route path="/theories/:id" element={<TheoryDetail />} />
                <Route path="/fan-art" element={<FanArt />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/profile/:user" element={<Profile />} />
                <Route path="/styleguide" element={<Styleguide />} />
              </Routes>
            </main>
            <Toaster />
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;