import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logo2 from "./images/logo-vertical.png";
import gamificacao from "./images/gamificacao.png";
import playerSpritePath from "./sprites/player.png"
import npcASpriteSheet from "./sprites/npc_a.png"
import npcBSpriteSheet from "./sprites/npc_b.png"
import npcCSpriteSheet from "./sprites/NPC_C.png"
import npcImageA from "./images/Case1.png"
import npcImageB from "./images/Case2.png"
import npcImageC from "./images/Case3.png"

import ritmada from "./Sounds/ritmada_zelda.mp3"
import classico from "./Sounds/zelda.mp3"



import { TiledResource } from "@excaliburjs/plugin-tiled";
import pngTilesetPath from "./Maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./Maps/tileset_paredes?url"
import tsxGenericPath from "./Maps/tileset_generic?url"
import tsxBasementPath from "./Maps/tileset_basement?url"
import tsxBibliotecaPath from "./Maps/tileset_biblioteca?url"

import tmxMapaPath from "./Maps/showroom_map.tmx?url"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  logo2: new ImageSource(logo2),
  gamificacao: new ImageSource(gamificacao),
  playerSpriteSheet: new ImageSource(playerSpritePath, {filtering: ImageFiltering.Pixel}),
  npcASpriteSheet: new ImageSource(npcASpriteSheet, {filtering: ImageFiltering.Pixel}),
  npcBSpriteSheet: new ImageSource(npcBSpriteSheet, {filtering: ImageFiltering.Pixel}),
  npcCSpriteSheet: new ImageSource(npcCSpriteSheet, {filtering: ImageFiltering.Pixel}),
  npcA: new ImageSource(npcImageA),
  npcB: new ImageSource(npcImageB),
  npcC: new ImageSource(npcImageC),
  RitmadaBGM: new Sound(ritmada),
  ClassicBGM: new Sound(classico),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      { path: "showroom_map.tmx", output: tmxMapaPath },
      { path: "Room_Builder_32x32.png", output: pngTilesetPath }, 
      { path: "tileset_paredes", output: tsxParedesPath },
      { path: "tileset_generic", output: tsxGenericPath },
      { path: "tileset_basement", output: tsxBasementPath },
      { path: "tileset_biblioteca", output: tsxBibliotecaPath },
    ]
  }),
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
