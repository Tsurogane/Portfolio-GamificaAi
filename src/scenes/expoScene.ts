import { Actor, CollisionType, Color, Engine, FadeInOut, Scene, Transition, vec } from "excalibur";
import { Resources } from "../resources";
import { Player } from "../actors/player";

export class expoScene extends Scene {
    
    onTransition(direction: "in" | "out"): Transition | undefined {
		return new FadeInOut({
			direction: direction,
			color: Color.Black,
				duration: 1000	
			})
		}

    onInitialize(engine: Engine<any>): void {
		// Carregar o mapa
		let tileMap = Resources.Mapa

		// Definir offset para renderizacao do mapa
		let offsetX = 138
		let offsetY = 100


		// Adicionar o Mapa
		tileMap.addToScene(this, {
			pos: vec(offsetX, offsetY),
		})
		

		// Definir o zoom da camera para aumentar um pouco a visualizacao
		this.camera.zoom = 1.4

		// Criacao e configuracao do player
		let jogador = new Player()

		// Define o z-index do player, util se algun outro elemento ficar "por cima" do jogador
		jogador.z = 2

		// Adicionar o Player 
		this.add(jogador)

		// Adicionar colisao com cada objeto
		// Pegar a camada de objetos colisores
		let camadaObjetosColisores = tileMap.getObjectLayers("ObjetosColisores")[0]

		// Percorrer os objetos com foreach e para cada objeto, renderizar um actor
		camadaObjetosColisores.objects.forEach(objeto => {
			const objetoAtual = new Actor({
				name: objeto.name,
				x: objeto.x + offsetX + (objeto.tiledObject.width! / 2),
				y: objeto.y + offsetY + (objeto.tiledObject.height! / 2),
				width: objeto.tiledObject.width,
				height: objeto.tiledObject.height,
				collisionType: CollisionType.Fixed,
			})

			// Adicionar o colisor do objeto na cena
			this.add(objetoAtual)
		})
    }
    
}

