import {React} from 'react';
import logo1 from '../assets/Image/Cat-N-Dog-Logo copy.png'
import playground1 from '../assets/Image/google-play-badge.png'
import playground2 from '../assets/Image/AppStoreBadge.png'

function Navbar() {
    return (
        <body>
        <div id="maincontainer">
        <div id="leftcontainer">
            <div id="logo">
                <img src={logo1} alt=""/>
            </div>
           <div id="textcontainer">
            <h2>Lorem Ipsum  is simply dummy text  of the printing and typesetting industry</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptas, perferendis suscipit doloribus nesciunt facere provident itaque! Optio tenetur voluptat</p>
           </div>
           <div id="btnimages">
            <img src={playground2} alt="playbage1"/>
            <img src={playground1} alt="playbadge2"/>
           </div>
        </div>
        <div id="rightcontainer">
            <div id="nav">
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Carrers</a>
                <a href="#">Contact</a>
            </div>
            <div id="textcontent">
                <h3>Type Text</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut </p>
            </div>
        </div>
        </div>
    </body>
    );
  }
  
  export default Navbar;