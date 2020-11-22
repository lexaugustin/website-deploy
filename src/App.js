import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/common/header/Header'

import Navbar from './components/sections/navbar/Navbar'
import Banner from './components/sections/banner/Banner'
import LatestProjects from './components/sections/latestProjects/LatestProject'
import Contact from './components/sections/contact/Contact'
import Footer from './components/sections/footer/Footer'

import Preloader from './img/preloader/preloader.gif'
import aboutIcon, { ReactComponent } from './img/icons/person.svg'
import latestProjectsIcon from './img/icons/project.svg'
import contactIcon from './img/icons/letter.svg'

import './App.css';


class App extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({
      loading: false
    })
  }
  
  render() {

    var display;

    if (this.state.loading == true) {
      display = (
        <div id="preloader">
          <img src={Preloader}/>
        </div>
      )
    } else {
      display = (
        <BrowserRouter>
          <div className="App">
            {/* --------------- NAVBAR & BANNER--------------- */}
            <div id="home-navbar">
              <Navbar/>
            </div>
    
            <section id="banner">
              <Banner/>
            </section>
  
    
    
            {/* ----------- LATEST PROJECTS ----------- */}
            <section id='projects'>
              <div id="header">
                <Header
                  icon = {latestProjectsIcon} 
                  title = "Latest Projects" 
                  subtitle = "Some of the projects that I have been working on lately ouside of classes" 
                />
              </div>
    
              <div id='main'>
                <LatestProjects/>
              </div>
            </section>
    
    
            {/* --------------- CONTACT--------------- */}
            <section id='contact'>
              <div id="header">
                <Header
                  icon = {contactIcon} 
                  title = "Contact" 
                  subtitle = "I can be contacted anytime via this form" 
                />
              </div>
    
              <div id='main'>
                <Contact/>
              </div>
            </section>
    
    
            {/* --------------- FOOTER --------------- */}
            <section id='footer'>
              <div id='main'>
                <Footer/>
              </div>
            </section>
    
          </div>
        </BrowserRouter>
      )
    }
    return (
        display
    );
  }
}

export default App;
