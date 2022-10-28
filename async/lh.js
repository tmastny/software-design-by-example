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

const lh = async (fileGlob) => {
    const files = await glob(fileGlob)

    const stats = await Promise.all(files.map(f => statPair(f)))
    
    const lines = await Promise.all(
        stats
            .filter(f => f.stats.isFile())
            .map(f => lineCount(f.filename))
    )
    
    let lineHistogram = {}
    for (const {_, length} of lines) {
        if (!lineHistogram[length]) {
            lineHistogram[length] = 1
        } else {
            lineHistogram[length] += 1
        }   
    }
    
    console.log(lineHistogram)
}

// example: ./**/*.*
const fileGlob = process.argv[2]
lh(fileGlob)
