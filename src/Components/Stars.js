function Stars(width, height, spacing) {
    const stars = [];

    for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
            const star = {
                x: x + randomInt(spacing),
                y: y + randomInt(spacing)
            };
            stars.push(star);
        }
    }
    return stars;
}
function randomInt(max) {
    return Math.floor(Math.random() * max);
}

export default Stars;