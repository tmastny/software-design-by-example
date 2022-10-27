import glob from 'glob'

// alternatively: "list-dir-*.*"
glob("*.*", (err, files) => {
    files = files.filter(f => f.startsWith("list-dir-"))
    for (const file of files) {
        console.log(file)
    }
})
