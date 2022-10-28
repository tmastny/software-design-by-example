import fs from 'fs-extra-promise'

const head = async (files, n) => {
    for (const file of files) {
        if (files.length > 1) {
            console.log(`==> ${file} <==`)
        }
        const text = await fs.readFileAsync(file, 'utf-8')
        
        for (const lines of text.split('\n').slice(0, n)) {
            console.log(lines)
        }
        console.log('\n')
    }
}

const n = process.argv[2]
const files = process.argv.slice(3)

head(files, n)
