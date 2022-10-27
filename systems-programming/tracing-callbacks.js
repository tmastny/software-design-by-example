const red = () => {
    console.log('red')
}

const green = (f) => {
    console.log('green')
    f()
}

const blue = (left, right) => {
    console.log('blue')
    left(right)
}

blue(green, red)

// blue
// green
// red