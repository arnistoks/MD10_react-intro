import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Button from './components/Button/Button';
import Buttons123 from './components/Button/Buttons123';
import Buttons1234 from './components/Button/Buttons1234';
import Circle from './components/Circle/Circle';
import Card from './components/Card/Card';
import Cards123 from './components/Card/Cards123';

const App = () => (
  <section className="section">
    <div className="container">
      <Navigation />
    </div>
    <div className="container container__button">
      <Button />
      <Button />
      <Button />
    </div>
    <div className="container container__button">
      <Buttons123 name="Button 1" />
      <Buttons123 name="Button 2" />
      <Buttons123 name="Button 3" />
    </div>
    <div className="container container__button">
      <Circle />
    </div>
    <div className="container container__button">
      <Card />
      <Card />
      <Card />
    </div>
    <div className="container container__button">
      <Cards123 title="TITLE 1" text="DECRIPTION 1" />
      <Cards123 title="TITLE 2" text="DECRIPTION 2" />
      <Cards123 title="TITLE 3" text="DECRIPTION 3" />
    </div>
    <div className="container container__button">
      <Buttons1234 />
    </div>
  </section>
);

export default App;
