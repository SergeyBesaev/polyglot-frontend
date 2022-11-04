import React from 'react';
import TranslateFormRusEng from "./translate.form.rus.eng"

const Start = ({...props}) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <TranslateFormRusEng words={props.words}/>
        </div>
    );
};

export default Start;
