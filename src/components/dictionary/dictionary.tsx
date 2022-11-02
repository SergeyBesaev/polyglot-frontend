import React from 'react';
import {CardGroup} from "react-bootstrap";
import CardsItem from "../cards.item";

const Dictionary = () => {

    const partsOfSpeech: { title: string; path: string; description: string; }[] = [
        {title: 'Nouns', path: '/dictionary/nouns', description: 'Существительные'},
        {title: 'Adjectives', path: '/dictionary/adjectives', description: 'Прилагательные'},
        {title: 'Adverbs', path: '/dictionary/adverbs', description: 'Наречие'},
        {title: 'Conjunctions', path: '/dictionary/conjunctions', description: 'Союзы'},
        {title: 'Pronouns', path: '/dictionary/pronouns', description: 'Местоимения'},
        {title: 'Prepositions', path: '/dictionary/prepositions', description: 'Предлоги'},
        {title: 'Verbs', path: '/dictionary/verbs', description: 'Глаголы'},
    ]

    return (
        <div>
            <h1>Словарь</h1>
            <CardGroup>
                {partsOfSpeech.map(part => <CardsItem lessons={part}/>)}
            </CardGroup>
        </div>
    );
};

export default Dictionary;
