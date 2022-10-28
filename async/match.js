import fs from 'fs-extra-promise'

const match = async (target, files) => {
    for (const file of files) {
        const text = await fs.readFileAsync(file, 'utf-8')
        
        console.log(`==> ${file} <==`)
        const lines = text.split('\n').filter(l => l.includes(target))
        for (const line of lines) {
            console.log(line)
        }
        console.log()
    }
}

const target = process.argv[2]
const files = process.argv.slice(3)
match(target, files)
