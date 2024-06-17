import { Color, Engine, FadeInOut, Scene, SceneActivationContext, Transition } from "excalibur";

export class caseScene extends Scene {
    private objetoIntercao: any

    private textoDaCena: string = ""

    elementoTexto?: HTMLElement;

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

		//vDefinir a Opacidade do elemento para 1 = visual
		this.elementoTexto.style.opacity = "1"

		// Inserir o elementoTexto no cantainer-game
		let containerGame = document.querySelector(".container-game") as HTMLElement
		containerGame.appendChild(this.elementoTexto)

		// Adicionar classe na div criada
		this.elementoTexto.classList.add("sobre-gamifica")

		// Adicionar titulo e paragrafo dentro do conteudo da div
		this.elementoTexto.innerHTML = `<h2>Escola hoje em dia</h2>
        <p>Estou ficando louco me ajude, a cada like mais perto da sanidade ferrada estarei </p>`

        }

        // Renderizar um texto diferente para cada case 
        // renderizar imagen idle


        onActivate(context: SceneActivationContext<unknown>): void {
            //  Pegar dados vindos da cena passada
            this.objetoIntercao = context.data

            console.log(this.objetoIntercao);

            if (this.objetoIntercao.nomeDoActor == "mesa_stand_a") {
                this.textoDaCena = "Essa é a descricao do case A"

            }
            if (this.objetoIntercao.nomeDoActor == "mesa_stand_b") {
                this.textoDaCena = "Essa é a descricao do case B"
            }
            if (this.objetoIntercao.nomeDoActor == "mesa_stand_c") {
                this.textoDaCena = "Essa é a descricao do case C"
            }




            
        }
}