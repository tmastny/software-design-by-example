import fs from 'fs-extra-promise'
import glob from 'glob-promise'

const lineCount = async (filename) => {
    const text = await fs.readFileAsync(filename, 'utf-8')
    const length = text.split('\n').length
    return {filename, length}
}

const statPair = async (filename) => {
    const stats = await fs.statAsync(filename)
    return {filename, stats}
}

const srcDir = process.argv[2]
glob(`${srcDir}/**/*.*`)
    .then(files => Promise.all(files.map(f => statPair(f))))
    .then(files => files.filter(f => f.stats.isFile()))
    .then(files => Promise.all(files.map(f => lineCount(f.filename))))
    .then(c => c.forEach(c => console.log(`${c.length}: ${c.filename}`)))
