import './AboutUsStyle.css';

function ConnectWe() {
  return (
    <div className="about-container">
      <h1>Наши контакты:</h1>

      <div className="phoneItems">
        <div className="telephonesItems">
          <div class="telephone">
            <img class="tel" src="tel.png" alt="tel" />
            <p className="textContacts">
              <span class="number">+7 (911) 893-31-00</span> Владислав (Администратор)
            </p>
          </div>
          <div class="telephone">
            <img class="tel" src="tel.png" alt="tel" />
            <p className="textContacts">
              <span class="number">+7 (953) 247-01-11</span> Роман (Директор)
            </p>
          </div>
        </div>
        <div class="icons_in_connect">
          <a href="https://vk.com/berezovyhutor">
            <img class="icons-connect" src="vk.png" alt="vk" />
          </a>

          <a href="https://chat.whatsapp.com/JuHTQ0QbemH4HEvqIdJVDG">
            <img class="icons-connect" src="whatsapp.png" alt="vk" />
          </a>

          <a href="https://web.telegram.org/k/#-1669550437">
            <img class="icons-connect" src="telegram.png" alt="vk" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default ConnectWe;
