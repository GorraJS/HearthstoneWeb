import Nav from "../../../Nav";
import { useEffect, useState } from "react";
import "./Gorra.css";

import Brujo from "../../../../assets/imagenes/HeroIcon/Brujo.webp";

import BabosaAlquitra from "./mazo/BabosaDeAlquitran.png";
import BebidaSalud from "./mazo/BebidaDeSalud.png";
import BombaEspiritual from "./mazo/BombaEspiritual.png";
import CubiculoCarnivoro from "./mazo/CubiculoCarnivoro.png";
import DiablilloLlamas from "./mazo/DiablilloDeLlamas.png";
import DracoPiedra from "./mazo/DracoDePiedra.png";
import DrenarAlma from "./mazo/DrenarAlma.png";
import GiganteFundido from "./mazo/GiganteFundido.png";
import Gorgorzormu from "./mazo/Gorgonzormu.png";
import GuardianaTentaculo from "./mazo/GuardianaDeTentaculo.png";
import LiNa from "./mazo/Li'Na.png";
import Lord from "./mazo/Lord.png";
import Malabarista from "./mazo/MalabaristaDeFuegoAudaz.png";
import Marin from "./mazo/Marin.png";
import Vona from "./mazo/OrganizadoraVona.png";
import SeñoraTerror from "./mazo/SeñoraDelTerror.png";
import Shaffar from "./mazo/Shaffar.png";
import SuccionarAlma from "./mazo/SuccionarAlma.png";
import VacioAbisal from "./mazo/VacioAbisal.png";
import VendedorMilagroso from "./mazo/VendedorMilagroso.png";
import PactoDelCallejon from "./mazo/PactoDelCallejon.png";

function Gorra() {

	return (
		<>
			<div className="paginaGorra">
				<Nav />
				<div className="portada">
					<p>
						<img
							src={Brujo}
							alt="Brujo"
							style={{ width: "300px", height: "auto" }}
						/>
						<h1 className="name">Gorra</h1>
					</p>
				</div>

				{/*------------------------------------------------*/}
				<h3 className="mazoTxt">Mazo</h3>
				<div className="grid">
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={BabosaAlquitra}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={BombaEspiritual}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={DiablilloLlamas}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={VendedorMilagroso}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={DrenarAlma}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Malabarista}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={BebidaSalud}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Gorgorzormu}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={GuardianaTentaculo}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Shaffar}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={PactoDelCallejon}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={SuccionarAlma}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={CubiculoCarnivoro}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={DracoPiedra}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={LiNa}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Vona}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Marin}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Lord}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={SeñoraTerror}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={VacioAbisal}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={GiganteFundido}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Gorra;
