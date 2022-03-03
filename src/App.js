import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { About, Features, Goals, Courses, Tailor, StudentWorks, TeacherWorks, Contact } from './containers' ; 
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop.js';
import './App.css';
import Helmet from 'react-helmet';

const App = () => {
    return (
        <Router>
        <div className="App">
            <Helmet>
                <title>意畫間 | Erik Kam's Studio</title>
                <meta
                    name="description"
                    content="意畫間由香港畫家Erik Kam 開辦。畫室位置於屯門新墟輕鐵站旁，步行只需2分鐘。真誠的教育，是我們對你的誠諾。畫室提供不同藝術繪畫課程，以配合不同年齡及興趣，提供最合適的教育。 "
                />
                <meta
                    name="keywords"
                    content="意畫間,Erik Kam,Erik Kam Studio,香港畫家,畫室,屯門,新墟,教育,藝術,繪畫,課程"
                />
            </Helmet>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route exact path="/" element={ <Goals /> } />
                    <Route path="about" element={ <About />} />
                    <Route path="features" element={ <Features />} />
                    <Route path="goals" element={ <Goals />} />
                    <Route path="courses" element={ <Courses />} />
                    <Route path="tailor" element={ <Tailor />} />
                    <Route path="studentworks" element={ <StudentWorks />} />
                    <Route path="teacherworks" element={ <TeacherWorks />} />
                    <Route path="contact" element={ <Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
        </div>
        </Router>
    )
}

export default App
