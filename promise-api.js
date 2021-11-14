// const p = Promise.reject(new Error('reason for rejection'))
// p.catch((err) => console.log(err))

const p2 = new Promise((resolve) => {
	setTimeout(() => {
		console.log('Asynchronous operation 2..')
		resolve(2)
	}, 2000)
})
const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log('Asynchronous operation 1..')
		resolve(1)
		// reject(new Error('sthg failed'))
	}, 2000)
})

// Kicking(starting) both async operation  almost at same time

Promise.all([p1, p2])
	.then((result) => console.log(result))
	.catch((err) => console.log('result from all', err.message))

// Any one is fulfilled, it works
Promise.race([p1, p2])
	.then((result) => console.log('result from race', result))
	.catch((err) => console.log(err.message))
