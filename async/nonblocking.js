// Note that for loop completes before the nonblocking
// line is ran. 

const a = [1000, 1500, 500]
for (const t of a) {
    console.log(`about to do nonblocking for ${t}`)
    // nonblocking
    setTimeout(() => console.log(`inside handler for ${t}`), 0)
}