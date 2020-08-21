const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');

const body = document.body;

//local Storage cache
const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
	body.classList.add(theme);
	isSolar && body.classList.add('solar');
}

//button Event Handlers

darkButton.onclick = () => {
	console.log('dark');
	body.classList.replace('light', 'dark');
	localStorage.setItem('theme', 'dark');
}

lightButton.onclick = () => {
	console.log('light');
	body.classList.replace('dark', 'light');
	localStorage.setItem('theme', 'light');
}

solarButton.onclick = () => {
	if (body.classList.contains('solar')) {
		body.classList.remove('solar');
		solarButton.style.cssText = `
		--bg-solar: var(--yellow)`
		localStorage.removeItem('isSolar');
	}

	else{
		solarButton.style.cssText=`
		--bg-solar: white`

		body.classList.add('solar');
		localStorage.setItem('isSolar', 'true');
	}
}


