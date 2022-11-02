import React from 'react';

const Home = () => {

    const title: string = 'Главная страница'
    const description: string = 'Программа тренажер для изучения английского языка по курсу Полиглот'


    return (
        <div>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    );
};

export default Home;
