import fs from 'fs-extra-promise'

const in_all = async (files) => {
    let lineCounter = {}
    for (const file of files) {
        const text = await fs.readFileAsync(file, 'utf-8')
        
        const lines = text.split('\n')
        for (const line of lines) {
            if (!lineCounter[line]) {
                lineCounter[line] = 1
            } else {
                lineCounter[line] += 1
            }
        }
    }
    
    for (const [line, num] of Object.entries(lineCounter)) {
        if (num == files.length) {
            console.log(line)
        }
    }
}

const files = process.argv.slice(2)
in_all(files)
