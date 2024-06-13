import { Actor, Animation, CollisionType, Color, Engine, Keys, SpriteSheet, Vector, vec } from "excalibur";
import { Resources } from "../resources";

export class Player extends Actor {
    // Propiedades do player
    private velocidade: number = 180

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
                    y: 8
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

        this.graphics.use("left-idle")

        // let imagePlayer = playerSpriteSheet.getSprite(3, 0)


        // this.graphics.add(imagePlayer)
        
        // Configurar player para monitorar evento holding
        engine.input.keyboard.on("hold", (event) => {
            //
            switch (event.key) {
                case Keys.Left:
                 case Keys.A:
                    this.vel.x = -this.velocidade
                    break;
                case Keys.Right:
                case Keys.D:
                    this.vel.x = this.velocidade
                    break;
                case Keys.Up:
                case Keys.W:
                this.vel.y = -this.velocidade
                break;
                case Keys.Down:
                case Keys.S:
                    this.vel.y = this.velocidade
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
        })
    }

}