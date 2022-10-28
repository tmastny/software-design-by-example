import fs from 'fs-extra-promise'
import glob from 'glob-promise'

const lineCount = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFileAsync(filename, {encoding : 'utf-8'})
            .then(data => {
                const length = data.split('\n').length
                resolve({filename, length})
            })
            .catch(err => console.log(err))
    })
}

const statPair = (filename) => {
    return new Promise((resolve, reject) => {
        fs.statAsync(filename)
            .then(stats => resolve({filename, stats}))
    })
}

const srcDir = process.argv[2]
glob(`${srcDir}/**/*.*`)
    .then(files => Promise.all(files.map(f => statPair(f))))
    .then(files => files.filter(f => f.stats.isFile()))
    .then(files => Promise.all(files.map(f => lineCount(f.filename))))
    .then(c => c.forEach(c => console.log(`${c.length}: ${c.filename}`)))
