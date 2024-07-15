const options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
}

export default function humanDate(date) {
	const dateObj = new Date(date)
	return dateObj.toLocaleString('en-US', options)
}
