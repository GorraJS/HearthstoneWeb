import Nav from "../Nav";
import "./Cards.css";
import { useEffect, useState } from "react";

function Cards() {
	const [allCards, setAllCards] = useState([]);
	const [manaCost, setManaCost] = useState(0);
	const [clase, setClase] = useState("");
	const [stopLoading, setStopLoading] = useState(false);
	const [img, setImg] = useState("");
	const [buscar, setBuscar] = useState("");

	const fetchCards = (manaCost) => {
		fetch(
			`https://us.api.blizzard.com/hearthstone/cards?locale=es_MX&class=${clase}&manaCost=${manaCost}&textFilter=${buscar}&access_token=USbhMD0Ii553KSCoyysjpLew3EMUFpb4T3`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.cards && data.cards.length > 0) {
					setAllCards((prevCards) => [...prevCards, ...data.cards]);
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

	const Class = (event) => {
		const value = event.target.value;
		setClase(value);
		setManaCost(0);
		setAllCards([]);
		setStopLoading(false);
	};

	const Busqueda = (event) => {
		setBuscar(event.target.value);
		setAllCards([])
		setManaCost(0)
		setStopLoading(false)
	};

	return (
		<>
			<div className="cuerpoCards">
				<Nav />
				<input
					type="search"
					placeholder="Buscar cartas"
					value={buscar}
					onChange={Busqueda}
				/>

				<fieldset>
					<legend className="Titulo">Heroes:</legend>
					<div class="heroes-container">
						<label>
							<input
								type="radio"
								name="language"
								value="warlock"
								onClick={Class}
							/>
							Brujo
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="deathknight"
								onClick={Class}
							/>
							Caballero de la Muerte
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="hunter"
								onClick={Class}
							/>
							Cazador
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="demonhunter"
								onClick={Class}
							/>
							Cazador de Demonios
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="shaman"
								onClick={Class}
							/>
							Chaman
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="druid"
								onClick={Class}
							/>
							Druida
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="warrior"
								onClick={Class}
							/>
							Guerrero
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="mage"
								onClick={Class}
							/>
							Mago
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="paladin"
								onClick={Class}
							/>
							Paladin
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="rogue"
								onClick={Class}
							/>
							Picaro
						</label>
						<label>
							<input
								type="radio"
								name="language"
								value="priest"
								onClick={Class}
							/>
							Sacerdote
						</label>
					</div>
				</fieldset>

				<center>
					<img
						src={img}
						className="heroLogo"
						style={{ width: "450px", height: "auto" }}
					/>
				</center>

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
