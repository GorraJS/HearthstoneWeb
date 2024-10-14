import Nav from "../Nav";
import "./Cards.css";
import { useEffect, useState } from "react";

import Warlock from "../../assets/heroTitles/Warlock_-_Header_icon.webp";

function Cards() {
	const [allCards, setAllCards] = useState([]);
	const [manaCost, setManaCost] = useState(0);
	const [clase, setClase] = useState("warlock");
	const [stopLoading, setStopLoading] = useState(false);

	const fetchCards = (manaCost) => {
		fetch(
			`https://us.api.blizzard.com/hearthstone/cards?locale=es_MX&class=${clase}&manaCost=${manaCost}&access_token=US10K02HGGU2nOmCemWP8ct2Vatk0Ib1E8`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.cards && data.cards.length > 0) {
					setAllCards((prev) => [...prev, ...data.cards]);
				}
				if (manaCost === 10) {
					setStopLoading(true);
				}
			});
	};

	useEffect(() => {
		if (manaCost <= 10 && !stopLoading) {
			fetchCards(manaCost);

			const timeout = setTimeout(() => {
				setManaCost((prevManaCost) => prevManaCost + 1);
			}, 3000);

			return () => clearTimeout(timeout);
		}
	}, [manaCost, stopLoading]);

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

					<img src={Warlock} />

				<div className="grid">
					{allCards.map((elem) => (
						<div key={elem.id}>
							<img
								src={elem.image}
								alt={elem.name}
								style={{ width: "250px", height: "auto" }}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Cards;
