import React,{useState} from 'react';
import './Card.css';
import {TweenMax,Power3} from 'gsap';
function Card({setFlag}) {  
	// const [count, setCount] = useState(0);
function box_open(){
			console.log(setFlag);
			let count=1;
			setFlag(count);
			document.getElementById("yo").style.display='flex';
			document.getElementById("yo1").style.display='none';
			document.getElementById("yo2").style.display='none';
			document.getElementById("yo3").style.display='none';
}
  return(
		
		<div className="card1">
			<div className="face face1">
			<div className="content">
					<h3>BE<span>G</span>IN</h3>
				</div>	
			</div>
			<div className="face face2">
				<div className="content">
					<p>this is so cool
					wooahhh yeahhh
					demnnnnnnnnnnnnnnnn</p>
						<a href="#" onClick={box_open}>START</a>
				</div>	
			</div>
		</div>		

  )
}

export default Card;

