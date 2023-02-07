import TripData from './TripData';
import './TripStyles.css';

function Trip() {
  return (
    <div className="trip">
      <h1>Наши дома</h1>
      <p>Разнообразный выбор домов под ваши потребности</p>
      <div className="tripcard">
        <TripData image="kek.jpg" heading="Большой дом" />
        <TripData image="MiddleHome.jpg" heading="Средний дом" />
        <TripData image="smallHome.jpg" heading="Малый дом" />
        <TripData image="module.jpg" heading="Модульный дом" />
      </div>
    </div>
  );
}

export default Trip;
