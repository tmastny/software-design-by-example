import fs from 'fs'

const srcDir = process.argv[2]
fs.readdir(srcDir, (err, files) => {
    for (const name of files) {
        console.log(name)
    }
})
