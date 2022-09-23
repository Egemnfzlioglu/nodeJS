// Daire Alan : circleArea
const circleArea = (r) => {
    // A = π.r2
    console.log(
        "Daire alan : ",
        Math.PI * r ** 2
    );
}

// Daire Çevre : circleCircumference
const circleCircumference = (r) => {
    // C = 2πr
    console.log(
        "Daire Çevre : ",
        2 * Math.PI * r
    );
}


module.exports = {
    circleArea,
    circleCircumference
}