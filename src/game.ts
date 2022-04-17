import 'phaser';

let bird = null;
export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        // this.load.image('logo', 'assets/phaser3-logo.png');
        // this.load.image('libs', 'assets/libs.png');
        // this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        // this.load.glsl('stars', 'assets/starfields.glsl.js');
        this.load.image('sky', 'assets/sky.png')
        this.load.image('bird', 'assets/bird.png')
    }

    create ()
    {
        // this.add.shader('RGB Shift Field', 0, 0, 800, 600).setOrigin(0);

        // this.add.shader('Plasma', 0, 412, 800, 172).setOrigin(0);

        // this.add.image(400, 300, 'libs');

        // const logo = this.add.image(400, 70, 'logo');

        // this.tweens.add({
        //     targets: logo,
        //     y: 350,
        //     duration: 1500,
        //     ease: 'Sine.inOut',
        //     yoyo: true,
        //     repeat: -1
        // })
        this.add.image(0, 0, 'sky').setOrigin(0,0)
        bird = this.physics.add.sprite(config.width/10, config.height/2, 'bird')
        bird.body.velocity.x = 200
        this.input.on('pointerdown', function() {
            console.log('pressing mouse button!')
        })
        this.input.keyboard.on('spacedown', function() {
            console.log('pressing space key!')
        })   
        // bird.body.gravity.y=200;
        // console.log(bird)
    }

    update(time, delta)
    {
        // console.log(bird)
        if (bird.x >= config.width) {
            bird.body.velocity.x = -200
        } else if (bird.x <= 0) {
            bird.body.velocity.x = 200
        }
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
          gravity: { y: 200 }
        }
      },
    scene: Demo
};

const game = new Phaser.Game(config);
