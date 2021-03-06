namespace SpriteKind {
    export const HethyFood = SpriteKind.create()
}
// Functions
function makeEnemy(){

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