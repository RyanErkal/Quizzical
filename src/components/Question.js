import React from "react";

export default function Question(props) {
	const [wrongAnswers, setWrongAnswers] = React.useState();
	const [correctAnswer, setCorrectAnswer] = React.useState();
	const [correct, setCorrect] = React.useState(false);

	const shuffle = (array) => {
		return array.sort(() => Math.random() - 0.5);
	};

	let shuffledAnswers = shuffle(props.answers);

	return (
		<div className="question">
			<h2>{props.question}</h2>
			<div className="answers">
				<button>{shuffledAnswers[0]}</button>
				<button>{shuffledAnswers[1]}</button>
				<button>{shuffledAnswers[2]}</button>
				<button>{shuffledAnswers[3]}</button>
			</div>
		</div>
	);
}
