import glob from 'glob'
import { start } from 'repl'

const srcDir = process.argv[2]
const endsWith = process.argv[3]

glob(`${srcDir}/*`, (err, files) => {
    files = files.filter(f => f.endsWith(endsWith))
    for (const file of files) {
        console.log(file)
    }
})
