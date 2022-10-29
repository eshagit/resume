import React from 'react';
import styled from 'styled-components';
import DisplayLottie from './DisplayLottie';
import Shapes from './Shapes';
import Coding from '../assets/lottie/coding.json';
import SocialMedia from './SocialMedia';
import Contact from './contact';

const Hero = () => {
	return (
		<HeroStyled className="hero-section">
			<Shapes />
			<div className="container">
				<div className="hero-text">
					<div><Contact/></div>
					<div className="left-side">
						<h1>Esha Mohideen</h1>
						<p>Grid control applications developer(C,C++)</p>
						
						
					</div>
					<div className="right-side">
						<DisplayLottie animationData={Coding} />
					</div>
				</div>
			</div>
		</HeroStyled>
	);
};

const HeroStyled = styled.section`
	position: relative;
	height: 30vh;
	display: flex;
	align-items: flex-start;
	//background: linear-gradient(35deg, #11cdef, #1171ef) !important;
	background-color:rgba(192,192,192,0.3);
	
	z-index: 1;
	.hero-text {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.left-side {
			display: flex;
			flex-direction: column;
			justify-content: center;
			
			h4,
			p {
				font-size: 12px;
				color: black;
				font-weight: 200;
				outline-style: double;
				padding: 2px;
			}
			h1 {
				font-size: 15px;
				color: black;
				margin-left: 60px;
			}
		}

		.right-side {
			width: 180px;
			max-width: 95%;
			display: flex;
			flex-direction: column;
		}
	}
	@media screen and (max-width: 768px) {
		height: initial;
		padding-bottom: 70px;
		padding-top: 160px;
		.hero-text {
			flex-direction: column;
		}
	}
`;

export default Hero;
