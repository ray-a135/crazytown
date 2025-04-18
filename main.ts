namespace SpriteKind {
    export const NPC = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile19`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level14`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    game.splash("There is something going on!")
    game.showLongText("What?", DialogLayout.Bottom)
    game.splash("There is a party at any house!")
    pause(2000)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level12`)
    mySprite.setPosition(78, 52)
})
info.onCountdownEnd(function () {
    game.splash("")
    tiles.setCurrentTilemap(tilemap`level28`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile29`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level13`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`waterdoor`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level14`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile16`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level12`)
    mySprite.setPosition(21, 13)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`store`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`firedoor`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`the town`)
    mySprite.setPosition(78, 52)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile27`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level13`)
})
let mySprite: Sprite = null
info.startCountdown(60)
mySprite = sprites.create(img`
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
mySprite.setPosition(19, 6)
let mySprite2 = sprites.create(img`
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 f f f f f f f f 2 f f f f 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.NPC)
game.onUpdateInterval(500, function () {
    mySprite2.setVelocity(randint(0, 10), randint(0, 10))
})
