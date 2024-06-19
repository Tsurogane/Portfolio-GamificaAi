import { Actor, Animation, CollisionType, Color, Engine, SpriteSheet, Vector } from "excalibur"
import { Resources } from "../resources"

export class Npc extends Actor {
    constructor(posicao: Vector, cor: Color, nome: string) {
        super( {
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            color: cor,
            collisionType: CollisionType.Fixed,
            z: 6 
        })
    }

    onInitialize(engine: Engine<any>): void { 
       const NpcASpriteSheet = SpriteSheet .fromImageSource ({
        image: Resources.npcImageA,
        grid: {
            spriteWidth: 32,
            spriteHeight: 64,
            columns: 56,
            rows: 20
        }
       })

       const duracaoFrameAnimacao = 150


       const downIdleA = new Animation ({
        frames: [
            {graphic: NpcASpriteSheet.getSprite(18, 1)},
            {graphic: NpcASpriteSheet.getSprite(19, 1)},
            {graphic: NpcASpriteSheet.getSprite(20, 1)},
            {graphic: NpcASpriteSheet.getSprite(21, 1)},
            {graphic: NpcASpriteSheet.getSprite(22, 1)},
            {graphic: NpcASpriteSheet.getSprite(23, 1)},
        ],
        frameDuration: duracaoFrameAnimacao
    })

    // Definir animacao inicial do player
    this.graphics.use("down-idle-a")

    this.graphics.use("down-idle-")

    const NpcBSpriteSheet = SpriteSheet .fromImageSource ({
        image: Resources.npcImageB,
        grid: {
            spriteWidth: 32,
            spriteHeight: 64,
            columns: 56,
            rows: 20
        }
       })

    const downIdle = new Animation ({
        frames: [
            {graphic: NpcBSpriteSheet.getSprite(18, 1)},
            {graphic: NpcBSpriteSheet.getSprite(19, 1)},
            {graphic: NpcBSpriteSheet.getSprite(20, 1)},
            {graphic: NpcBSpriteSheet.getSprite(21, 1)},
            {graphic: NpcBSpriteSheet.getSprite(22, 1)},
            {graphic: NpcBSpriteSheet.getSprite(23, 1)},
        ],
        frameDuration: duracaoFrameAnimacao
    })

    // Definir animacao inicial do player
    this.graphics.use("down-idle-b")

    this.graphics.use("down-idle-")

    const NpcCSpriteSheet = SpriteSheet .fromImageSource ({
        image: Resources.npcImageC,
        grid: {
            spriteWidth: 32,
            spriteHeight: 64,
            columns: 56,
            rows: 20
        }
       })

    const downIdleC = new Animation ({
        frames: [
            {graphic: NpcCSpriteSheet.getSprite(18, 1)},
            {graphic: NpcCSpriteSheet.getSprite(19, 1)},
            {graphic: NpcCSpriteSheet.getSprite(20, 1)},
            {graphic: NpcCSpriteSheet.getSprite(21, 1)},
            {graphic: NpcCSpriteSheet.getSprite(22, 1)},
            {graphic: NpcCSpriteSheet.getSprite(23, 1)},
        ],
        frameDuration: duracaoFrameAnimacao
    })

    // Definir animacao inicial do player
    this.graphics.use("down-idle-",  )

    this.graphics.use("down-idle-")


    

    }
}