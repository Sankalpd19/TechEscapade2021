import React, { useState, useRef,useEffect } from 'react';
import './App.css';
import logo from './assests/grid-small1.svg';
import title from './assests/sideth1.svg';
import welcome from './assests/welcome.svg';
import origin from './assests/origin.svg';
import cu from './assests/cu.svg';
import Card from './Card';
import Box from './Box';
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
        
            <section className="card_box">
           <Card setFlag={setFlag}/> 
          </section> 
        
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
					  <div ref={el=>{content1h3=el} }  className="beginh3"  onClick={exitAnim}>
            <h3 ref={el=>{beginh3=el}} className="begintxt" >BE<span ref={el=>{beginG=el}}>G</span>IN</h3></div>
				  </div>
          </div>
    
  )
}
const x="flex";

export default App;

