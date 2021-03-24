function Stars(width, height, spacing) {
    const stars = [];
    // let spacingTimes = 0;
    for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
            const star = {
                x: x + 0.5 * spacing,
                y: y + 0.1 * spacing
            };
            // spacingTimes += 0.05;
            stars.push(star);
        }
    }
    console.log("HELLO")
    return stars;
}
// function randomInt(max) {
//     return Math.floor(Math.random() * max);
// }

export default Stars;