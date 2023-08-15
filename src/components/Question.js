import React from "react";

export default function Question(props) {
	return (
		<div className="question">
			<h2>{props.question}</h2>
			<div className="answers">
				<button>Answer 1</button>
				<button>Answer 2</button>
				<button>Answer 3</button>
				<button>Answer 4</button>
			</div>
		</div>
	);
}
