import Nav from "../../../Nav";
import { useEffect, useState } from "react";
import "./Julio.css";

import CaballeroMuerte from "../../../../assets/imagenes/HeroIcon/CaballeroMuerte.webp";

import Acolita from "./mazo/AcolitaMuerte.png";
import Alamuerte from "./mazo/Alamuerte.png";
import Baron from "./mazo/Baron.png";
import Campeon from "./mazo/CampeonVentormenta.png";
import Caparazon from "./mazo/CaparazonAntimagia.png";
import Comegnomos from "./mazo/Comegnomos.png";
import Ejercito from "./mazo/Ejercito.png";
import Hematurga from "./mazo/Hematurga.png";
import Huesped from "./mazo/HuespedSomnoliento.png";
import Invierno from "./mazo/InviernoImplacable.png";
import Moglmia from "./mazo/Moglmia.png";
import Nerubiano from "./mazo/Nerubiano.png";
import Piromantico from "./mazo/Piromantico.png";
import Ragnaros from "./mazo/Ragnaros.png";
import Recolector from "./mazo/RecolectorCuerpos.png";
import Thassarian from "./mazo/Thassarian.png";
import Tragavida from "./mazo/Tragavida.png";
import Transfusion from "./mazo/Transfusión.png";

function Julio() {
	return (
		<>
			<div className="paginaJulio">
				<Nav />
				<div className="portada">
					<p>
						<img
							src={CaballeroMuerte}
							alt="CaballeroMuerte"
							style={{ width: "300px", height: "auto" }}
						/>
						<h1 className="name">Julio</h1>
					</p>
				</div>

				{/*------------------------------------------------*/}
				<h3 className="mazoTxt">Mazo</h3>
				<div className="grid">
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Acolita}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Alamuerte}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Baron}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Campeon}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Caparazon}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Comegnomos}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Ejercito}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Hematurga}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Huesped}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Invierno}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Moglmia}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Nerubiano}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Piromantico}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Ragnaros}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Recolector}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Thassarian}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Tragavida}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Transfusion}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Julio;
