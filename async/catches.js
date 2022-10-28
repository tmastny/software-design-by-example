const oops = new Promise((resolve, reject) => reject(new Error('failure')))
oops.catch(err => console.log(err.message, 1))
oops.catch(err => console.log(err.message, 2))
