new Promise((resolve, reject) => {
    console.log('top of single then')
    setTimeout(() => resolve('send to then'), 0)
}).then((value) => {
    console.log(`then with "${value}"`)
    return 'first then value'
})