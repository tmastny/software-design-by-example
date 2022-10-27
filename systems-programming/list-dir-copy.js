import glob from 'glob'
import path from 'path'

const [srcDir, dstDir] = process.argv.slice(2)

console.log(path.dirname(dstDir))
glob(`${srcDir}/*.*`, (err, files) => {
    for (const file of files) {
        const new_file = file.replace(srcDir, dstDir)
        console.log(file, new_file)
    }
})
