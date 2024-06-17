import { Actor, Animation, Collider, CollisionContact, CollisionType, Color, Engine, Keys, Side, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propiedades do player
    private velocidade: number = 180
    private ultimaDirecao: string = "down"

    private temObjetoProximo: boolean = false
    private ultimoColisor?: Collider

    // Configuração do Player
    constructor(posicao: Vector) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: "Jorgador",
            color: Color.Red,
            collisionType: CollisionType.Active,
            z: 2
        })
    }
    onInitialize(engine: Engine<any>): void {
        // Configurar Sprite do player
        const playerSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.playerSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 0
                }
            }

        })

        const duracaoFrameAnimacao = 70

        // Criar as animacoes
        const leftIdle = new Animation({
            frames: [
                { graphic: playerSpriteSheet.getSprite(12, 1)},
                { graphic: playerSpriteSheet.getSprite(13, 1)},
                { graphic: playerSpriteSheet.getSprite(14, 1)},
                { graphic: playerSpriteSheet.getSprite(15, 1)},
                { graphic: playerSpriteSheet.getSprite(16, 1)},
                { graphic: playerSpriteSheet.getSprite(17, 1)}
            ],
            frameDuration: duracaoFrameAnimacao   
        })
        this.graphics.add("left-idle", leftIdle)

        // this.graphics.use("left-idle")

        const rightIdle = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 1)},
                {graphic: playerSpriteSheet.getSprite(1, 1)},
                {graphic: playerSpriteSheet.getSprite(2, 1)},
                {graphic: playerSpriteSheet.getSprite(3, 1)},
                {graphic: playerSpriteSheet.getSprite(4, 1)},
                {graphic: playerSpriteSheet.getSprite(5, 1)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-idle", rightIdle)

        const upIdle = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(6, 1)},
                {graphic: playerSpriteSheet.getSprite(7, 1)},
                {graphic: playerSpriteSheet.getSprite(8, 1)},
                {graphic: playerSpriteSheet.getSprite(9, 1)},
                {graphic: playerSpriteSheet.getSprite(10, 1)},
                {graphic: playerSpriteSheet.getSprite(11, 1)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-idle", upIdle)

        const downIdle = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(18, 1)},
                {graphic: playerSpriteSheet.getSprite(19, 1)},
                {graphic: playerSpriteSheet.getSprite(20, 1)},
                {graphic: playerSpriteSheet.getSprite(21, 1)},
                {graphic: playerSpriteSheet.getSprite(22, 1)},
                {graphic: playerSpriteSheet.getSprite(23, 1)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-idle", downIdle)

        // Definir animacao inicial do player
        this.graphics.use("down-idle")

        // Criando Animacao de Movimento

        const leftWalk = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(12, 2)},
                {graphic: playerSpriteSheet.getSprite(13, 2)},
                {graphic: playerSpriteSheet.getSprite(14, 2)},
                {graphic: playerSpriteSheet.getSprite(15, 2)},
                {graphic: playerSpriteSheet.getSprite(16, 2)},
                {graphic: playerSpriteSheet.getSprite(17, 2)},

            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("left-walk", leftWalk)

        const rightWalk = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(0, 2)},
                {graphic: playerSpriteSheet.getSprite(1, 2)},
                {graphic: playerSpriteSheet.getSprite(2, 2)},
                {graphic: playerSpriteSheet.getSprite(3, 2)},
                {graphic: playerSpriteSheet.getSprite(4, 2)},
                {graphic: playerSpriteSheet.getSprite(5, 2)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("right-walk", rightWalk)

        const upWalk = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(6, 2)},
                {graphic: playerSpriteSheet.getSprite(7, 2)},
                {graphic: playerSpriteSheet.getSprite(8, 2)},
                {graphic: playerSpriteSheet.getSprite(9, 2)},
                {graphic: playerSpriteSheet.getSprite(10, 2)},
                {graphic: playerSpriteSheet.getSprite(11, 2)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("up-walk", upWalk)

        const downWalk = new Animation ({
            frames: [
                {graphic: playerSpriteSheet.getSprite(18, 2)},
                {graphic: playerSpriteSheet.getSprite(19, 2)},
                {graphic: playerSpriteSheet.getSprite(20, 2)},
                {graphic: playerSpriteSheet.getSprite(21, 2)},
                {graphic: playerSpriteSheet.getSprite(22, 2)},
                {graphic: playerSpriteSheet.getSprite(23, 2)},
            ],
            frameDuration: duracaoFrameAnimacao
        })
        this.graphics.add("down-walk", downWalk)



        // let imagePlayer = playerSpriteSheet.getSprite(3, 0)


        // this.graphics.add(imagePlayer)
        
        // Configurar player para monitorar evento holding
        engine.input.keyboard.on("hold", (event) => {
            
            //
            switch (event.key) {
                case Keys.Left:
                 case Keys.A:
                    this.vel.x = -this.velocidade

                    this.graphics.use("left-walk")
                    // this.graphics.current!.scale = vec(1.6, 1.6)

                    this.ultimaDirecao = "left"

                    break;
                case Keys.Right:
                case Keys.D:
                    this.vel.x = this.velocidade

                    this.graphics.use("right-walk")

                    this.ultimaDirecao = "right"
                    break;
                case Keys.Up:
                case Keys.W:
                this.vel.y = -this.velocidade

                this.graphics.use("up-walk")

                this.ultimaDirecao = "up"
                break;
                case Keys.Down:
                case Keys.S:
                    this.vel.y = this.velocidade

                    this.graphics.use("down-walk")

                    this.ultimaDirecao = "down"
                    break;

                default:
                    // Zera a velocidade do PLayer, Para a movimentacao
                    this.vel.x = 0
                    this.vel.y = 0

                    break;
            }
        })

        // Configurar o player para monitorar o evento release
        engine.input.keyboard.on("release", (event) => {
            if (
                event.key == Keys.A ||
                event.key == Keys.Left || 
                event.key == Keys.D || 
                event.key == Keys.Right 
            ) {
                // Zera velocidad horinzotal
                this.vel.x = 0
            }
            if (
                event.key == Keys.W || 
                event.key == Keys.Up || 
                event.key == Keys.S || 
                event.key == Keys.Down 
            ) {
               this.vel.y = 0 
            }


           // Ao parar o player definir animacao idle da ultima direcao
          if (this.vel.x == 0 && this.vel.y == 0) {
            this.graphics.use(this.ultimaDirecao + "-idle")
          } 
           
        })

        // Configurar o player
        engine.input.keyboard.on("press", (event) => {
            if (event.key == Keys.F && this.temObjetoProximo     ) {
                console.log("Integariuuu");

                // Indentificar o lvo da interacao
                if (this.ultimoColisor?.owner.name == "mesa_stand_a") {
                    console.log("Essa é a mesa A");
                    
                    // Vai para a cena passando qual o objeto de intercao
                    engine.goToScene("case", {
                        sceneActivationData: {
                            // Passa o nome do Actor que interagiu com o player
                            nomeDoActor: this.ultimoColisor.owner.name
                        }
                    })
                }
                if (this.ultimoColisor?.owner.name == "mesa_stand_b") {
                    console.log("Essa é a mesa B");
                    
                    engine.goToScene("case", {
                        sceneActivationData: {
                            // Passa o nome do Actor que interagiu com o player
                            nomeDoActor: this.ultimoColisor.owner.name
                        }
                    })
                }
                if (this.ultimoColisor?.owner.name == "mesa_stand_c") {
                    console.log("Essa é a mesa c");
                    
                    engine.goToScene("case", {
                        sceneActivationData: {
                            // Passa o nome do Actor que interagiu com o player
                            nomeDoActor: this.ultimoColisor.owner.name
                        }
                    })
                }

                
            }
        })
    }
    onPreCollisionResolve(self: Collider, other: Collider, side: Side, contact: CollisionContact): void {
        // console.log(other.owner.name);

        // Indicar que algun objeto proximo
        this.temObjetoProximo = true

        // Registrar o ultimo objeto colidido
        this.ultimoColisor = other
    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // Detectar se o player esta distante do ultimo objeto colidido
        if (this.ultimoColisor && this.pos.distance(this.ultimoColisor.worldPos) > 40) {
            // Marca que o objeto esta proximo
            this.temObjetoProximo = false

        console.log("Esta longe");
            
        }
    }

}