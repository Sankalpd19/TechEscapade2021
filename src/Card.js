import React,{useState} from 'react';
import './Card.css';
import {TweenMax,Power3} from 'gsap';
function Card({setFlag}) {  
	// const [count, setCount] = useState(0);
function box_open(){
			console.log(setFlag);
			let count=1;
			setFlag(count);
			TweenMax.to('.main_container',{css:{background:"black"}});
			document.getElementById("yo1").style.display='none';
			document.getElementById("yo2").style.display='none';
			document.getElementById("yo3").style.display='none';
			document.getElementById("yo").style.display='flex';
}
  return(
		
		<div className="card1">
			<div className="face face1">
			<div className="content">
					{/* <h3>BE<span>G</span>IN</h3> */}
					<h1 id="litheader">BE<span>G</span>IN</h1>
					<div className="glare"></div>
					<div class="inset">
               			 <p>
                   			<input type="text" name="username" id="email" placeholder="Email address"></input>
                		</p>
                		<p>
                   			<input type="password" name="password" id="password" placeholder="Access code"></input>
                		</p>

				</div>
				</div>	
			</div>
			<div className="face face2">
				<div className="content">
					{/* <p>this is so cool
					wooahhh yeahhh
					demnnnnnnnnnnnnnnnn</p> */}
						<a href="#" onClick={box_open}>START</a>
				</div>	
			</div>
		</div>		

  )
}

export default Card;

