import React from 'react';
import Lesson1 from "./components/lessons/lesson-1";
import {Link, Routes, Route} from "react-router-dom";
import Home from "./components/home";
import "./styles/App.css"
import Nouns from "./components/dictionary/nouns";
import Adjectives from "./components/dictionary/adjectives";
import {Carousel, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Lessons from "./components/lessons/lessons";
import Lesson2 from "./components/lessons/lesson-2";
import Lesson3 from "./components/lessons/lesson-3";
import Lesson4 from "./components/lessons/lesson-4";
import Lesson5 from "./components/lessons/lesson-5";
import Lesson6 from "./components/lessons/lesson-6";
import Lesson7 from "./components/lessons/lesson-7";
import Lesson8 from "./components/lessons/lesson-8";
import Lesson12 from "./components/lessons/lesson-12";
import Lesson11 from "./components/lessons/lesson-11";
import Lesson10 from "./components/lessons/lesson-10";
import Lesson9 from "./components/lessons/lesson-9";
import Lesson16 from "./components/lessons/lesson-16";
import Lesson15 from "./components/lessons/lesson-15";
import Lesson14 from "./components/lessons/lesson-14";
import Lesson13 from "./components/lessons/lesson-13";
import Dictionary from "./components/dictionary/dictionary";
import Adverbs from "./components/dictionary/Adverbs";
import Conjunctions from "./components/dictionary/conjunctions";
import Pronouns from "./components/dictionary/pronouns";
import Prepositions from "./components/dictionary/prepositions";
import Verbs from "./components/dictionary/verbs";

function App() {

    return (

        <Container className="p-3">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Polly</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/lessons">Lessons</Nav.Link>
                            <Nav.Link href="/dictionary">Dictionary</Nav.Link>
                            <NavDropdown title="Dictations" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Easy level</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Medium level</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">High level</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Show all dictations</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>

                    <Route path='/lessons' element={<Lessons/>}/>
                    <Route path='/lessons/lesson-1' element={<Lesson1/>}/>
                    <Route path='/lessons/lesson-2' element={<Lesson2/>}/>
                    <Route path='/lessons/lesson-3' element={<Lesson3/>}/>
                    <Route path='/lessons/lesson-4' element={<Lesson4/>}/>
                    <Route path='/lessons/lesson-5' element={<Lesson5/>}/>
                    <Route path='/lessons/lesson-6' element={<Lesson6/>}/>
                    <Route path='/lessons/lesson-7' element={<Lesson7/>}/>
                    <Route path='/lessons/lesson-8' element={<Lesson8/>}/>
                    <Route path='/lessons/lesson-9' element={<Lesson9/>}/>
                    <Route path='/lessons/lesson-10' element={<Lesson10/>}/>
                    <Route path='/lessons/lesson-11' element={<Lesson11/>}/>
                    <Route path='/lessons/lesson-12' element={<Lesson12/>}/>
                    <Route path='/lessons/lesson-13' element={<Lesson13/>}/>
                    <Route path='/lessons/lesson-14' element={<Lesson14/>}/>
                    <Route path='/lessons/lesson-15' element={<Lesson15/>}/>
                    <Route path='/lessons/lesson-16' element={<Lesson16/>}/>

                    <Route path='/dictionary' element={<Dictionary/>}/>
                    <Route path='/dictionary/nouns' element={<Nouns/>}/>
                    <Route path='/dictionary/adjectives' element={<Adjectives/>}/>
                    <Route path='/dictionary/adverbs' element={<Adverbs/>}/>
                    <Route path='/dictionary/conjunctions' element={<Conjunctions/>}/>
                    <Route path='/dictionary/pronouns' element={<Pronouns/>}/>
                    <Route path='/dictionary/prepositions' element={<Prepositions/>}/>
                    <Route path='/dictionary/verbs' element={<Verbs/>}/>

                </Routes>
            </div>
        </Container>
    );
}

export default App;
