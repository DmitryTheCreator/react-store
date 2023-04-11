import React from "react";

const Toolbar = () => {
    return (
        <header className="toolbar">
            <div className="logo">
                <img src="../icons/logo.png" alt="Logo" />
                <div>
                    <a href="/" className="logo-title">TOPGUN</a>
                    <a href="/" className="logo-title">AMMO</a>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="catalog.html">КАТАЛОГ</a></li>
                    <li><a href="delivery.html">ДОСТАВКА</a></li>
                    <li><a href="contacts.html">КОНТАКТЫ</a></li>
                </ul>
            </nav>
            <div className="right-side">
                <a href="/" className="open-cart">
                    <img className="basket-icon" src="../icons/basket-modal.png" alt="Корзина"/>
                </a>
                <p className="phone">+7 (987) 244-77-24</p>
            </div>
      </header>
    );
}

export default Toolbar;