import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Button from './Button'
import ProfileImage from './ProfileImage'
import SearchBar from './SearchBar'
import Card from './Card'
import CookieAlert from './CookieAlert'
import Loader from './Loader'


const App= () => {
  const title={
    headerTitle:  "Get ready for adventure!",
    headerBackgroundColor: "rgba(21, 20, 20, 0.92)",
  }
  

  return (
    <div className="main-container">
      <Header title={title.headerTitle} backgroundColor={title.headerBackgroundColor}/>
      <ProfileImage />
      <h1>Week 11- Labs</h1>
      <SearchBar />
      <Button />
      <Card />
      <CookieAlert/>
      <Loader />
      <Footer />
    </div>
  );
}

export default App;
