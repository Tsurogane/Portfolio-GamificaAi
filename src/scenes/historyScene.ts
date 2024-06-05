import { Actor, Color, Engine, FadeInOut, Keys, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";



export class historyScene extends Scene {
	// Declaração de elemento.
	elementoTexto?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
		return new FadeInOut({
			direction: direction,
			color: Color.Black,
			duration: 1000	
		})
	}

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

		// Criar elemento com drescrição da empresa
		this.elementoTexto = document.createElement("div") as HTMLElement

		//vDefinir a Opacidade do elemento para 1 = visual
		this.elementoTexto.style.opacity = "1"

		// Inserir o elementoTexto no cantainer-game
		let containerGame = document.querySelector(".container-game") as HTMLElement
		containerGame.appendChild(this.elementoTexto)

		// Adicionar classe na div criada
		this.elementoTexto.classList.add("sobre-gamifica")

		// Adicionar titulo e paragrafo dentro do conteudo da div
		this.elementoTexto.innerHTML = `<h2>Sobre o GamificaAi</h2>
        <p>Nossa empresa cria soluções de gamificação personalizadas para empresas de todos os tamanhos e setores,
          usando inteligência artificial e design de jogos para desenvolver estratégias interativas que melhoram a
          experiência do usuário e impulsionam resultados. Acreditamos no poder dos jogos e da tecnologia para engajar
          equipes, aumentar a produtividade e motivar, adaptando cada projeto às necessidades específicas do cliente,
          desde programas de treinamento interativo até sistemas de recompensa e engajamento de funcionários.</p> -->`

		let actorLogo = new Actor ({
			pos: vec(engine.drawWidth / 1.3, 350),
		})

		// let actorLogo = new Actor ({
		// 	pos: vec(engine.drawWidth - 300, engine.halfDrawHeight),
		// })
		
	
	
		let logoVertical = Resources.logo2.toSprite()

		logoVertical.scale = vec(0.7, 0.7)
	
		actorLogo.graphics.add(logoVertical)
	
		this.add(actorLogo)

		// Configurar a cena para monitorar o evento de tecla pressionada
		this.input.keyboard.on("press", (event) => {
			// Caso a tecla pressionada for "Enter", deve ir para proxima cena
			if (event.key == Keys.Enter) {
				// Direcioanr para cena historia
				engine.goToScene("gamificacao")
			}
	})
    }
}


