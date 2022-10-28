import fs from 'fs-extra-promise'

const filename = process.argv[2]

fs.readFileAsync(filename, {encoding : 'utf-8'})
    .then(data => {
        const length = data.split('\n').length
        console.log(`${filename}: ${length}`)
    })
    .catch(err => console.log(err))
