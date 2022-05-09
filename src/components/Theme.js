import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Theme() {


	const changeTheme = (btnBgColor, btnBrdrColor, btnTxtColor, txtBgColor, mainBgColor, mainTxtColor) => {
		for (
			let i = 0;
			i < document.getElementsByClassName("btn").length;
			i++
		) {
			const element = document.getElementsByClassName("btn")[i];
			// element.style.backgroundColor = "#ecacb7";
			// element.style.border = "2px solid #000000";
			// element.style.color = "#ffffff";
			element.style.backgroundColor = btnBgColor;
			element.style.border = "2px solid " + btnBrdrColor;
			element.style.color = btnTxtColor;
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("text").length;
			i++
		) {
			const element = document.getElementsByClassName("text")[i];
			element.style.backgroundColor = txtBgColor;
			element.style.border = "2px solid " + btnBrdrColor;
			element.style.color = btnTxtColor;
		}

		for (
			let i = 0;
			i < document.getElementsByClassName("App").length;
			i++
		) {
			const element = document.getElementsByClassName("App")[i];
			element.style.backgroundColor = mainBgColor;
			element.style.color = mainTxtColor;
		}
		// console.log("you changed theme");
	}
	
	return (
		<div className="chose" style={{
			display: 'block',
			width: 700,
			padding: 30
		}}>


			<h4>Select the theme</h4>
			<div id="mode">
				{/* <button onClick={Pink} className="btn1"></button> */}
				{/* <button onClick={changeTheme("#c0497f","#000000","#ffffff","#e295b8","#f0c5d8","#571633")} className="btn1"></button> */}
				{/*Have to use arrow function to call functions */}
				<button onClick={() => { changeTheme("#c0497f", "#000000", "#ffffff", "#e295b8", "#f0c5d8", "#571633") }} className="btn1"></button>
				{/* <button onClick={Dark} className="btn2"></button> */}
				<button onClick={() => { changeTheme("#000000", "#000000", "#ffffff", "#979797", "#696969", "#000000") }} className="btn2"></button>
				{/* <button onClick={Blue} className="btn3"></button> */}
				<button onClick={() => { changeTheme("#164a78", "#000000", "#ffffff", "#4a88bf", "#a5cdf6", "#0d2945") }} className="btn3"></button>
				{/* <button onClick={Light} className="btn4"></button> */}
				<button onClick={() => { changeTheme("#ecacb7", "#000000", "#000000", "#ffdce5", "#fff0f4", "#571633") }} className="btn4"></button>
				{/* <button onClick={Green} className="btn5"></button> */}
				<button onClick={() => { changeTheme("#427f54", "#000000", "#000000", "#b9deb5", "#30422e", "#b9deb5") }} className="btn5"></button>
			</div>
		</div>
	);
}

