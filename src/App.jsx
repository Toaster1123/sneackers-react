// 34:45
import Header from './components/Header';
import Drawer from './components/Drawer'
import Card from './components/card';

const CardArr = [
  {name:'Мужские тапочки Nike цвета капусты стильные', price:12999},
  {name:'Мужские кроксы Adidas цвета красного чёткие', price:16999},
  {name:'Мужские подкрадули New Balance цвета фикалис', price:8999}
]
function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="top_body">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/pic/search.svg"/>
            <input placeholder="Поиск..." type="text" />
          </div>    
        </div>
        <div className="snaekers">
          {CardArr.map(val => (
            <b>1</b>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
