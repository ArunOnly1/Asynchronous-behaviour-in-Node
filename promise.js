const p = new Promise((resolve, reject) => {
	// Kick off some async works
	// ...
	setTimeout(() => {
		// resolve(1) =>pending to resolved
		reject(new Error('message')) //Pending to rejected
	}, 2000)
})

p.then((result) => console.log('result', result)).catch((error) => {
	console.log('Error:', error.message)
})
