import React, {useState} from 'react';
import axios from "axios";
import TranslateFormRusEng from "../translate.form.rus.eng";

const Adjectives = () => {

    const title: string = 'Прилагательные'
    const description: string = 'Здесь собраны самые распространенные прилагательные английского языка'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/dictionary/adjectives'

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

export default Adjectives;
