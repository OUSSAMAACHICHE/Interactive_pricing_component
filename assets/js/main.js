const rangeBtn = document.getElementById('range');
let result = document.querySelector('.result .price');
let totalViwes = document.querySelector('.pageviews span');

rangeBtn.addEventListener('input', price);
rangeBtn.addEventListener('input', calcViwes);



let biliResult = 0;
// check biling case
let check = false;
function price() {
	
	if(rangeBtn.value === '1') {
		biliResult = 8;
	} else if(rangeBtn.value === '2') {
		biliResult = 12;
	} else if(rangeBtn.value === '3') {
		biliResult = 16;
	} else if (rangeBtn.value === '4') {
		biliResult = 24;
	} else { 
		biliResult = 36;
	}
	if(check) {
		parseInt((biliResult *= 12));
		
		document.getElementById('bili').innerText = '/Year';
	} else {
		document.getElementById('bili').innerText = '/Month';
	}
	
	result.innerHTML = `$${biliResult}.00`;
}






// click toggle btn 
document.querySelector('.toggle_btn').onclick = function() {
	// check if the toggle btn it's monthly case
	if (!check) {

		document.getElementById('check').parentElement.style.backgroundColor = 'hsl(174, 77%, 80%)';
		document.getElementById('check').style.left = '25px';
		check = true;

	} else { // if the toggle btn it's Yearly case


		document.getElementById('check').parentElement.style.backgroundColor = "hsl(223, 50%, 87%)";
		document.getElementById('check').style.left = '5px';
		check = false;
	}
	price();
}


function calcViwes() {

	switch(rangeBtn.value) {
		case '1': 
		totalViwes.textContent = 10 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 5%, hsl(224, 65%, 95%)  5%)`;
		break;
		case '2': 
		totalViwes.textContent = 50 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 25%, hsl(224, 65%, 95%)  25%)`;
		break;
		case '3': 
		totalViwes.textContent = 100 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%)  50%)`;
		break;
		case '4': 
		totalViwes.textContent = 500 + 'K';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 75%, hsl(224, 65%, 95%)  75%)`;
		break;
		case '5': 
		totalViwes.textContent = 1 + 'M';
		rangeBtn.style.backgroundImage = `linear-gradient(90deg, hsl(174, 77%, 80%) 100% , hsl(224, 65%, 95%) 0%)`;
	}

}