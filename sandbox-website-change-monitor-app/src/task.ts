const axios = require('axios').default;
import {createHash } from 'crypto';
// const axios = require('axios');

const run_task = ()=>{
	console.log('Running task');
	const url = "http://localhost:3001/";
	axios.get(url)
	.then( (response) => {
		
		console.log('got response');
		const htmlString = response.data;
		// handle success
		// console.log(typeof(response.data));
		// console.log(response.data);

		const hash = createHash('sha1').update(htmlString).digest('base64')
		console.log(hash)

	})
	.catch(function (error) {
		// handle error
		console.log(error);
	})

}

export { run_task }