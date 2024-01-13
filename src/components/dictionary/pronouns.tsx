import React, {useState} from 'react';
import axios from "axios";
import TranslateFormRusEng from "../translate.form.rus.eng";

const Pronouns = () => {

    const title: string = 'Местоимения'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/dictionary/pronouns'

    async function getWordsFromServer() {
        const response = await axios.get(url)
        setWords(response.data.data)
    }

    return (
        <div>
            <h1>{title}</h1>
            <br/>
            <br/>
            {words.length === 0
                ? <button onClick={getWordsFromServer}>Start lesson</button>
                : <TranslateFormRusEng words={words}/>
            }
        </div>
    );
};

export default Pronouns;
