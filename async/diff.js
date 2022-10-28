import fs from 'fs-extra-promise'

const diff = async (files) => {
    let line_diffs = {}
    for (const file of files) {
        const text = await fs.readFileAsync(file, 'utf-8')
        
        const lines = text.split('\n')
        for (const line of lines) {
            if (!line_diffs[line]) {
                line_diffs[line] = file
            } else {
                line_diffs[line] = '*'
            }
        }
    }
    
    for (const [line, source] of Object.entries(line_diffs)) {
        console.log(source, line)
    }
}

const files = process.argv.slice(2)
diff(files)
