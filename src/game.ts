import 'phaser';

let bird = null;
let upperPipe = null;
let lowerPipe = null;

let pipeVerticalDistanceRange:[number, number] = [150, 250];
let pipeVerticalDistance = Phaser.Math.Between(...pipeVerticalDistanceRange);
let pipeVerticalPosition = Phaser.Math.Between(20, 600 - 20 - pipeVerticalDistance)


export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('sky', 'assets/sky.png')
        this.load.image('bird', 'assets/bird.png')
        this.load.image('pipe', 'assets/pipe.png')
    }

    create ()
    {

        this.add.image(0, 0, 'sky').setOrigin(0,0)
        bird = this.physics.add.sprite(initialBirdPosition.x, initialBirdPosition.y, 'bird')
        bird.body.gravity.y = 400;
        upperPipe = this.physics.add.sprite(400, pipeVerticalPosition, 'pipe').setOrigin(0,1)
        lowerPipe = this.physics.add.sprite(400, upperPipe.y + pipeVerticalDistance, 'pipe').setOrigin(0,0)
        const spaceBar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        spaceBar.on('down', this.flap)
    }

    update(time, delta)
    {
        if (bird.y > config.height || bird.y < 0 - bird.height) {
            this.restartBirdPosition()
        }
        // console.log(bird)
        // if (bird.x >= config.width) {
        //     bird.body.velocity.x = -200
        // } else if (bird.x <= 0) {
        //     bird.body.velocity.x = 200
        // }
    }

    flap() 
    {
        bird.body.velocity.y =  -250
    }

    restartBirdPosition() {
        bird.body.velocity.y = -10
        bird.x = initialBirdPosition.x;
        bird.y = initialBirdPosition.y;
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    debug: true,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
      },
    scene: Demo
};

const initialBirdPosition = { x: config.width * 0.1, y: config.height / 2 };

const game = new Phaser.Game(config);