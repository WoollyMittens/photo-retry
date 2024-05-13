export class PhotoRetry {
	constructor(alternates) {
		this.alternates = alternates;
		const images = document.querySelectorAll('img');
		for (let image of images) {
			image.addEventListener('error', this.retry.bind(this, image));
			image.src = image.src + '?rnd=' + new Date().getTime();
		}
	}

	retry(image) {
		let currentRetry = +image.getAttribute('data-retries') || 0;
		const maxRetries = this.alternates.length;
		if (currentRetry < maxRetries) {
			let file =  image.src.replace(/^.*\/\/[^\/]+/, '');
			image.src = this.alternates[currentRetry].replace('{f}', file);
			image.setAttribute('data-retries', currentRetry + 1);
		}
	}
}

window.PhotoRetry = PhotoRetry;
