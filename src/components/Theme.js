import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Theme() {

	const Pink = (event) => {

		for (
			let i = 0;
			i < document.getElementsByClassName("btn").length;
			i++
		) {
			const element = document.getElementsByClassName("btn")[i];
			element.style.backgroundColor = "#c0497f";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("text").length;
			i++
		) {
			const element = document.getElementsByClassName("text")[i];
			element.style.backgroundColor = "#e295b8";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";

		}
		//    const element = document.getElementByClassName("App");
		//    element.style.backgroundColor = "#6f4766";

		for (
			let i = 0;
			i < document.getElementsByClassName("App").length;
			i++
		) {
			const element = document.getElementsByClassName("App")[i];
			element.style.backgroundColor = "#f0c5d8";
			element.style.color = "#571633";
		}

		console.log("you clicked Pink theme");

	}

	const Green = (event) => {

		for (
			let i = 0;
			i < document.getElementsByClassName("btn").length;
			i++
		) {
			const element = document.getElementsByClassName("btn")[i];
			element.style.backgroundColor = "#427f54";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("text").length;
			i++
		) {
			const element = document.getElementsByClassName("text")[i];
			element.style.backgroundColor = "#b9deb5";
			element.style.border = "2px solid #000000";
			element.style.color = "#000000";

		}
		//    const element = document.getElementByClassName("App");
		//    element.style.backgroundColor = "#6f4766";

		for (
			let i = 0;
			i < document.getElementsByClassName("App").length;
			i++
		) {
			const element = document.getElementsByClassName("App")[i];
			element.style.backgroundColor = "#30422e";
			element.style.color = "#b9deb5";
		}

		console.log("you clicked Green theme");

	}

	const Dark = () => {

		for (
			let i = 0;
			i < document.getElementsByClassName("btn").length;
			i++
		) {
			const element = document.getElementsByClassName("btn")[i];
			element.style.backgroundColor = "#000000";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("text").length;
			i++
		) {
			const element = document.getElementsByClassName("text")[i];
			element.style.backgroundColor = "#979797";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";

		}

		for (
			let i = 0;
			i < document.getElementsByClassName("App").length;
			i++
		) {
			const element = document.getElementsByClassName("App")[i];
			element.style.backgroundColor = "#696969";
			element.style.color = "#000000";
		}




		console.log("you clicked dark theme");

	}

	const Blue = () => {

		for (
			let i = 0;
			i < document.getElementsByClassName("btn").length;
			i++
		) {
			const element = document.getElementsByClassName("btn")[i];
			element.style.backgroundColor = "#164a78";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("text").length;
			i++
		) {
			const element = document.getElementsByClassName("text")[i];
			element.style.backgroundColor = "#4a88bf";
			element.style.border = "2px solid #164a78";
			element.style.color = "#ffffff";

		}

		for (
			let i = 0;
			i < document.getElementsByClassName("App").length;
			i++
		) {
			const element = document.getElementsByClassName("App")[i];
			element.style.backgroundColor = "#a5cdf6";
			element.style.color = "#0d2945";
		}




		console.log("you clicked Blue theme");

	}
	const Light = () => {
		for (
			let i = 0;
			i < document.getElementsByClassName("btn").length;
			i++
		) {
			const element = document.getElementsByClassName("btn")[i];
			element.style.backgroundColor = "#ecacb7";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("text").length;
			i++
		) {
			const element = document.getElementsByClassName("text")[i];
			element.style.backgroundColor = "#ffdce5";
			element.style.border = "2px solid #000000";
			element.style.color = "#ffffff";

		}

		for (
			let i = 0;
			i < document.getElementsByClassName("App").length;
			i++
		) {
			const element = document.getElementsByClassName("App")[i];
			element.style.backgroundColor = "#fff0f4";
			element.style.color = "#571633";
		}
		console.log("you clicked Light theme");



	}
	return (
		<div className="chose" style={{
			display: 'block',
			width: 700,
			padding: 30
		}}>
			{/* <h4>React-Bootstrap Dropdown Component</h4>
	<Dropdown>
		<Dropdown.Toggle variant="success" >
		Chose theme
		</Dropdown.Toggle>
		<Dropdown.Menu>
		<Dropdown.Item href="#" onClick={Pink}>
			Pink
		</Dropdown.Item>
		<Dropdown.Item href="#" onClick= {Dark}> 
			Dark
		</Dropdown.Item>
		<Dropdown.Item href="#" onClick= {Blue}>
			Blue
		</Dropdown.Item>
		<Dropdown.Item href="#" onClick={Light}>
			Light
		</Dropdown.Item>
		</Dropdown.Menu>
	</Dropdown> */}
			<h4>Select the theme</h4>
			<div id="mode">
				<button onClick={Pink} className="btn1"></button>
				<button onClick={Dark} className="btn2"></button>
				<button onClick={Blue} className="btn3"></button>
				<button onClick={Light} className="btn4"></button>
				<button onClick={Green} className="btn5"></button>
			</div>
		</div>
	);
}

