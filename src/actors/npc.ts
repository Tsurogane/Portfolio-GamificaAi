import { Actor, Animation, CollisionType, Engine, SpriteSheet, Vector } from "excalibur"
import { Resources } from "../resources"

export class Npc extends Actor {
    constructor(posicao: Vector, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            collisionType: CollisionType.Fixed,
            z: 4
        })
    }

    onInitialize(engine: Engine<any>): void {
        const NpcASpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }
        })
        const npcBSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcBSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }
        })

        const npcCSpriteSheet = SpriteSheet.fromImageSource({
            image: Resources.npcCSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            }
        })

        let spriteDefinido

        if (this.name == "npc_a") {
            spriteDefinido = NpcASpriteSheet
        }
        else if (this.name == "npc_b") {
            spriteDefinido = npcBSpriteSheet
        }
         else if (this.name == "npc_c") {
            spriteDefinido = npcCSpriteSheet
        }
        else {
            console.log("Nome do Npc nao previsto", this.name);
        }

        if (spriteDefinido) {
            const downIdle = new Animation ({
                frames: [
                    {graphic: spriteDefinido.getSprite(18, 1)},
                    {graphic: spriteDefinido.getSprite(19, 1)},
                    {graphic: spriteDefinido.getSprite(20, 1)},
                    {graphic: spriteDefinido.getSprite(21, 1)},
                    {graphic: spriteDefinido.getSprite(22, 1)},
                    {graphic: spriteDefinido.getSprite(23, 1)}
                ],
                frameDuration: 70
            })
            this.graphics.add(downIdle)
        }

''


    }


}