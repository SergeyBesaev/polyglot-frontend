import React, {useState} from 'react';
import axios from "axios";
import TranslateFormRusEng from "../translate.form.rus.eng";
import {Button, Modal} from "react-bootstrap";

const Nouns = () => {

    const title: string = 'Существительные'
    const description: string = 'Существительные, для удобства, разделены по тематикам'
    let [words, setWords] = useState([])
    const [partValue, setPartValue] = useState('Select a category')

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const partsList: { name: string; }[] = [
        {name: 'City'},
        {name: 'Clothes'},
        {name: 'Communication'},
        {name: 'Cooperation'},
        {name: 'Economy and Business'},
        {name: 'Education'},
        {name: 'Family'},
        {name: 'Flora and fauna'},
        {name: 'Food'},
        {name: 'Home, Life'},
        {name: 'Human'},
        {name: 'Industry'},
        {name: 'IT'},
        {name: 'Job, career'},
        {name: 'Law'},
        {name: 'Literature'},
        {name: 'Logic'},
        {name: 'Materials'},
        {name: 'Math'},
        {name: 'Medicine'},
        {name: 'Military'},
        {name: 'Movies, music'},
        {name: 'Nature'},
        {name: 'Painting, photography'},
        {name: 'Physics'},
        {name: 'Professions, positions'},
        {name: 'Psychology'},
        {name: 'Relationship'},
        {name: 'Religion'},
        {name: 'Science'},
        {name: 'Space'},
        {name: 'Sports'},
        {name: 'State and society'},
        {name: 'Terms'},
        {name: 'Thinking'},
        {name: 'Time'},
        {name: 'Transport'},
    ];

    const url: string = 'http://localhost:8080/dictionary/nouns/'

    async function getWordsFromServer() {
        const response = await axios.get(url + `${partValue}`)
        setWords(response.data.data)
    }

    function setPartValueAndClose(part: string) {
        setPartValue(part)
        handleClose()
    }

    return (
        <div>
            <h1><a href='/dictionary/nouns'>{title}</a></h1>
            <br/>
            <br/>
            <br/>
            {words.length === 0
                ?
                <><><Button variant="primary" onClick={handleShow}>
                    {partValue}
                </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select a category</Modal.Title>
                        </Modal.Header>
                        {partsList.map((part, idx) => (
                            <Button
                                key={idx}
                                id={`radio-${idx}`}
                                // type="radio"
                                variant="outline-primary"
                                name="radio"
                                value={part.name}
                                // checked={partValue === part.name}
                                onClick={() => setPartValueAndClose(part.name)}
                            >
                                {part.name}
                            </Button>
                        ))}
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <br/>
                    <br/><Button onClick={getWordsFromServer}>Start lesson</Button></>
                </>
                :
                <TranslateFormRusEng words={words}/>
            }
        </div>
    );
};

export default Nouns;
