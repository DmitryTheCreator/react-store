import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo">
                <img src="../icons/logo.png" alt="Logo" />
                <div>
                    <a href="/" className="logo-title">TOPGUN AMMO</a>
                    <p className="logo-copyright">2023 © Topgun Ammo</p>
                </div>
            </div>
            <div className="navigation">
                <p className="navigation-title">Навигация</p>
                <nav className="navigation-links">
                    <ul>
                        <li><a href="catalog.html">Каталог</a></li>
                        <li><a href="delivery.html">Доставка</a></li>
                        <li><a href="contacts.html">Контакты</a></li>
                    </ul>
                </nav>
            </div>
           
            <div className="contacts">
                <h3 className="contacts-title">Контакты</h3>
                <p className="email">dmitriyzamorev@gmail.com</p>
                <p className="phone">+7 (987) 244-77-24</p>
            </div>
        </footer>
    );
}

export default Footer;







