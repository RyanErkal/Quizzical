import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
	const [start, setStart] = useState(false);

	return (
		<div className="App">
			{!start && <h1>Quizzical</h1>}
			{!start && <button onClick={() => setStart(true)}>Start</button>}
		</div>
	);
}

export default App;
