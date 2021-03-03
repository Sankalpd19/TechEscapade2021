import React, { useState } from 'react';
import './Card.css';
import { TweenMax, Power3 } from 'gsap';
import $ from "jquery";
// import ScriptTag from 'react-script-tag';

function Card({ setFlag }) {
	const [input, setinput] = useState();
	const [access, setAccess] = useState();	
	const [login,setLogin]=useState(false);
	function box_open() {	
		authorisation();
	}
	
	function authorisation(){
		document.querySelector("#litheader").className="";
		var emails=[];
		var acc_code=[];
		$.getJSON('https://spreadsheets.google.com/feeds/list/1p7SWraEdJcZo4kRobpqgfM9Kon7jRFAwNnCdrTGWQFk/1/public/full?alt=json'
		, function(data) {
		for (var i = 0; i < data.feed.entry.length; ++i) {console.log(login);
					emails[i]=data.feed.entry[i].gsx$email.$t;
					acc_code[i]=data.feed.entry[i].gsx$accesscode.$t;
					console.log(emails,acc_code);
					if(input===emails[i]&&access===acc_code[i]){
				console.log(emails[i],input,acc_code[i],access);
				let count = 1;
						setFlag(count);
						TweenMax.to('.main_container', { css: { background: "black" } });
						document.getElementById("yo1").style.display = 'none';
						document.getElementById("yo2").style.display = 'none';
						document.getElementById("yo3").style.display = 'none';
						document.getElementById("yo").style.display = 'flex';
				setLogin(true);console.log(login);
				break;
			}
				} 
		
		  });	 
	
		  if(input===undefined||access===undefined||input==='null'||access==='null'){
			document.querySelector("#litheader").className="poweron"
			  TweenMax.to('.login_btn',0.5,{background:"red",color:"white",innerHTML:"Access Denied"});
		  }
		  else{
			  document.querySelector("#litheader").className="poweron"
			// TweenMax.to('.login_btn',0.5,{background:"#222",color:"white",innerHTML:"Initialising.."});	console.log(login+1);
					if(login===true){
						let count = 1;
						setFlag(count);
						TweenMax.to('.main_container', { css: { background: "black" } });
						document.getElementById("yo1").style.display = 'none';
						document.getElementById("yo2").style.display = 'none';
						document.getElementById("yo3").style.display = 'none';
						document.getElementById("yo").style.display = 'flex';
					}
					if(login===false){
						TweenMax.to('.login_btn',0.5,{color:"white",innerHTML:"Retry!!"});
					}
			}
		  }
		

  return (
				
			<div className="card1">
				<div className="face face1">
					<div className="content">
						{/* <h3>BE<span>G</span>IN</h3> */}
						<h1 id="litheader">BE<span>G</span>IN</h1>
						<div className="glare"></div>
						<div class="inset">

							<p>
								<input type="text" name="username" id="email" placeholder="Email address"  onInput={e => setinput(e.target.value)}></input>
							</p>
							<p>
								<input type="password" name="password" id="password" placeholder="Access code"  onInput={e=> setAccess(e.target.value)}></input>
							</p>

						</div>
					</div>
				</div>
				<div className="face face2">
					<div className="content">
						{/* <p>this is so cool
					wooahhh yeahhh
					demnnnnnnnnnnnnnnnn</p> */}
						<a href="#" className="login_btn" onClick={box_open}>START</a>
					</div>
				</div>
				
				
			</div>

		)
	}

	export default Card;

