import fs from 'fs-extra-promise'
import glob from 'glob-promise'

const preview = async (filename) => {
    const text = await fs.readFileAsync(filename, 'utf-8')
    return text.slice(0, 10)
}

const file = process.argv[2]

preview(file)
    .then(p => console.log(p))
