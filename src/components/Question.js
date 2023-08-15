import React from "react";

export default function Question(props) {
	const [wrongAnswers, setWrongAnswers] = React.useState();
	const [correctAnswer, setCorrectAnswer] = React.useState();
	const [correct, setCorrect] = React.useState(false);

	return (
		<div className="question">
			<h2>{props.question}</h2>
			<div className="answers">
				<button>{props.answers[0]}</button>
				<button>{props.answers[1]}</button>
				<button>{props.answers[2]}</button>
				<button>{props.answers[3]}</button>
			</div>
		</div>
	);
}
