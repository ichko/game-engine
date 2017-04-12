class AsteroidField {
    constructor(player, numAsteroids, radius) {
        this.alive = () => true;
        this.radius = radius;
        this.player = player;
        this.asteroids = Utils.range(numAsteroids, () => {
            let size = Utils.random(5, 40);
            return new Polygon({
                position: this.randomAsteroidPosition(),
                style: { color: this.randomAsteroidColor() },
                velocity: Vector.random(-2, 2, -2, 2), size,
                points: this.randomAsteroidShape()
            });
        });
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
        return Utils.randomArray(['#6f6', '#f66', '#66f', '#ff3', '#3ff', '#f3f']);
    }

    update(ctx) {
        let playerSpeed = this.player.velocity.length();
        this.asteroids.forEach(asteroid => {
            asteroid.update(ctx);
            let distance = this.player.position.distance(asteroid.position);

            if (distance < asteroid.size) {
                explosions.push(new Explosion({
                    position: asteroid.position, size: asteroid.size / 1.5,
                    particleSize: asteroid.size / 1.5, style: { color: asteroid.style.color },
                    magnitude: (asteroid.size + playerSpeed + asteroid.velocity.length()) / 10
                }).fire());
            }
            if (distance < asteroid.size || distance > this.radius / 2 + 50) {
                asteroid.position = this.randomAsteroidPosition();
                asteroid.points = this.randomAsteroidShape();
                asteroid.style.color = this.randomAsteroidColor();
            }
        });
    }

    render(renderer) {
        this.asteroids.forEach(asteroid => asteroid.render(renderer));
    }

}
