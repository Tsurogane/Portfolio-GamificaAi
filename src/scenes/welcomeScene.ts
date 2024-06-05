import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";


export class welcomeScene extends Scene {

	textoInicar?: Label

	onTransition(direction: "in" | "out"): Transition | undefined {
		return new FadeInOut({
			direction: direction,
			color: Color.Black,
			duration: 1000
		})
	}

	onInitialize(engine: Engine<any>): void {
		this.backgroundColor = Color.Black

		let fraseBemVindo = new Label({
			text: "Bem vindo ao Portfólio",
			width: 400,
			height: 50,
			pos: vec(engine.drawWidth / 2, 300),
			font: new Font({
				color: Color.White,
				size: 40,
				textAlign: TextAlign.Center,
				family: "Anta"
			})
		})

		let textoIniciar = new Label ({
			text: "Pressione \"Enter\" \para iniciar... ",
			width: 300,
			height: 20,
			pos: vec(engine.drawWidth / 2, 600 ),
			font: new Font ({
				color: Color.White,
				size: 20,
				textAlign: TextAlign.Center,
				family: "Anta"
			})
		})

		// Adiciona a frase na cena, tela.
		this.add(fraseBemVindo)

		this.add(textoIniciar)

		// Adicionando animação
		
		textoIniciar.actions.repeatForever((repeat)  => {
			repeat.fade(0, 600).fade(1, 600)
		})


		// Configurar Actor do Logo
		let actorLogo = new Actor ({
			pos: vec(engine.drawWidth / 2, 430),
		})

		// Utilizar imagem do logo
		let imageLogo = Resources.Logo.toSprite()

		// Aplciar zoom na imagem
		imageLogo.scale = vec(0.4, 0.4)

		// Configurar o actor para usar a imagem
		actorLogo.graphics.add(imageLogo)

		// Adicionando actor logo na tela
		this.add(actorLogo)

		this.input.keyboard.on("press", (event) => {
				// Caso a tecla pressionada for "Enter", deve ir para proxima cena
				if (event.key == Keys.Enter) {
					// Direcioanr para cena historia
					engine.goToScene("historia")
				}
		})
	}

	
}
