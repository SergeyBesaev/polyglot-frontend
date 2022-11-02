import React from 'react';
import TranslateForm from "./translate.form"

const Start = ({...props}) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <TranslateForm words={props.words}/>
        </div>
    );
};

export default Start;
