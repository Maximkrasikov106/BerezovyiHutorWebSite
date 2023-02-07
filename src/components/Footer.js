import './FoorerStyle.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Берёзовый хутор</h1>
          <p>Все права защищены</p>
        </div>
        <div>
          <a href="https://vk.com/berezovyhutor">
            <i class="fa-brands fa-vk"></i>
          </a>
          <a href="https://web.telegram.org/k/#-1669550437">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://chat.whatsapp.com/JuHTQ0QbemH4HEvqIdJVDG">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
          <a href="/info">
            <i class="fa-solid fa-phone"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
