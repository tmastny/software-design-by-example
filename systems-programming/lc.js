import fs from 'fs'

const files = process.argv.slice(2)

let total = 0
for (const file of files) {
    const content = fs.readFileSync(file).toString()

    let lines = 0
    for (const letter of content) {
        if (letter == '\n') {
            lines++
        }
    }

    total += lines
    console.log(file, lines)    
}

console.log(`total ${total}`)
