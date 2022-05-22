import React, { useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import useCookie from '../../hooks/useCookie';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';
import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
    const [cookie, setCookie] = useCookie('token_auth');

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <Routes>
                            <Route path="/" element={<Link to="/profile">Profile</Link>} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/train" element={<Train />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                        </Routes>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
}

export default App;
