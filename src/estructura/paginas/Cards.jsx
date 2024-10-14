import Nav from "../Nav";
import "./Cards.css";
import { useEffect, useState } from "react";

function Cards() {
	const [cards, setCards] = useState([]);
	const [clase, setclase] = useState("warlock")
	const [manaCost, setManacost] = useState(0)
	useEffect(() => {
		fetch(
			`https://us.api.blizzard.com/hearthstone/cards?locale=es_MX&class=${calse}&manaCost=${manaCost}&access_token=US10K02HGGU2nOmCemWP8ct2Vatk0Ib1E8`)
			.then((res) => res.json())
			.then((data) => setCards(data.cards));
	});

	return (
		<>
			<div className="cuerpoCards">
				<Nav />
				<input
					type="search"
					name="search"
					placeholder="Buscar cartas"
					aria-label="Search"
				/>
				{cards.map((elem) => (
					<div className="grid">
						<div><img src={elem.image}/></div>
					</div>
				))}
			</div>
		</>
	);
}

export default Cards;
