import fs from 'fs-extra-promise'
import glob from 'glob-promise'

const lineCount = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFileAsync(filename, {encoding : 'utf-8'})
        .then(data => {
            const length = data.split('\n').length
            console.log(`${filename}: ${length}`)
        })
        .catch(err => console.log(err))
    })
}


const srcDir = process.argv[2]
glob(`${srcDir}/**/*.*`)
    //.then(files => files.map(f => statPair(f)))
    .then(files => files.map(f => lineCount(f)))
