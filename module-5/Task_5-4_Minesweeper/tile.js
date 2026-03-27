"use strict";
import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel } from "./Minesweeper.mjs";

let tiles = [];

export class TTile extends TSpriteButton {
    constructor(aSpcvs, aSPI, aCol, aRow){
        const pos = new TPoint(20, 133);
        pos.x += aSPI.width * aCol;
        pos.y += aSPI.height * aRow;
        super(aSpcvs, aSPI, pos.x, pos.y);
    }

} // End of TTile

export function createTiles(aSpcvs, aSPI) {
    const glTiles = gameLevel.Tiles;
    const colCount = glTiles.Col;
    const rowCount = glTiles.Row;
    for(let col = 0; col < colCount; col++) {
        const rows = [];
        for(let row = 0; row < rowCount; row++) {
            const newTile = new TTile(aSpcvs, aSPI, col, row);
            rows.push(newTile);
        }
        tiles.push(rows);
    }
}

export function drawTiles(){
    const colCount = gameLevel.Tiles.Col;
    const rowCount = gameLevel.Tiles.Row;
    for(let col = 0; col < colCount; col++) {
        const rows = tiles[col];
        for(let row = 0; row < rowCount; row++) {
            const tile = rows[row];
            tile.draw();
        }
    }
}