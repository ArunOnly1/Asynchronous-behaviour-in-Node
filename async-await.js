// Async await
// it allows us to write asynchronous  code as a synchronous  code

const getUser = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			// resolve('arun')
			reject(new Error('sthg failed'))
		}, 1000)
	})
}

const extractUser = async () => {
	try {
		const user = await getUser()
		console.log(user)
	} catch (error) {
		console.log(error)
	}
}

extractUser()
