function Drawer(){
    return(
        <div style={{display:"none"}} className="overlay">
            <div className="drawer">
            <h2>Корзина <img src="/pic/btn-remove.svg"/></h2>
            <div className="items">
                <div className="cartItem">
                <div className="cartItemImg" style={{backgroundImage: 'url(/pic/sneakers/1.jpg)'}}></div>
                <div className="cartDesc">
                    <p>Мужские тапочки Nike цвета капусты стильные</p>
                    <b>12 999 руб.</b>
                </div>
                <img src="/pic/btn-remove.svg"/>
                </div>
                <div className="cartItem">
                <div className="cartItemImg" style={{backgroundImage: 'url(/pic/sneakers/1.jpg)'}}></div>
                <div className="cartDesc">
                    <p>Мужские тапочки Nike цвета капусты стильные</p>
                    <b>12 999 руб.</b>
                </div>
                <img src="/pic/btn-remove.svg"/>
                </div>
            </div>
            <div className="cartTotalBlock">
                <ul className="cart-bottom">
                <li >
                    <span>Итого:</span>
                    <div></div>
                    <b>8 902 руб.</b>
                </li>
                <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>450 руб.</b>
                </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/pic/arrow.svg"/></button>
            </div>
            </div>
        </div>
    )
}

export default Drawer;