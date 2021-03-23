function Stars(width, height, spacing) {
    const stars = [];
    let spacingTimes = 0;
    for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
            const star = {
                x: x + spacing * spacingTimes,
                y: y + spacing * spacingTimes
            };
            spacingTimes += 0.02;
            stars.push(star);
        }
    }
    return stars;
}
// function randomInt(max) {
//     return Math.floor(Math.random() * max);
// }

export default Stars;