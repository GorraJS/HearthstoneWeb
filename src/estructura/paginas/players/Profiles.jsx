import Nav from "../../Nav";
import Brujo from "../../../assets/heroes/Brujo.webp";
import Mago from "../../../assets/heroes/Mago.webp";
import ReyExamine from "../../../assets/heroes/CaballeroMuerte.webp";
import "./Profiles.css";

function Profiles() {
	return (
		<>
			<Nav />
			<div class="grid">
				<a href="/profiles/negro">
					<div>
						<img src={Mago} />
						<h3>
							<strong>Negro</strong>
						</h3>
					</div>
				</a>
				<a href="/profiles/julio">
					<div>
						<img src={ReyExamine} />
						<h3>
							<strong>Julio</strong>
						</h3>
					</div>
				</a>
				<a href="/profiles/gorra">
					<div>
						<img src={Brujo} />
						<h3>
							<strong>Gorra</strong>
						</h3>
					</div>
				</a>
			</div>
		</>
	);
}

export default Profiles;
