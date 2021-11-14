// Callbacks =>call back hell
// Promises
// Async/Await => just syntactical sugar

const getUser = (id, callback) => {
	setTimeout(() => {
		console.log('Reading a user from database...')
		callback({ id, githubUsername: 'mosh' })
	}, 2000)
}

const getRepositories = (username, callback) => {
	setTimeout(() => {
		console.log('Getting repos of user')
		callback(['repo1', 'repo2', 'repo3'])
	}, 2000)
}

// Calling the functions
console.log('Before')
getUser(1, (user) => {
	console.log('User', user)
	// Get the repositories
	getRepositories(user, (repos) => {
		console.log('Repos', repos)
	})
})

console.log('After')

// Promises
