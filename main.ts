scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`the town`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`store`)
})
let mySprite = sprites.create(img`
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f 2 2 2 2 2 2 f f f f 2 2 2 2 2 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`the town`)
