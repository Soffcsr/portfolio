import React, {Component} from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NavbarMov from "./Components/NavbarMov";
import Contact from "./Views/Contact";
import Home from "./Views/Home";
import Profile from "./Views/Profile";
import Skills from "./Views/Skills";
import Work from "./Views/Work";
import { firebaseApp } from './firebase';
import VisibilitySensor from 'react-visibility-sensor'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      user : {
        lastname: "",
        name: "",
        about: "",
        skills: []
      }
    }
    this.userRef = firebaseApp.database().ref().child('user')
  }

  componentWillMount(){
    this.listenForUser(this.userRef)
  }
  
  listenForUser(userRef){
    userRef.on('value', snap => {
      const user = {
        lastname: snap.val().lastname,
        name: snap.val().name,
        about: snap.val().about,
        skills: snap.val().skills,
        _key: snap.key
      }
      this.setState({user: user})
    })
  }
  
  render(){
    
    const {
      name,
      lastname,
      about,
      skills
    } = this.state.user

    console.log("skills:::::::", skills)
        
    return (
      <div className="App" id="container">
          <NavbarMov />
          <Navbar />
          <Home 
            name = {name}
            lastname = {lastname}
          />
          <VisibilitySensor partialVisibility offset={{bottom: 300}}>
            {({isVisible}) => {
              return(
                <Profile 
                  flag={isVisible}
                  about={about}
                />
              )
            }}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{bottom: 300}}>
            {({isVisible}) => {
              return(
                <Skills 
                  flag={isVisible}
                  skills={skills}
                />
              )
            }}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{bottom: 200}}>
            {({isVisible}) => {
              return(
                <Work 
                  flag={isVisible}
                />
              )
            }}
          </VisibilitySensor>
          <VisibilitySensor partialVisibility offset={{bottom: 100}}>
            {({isVisible}) => {
              return(
                <Contact 
                  flag={isVisible}
                />
              )
            }}
          </VisibilitySensor>
      </div>
    );
  }
}

export default App;
