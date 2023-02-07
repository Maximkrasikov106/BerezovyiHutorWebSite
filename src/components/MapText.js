import './AboutUsStyle.css';

function MapText() {
  return (
    <div className="about-container">
      <h1>Расположение:</h1>

      <div className="content">
        <div className="first block">
          <p className="textAbout">
            Наш центр располагается на федеральной трассе А-212 всего в 2-х километрах от
            исторически важного места России - деревни Старый Изборск, в 33 километрах от города
            Пскова, в 25 километрах от города Печоры и в 30 километрах от государственной границы с
            Республикой Эстония. Площадь территории туристско-спортивного центра «Берёзовый хутор»
            составляет 35 га с живописными лугами, прудами и лесами, спортивными трассами.
          </p>
          <div className="iconsFlex">
            <p className="liksStyle">
              <a href="https://yandex.ru/maps/org/berezovy_khutor/1167839605/?ll=27.673864,57.694980&z=11.02">
                <img className="yanMap" src="yandexMap.png" alt="map"></img>
              </a>
            </p>
            <p className="liksStyle">
              <a href="https://www.google.com/maps/place/Берёзовый+хутор/@57.7061259,27.8149619,17z/data=!3m1!4b1!4m8!3m7!1s0x46ea9b7df80684e3:0xe366675e62b71dbc!5m2!4m1!1i2!8m2!3d57.7061231!4d27.8171506?hl=ru">
                <img className="yanMap" src="googleMaps.png" alt="map"></img>
              </a>
            </p>
          </div>
        </div>

        <div className="yandexMap0">
          <a
            href="https://yandex.ru/maps/org/berezovy_khutor/1167839605/?utm_medium=mapframe&utm_source=maps"
            className="yandexMap">
            Березовый хутор
          </a>
          <a
            href="https://yandex.ru/maps/10926/pskov-oblast/category/tourist_resort/184106426/?utm_medium=mapframe&utm_source=maps"
            className="yandexMap2">
            Турбаза в Псковской области
          </a>
          <iframe
            src="https://yandex.ru/map-widget/v1/org/berezovy_khutor/1167839605/?ll=27.816843%2C57.705381&z=15"
            width="900"
            height="750"
            frameborder="1"
            allowfullscreen="true"
            className="yandexMap3"
          />
        </div>
      </div>
    </div>
  );
}
export default MapText;
