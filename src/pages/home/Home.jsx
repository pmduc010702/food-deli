import React, { useState } from 'react'
import './Home.css'
import Header from './../../components/header/Header';
import ExploreMenu from '../../components/explore-menu/ExploreMenu';
import FoodDisplay from './../../components/food-display/FoodDisplay';
import AppDownload from '../../components/app-download/AppDownload';

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home