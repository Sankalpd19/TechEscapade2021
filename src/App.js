import React, { useState, useRef,useEffect } from 'react';
import './App.css';
import logo from './assests/grid-small1.svg';
import title from './assests/sideth1.svg';
import welcome from './assests/welcome.svg';
import origin from './assests/origin.svg';
import cu from './assests/cu.svg';
import Card from './Card';
import Box from './Box';
import Tilt from 'react-tilt';
import {TweenMax,Power3} from 'gsap';
import { TweenLite } from 'gsap/gsap-core';
var yo='none';



function App() {  
  const [flag,setFlag]=useState(0);
  let content1box= useRef(null);
  let content1h3= useRef(null); 
  let beginh3= useRef(null); 
  let beginG= useRef(null); 
  useEffect(()=>{
   
    TweenMax.from(content1box,1.5,{xPercent:-100},Power3.easeInOut);
    //TweenMax.from(content1h3,2,{autoAlpha:0},Power3.easeOut);
    TweenLite.from(beginh3,2,{y:100,autoAlpha:0,ease:Power3.easeOut,delay:1});
  },[]);  
   
  
  const exitAnim = () =>{
    TweenLite.to(content1box,2,{yPercent:-100,ease:Power3.easeOut});
    TweenLite.to(content1box,0.1,{css:{display:'none'},delay:1.5,onComplete:function(){
      document.getElementById("yo1").style.display='flex';
      document.getElementById("yo2").style.display='flex';
      document.getElementById("yo3").style.display='flex';
    }}
    );
  }
 
  //const [disp,newdisp]=useState(yo);
  return (
    <div className="main_container" >
    {/* LEFT SIDE BAR */}
      <section className="leftbar" id="yo1" style={{display:yo}}>
          <div className="logo">
              <img src={logo} alt="logo"/>
          </div>
          <div className="title">
              <img src={title} alt="title"/>
          </div>
          <div className="cu">
            <img src={cu} alt="cu"/>
          </div>   
      </section>
         

         {/* MAIN BOX */}
        <section className="main_box" id="yo2" style={{display:yo}}>
          <div className="welcome ">
              <img src={welcome} alt="welcome"/>
          </div>
          <div className="origin ">
              <img src={origin} alt="origin"/>
          </div>
          <Tilt className="Tilt" options={{ max : 25 }}  >
            <section className="card_box">
           <Card setFlag={setFlag}/> 
          </section> 
          </Tilt>
        </section>
       
        {/* RIGHT SIDE BAR */}
        <div className="rightbar" id="yo3" style={{display:yo}}>
        <div className="snum"><span className="fname">0</span>1</div>
        <div className="snum"><span className="fname">0</span>2</div>
        <div className="snum"><span className="fname">0</span>3</div>
        <div className="snum"><span className="fname">0</span>4</div>
        <div className="snum"><span className="fname">0</span>5</div>
        <div className="snum"><span className="fname">0</span>6</div>
        <div className="snum"><span className="fname">0</span>7</div>
        <div className="snum"><span className="fname">0</span>8</div>
        <div className="snum"><span className="fname">0</span>9</div>
        <div className="snum"><span className="fname">1</span>0</div>
        </div>
        <div className="story_box" id="yo"style={{display:yo}}>
          <Box flag={flag}/>
        </div>
        
          <div ref={el=>{content1box=el}} className="content1"  id="x" style={{display:x}}>
            <div className="logo">
              <div className="logo circle">
                     <svg  viewBox="0 0 134 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M131.5 66.5C131.5 101.829 102.64 130.5 67 130.5C31.3599 130.5 2.5 101.829 2.5 66.5C2.5 31.1714 31.3599 2.5 67 2.5C102.64 2.5 131.5 31.1714 131.5 66.5Z" stroke="white" stroke-width="5"/>
                    </svg>
              </div>
              <div className="logo tm">
                    <svg  viewBox="0 0 96 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 14L0 0H95.5L80 14H54V84.5L47 98L40 84.5V14H14.5Z" fill="white"/>
                    <path d="M80 24L56 47.5L66 43.5V88L80 74.5V24Z" fill="white"/>
                    <path d="M14.5 24L38.5 47.5L28.5 43.5V88L14.5 74.5V24Z" fill="white"/>
                    </svg>
              </div>
            </div>
					  <div ref={el=>{content1h3=el} }  className="beginh3"  onClick={exitAnim}>
            <h3 ref={el=>{beginh3=el}} className="begintxt" >BE<span ref={el=>{beginG=el}}>G</span>IN</h3></div>
				  </div>
          </div>
    
  )
}
const x="flex";

export default App;

