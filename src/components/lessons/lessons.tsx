import React from 'react';
import {Card, CardGroup} from "react-bootstrap";
import CardsItem from '../cards.item';

const Lessons = () => {

    const lessons: { title: string; path: string; description: string; }[] = [
        {title: 'Lesson 1', path: '/lessons/lesson-1', description: 'Глаголы'},
        {title: 'Lesson 2', path: '/lessons/lesson-2', description: 'Description'},
        {title: 'Lesson 3', path: '/lessons/lesson-3', description: 'Description'},
        {title: 'Lesson 4', path: '/lessons/lesson-4', description: 'Description'},
        {title: 'Lesson 5', path: '/lessons/lesson-5', description: 'Description'},
        {title: 'Lesson 6', path: '/lessons/lesson-6', description: 'Description'},
        {title: 'Lesson 7', path: '/lessons/lesson-7', description: 'Description'},
        {title: 'Lesson 8', path: '/lessons/lesson-8', description: 'Description'},
        {title: 'Lesson 9', path: '/lessons/lesson-9', description: 'Description'},
        {title: 'Lesson 10', path: '/lessons/lesson-10', description: 'Description'},
        {title: 'Lesson 11', path: '/lessons/lesson-11', description: 'Description'},
        {title: 'Lesson 12', path: '/lessons/lesson-12', description: 'Description'},
        {title: 'Lesson 13', path: '/lessons/lesson-13', description: 'Description'},
        {title: 'Lesson 14', path: '/lessons/lesson-14', description: 'Description'},
        {title: 'Lesson 15', path: '/lessons/lesson-15', description: 'Description'},
        {title: 'Lesson 16', path: '/lessons/lesson-16', description: 'Description'},

    ]


    return (
        <div>
            <h1>Страница с уроками</h1>
            <CardGroup>
                {lessons.map(lesson => <CardsItem lessons={lesson}/>)}
            </CardGroup>
        </div>
    );
};


export default Lessons;
