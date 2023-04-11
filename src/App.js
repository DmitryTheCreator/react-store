import React, { useState } from "react";
import CardList from "./components/CardList";
import Toolbar from "./components/Toolbar";
import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import './styles/App.css';

function App() {
  const [cards] = useState([
    {id: 1, img: require('./assets/weapons/pistols/beretta_m92_elektro_tan_cm126tn.jpg'), desc: 'Cyma Пистолет Beretta M92, электро, tan (cm126tn)', price: 7500},
    {id: 2, img: require('./assets/weapons/pistols/beretta_sr92_aep_ge_0401s.jpg'), desc: 'Cyma Дробовик Remington M870, черный (cm357ambk)', price: 750},
    {id: 3, img: require('./assets/weapons/pistols/desert_eagle_elektro_cm121.jpg'), desc: 'Cyma Пистолет Beretta M92, электро, tan (cm126tn)', price: 7500},
    {id: 4, img: require('./assets/weapons/pistols/galaxy_pistolet_colt_silver_g6s.jpg'), desc: 'glock', price: 750},
    {id: 5, img: require('./assets/weapons/pistols/glock_18c.jpeg'), desc: 'Cyma Пистолет Beretta M92, электро, tan (cm126tn)', price: 7500},
    {id: 6, img: require('./assets/weapons/pistols/pistolet_galaxy_pm_spring_g29.jpg'), desc: 'Cyma Дробовик Remington M870, черный (cm357ambk)', price: 750},
    {id: 7, img: require('./assets/weapons/pistols/glock_18c.jpeg'), desc: 'Cyma Пистолет Beretta M92, электро, tan (cm126tn)', price: 7500},
    {id: 8, img: require('./assets/weapons/pistols/pistolet_galaxy_pm_spring_g29.jpg'), desc: 'Cyma Дробовик Remington M870, черный (cm357ambk)', price: 750},
  ])

  const [categories] = useState([
    {id: 1, img: require('./assets/categories/airsoft_guns.png'), href: '/', title: 'Страйкбольные автоматы'},
    {id: 2, img: require('./assets/categories/assault_rifle.png'), href: '/', title: 'Винтовки'},
    {id: 3, img: require('./assets/categories/machine_guns.png'), href: '/', title: 'Пулеметы'},
    {id: 4, img: require('./assets/categories/shotguns.png'), href: '/', title: 'Дробовики'},
    {id: 5, img: require('./assets/categories/launchers.png'), href: '/', title: 'Гранатометы'},
    {id: 6, img: require('./assets/categories/pistols.png'), href: '/', title: 'Пистолеты'},
  ])

  return (
    <div className="App">
      <Toolbar />
      <CategoryList categories={categories} />
      <CardList cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
