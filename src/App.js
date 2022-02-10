import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Features, Goals, Courses, Tailor, StudentWorks, TeacherWorks, Contact } from './containers' ; 
import { Navbar, Footer } from './components';
import ScrollToTop from './components/ScrollToTop.js';
import './App.css';

const App = () => {
    return (
        <Router>
        <div className="App">
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
                </Routes>
                <Footer />
        </div>
        </Router>
    )
}

export default App
