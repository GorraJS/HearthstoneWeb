import Nav from "../../Nav";
import warlock from "../../../assets/heroes/Brujo.webp";
import warlockTitle from "../../../assets/heroTitles/Warlock_-_Header_icon.webp";
import warlockIcon from "../../../assets/heroTitles/wrlPw.webp";
function Brujo() {
	return (
		<>
			<div className="cuerpoBrujo">
				<Nav />
				<center>
					<img
						src={warlockTitle}
						style={{ width: "400px", height: "auto" }}
					/>
					<p> </p>
					<img src={warlockIcon} />
				</center>

				<p className="text">Tipo: Brujo</p>
				<p className="text">
					Habilidad: Life Tap permite robar una carte del mazo a
					cambio de quitarse dos puntos de vida
				</p>
				<p>
					Estrategia: El brujo tiene cartas que le hacen daño a el, a
					cambio de recibir daño se le reducen el costo de algunas
					cartas, otras cartas aumentan su ataque o vida, otras
					necesitan como requisito para lanzarse que el brujo reciba
					cierta cantidad de daño a cambio de una carta muy fuerte
				</p>
			</div>
		</>
	);
}

export default Brujo;
