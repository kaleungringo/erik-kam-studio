import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About, Features, Goals, StudentWorks } from './containers' ; 
import { Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <Router>
        <div className="App">
            <div className="gradient_bg">
                <Navbar />
            </div>
            <div className='kam__container'>
                <Routes>
                    <Route exact path="/" />
                    <Route path="about" element={ <About />} />
                    <Route path="studentworks" element={ <StudentWorks />} />
                    <Route path="features" element={ <Features />} />
                    <Route path="goals" element={ <Goals />} />
                </Routes>
            </div>
        </div>
        </Router>
    )
}

export default App
