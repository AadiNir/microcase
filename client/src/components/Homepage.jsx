import React from "react";
import img1 from '../assets/img1.webp'
import hs from '../assets/hs.png'
import google from '../assets/google.jpg'
function Homepage(){
    return(<>
	<div className="bg1">
		<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-inner">
				<div class="carousel-item active" align="center">
					<img className="i1" src={img1}  alt="backpic" width="50%"/>
					<div class="container">
						<div class="carousel-caption">
							<h1 className="newsH">Puzzle is building a modern accounting package for today’s API-enabled startups.</h1>
						</div>
					</div>
				</div>
				<div class="carousel-item" align="center">
					<img src= {hs} alt="backpic" width="50%"/>
					<div class="container">
						<div class="carousel-caption">
							<h1 className="newsH" >T-Hub, HAL collaborate to support startups in aerospace sector</h1>
						</div>
					</div>
				</div>
				<div class="carousel-item" align="center">
					<img src= {google} alt="backpic" width="60%"/>
					<div class="container">
						<div class="carousel-caption">
							<h1 className="newsH">Alphabet shares dive after Google AI chatbot Bard flubs answer in ad</h1>
						</div>
					</div>
				</div>
			</div>
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true" color="black"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" color="black"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" color="black"></button>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>
	</div>
     <div className="bg2">
		<div className="font">
			<h3 className="para2" >We have the courage to pursue and conquer the world
			<br/>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
			<br/>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out
			<br/>print, graphic or web designs. The passage is attributed to an unknown typesetter in
			<br/>the 15th century print, graphic or web designs. The passage is attributed to an unknown
			<br/>typesetter in the 15th century</h3>
		</div>
	</div>
</>);
}

export default Homepage;