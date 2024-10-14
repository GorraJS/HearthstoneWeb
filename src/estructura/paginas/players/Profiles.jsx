import Nav from "../../Nav";
import Brujo from "../../../assets/heroes/Brujo.webp";
import Mago from "../../../assets/heroes/Mago.webp";
import ReyExamine from "../../../assets/heroes/CaballeroMuerte.webp";
import "./Profiles.css";

function Profiles() {
	return (
		<>
			<div className="cuerpo">
				<Nav />
				<div className="grid">
					<a href="/profiles/negro">
						<div>
							<img
								src={Mago}
								style={{ width: "150px", height: "auto" }}
							/>
							<h3 className="name">Negro</h3>
						</div>
					</a>
					<a href="/profiles/julio">
						<div>
							<img
								src={ReyExamine}
								style={{ width: "150px", height: "auto" }}
							/>
							<h3 className="name">Julio</h3>
						</div>
					</a>
					<a href="/profiles/gorra">
						<div>
							<img
								src={Brujo}
								style={{ width: "150px", height: "auto" }}
							/>
							<h3 className="name">Gorra</h3>
						</div>
					</a>
				</div>
			</div>
		</>
	);
}

export default Profiles;
