import React, {useState} from 'react';
import axios from "axios";
import TranslateForm from "../translate.form";

const Pronouns = () => {

    const title: string = 'Местоимения'
    const description: string = 'Здесь собраны местоимения английского языка'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/dictionary/pronouns'

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
                : <TranslateForm words={words}/>
            }
        </div>
    );
};

export default Pronouns;
