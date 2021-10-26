import React, { useState } from 'react';
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
  const [disable, setDisable]= useState(false);

  const title = {
    headerTitle:  "Get ready for adventure!",
    headerBackgroundColor: "rgba(21, 20, 20, 0.92)",
  }
  
  const card = {
    title: "The beginning of everything.",
    image: "./images/magic-pattern.png",
    date: "January 2022",
    number:"01."
  }

  const profileImage = {
    image: "./images/profile.png",
    name: "Linus Ekenstam",
    textColor: "#EBFF00",
  }

  const searchBar1 = {
    primaryColor:"#F8E1ED",
    secondaryColor: "#B5A2AC"
  }

  const searchBar2 = {
    primaryColor: "#FFF5E8",
    secondaryColor: "#FABB6F",
    buttonPink: "./images/button-pink.png",
    buttonYellow: "./images/button-yellow.png",
  }

  const button = {
    disabled: disable,
    buttonText: "subscribe",
    textColor: "#005D25",
    buttonColor: "#FFFFF",
  }

  const cookieAlert ={
    text:"We use cookies to provide you with a better service and for promotional purposes. By continuing to use this site you consent to our use of cookies as described in our cookie policy",
    textColor: "#FAFAFA",
    backgroundColor: "#000000"
  }

  return (
    <div className="main-container">
      <Header title={title.headerTitle} backgroundColor={title.headerBackgroundColor}/>
      <ProfileImage image={profileImage.image} name={profileImage.name} textColor={profileImage.image}/>
      <SearchBar primaryColor={searchBar1.primaryColor} secondaryColor={searchBar1.secondaryColor} />
      <SearchBar primaryColor={searchBar2.primaryColor} secondaryColor={searchBar2.secondaryColor} />
      <Button setDisable={setDisable} disabled={button.disabled} buttonText={button.buttonText} textColor={button.textColor} buttonColor={button.buttonColor} />
      <Card title={card.title} image={card.image} date={card.date} number={card.number}/>
      <CookieAlert text={cookieAlert.text} textColor={cookieAlert.textColor} backgroundColor={cookieAlert.backgroundColor}/>
      <Loader />
      <Footer />
    </div>
  );
}

export default App;
