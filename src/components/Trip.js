import TripData from './TripData';
import './TripStyles.css';

function Trip() {
  return (
    <div className="trip">
      <h1>Наши дома</h1>
      <p>Дома на любой вкус цвет и приколы</p>
      <div className="tripcard">
        <TripData image="kek.jpg" heading="Средний дом" text="Цена, удобства описание" />
        <TripData image="vlad.jpg" heading="Средний дом" text="Цена, удобства описание" />
        <TripData image="test.jpg" heading="Средний дом" text="Цена, удобства описание" />
      </div>
    </div>
  );
}

export default Trip;
