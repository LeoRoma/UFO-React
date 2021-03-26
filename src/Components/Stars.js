function Stars(width, height) {

        const stars = [];
        for (let x = 0; x < width; x += 100) {
            for (let y = 0; y < height / 3; y += 100) {
                const star = {
                    x: x + 0.5 * 100,
                    y: y + 0.5 * 100,
                    r: 2
                };
                stars.push(star);
            }
        }
        return stars;
    // function randomInt(max) {
    //     return Math.floor(Math.random() * max);
    // }

}


export default Stars;