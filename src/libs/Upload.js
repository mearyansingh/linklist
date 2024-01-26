/**All the image upload logic handled by this component */
import toast from 'react-hot-toast';

export async function Upload(e, callbackFn) {

	const file = e.target.files?.[0];

	if (file) {
		const data = new FormData();
		data.set('file', file)

		// Show loading toast
		const loadingToastId = toast.loading('Uploading image...');

		try {
			const response = await fetch('/api/upload', {
				method: 'POST',
				body: data,
			});

			if (response.ok) {
				const link = await response.json();
				// Close the loading toast
				toast.dismiss(loadingToastId);
				// Show success toast
				toast.success('Image uploaded successfully');
				// Call the callback function with the link
				callbackFn(link);
			} else {
				// Close the loading toast
				toast.dismiss(loadingToastId);
				// Show error toast
				toast.error('Error uploading image. Please try again.');
			}
		} catch (error) {
			// Close the loading toast
			toast.dismiss(loadingToastId);
			// Show error toast
			toast.error('An error occurred while uploading the image.');
			console.error('Error uploading image:', error);
		}
	}
}