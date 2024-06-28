function Card (){
    return(
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
    )
}

export default Card;