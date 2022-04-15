import 'phaser';

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
        this.add.image(400, 300, 'sky')
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
    scene: Demo
};

const game = new Phaser.Game(config);
