import React from "react";
import { useState } from "react";
import Question from "./components/Question";
import Character from "./components/Character";
import Questions from "./questions";
import "./App.css";

export default function App() {
	//const [start, setStart] = useState(false);
	const [questionsData, setQuestionsData] = useState(Questions);
	const [data, setData] = useState();
	const [dataStatus, setDataStatus] = useState("not-loaded");
	const [curChar, setCurChar] = useState();

	async function fetchData() {
		setDataStatus("loading");
		const response = await fetch("https://swapi.dev/api/people/");
		const data = await response.json();
		setDataStatus("loaded");
		setData(data.results);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	function newChar() {
		const random = Math.floor(Math.random() * data.length);
		console.log(data[random]);
		setCurChar(data[random]);
	}

	return (
		<>
			<h1>Star Wars Quizzical</h1>
			{/* {{dataStatus === "loaded" && (
				<div>
					<button onClick={newChar}>New Character</button>
				</div>
			)}
			<div>{dataStatus} data</div>} */}
			{curChar && <Character character={curChar} />}
			{questionsData.map((question) => (
				<Question
					question={question.question}
					answers={question.answers}
					correctAnswer={question.correctAnswer}
				/>
			))}
		</>
	);
}
