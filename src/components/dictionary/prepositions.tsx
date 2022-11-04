import React, {useState} from 'react';
import axios from "axios";
import TranslateFormRusEng from "../translate.form.rus.eng";

const Prepositions = () => {

    const title: string = 'Предлоги'
    const description: string = 'Здесь собраны предлоги английского языка'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/dictionary/prepositions'

    async function getWordsFromServer() {
        const response = await axios.get(url)
        setWords(response.data.data)
    }

    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
            {words.length === 0
                ? <button onClick={getWordsFromServer}>Start lesson</button>
                : <TranslateFormRusEng words={words}/>
            }
        </div>
    );
};

export default Prepositions;
