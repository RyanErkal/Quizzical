import React from "react";
import { useState } from "react";
import Question from "./Question";
import "./App.css";

export default function App() {
	const [start, setStart] = useState(false);
	const [data, setData] = useState();
	const [dataStatus, setDataStatus] = useState("not-loaded");
	const [curChar, setCurChar] = useState();

	async function fetchData() {
		setDataStatus("loading");
		const response = await fetch("https://swapi.dev/api/people/");
		const data = await response.json();
		setDataStatus("loaded");
		setData(data.results);
		//console.log(data.results[1]);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	function newChar() {
		const random = Math.floor(Math.random() * data.length);
		//setCurChar(data[random]);
		console.log(data[random]);
		setCurChar(data[random]);
	}

	return (
		<>
			<h1>Quizzical</h1>
			<Question question="Test Q" />
			{dataStatus === "loaded" && (
				<div>
					<button onClick={newChar}>New Character</button>
				</div>
			)}
			<div>{dataStatus} data</div>
			{curChar && (
				<div>
					<h1>{curChar.name}</h1>
					<h2>Height: {curChar.height}</h2>
					<h2>Weight: {curChar.mass}</h2>
					<h2>Birth Year: {curChar.birth_year}</h2>
					<h2>Hair Color: {curChar.hair_color}</h2>
					<h2>Skin Color: {curChar.skin_color}</h2>
					<h2>Eye Color: {curChar.eye_color}</h2>
				</div>
			)}
		</>
	);
}
