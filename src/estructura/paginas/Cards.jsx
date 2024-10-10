import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Nav from "../Nav";
function Cards() {
	return (
		<>
			<Nav />
			<input
				type="search"
				name="search"
				placeholder="Buscar cartas"
				aria-label="Search"
			/>
		</>
	);
}

export default Cards;
