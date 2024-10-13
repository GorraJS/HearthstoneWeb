import Nav from "../../../Nav";
import { useEffect, useState } from "react";
import "./Negro.css";

import Mago from "../../../../assets/imagenes/HeroIcon/MageLogo.webp";

import Arcanologa from "./mazo/Arcanologa.png";
import Artificiero from "./mazo/Artificiero.png";
import BarreraHielo from "./mazo/BarreraHielo.png";
import BolaFuego from "./mazo/BolaFuego.png";
import DosX1 from "./mazo/Dosx1.png";
import Flumimago from "./mazo/Flumimago.png";
import Fogonazo from "./mazo/Fogonazo.png";
import GlifoPrimordial from "./mazo/GlifoPrimordial.png";
import Gorgorzormu from "./mazo/Gorgorzormu.png";
import HechiceroLunaNegra from "./mazo/HechiceroLunaNegra.png";
import IntelectoArcano from "./mazo/IntelectoArcano.png";
import Kalecgos from "./mazo/Kalecgos.png";
import Khadgar from "./mazo/Khadgar.png";
import PatinadorNieve from "./mazo/PatinadorNieve.png";
import PozasMarea from "./mazo/PozasMarea.png";
import RayoEscarcha from "./mazo/RayoEscarcha.png";
import RunasExplosivas from "./mazo/RunasExplosivas.png";
import Salva from "./mazo/Salva.png";
import Tecladista from "./mazo/Tecladista.png";
import Ventisca from "./mazo/Venitsca.png";

function Gorra() {
	return (
		<>
			<div className="paginaNegro">
				<Nav />
				<div className="portada">
					<p>
						<img
							src={Mago}
							alt="Mago"
							style={{ width: "300px", height: "auto" }}
						/>
						<h1 className="name">Negro</h1>
					</p>
				</div>

				{/*------------------------------------------------*/}
				<h3 className="mazoTxt">Mazo</h3>
				<div class="grid">
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Arcanologa}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Artificiero}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={BarreraHielo}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={BolaFuego}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={DosX1}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Flumimago}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Fogonazo}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={GlifoPrimordial}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Gorgorzormu}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={HechiceroLunaNegra}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={IntelectoArcano}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Kalecgos}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Khadgar}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={PatinadorNieve}
							alt="carta"
						/>
						<p className="cantidad">x2</p>

					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={PozasMarea}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={RayoEscarcha}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={RunasExplosivas}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Salva}
							alt="carta"
						/>
						<p className="cantidad">x2</p>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Tecladista}
							alt="carta"
						/>
					</div>
					<div>
						<img
							style={{ width: "250px", height: "auto" }}
							src={Ventisca}
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
