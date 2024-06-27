function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>

          <div className="cartItem">
            <div className="cartItemImg" style={{backgroundImage: 'url(/pic/sneakers/1.jpg)'}}></div>
            <div className="cartDesc">
              <p>Мужские тапочки Nike цвета капусты стильные</p>
              <b>12 999 руб.</b>
            </div>
            <img src="/pic/btn-remove.svg"/>
          </div>
        </div>
      </div>
      <header>
        <div className="headerLeft">
          <img src="/pic/logo.png" alt="logo" height={40} width={40} />
          <div className="header_left_name">
            <h3>React sneakers</h3>
            <p>Магазин крутых кросовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li>
            <img src="/pic/cart.svg" height={20} width={20} />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/pic/user.svg" height={20} width={20} />
          </li>
        </ul>
      </header>
      <div className="content">
        <div className="top_body">
          <h1>Все товары</h1>
          <div className="search-block">
            <img src="/pic/search.svg"/>
            <input placeholder="Поиск..." type="text" />
          </div>    
        </div>
        <div className="snaekers">
          <div className="card">
            <div className="favorite">
              <img src="/pic/unliked.svg"/>
            </div>
            <img src="/pic/sneakers/1.jpg" height={112} width={133} />
            <h5>Мужские тапочки Nike цвета капусты стильные</h5>
            <div className="card-bottom">
              <div className="card-content">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/pic/plus.svg" width={11} height={11} />
              </button>
            </div>
          </div>

          <div className="card">
            
            <img src="/pic/sneakers/2.jpg" height={112} width={133} />
            <h5>Мужские тапочки Nike цвета капусты стильные</h5>
            <div className="card-bottom">
              <div className="card-content">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/pic/plus.svg" width={11} height={11} />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/pic/sneakers/3.jpg" height={112} width={133} />
            <h5>Мужские тапочки Nike цвета капусты стильные</h5>
            <div className="card-bottom">
              <div className="card-content">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/pic/plus.svg" width={11} height={11} />
              </button>
            </div>
          </div>

          <div className="card">
            <img src="/pic/sneakers/4.jpg" height={112} width={133} />
            <h5>Мужские тапочки Nike цвета капусты стильные</h5>
            <div className="card-bottom">
              <div className="card-content">
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/pic/plus.svg" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
