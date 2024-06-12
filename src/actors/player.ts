import { Actor, CollisionType, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // Propiedades do player
    private velocidade: number = 180

    // Configuração do Player
    constructor() {
        super({
            pos: vec(600, 635),
            width: 32,
            height: 32,
            name: "Jorgador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }
    onInitialize(engine: Engine<any>): void {
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