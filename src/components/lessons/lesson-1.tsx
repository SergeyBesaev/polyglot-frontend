import React, {useState} from 'react';
import axios from "axios";
import TranslateForm from "../translate.form";
import {Button} from "react-bootstrap";

const Lesson1 = () => {

    const title: string = 'Lesson №1'
    const description: string = 'Verbs'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/lesson-1'

    async function getWordsFromServer() {
        const response = await axios.get(url)
        setWords(response.data.data)
    }


    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h1>{title}</h1>
            </div>
            {words.length === 0
                ?
                <div>
                    <h5>{description}. В этом блоке будет таблица с правилами построения глаголов в разных временах</h5>
                    <div style={{textAlign: "center"}}>
                        <Button onClick={getWordsFromServer}>Start</Button>
                    </div>
                </div>
                : <TranslateForm words={words}/>
            }

        </div>
    );
};

export default Lesson1;
