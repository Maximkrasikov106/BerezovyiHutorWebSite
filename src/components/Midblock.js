import './MidblockStyles.css';
import DestanationData from './MidlTwobox.js';

const Midblock = () => {
  return (
    <div className="destanation">
      <h1>mem</h1>
      <p>lel</p>
      <DestanationData
        className="first-des"
        heading="Отдых для всей семьи"
        text="УГАНДА ОНА ЖЕ УГРАДА МЕСТО ГДЕ ВЫ МОЖЕТЕ ОТДОХНУТЬ И ЗДОРОВО ПРОВЕСТИ ВРЕМЯ С ВЛАДИКОМ
            текст тексттексттексттексттексттексттексттексттек
            сттексттексттексттексттексттексттексттексттекс
            ттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекс
            ттексттексттексттексттексттекс ттексттексттексттексттексттексттексттекст
            ттексттексттексттексттексттексттексттекст ттексттексттексттексттексттексттексттекст
            ттексттексттексттексттексттексттексттекст ттексттексттексттексттексттексттексттекст"
        img1="modalHome.jpg"
        img2="smallHome.jpg"
      />
      <DestanationData
        className="first-des-reverse"
        heading="Отдых для всей семьи2"
        text="ТЕКСТ 2 ОНА ЖЕ УГРАДА МЕСТО ГДЕ ВЫ МОЖЕТЕ ОТДОХНУТЬ И ЗДОРОВО ПРОВЕСТИ ВРЕМЯ С ВЛАДИКОМ
            текст тексттексттексттексттексттексттексттексттек
            сттексттексттексттексттексттексттексттексттекс
            ттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттексттекс
            ттексттексттексттексттексттекс ттексттексттексттексттексттексттексттекст
            ттексттексттексттексттексттексттексттекст ттексттексттексттексттексттексттексттекст
            ттексттексттексттексттексттексттексттекст ттексттексттексттексттексттексттексттекст"
        img1="test.jpg"
        img2="bigHome.jpg"
      />
    </div>
  );
};

export default Midblock;
