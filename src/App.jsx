import Header from './components/Header';
import Drawer from './components/Drawer'
import Card from './components/Card';
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
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
