import React from 'react'
import Header from './components/Layout/Header';
import AvailableMeals from './components/Meals/AvailiableMeals';
import Meals from './components/Meals/Meals';

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Meals/>
      </main>
    </div>
  )
}

export default App
