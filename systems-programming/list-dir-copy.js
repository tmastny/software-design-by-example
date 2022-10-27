import glob from 'glob'
import path from 'path'
import fs from 'fs-extra'

const [srcDir, dstDir] = process.argv.slice(2)

console.log(path.dirname(dstDir))
glob(`${srcDir}/*.*`, (err, files) => {
    for (const file of files) {
        fs.stat(file, (err, stats) => {
            if (stats.isFile()) {
                const new_file = file.replace(srcDir, dstDir)
                console.log(file, new_file)
            }
        })
    }
})
