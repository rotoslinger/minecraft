namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.showLongText("you can now climb over rocks!", DialogLayout.Bottom)
    mySprite.setFlag(SpriteFlag.Ghost, true)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . 4 f f f 4 e f f f 4 . . . 
. . . 4 f f f 4 4 f f f 4 . . . 
. . . 4 f f f 4 4 f f f 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . . 4 4 4 4 4 4 4 4 4 4 . . . 
. . . . 4 4 4 4 4 4 4 4 . . . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 . 4 4 4 4 4 4 4 4 . 4 . . 
. . 4 . e e e e e e e e . 4 . . 
. . 4 . e e e e e e e e . 4 . . 
. . . . 4 e e e e e e 4 . . . . 
. . . . 4 . e e e e . 4 . . . . 
. . . . 4 . . . e . . 4 . . . . 
. . . . 4 . . . . . . 4 . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`1e001e00010101010203020101010101010101010101010101010101010102010101010101010204020101010101010101010101010101010101010102010501010101010204020101010101010101010101010101010101010102010101010101010202020101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101010102010101020202020202020202020202020202020202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202020202020201010102020202020202020202020202020202020202010202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010106010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`,
            img`
. . . . 2 . 2 . . . . . . . . . . . . . . . . . . . 2 . . . 
. . . . 2 . 2 . . . . . . . . . . . . . . . . . . . 2 . . . 
. . . . 2 . 2 . . . . . . . . . . . . . . . . . . . 2 . . . 
. . . . 2 2 2 . . . . . . . . . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath5,sprites.castle.rock0,sprites.builtin.brick,sprites.castle.rock2,sprites.dungeon.chestClosed,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass2)
