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
sprites.onOverlap(SpriteKind.Player, SpriteKind.HethyFood, function (Theplayer, Theenemy) {
    Theenemy.destroy(effects.disintegrate)
    effects.splatter.startScreenEffect()
scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    Theplayer.say(randomText[randint(0, randomText.length-1)], 1000)
    game.onUpdateInterval(2000, function() {
        makeEnemy()
        
    })
})
// Functions
function makeEnemy () {
    myApple = sprites.create(ENEMYIMG[randint(0, ENEMYIMG.length - 1)], SpriteKind.HethyFood)
    myApple.vx = 40
    myApple.vy = 40
    myApple.y = 0
    myApple.x = randint(0, 160)
    myApple.setBounceOnWall(true)
    myApple.ay = 70
}
let myApple: Sprite = null
let myGirl: Sprite = null
let myGirlRightImg: Image = null
let myGirlLeftImg: Image = null
let ENEMYIMG: Image[] = []
let randomText: string[] = []
// On start
randomText = ["WAAA! MOMMY I DONT WANT HLETHY STUFF!", ":((((((", "I WANT CANDY!"]
ENEMYIMG = [img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, img`
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
    `]
info.setLife(10)
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


game.onUpdateInterval(1000, function() {
info.changeScoreBy(1)
    
})

scene.setBackgroundImage(img`
    5 7 5 7 7 7 d d 7 7 3 7 7 7 7 7
    7 7 7 7 7 7 7 7 d 7 3 7 7 1 7 7
    7 7 7 1 1 7 7 7 9 d 7 3 1 7 1 7
    7 7 3 1 1 3 7 7 9 5 d 3 6 1 6 7
    7 1 1 6 6 1 1 7 9 5 7 d 7 7 7 7
    7 d 1 7 7 1 d 7 9 6 7 3 d 7 7 7
    7 6 3 1 1 3 6 7 9 7 7 3 d 7 7 7
    7 7 6 d d 6 7 7 9 7 5 3 6 d 7 7
    7 7 7 7 7 7 7 9 7 7 5 3 7 d 7 7
    7 7 7 7 7 7 9 7 1 7 3 7 1 d 7 7
    9 9 9 9 9 9 6 1 6 7 3 3 1 d 3 7
    3 1 7 1 7 7 7 7 3 3 1 1 6 d 1 1
    7 3 3 3 3 3 3 3 7 7 d 1 7 d 1 d
    7 7 7 7 7 7 7 7 7 7 6 3 1 d 3 6
    7 7 7 7 7 7 7 7 7 7 7 6 d d 6 7
    7 7 5 7 7 7 7 7 7 7 7 7 7 d 7 7
`)