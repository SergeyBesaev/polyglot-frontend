import React, {useState} from 'react'
import axios from "axios"
import TranslateFormRusEng from "../translate.form.rus.eng";

const Verbs = () => {

    const title: string = 'Глаголы'
    const description: string = 'Здесь собраны самые распространенные глаголы английского языка'
    let [words, setWords] = useState([])

    const url: string = 'http://localhost:8080/dictionary/verbs'

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
                // eslint-disable-next-line react/jsx-no-undef
                : <TranslateFormRusEng words={words}/>
            }
        </div>
    );
};

export default Verbs;
