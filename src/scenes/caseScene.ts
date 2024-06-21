import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoIntercao: any

    private textoDaCena: string = ""

    private elementoTexto?: HTMLElement;

    private npcImage?: Actor

    private listaImages?: Sprite []

    onTransition(direction: "in" | "out"): Transition | undefined {
		return new FadeInOut({
			direction: direction,
			color: Color.Black,
				duration: 1000	
			})
		}

        onInitialize(engine: Engine<any>): void {
            this.backgroundColor = Color.Gray

            		// Criar elemento com drescrição da empresa
		this.elementoTexto = document.createElement("div") as HTMLElement
		this.elementoTexto.classList.add("texto-case")

		let containerGame = document.querySelector(".container-game") as HTMLElement
		containerGame.appendChild(this.elementoTexto)


        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao")
            }
        })

        this.npcImage = new Actor ({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        let npcImageA = Resources.npcA.toSprite()
        let npcImageB = Resources.npcB.toSprite()
        let npcImageC = Resources.npcC.toSprite()

        this.listaImages = [npcImageA, npcImageB, npcImageC]

        // this.elementoTexto.innerHTML = this.textoDaCena

        }
        

        // Renderizar um texto diferente para cada case 
        // renderizar imagen idle


        onActivate(context: SceneActivationContext<unknown>): void {
            this.elementoTexto!.style.opacity = "1"

            //  Pegar dados vindos da cena passada
            this.objetoIntercao = context.data

            console.log(this.objetoIntercao);

            if (this.objetoIntercao.nomeDoActor == "mesa_stand_a") {
                this.elementoTexto!.innerHTML =  `<h2> KLT </h2>
                <p> KLT uma empressa que busca revolucionar o mercado de alimento </p>`
                
                this.npcImage?.graphics.add(this.listaImages![0])
                
            }
            if (this.objetoIntercao.nomeDoActor == "mesa_stand_b") {
                this.elementoTexto!.innerHTML =  `<h2>FGD</h2>
                <p> Estao atualmneto atuando como empresa de venda de moveis</p>`
                this.npcImage?.graphics.add(this.listaImages![1])
            }
            if (this.objetoIntercao.nomeDoActor == "mesa_stand_c") {
                this.elementoTexto!.innerHTML =  `<h2>Case 3</h2>
                <p> esta fazendo venda de carros </p>`
                this.npcImage?.graphics.add(this.listaImages![2])
            }       
            this.add(this.npcImage!)    
        }

        onDeactivate(context: SceneActivationContext<undefined>): void {
            this.elementoTexto!.style.opacity = "0"
        }
}