import React,{useState,useRef,useEffect} from 'react';
import './Box.css';
import './Card';
import bulb from './assests/bulb.png';
import hint from './assests/hint.svg';
import lvl from './assests/lvl.svg';
import {TweenMax,Power3} from 'gsap';
import {TimelineLite} from 'gsap/gsap-core';

function Box({flag}) {
	const [lfl_count,setFlag]=useState(4);
	var Story_text="Year 2050, SearchBook is emerging as one of the largest multinational technical company of the current decade, The main hype is around its on-device optimizations that are leading to next level personalized experiences without the expense of user data.But there lies a dark foundation for this success. SearchBook, with the help of a group of excellent developers, has invented ways to bypass security measures put in place by operating systems and is able to collect user data freely without the end user ever knowing about it. They've been lying to the world all along!	The evil SearchBook has also found effective ways to subdue the resistance from coders and developers who discovered the dark secrets of the evil corporation. Instead of discrediting them, SearchBook kidnaps them to certain disbanded facilities and puts them into medically induced hypnosis, controlling their actions to no end, for their benefit, This is how they developed their technologies in the first place.In such a facility far away from the city, a coder named 'Byte Chan' is able to resist and fight back this hypnosis because of his strong sense of justice and righteousness.You are Byte Chan. To get out of the facility you will need to unlock every door, You are able to contact your close friend Bit Lee who will help you in finding the clues to pick the keys. If you make it out alive with all the keys, the world will know the ugly truth about SearchBook!! The future of this world lies in your hands now. Save the world Coder!!!";  
	const texts=Story_text.split(".");
	let count=0;
	let currentText='';

	
			if(flag!==0)
				{	
						TweenMax.to('.card',{display:'flex',opacity:1,onComplete:function(){
						TweenMax.fromTo('.typing',1.5,{css:{opacity:0,filter: 'drop-shadow(2px 4px 3px rgba(0,0,0,0.8))'},ease:Power3.easeInOut},{css:{opacity:1},ease:Power3.easeInOut});
						}});
	
				}
	
	currentText=texts[count];
	 const next_page = () =>{
		if (count === texts.length-1){
			count=-1;
			
		}
		count++;
		currentText=texts[count];
		if(count===1){
			TweenMax.to('.card',{css:{backgroundColor:'rgba(0,0,0,0.5)'},duration:2,ease:Power3.easeOut,delay:0.5});
		}
		if(count!==1){
			TweenMax.to('.card',{css:{backgroundColor:'rgba(255,255,255,0.1)'},duration:2,ease:Power3.easeOut,delay:0.5});
		}
		if(count===texts.length-1){
			alert("Message recieved from Bit Lee:- If you get this message,it means you're in real danger..But don't worry I'll help you at every step!! Do remember to stay attentive,everything's a clue!");
		TweenMax.to('.proceed',2,{visibility:'unset',display:'unset',opacity:1,ease:Power3.easeOut,delay:1});
		}	
		

	document.querySelector('.typing').textContent=currentText; 
		txtAnim();
	  }
  const txtAnim = () =>{
	TweenMax.to('.nxtbtn',1,{visibility:'hidden',opacity:0,ease:Power3.easeOut});
	TweenMax.to('.proceed',1,{visibility:'hidden',opacity:0,ease:Power3.easeOut});
	const txt=document.querySelector('.typing');
	const strTxt=txt.textContent;
	const splitTxt=strTxt.split("");
	txt.textContent="";
	for(let i=0;i<splitTxt.length;i++){
		txt.innerHTML+="<span>"+splitTxt[i]+"</span>";
	}
	let char=0;
	
	const onTick=()=>{
		const span=txt.querySelectorAll('span')[char];
		span.classList.add('fade');
		char++;
		if(char=== splitTxt.length){
			complete();
			return;
		}
	}
	let timer=setInterval(onTick,18);
	const complete=()=>{
		clearInterval(timer);
		timer=null;
		TweenMax.to('.nxtbtn',1,{visibility:'unset',opacity:1,ease:Power3.easeOut,delay:0.5});
	}
  }
  	const level1=()=>{
		TweenMax.to('.bar',{display:'unset',ease:Power3.easeOut});
		TweenMax.to('.nxtbtn',{display:'none'});
		document.querySelector('.typing').textContent=""; 
		const bartl= new TimelineLite();
		bartl.from('.bar',{height:0,duration:1,onComplete:function(){
			TweenMax.to('.card',{width:'55%',duration:2,ease:Power3.easeOut});
			TweenMax.to('.card',{css:{backgroundColor:'rgba(0,0,0,0.5)'}});
			TweenMax.to('.lvl',{display:'unset',opacity:1,duration:4});}});
		bartl.to('.bar',{left:'84%',duration:2,ease:Power3.easeOut});
		bartl.to('.bar',{height:0,display:'none',duration:1,onComplete:function(){
			TweenMax.to('.bulb',1,{y:10,opacity:1,display:'unset'});
			
		}});
		TweenMax.to('.proceed',1,{opacity:0,display:'none'});
	  }
	  
	  const hint_tab=()=>{
		  if(lfl_count>0){
		TweenMax.to('.tooltip',0.5,{y:-10,opacity:0,display:'none'});
		  TweenMax.to('.hint_section',0.5,{y:10,opacity:1,display:'flex',delay:0.5});		
		  
		  }
		  else{
			document.querySelector('.tooltiptext').textContent="Lifelines Exhausted"; 
		  }
	  }
	  const show_hint=()=>{
		window.open("https://www.google.com");  
		setFlag(lfl_count-1);
		TweenMax.to('.tooltip',0.5,{y:10,opacity:1,display:'unset',delay:0.5});
		  TweenMax.to('.hint_section',0.5,{y:-10,opacity:0,display:'none',});
	  } 
	  let c=1;
	  const scalelvl=()=>{
		TweenMax.to('.card',0.5,{css:{transform:'scale(1.2)'},ease:Power3.easeOut});
	}
	const normallvl=()=>{
		TweenMax.to('.card',0.5,{css:{transform:'scale(1)'},ease:Power3.easeOut});
	}
	return(
		<>
		<div className="container" >
		<div className="tooltip">
		<img src={bulb} alt="bulb"  onClick={hint_tab} className="bulb"/>
  		<span className="tooltiptext">
			  Lifelines (available:-{lfl_count})
		  </span>
		</div>
			
			<div className="bar"></div>
			<div className="hint_section">
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
				<div className="hint_box">{c++}
				<img className="hint-img" onClick={show_hint} src={hint} alt="hint"/>
				</div>
			</div>
			<div className="card">
			
				<div className="content" >
			
					<h2>01</h2>
					<p   className="typing" style={{opacity:0}}>{currentText}</p>
					<img className="lvl" src={lvl} alt="lvl" onMouseOver={scalelvl} onMouseOut={normallvl} style={{width:'100%',display:'none',opacity:0}}/>
					<a href="#"	className="nxtbtn" onClick={next_page}>Next</a>
					
					
				</div>
			</div>	
			<p className="proceed" onClick={level1}> Click here to proceed to first level</p>
			
		</div>
		</>
		
  )
}

export default Box;
