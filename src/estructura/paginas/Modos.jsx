import Nav from "../Nav";
import "./Modos.css";

import Constructed from "../../assets/gameModes/Constructed.webp";
import Arena from "../../assets/gameModes/Arena.webp";
import SoloAdventues from "../../assets/gameModes/Solo_Adventures.webp";
import Duels from "../../assets/gameModes/Duels.webp";
import TavernBrawl from "../../assets/gameModes/Tavern_Brawl.webp";

import GameModes from "../../assets/gameModes/game-modes.jpg";
import Standard from "../../assets/gameModes/Year_of_the_Wolf.webp";
import Classic from "../../assets/gameModes/Classic_icon_large.webp";
import Wild from "../../assets/gameModes/Wild_icon_large.webp";
import Twist from "../../assets/gameModes/Twist_icon.webp";

function Modos() {
	return (
		<>
			<div className="paginaModos">
				<Nav />
				<details open>
					<summary>
						<p className="tituloModo">
							<img
								src={Constructed}
								style={{ width: "60px", height: "auto" }}
							/>
							Clasico
						</p>
					</summary>
					<div className="imgFormatClassic">
						<img
							src={GameModes}
							style={{ width: "900px", height: "auto" }}
						/>
					</div>
					<h1 className="txt">Formatos</h1>
					<div className="grid">
						<div>
							<img src={Standard} />
                            
						</div>
						<div>
							<img src={Classic} />
						</div>
						<div>
							<img src={Wild} />
						</div>
						<div>
							<img src={Twist} />
						</div>
					</div>
				</details>
				<hr />
				<details>
					<summary>
						<p className="tituloModo">
							<img
								src={Arena}
								style={{ width: "65px", height: "auto" }}
							/>
							Arena
						</p>
					</summary>
				</details>
				<hr />
				<details>
					<summary>
						<p className="tituloModo">
							<img
								src={SoloAdventues}
								style={{ width: "65px", height: "auto" }}
							/>
							Solo Adventures
						</p>
					</summary>
				</details>
				<hr />
				<details>
					<summary>
						<p className="tituloModo">
							<img
								src={Duels}
								style={{ width: "65px", height: "auto" }}
							/>
							Duels
						</p>
					</summary>
				</details>
				<hr />
				<details>
					<summary>
						<p className="tituloModo">
							<img
								src={TavernBrawl}
								style={{ width: "65px", height: "auto" }}
							/>
							Tavern Brawl
						</p>
					</summary>
				</details>
			</div>
		</>
	);
}

export default Modos;
