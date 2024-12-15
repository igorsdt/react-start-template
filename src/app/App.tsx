import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Меня зовут Игорь. Мне 30 лет. Я действующий веб-разработчик.</p>
        <p>Цели, которых я хочу достичь:</p>
        <ul className="App-list">
          <li>Изучить ещё один фреймворк языка JavaScript</li>
          <li>Повышение квалификации</li>
          <li>Знакомство с новыми для меня технологиями (например TS, web-сокеты)</li>
        </ul>
        <p>Какими технологиями хочу овладеть:</p>
        <ul className="App-list">
          <li>React</li>
          <li>Typescript</li>
          <li>GraphQL</li>
        </ul>
        <p>Какими технологиями уже владею</p>
        <ul className="App-list">
          <li>VueJS v3</li>
        </ul>
        <p>О своём опыте:</p>
        <p className="App-paragraph">Занимаюсь разработкой с 2017 года, изначально был бэкендом на PHP и работал с разными CMS-системами (Bitrix, Wordpress, Joomla и пр.).<br />
          В основном дорабатывал то, что было, новые правки не вносил. Постепенно начинал так же работать с вёрсткой и писать скрипты на jQuery.<br />
          Потом примерно в 2019 году перешёл на стек VueJS v2 + Python (Flask) т.к. компании это было необходимо.<br />
          В 2021 году перешёл на VueJS v3 и работаю на нём по сей день, бэкендом уже больше не занимаюсь, полностью перешёл на вёрстку + фронтенд.
          </p>
      </header>
    </div>
  );
}

export default App;
