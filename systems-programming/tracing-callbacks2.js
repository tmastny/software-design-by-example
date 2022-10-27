const blue = (left, right) => {
    console.log('blue')
    left(right)
}

blue(
    (callback) => {
        console.log('green')
        callback()
    },
    () => console.log('red')
)

// blue
// green
// red
