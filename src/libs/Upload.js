/**All the image upload logic handled by this component */
export async function Upload(e, callbackFn) {

	const file = e.target.files?.[0];

	if (file) {
		const data = new FormData();
		data.set('file', file)
		fetch('/api/upload', {
			method: 'POST',
			body: data
		}).then(response => {
			response.json().then(link => {
				// console.log(link, "link")
				callbackFn(link)
			})
		})
	}
}