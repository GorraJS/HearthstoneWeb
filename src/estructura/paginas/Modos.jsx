import Nav from "../Nav";
import "./Modos.css";

import Constructed from "../../assets/gameModes/Constructed.webp";
import Arena from "../../assets/gameModes/Arena.webp";
import SoloAdventues from "../../assets/gameModes/Solo_Adventures.webp";
import Duels from "../../assets/gameModes/Duels.webp";
import TavernBrawl from "../../assets/gameModes/Tavern_Brawl.webp";

import ArenaKeys from "../../assets/gameModes/ArenaKeys.webp";
import GameModes from "../../assets/gameModes/game-modes.jpg";
import Standard from "../../assets/gameModes/Year_of_the_Wolf.webp";
import Classic from "../../assets/gameModes/Classic_icon_large.webp";
import Wild from "../../assets/gameModes/Wild_icon_large.webp";
import SoloAdventurePic from "../../assets/gameModes/Solo_Adventures_screen_2020-08-17.webp";
import DuelsLogo from "../../assets/gameModes/Duels_logo.webp";
import TBLogo from "../../assets/gameModes/tb-allstarsquad.jpg";

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
							<a>Clasico</a>
						</p>
					</summary>
					<div className="grid1">
						<div className="imgFormatClassic">
							<img
								src={GameModes}
								style={{ width: "900px", height: "auto" }}
							/>
						</div>
						<h1 className="txt">Formatos</h1>

						<div>
							<center>
								<img
									src={Standard}
									style={{ width: "150px", height: "auto" }}
								/>
								<h1 className="formatTitle">Standard</h1>
							</center>

							<ul className="descripcion">
								<li>
									Rotación de expansiones: Solo están
									disponibles las cartas de las últimas
									expansiones lanzadas en los últimos dos
									años, además del conjunto básico
									actualizado, conocido como el Conjunto
									Esencial. Cada año, en una nueva expansión,
									las expansiones más antiguas rotan y ya no
									son jugables en Estándar. Esta rotación
									ocurre cuando comienza un nuevo año en
									Hearthstone
								</li>
								<li>
									Conjunto Esencial: El Conjunto Esencial es
									un conjunto gratuito de cartas que se
									actualiza cada año. Está compuesto por
									cartas clásicas, básicas y algunas nuevas.
									Este conjunto reemplazó el antiguo sistema
									de cartas Básicas y Clásicas. Estas cartas
									están disponibles para todos los jugadores y
									proporcionan una base sólida para la
									construcción de mazos.
								</li>
								<li>
									Cartas válidas: Solo las cartas del Conjunto
									Esencial y las expansiones recientes son
									válidas en el formato Estándar. Las cartas
									de expansiones que hayan rotado a Salvaje ya
									no pueden usarse en este formato.
								</li>
								<li>
									Balance y equilibrio: Como el conjunto de
									cartas es más pequeño en comparación con el
									formato Salvaje (que incluye todas las
									cartas de todas las expansiones), el formato
									Estándar tiende a ser más fácil de
									equilibrar, lo que lo hace más adecuado para
									el juego competitivo y los torneos.
								</li>
								<li>
									Fomento del juego competitivo: El formato
									Estándar es el principal formato utilizado
									en los torneos oficiales y en el sistema de
									partidas igualadas (ranked). Es donde ocurre
									la mayoría de los ajustes de equilibrio y es
									la modalidad más jugada por los jugadores
									que buscan competir al más alto nivel.
								</li>
								<li>
									Rotación anual: Cuando comienza un nuevo año
									de Hearthstone, las expansiones que
									cumplieron dos años salen del formato
									Estándar y solo se pueden jugar en Salvaje.
									Esto mantiene el meta dinámico y obliga a
									los jugadores a experimentar con nuevas
									estrategias y cartas.
								</li>
							</ul>
						</div>

						<div>
							<center>
								<img
									src={Classic}
									style={{ width: "150px", height: "auto" }}
								/>
								<h1 className="formatTitle">Classic</h1>
							</center>
							<ul className="descripcion">
								<li>
									Cartas originales: Todas las cartas tienen
									sus estadísticas y efectos originales, lo
									que significa que cualquier cambio de
									equilibrio (buffs o nerfs) que se haya
									realizado después del lanzamiento no afecta
									a este formato. Las cartas están en su
									estado original de 2014.
								</li>
								<li>
									Sin expansiones posteriores: Solo están
									disponibles las cartas básicas y clásicas,
									que fueron las que existieron cuando el
									juego se lanzó.
								</li>
								<li>
									Experiencia nostálgica: Este formato está
									diseñado para que los jugadores puedan
									experimentar Hearthstone como era en su
									etapa inicial, antes de la llegada de nuevas
									cartas, mecánicas y expansiones.
								</li>
								<li>
									Formato no competitivo: Aunque puedes
									disfrutar del modo Clásico en partidas
									igualadas (ranked), no es parte del sistema
									competitivo principal de Hearthstone, que
									gira en torno a los formatos Estándar y
									Salvaje.
								</li>
								<li>
									Acceso a cartas: Si tienes cartas de la
									colección Clásica, automáticamente las
									tienes disponibles en este modo, pero en sus
									versiones originales.
								</li>
							</ul>
						</div>

						<div>
							<center>
								<img
									src={Wild}
									style={{ width: "150px", height: "auto" }}
								/>
								<h1 className="formatTitle">Wild</h1>
							</center>
							<ul className="descripcion">
								<li>
									Todas las cartas disponibles: En Salvaje,
									puedes usar cartas de todas las expansiones
									y aventuras de Hearthstone, desde el
									lanzamiento del juego hasta las expansiones
									más recientes. Esto incluye cartas que ya no
									están disponibles en el formato Estándar
									debido a la rotación anual.
								</li>
								<li>
									Sin rotación: A diferencia del formato
									Estándar, donde las expansiones rotan fuera
									del formato después de aproximadamente dos
									años, en Salvaje nada rota, lo que significa
									que siempre puedes usar cartas de cualquier
									expansión anterior.
								</li>
								<li>
									Combinaciones de cartas más amplias: Dado
									que todas las cartas están disponibles, las
									estrategias y sinergias pueden ser mucho más
									diversas. Esto permite a los jugadores crear
									mazos con interacciones complejas entre
									cartas antiguas y nuevas. Sin embargo, esto
									también puede hacer que el formato sea más
									caótico o impredecible, ya que algunas
									combinaciones pueden ser muy poderosas o
									difíciles de contrarrestar.
								</li>
								<li>
									Meta menos controlado: El formato Salvaje
									suele tener un meta menos controlado que el
									Estándar. Esto se debe a la gran cantidad de
									cartas disponibles, lo que puede hacer que
									algunas estrategias sean extremadamente
									dominantes. Blizzard realiza ajustes de
									balance con menos frecuencia en Salvaje, ya
									que su enfoque principal de equilibrio suele
									estar en el formato Estándar.
								</li>
								<li>
									Competitivo, pero menos equilibrado: Aunque
									Salvaje es competitivo y tiene su propio
									sistema de partidas igualadas (ranked), el
									enfoque de los torneos oficiales y el juego
									competitivo de más alto nivel está en el
									formato Estándar. Sin embargo, hay torneos y
									competiciones dedicados exclusivamente al
									formato Salvaje, pero estos suelen ser menos
									frecuentes.
								</li>
								<li>
									Diversión y nostalgia: Salvaje es el formato
									ideal para los jugadores que quieren
									disfrutar de una mayor variedad de cartas y
									que disfrutan del juego más caótico y
									nostálgico. Permite revivir estrategias de
									expansiones pasadas que fueron icónicas o
									experimentar con combos que ya no se pueden
									jugar en Estándar.
								</li>
								<li>
									Estrategias poderosas y cartas olvidadas: En
									Salvaje, algunos mazos pueden ser
									extremadamente poderosos porque combinan
									cartas que fueron balanceadas o ajustadas
									para Estándar en diferentes momentos. Esto
									crea una diversidad de mazos que pueden ser
									más fuertes que los de Estándar. A su vez,
									también es un espacio donde muchas cartas
									que ya no ven juego en Estándar pueden tener
									un lugar, ofreciendo más variedad en la
									construcción de mazos.
								</li>
							</ul>
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
							<a>Arena</a>
						</p>
					</summary>
					<div className="grid1">
					<center>
						<img src={ArenaKeys} />
					</center>
					<ul className="descripcion">
						En este modo de juego los jugadores construyen un mazo a
						partir de una serie de elecciones aleatorias de cartas y
						luego compiten contra otros jugadores que han hecho lo
						mismo. Algunas características de este modo son:
						<li>
							Selección de Héroe: Al comenzar una nueva Arena, se
							te ofrece una elección de tres héroes al azar de
							entre las clases disponibles en Hearthstone
							(Guerrero, Mago, Paladín, etc.). Solo puedes elegir
							uno de ellos, y las cartas que recibirás para
							construir tu mazo estarán basadas en la clase de
							héroe que seleccionaste.
						</li>
						<li>
							Construcción del mazo: En Arena, construyes un mazo
							de 30 cartas. Las cartas no se eligen todas a la
							vez, sino que se presentan en grupos de tres cartas
							aleatorias (también conocidas como "draft"). Deberás
							elegir una de esas tres para añadir a tu mazo. Este
							proceso se repite hasta que hayas llenado el mazo
							completo. Puedes obtener cartas comunes, poco
							comunes, raras, épicas e incluso legendarias. No hay
							limitación en la cantidad de copias de una carta
							específica que puedes elegir. Por ejemplo, podrías
							terminar con tres copias de la misma carta si la
							suerte lo permite, algo que no ocurre en los modos
							de juego tradicionales donde el límite es dos por
							carta.
						</li>
						<li>
							Partidas y objetivos: El objetivo del modo Arena es
							ganar tantas partidas como sea posible antes de
							acumular tres derrotas. Los jugadores juegan contra
							otros que también han construido mazos en Arena, y
							la mayoría de los emparejamientos se realizan con
							base en un sistema de victorias. Si tienes cinco
							victorias, probablemente te enfrentes a alguien con
							un registro similar. El máximo número de victorias
							es 12, y llegar a este número es considerado una
							hazaña importante en Arena.
						</li>
						<li>
							Recompensas: Las recompensas que obtienes en Arena
							dependen de cuántas victorias consigas antes de
							perder tres veces. A más victorias, mejores
							recompensas. Las recompensas suelen incluir: Oro (la
							moneda del juego). Polvo arcano (usado para crear
							cartas). Paquetes de cartas. Cartas doradas o
							incluso legendarias si llegas a 12 victorias. Cada
							vez que participas en Arena, garantizas al menos un
							paquete de cartas incluso si no consigues victorias,
							lo que hace que la inversión siempre tenga cierto
							retorno.
						</li>
						<li>
							Costo de entrada: Para participar en Arena, debes
							pagar una tarifa de entrada. Puedes pagar 150 de oro
							o 1.99 USD. A menudo, los jugadores ven Arena como
							una inversión porque si logras obtener alrededor de
							7 victorias, generalmente recuperarás la cantidad de
							oro invertida y obtendrás mejores recompensas.
						</li>
						<li>
							Diferencias con otros modos: A diferencia de otros
							modos como el modo Estándar o Salvaje, en Arena no
							necesitas una colección de cartas completa para
							jugar. Puedes jugar Arena sin tener una sola carta
							en tu colección, lo que la convierte en una
							modalidad atractiva para nuevos jugadores o
							jugadores que no tienen muchas cartas.
						</li>
						<li>
							Draft estratégico: La construcción de un mazo en
							Arena requiere un enfoque muy diferente a los mazos
							construidos en otros modos. Como las cartas son
							seleccionadas aleatoriamente, es necesario adaptar
							tu estrategia a las cartas que te tocan. El
							equilibrio entre cartas de bajo coste, hechizos,
							criaturas y sinergias es crucial para crear un mazo
							exitoso.
						</li>
					</ul>
					</div>

				</details>
				<hr />
				<details>
					<summary>
					
						<p className="tituloModo">
							<img
								src={SoloAdventues}
								style={{ width: "65px", height: "auto" }}
							/>
							<a>Solo Adventures</a>
						</p>
					</summary>
					<div className="grid1">
					<center>
						<img
							src={SoloAdventurePic}
							style={{ width: "600px", height: "auto" }}
						/>
					</center>
					<ul className="descripcion">
						<li>
							El formato Solo Aventuras en Hearthstone es una
							modalidad diseñada para que los jugadores disfruten
							de contenido para un solo jugador, sin la necesidad
							de competir contra otros jugadores en tiempo real.
							Estas aventuras suelen tener una narrativa y
							mecánicas especiales que permiten a los jugadores
							experimentar desafíos únicos y progresivos. Existen
							diferentes tipos de aventuras, pero en general, los
							aspectos clave de esta modalidad son los siguientes:
						</li>
						<li>
							Cada aventura en solitario suele estar basada en un
							tema o historia dentro del universo de Hearthstone.
						</li>
						<li>
							A medida que juegas, progresas a través de capítulos
							o alas, enfrentándote a diferentes jefes controlados
							por la IA. Estos jefes a menudo tienen poderes
							heroicos únicos y cartas especiales, que no existen
							en los modos de juego normales como:
						</li>
						<li>
							Poderes de héroe modificados: Los jefes en las
							aventuras suelen tener poderes de héroe que no están
							disponibles para los jugadores. Estos poderes pueden
							ser extremadamente poderosos o complicados, lo que
							agrega un nivel de desafío adicional.
						</li>
						<li>
							Cartas exclusivas: Algunas cartas de los jefes son
							únicas y no están disponibles en la colección normal
							del jugador.
						</li>
						<li>
							Reglas especiales: Algunas aventuras pueden tener
							reglas de juego alternativas, como efectos
							persistentes que afectan ambos lados del campo de
							batalla.
						</li>

						<li>
							En algunas Solo Aventuras, los jugadores pueden
							utilizar sus propios mazos, seleccionando cartas de
							su colección personal. Sin embargo, en muchas de las
							aventuras, se les ofrece la opción de crear mazos
							usando cartas y herramientas especiales
							proporcionadas dentro de la propia aventura.
						</li>
						<li>
							Al completar las diferentes partes de las aventuras,
							los jugadores suelen recibir recompensas en forma de
							cartas, sobres de cartas o dorso de cartas
							exclusivos. En algunas aventuras más antiguas,
							completar alas de la aventura desbloqueaba cartas
							específicas que solo se podían obtener de esa forma.
						</li>
					</ul>
					</div>
				</details>
				<hr />
				<details>
					<summary>

						<p className="tituloModo">
							<img
								src={Duels}
								style={{ width: "65px", height: "auto" }}
							/>
							<a>Duels</a>
						</p>
					</summary>
					<div className="grid1">
					<center>
						<img
							src={DuelsLogo}
							style={{ width: "600px", height: "auto" }}
						/>
					</center>
					<ul className="descripcion">
						<li>
							El formato Duels en Hearthstone combina elementos de
							construcción de mazos con la mecánica de los
							"Dungeon Runs" y ofrece una experiencia competitiva
							para los jugadores.comienzas con un pequeño mazo y,
							tras cada partida, pueden mejorar y expandir su mazo
							con nuevas cartas y poderosos tesoros. Aquí te
							explico los aspectos más importantes del modo Duels:
						</li>
						<li>
							Construcción de mazo inicial : Al comenzar una
							partida de Duels, el jugador elige un héroe y
							selecciona un Poder de Héroe y un Tesoro de firma.
							Luego, el jugador construye un mazo inicial de 15
							cartas a partir de su colección personal.
						</li>
						<li>
							Progresión del mazo: Después de cada partida, ya sea
							que ganes o pierdas, tienes la oportunidad de añadir
							nuevas cartas a tu mazo. Se te presentan opciones de
							diferentes "paquetes de cartas" que están agrupados
							en temáticas o sinergias. Puedes elegir uno de estos
							paquetes para mejorar tu mazo.
						</li>
						<li>
							Formato competitivo: El formato de Duels es similar
							a la Arena, en el sentido de que juegas partidas
							hasta alcanzar un número máximo de victorias o
							derrotas. Tu objetivo es llegar a 12 victorias antes
							de obtener 3 derrotas.Al igual que en la Arena,
							conforme avanzas en tus victorias, los rivales que
							enfrentas serán cada vez más difíciles, ya que el
							emparejamiento te coloca contra jugadores que tienen
							un número similar de victorias.
						</li>
						<li>
							Tesoros y mejoras: Durante la carrera, después de
							ciertas partidas, se te ofrecerán tesoros pasivos
							que pueden tener efectos continuos durante toda la
							partida, como mejorar tus esbirros, reducir el costo
							de ciertas cartas, o proporcionar efectos poderosos
							cada turno. A medida que avances, se te ofrecerán
							tesoros adicionales que no solo serán cartas
							jugables, sino que cambiarán la dinámica de tu mazo
							para hacerlo más fuerte.
						</li>
						<li>
							Recompensas: Cuantas más victorias obtengas, mejores
							serán las recompensas. Por ejemplo, con muchas
							victorias, puedes obtener sobres de cartas, oro,
							polvo arcano, y más. Incluso con pocas victorias,
							siempre recibirás algo a cambio, lo que hace que el
							riesgo de perder no sea tan alto como en otros
							modos.
						</li>
					</ul>
					</div>
				</details>
				<hr />
				<details>
					<summary>
						<p className="tituloModo">
							<img
								src={TavernBrawl}
								style={{ width: "65px", height: "auto" }}
							/>
							<a>Tavern Brawl</a>
						</p>
					</summary>
					<div className="grid1">

					<center>
						<img
							src={TBLogo}
							style={{ width: "600px", height: "auto" }}
						/>
					</center>
					<p className="descripcion">
						El Modo "Tavern Brawl" (Pelea de Taberna), ofrece
						experiencias de juego únicas, divertidas y variadas cada
						semana. Aspectos principales de este modo de juego:
					</p>
					<ul className="descripcion">
						<li>
							Cada semana, el Tavern Brawl presenta una nueva
							pelea con reglas especiales o desafíos únicos. Estas
							reglas pueden variar ampliamente y ofrecer
							experiencias tanto serias como cómicas. Algunos
							ejemplos comunes de reglas en Tavern Brawl: Mazos
							preconstruidos: A veces, el juego te da un mazo
							listo para usar, con cartas predefinidas. No
							necesitas construir nada, solo jugar. Creación de
							mazo con restricciones: En otras semanas, puedes
							construir tu propio mazo, pero bajo ciertas
							condiciones, como incluir solo cartas con un costo
							par o cartas de un solo tipo. Cartas aleatorias: En
							muchas Peleas de Taberna, se te dan mazos
							completamente aleatorios o incluso mazos que se
							generan a medida que juegas. Mecánicas especiales:
							Algunas peleas incluyen mecánicas locas, como
							hechizos que cuestan 0 de maná, héroes con poderes
							especiales o reglas adicionales que afectan a los
							esbirros y hechizos de manera única.
						</li>
						<li>
							Duración y frecuencia Tavern Brawl se abre una vez a
							la semana, generalmente el miércoles o jueves, y
							permanece abierto hasta el lunes siguiente. Cada
							semana que juegas una Pelea de Taberna por primera
							vez y ganas, obtienes una recompensa gratuita.
							Generalmente, esta recompensa es un sobre de cartas
							clásico, aunque en eventos especiales las
							recompensas pueden variar, como oro o incluso cartas
							doradas.
						</li>
						<li>
							Modos de Pelea de Taberna Existen diferentes tipos
							de peleas de taberna, que pueden clasificarse en
							varios tipos según su estilo de juego: Desafíos
							cooperativos: Algunas peleas de taberna te permiten
							jugar junto a otro jugador para enfrentarte a un
							jefe o enemigo en común. Estas peleas requieren que
							trabajes en equipo para superar desafíos. Mazos
							predefinidos: El juego te asigna un mazo con cartas
							temáticas o mecánicas que normalmente no verías en
							el juego estándar. Construcción de mazo: Te pide que
							construyas un mazo desde cero, pero con reglas o
							restricciones inusuales. Desafíos aleatorios: Todo
							es caótico y azaroso. Puedes tener cartas aleatorias
							o poderes especiales que cambian en cada turno.
						</li>
						<li>
							Acceso al Tavern Brawl Gratis: No cuesta nada jugar
							la Pelea de Taberna. Sin embargo, para poder acceder
							a este modo, necesitas haber alcanzado el nivel 10
							con al menos una clase de héroe. Una vez
							desbloqueado, puedes participar cuantas veces
							quieras durante la semana. Recompensas: Como se
							mencionó, al ganar tu primera partida de la semana,
							recibirás un sobre de cartas clásico. Si juegas más
							veces durante la semana, ya no recibirás sobres
							adicionales, pero puedes seguir disfrutando de las
							peleas de taberna.
						</li>
						<li>
							Variantes especiales y eventos En algunos casos, el
							Tavern Brawl coincide con eventos especiales de
							Hearthstone, como expansiones, celebraciones de
							aniversario o temporadas festivas. En esos momentos,
							las peleas pueden ser más temáticas, con recompensas
							especiales como dorso de cartas, oro o sobres
							exclusivos de expansiones. Durante estos eventos,
							las Peleas de Taberna pueden incluso ser más
							elaboradas, con desafíos de mayor dificultad o
							recompensas más atractivas.
						</li>
						<li>
							Peleas de Taberna Heroicas Además del modo estándar
							de Pelea de Taberna, existe una variante llamada
							Pelea de Taberna Heroica, que funciona de manera
							similar al formato Arena. En este modo heroico, los
							jugadores construyen su mazo con cartas de su
							colección, como en el formato estándar, y compiten
							para obtener hasta 12 victorias antes de perder 3
							veces. Al igual que en la Arena, las recompensas
							aumentan en función del número de victorias
							alcanzadas, y pueden incluir oro, polvo arcano,
							sobres de cartas y cartas doradas. Sin embargo, esta
							versión de la Pelea de Taberna requiere una tarifa
							de entrada, ya sea de oro o dinero real.
						</li>
						<li>
							Diversión casual El Modo Tavern Brawl es ideal para
							jugadores que buscan una experiencia más casual y
							relajada, lejos de la intensidad competitiva de las
							partidas clasificatorias o la Arena. Las reglas
							únicas y creativas de cada semana mantienen el
							contenido fresco, ofreciendo una forma divertida de
							jugar Hearthstone con condiciones inesperadas, lo
							que puede dar lugar a situaciones memorables y
							partidas impredecibles.
						</li>
					</ul>
					</div>
				</details>
			</div>
		</>
	);
}

export default Modos;
