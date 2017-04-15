App.define(({ Utils, Spawner, Polygon, Explosion }) => class AsteroidField {

    constructor(player, colors, numAsteroids, radius) {
        this.alive = () => true;
        this.radius = radius;
        this.player = player;
        this.colors = colors;
        this.asteroids = Utils.range(numAsteroids, () => {
            let size = Utils.random(10, 20);
            return new Polygon({
                position: this.randomAsteroidPosition(),
                style: { color: this.randomAsteroidColor() },
                velocity: Vector.random(-0.5, 0.5, -0.5, 0.5), size,
                points: this.randomAsteroidShape()
            });
        });

        this.explosions = [];
        this.explosionSpawner = new Spawner(() => this.explosions.length > 0,
            () => this.explosions.splice(0, this.explosions.length));
    }

    randomAsteroidPosition() {
        return this.player.position.copy().add(Vector.polar(Utils.random(0, Math.PI * 2), this.radius / 2 + 20));
    }

    randomAsteroidShape() {
        let segments = 8;
        return Utils.range(segments, segment =>
            Vector.polar((segment / segments) * Math.PI * 2, Utils.random(0.5, 1)));
    }

    randomAsteroidColor() {
        return Utils.randomArray(this.colors);
    }

    update(ctx) {
        let playerSpeed = this.player.velocity.length();
        this.asteroids.forEach(asteroid => {
            asteroid.update(ctx);
            let distance = this.player.position.distance(asteroid.position);

            if (distance < asteroid.size && this.player.size > 0) {
                if (this.player.color != asteroid.style.color) {
                    this.player.kill();
                }
                else {
                    this.player.color = this.randomAsteroidColor();
                    this.explosions.push(new Explosion({
                        position: asteroid.position, size: asteroid.size,
                        particleSize: asteroid.size / 1.5, style: { color: asteroid.style.color },
                        magnitude: (asteroid.size + playerSpeed + asteroid.velocity.length()) / 5
                    }).fire());
                }
            }
            if ((distance < asteroid.size || distance > this.radius / 2 + 50) && this.player.size > 0) {
                asteroid.position = this.randomAsteroidPosition();
                asteroid.points = this.randomAsteroidShape();
                asteroid.style.color = this.randomAsteroidColor();
            }
        });

        this.explosionSpawner.update(ctx);        
    }

    render(renderer) {
        this.asteroids.forEach(asteroid => asteroid.render(renderer));
        this.explosionSpawner.render(renderer);
    }

});
