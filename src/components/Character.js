import React from "react";

export default function Character(props) {
	//console.log("prop", props);
	return (
		<div className="character">
			<h1>{props.character.name}</h1>
			<h2>Height: {props.character.height}</h2>
			<h2>Weight: {props.character.mass}</h2>
			<h2>Birth Year: {props.character.birth_year}</h2>
			<h2>Hair Color: {props.character.hair_color}</h2>
			<h2>Skin Color: {props.character.skin_color}</h2>
			<h2>Eye Color: {props.character.eye_color}</h2>
		</div>
	);
}
