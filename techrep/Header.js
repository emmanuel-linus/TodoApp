import React, {Component} from 'react';
import {IoIosArrowBack} from 'react-icons/io'
import image2 from '../img/1.png'




const Header = (props)=>{
    
    return(
        
        
            <header className="region">
             <a href="" className="main">
                
                <div className="font"><IoIosArrowBack/></div>
                <img src={image2} className="done"></img>
                   <span>TECHREPUBLIC HOME</span>
            
             </a>
             <div className="fort">
                <div className="tec">
                    <img src={image2} className="pen"></img>
                     <p>TECHREPUBLIC </p>
                     <p>P R E M I U M.</p>
                </div>
                <div className="pig">
                   <a href="#"> <li> IT POLICY </li></a>
                    <a href="#"> <li> CXO </li></a>
                    <a href="#"> <li> SECURITY</li></a>
                    <a href="#"> <li>MOBILITY</li></a>
                    <a href='#'> <li>BIG DATA</li></a>
                    <a href="#"> <li>CLOUD</li></a> <hr></hr>
                    <input type="text" className="boo" value="" placeholder="Search our premium"></input>
                </div>
                <div className="pro">
                    <p className="pick">SUBCRIBE/LOG IN</p>
                </div>
             </div>
            
        </header>

    
    )
}
export default Header;