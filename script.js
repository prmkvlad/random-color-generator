const colorList = document.querySelector('.color-list');

function copyColor(button) {
	const color = button.getAttribute('data-color');
	navigator.clipboard.writeText(color).then(() => {
		const tooltip = button.querySelector('.tooltip-text');
		tooltip.innerHTML = 'Copied!';
	});
}

function outFunc(button) {
	const tooltip = button.querySelector('.tooltip-text');
	tooltip.innerHTML = 'Copy to clipboard';
}

function getRandomHexColorCode() {
	let n = (Math.random() * 0xfffff * 1000000).toString(16);
	return '#' + n.slice(0, 6);
}

document.querySelector('.generateBtn').addEventListener('click', () => {
	colorList.innerHTML = '';

	for (let i = 0; i < 32; i++) {
		let generatedColor = getRandomHexColorCode();

		colorList.insertAdjacentHTML('beforeend',
			`<li class="color-item" style="background-color: ${generatedColor}">
				<button class="color-link tooltip" data-color="${generatedColor}">
					<span class="tooltip-text">Copy to clipboard</span>
					<span class="color-code">${generatedColor}</span>
				</button>
			</li>`
		)
	}
});

document.querySelector('.color-list').addEventListener('click', function (event) {
	const button = event.target.closest('.color-link');
	if (button) {
		copyColor(button);
	}
});

document.querySelector('.color-list').addEventListener('mouseout', function (event) {
	const button = event.target.closest('.color-link');
	if (button) {
		outFunc(button);
	}
});

