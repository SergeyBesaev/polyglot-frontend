import React, {useState} from 'react';
import {WordForm} from "./wordForm";
import Result from "./result";
import {Button} from 'react-bootstrap';
import {delay} from "../util/util";

const TranslateFormRusEng = ({...props}) => {

    const words: WordForm[] = props.words as WordForm[]
    let wordsLength: number = words.length

    let [countPassedWords, setCountPassedWords] = useState(-1)
    let [countSkip, setCountSkip] = useState(0)
    let [countSuccessfully, setCountSuccessfully] = useState(0)
    let [countWithPrompting, setCountWithPrompting] = useState(0)

    const [isClickMouse, setIsClickMouse] = useState(false)
    const [isHint, setIsHing] = useState(false)

    let [checkWord, setCheckWord] = useState(getFirstWord)
    let [inputWord, setInputWord] = useState('')
    let [successCheck, setSuccessCheck] = useState('')

    function getFirstWord(): WordForm {
        setCountPassedWords(countPassedWords += 1)
        return words.shift() as WordForm
    }

    function checkTranslate() {
        if (inputWord === checkWord.eng) {
            setCountSuccessfully(countSuccessfully += 1)
            getNextWord()
        } else {
            setSuccessCheck('Неправильно')
        }
    }

    function handleKeyPress(e: { key: string }) {
        if (e.key === 'Enter') {
            checkTranslate()
        }
    }

    async function handleMousePress() {
        if (!isClickMouse) {
            setCountSuccessfully(countSuccessfully -= 1)
            setCountWithPrompting(countWithPrompting += 1)
            setIsClickMouse(true)
            setIsHing(true)
            await delay(2000)
            setIsClickMouse(false)
        }
    }

    function getNextWord() {
        setCountPassedWords(countPassedWords += 1)
        setIsClickMouse(false)
        setIsHing(false)
        const verb = words.shift()
        if (verb) {
            setCheckWord(verb)
            setInputWord('')
            setSuccessCheck('')
        } else {
            setInputWord('end111')
        }
    }

    function skipWord() {
        setCountSkip(countSkip += 1)
        return getNextWord()
    }

    function finishLesson() {
        setInputWord('end111')
    }

    return (

        <div>
            {inputWord !== 'end111'
                ?
                <div>
                    <h3>{checkWord.rus}</h3>
                    {!isClickMouse
                        ? <h3><i>*****</i></h3>
                        : <h4><i>{checkWord.eng}</i></h4>
                    }
                    <input
                        value={inputWord}
                        placeholder='Введите перевод'
                        onChange={event => setInputWord(event.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    {' '}
                    <Button variant="secondary" onClick={skipWord}>Пропустить</Button>{' '}
                    <Button disabled={isHint} onClick={handleMousePress}>Подсказка</Button>{' '}
                    <Button onClick={finishLesson}>Окончить урок</Button>{' '}
                    <h5>{successCheck}</h5>
                    <p/>
                    <h5>Пройдено: {countPassedWords}. Осталось: {wordsLength}</h5>
                    <p/>
                    <p>Примеры: <i>{checkWord.examples}</i></p>
                </div>
                : <Result countAllWords={countPassedWords} countSuccessfully={countSuccessfully} countSkip={countSkip}
                          countWithPrompting={countWithPrompting}/>
            }
        </div>
    );
};

export default TranslateFormRusEng;
