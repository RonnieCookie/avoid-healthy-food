namespace SpriteKind {
    export const HethyFood = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myGirl.setImage(myGirlLeftImg)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myGirl.setImage(myGirlRightImg)
})
function doSomething () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
// Functions
function makeEnemy () {
	let myApple = sprites.create(img`
     . . . . . . . e c 7 . . . . . .
     . . . . e e e c 7 7 e e . . . .
     . . c e e e e c 7 e 2 2 e e . .
     . c e e e e e c 6 e e 2 2 2 e .
     . c e e e 2 e c c 2 4 5 4 2 e .
     c e e e 2 2 2 2 2 2 4 5 5 2 2 e
     c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
     c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
     c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
     c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
     c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
     . e e e 2 2 2 2 2 2 2 2 2 4 e .
     . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
     . . 2 e e 2 2 2 2 2 4 4 2 e . .
     . . . 2 2 e e 4 4 4 2 e e . . .
     . . . . . 2 2 e e e e . . . . .
 `, SpriteKind.HethyFood)
myApple.vx = 40
myApple.vy = 40
myApple.y = 0
myApple.x = randint(0, 160)
myApple.setBounceOnWall(true)
myApple.ay = 70







} 
sprites.onOverlap(SpriteKind.Player, SpriteKind.HethyFood, function(Theplayer: Sprite, Theenemy: Sprite) {
    Theenemy.destroy(effects.disintegrate)
effects.splatter.startScreenEffect()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    Theplayer .say(randomText[randint(0,2)], 1000)
    game.onUpdateInterval(2000, function() {
        makeEnemy()
        
    })
})
// On start
let randomText = ["WAAA! MOMMY I DONT WANT HLETHY STUFF!", ":((((((", "I WANT CANDY!"];
info.setLife(10)
let myGirl: Sprite = null
let myGirlRightImg: Image = null
let myGirlLeftImg: Image = null
myGirlLeftImg = img`
    . . . . . . . . . . . . . . 
    . . . . f f f f f . f f f . 
    . . . f f c c c c f f f f f 
    . . f c c c c c c b f f f f 
    . . f c c c c c c 3 c f f f 
    . f c c c c c c c c 3 3 f . 
    . f c c 4 c c c c c f f f . 
    . f f c 4 4 c c c f f f f . 
    . f f f 4 4 f b f 4 4 f f . 
    . . f c d d f 1 4 d 4 f f . 
    . . . f d d d d 4 f f f . . 
    . . . f e 4 4 4 e d d 4 . . 
    . . . f 3 3 3 3 e d d e . . 
    . . f f 6 6 6 6 f e e f . . 
    . . f f f f f f f f f f . . 
    . . . f f f . . . f f . . . 
    `
myGirlRightImg = myGirlLeftImg.clone()
myGirlRightImg.flipX()
myGirl = sprites.create(myGirlRightImg, SpriteKind.Player)
controller.moveSprite(myGirl, 100, 0)
myGirl.setPosition(80, 110)
myGirl.setStayInScreen(true)
makeEnemy()