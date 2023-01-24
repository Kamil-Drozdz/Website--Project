const modal = document.querySelector('.modal-container');
const errorMessage = document.querySelectorAll('.errorValid');
function toggleModal() {
	modal.classList.toggle('show-modal');
}

const form = document.querySelector('.myForm');

form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
	console.log('Przesyłam formularz');
});
const inputLocation = document.querySelector('#location');
const inputidCheckIn = document.querySelector('#check-in');
const inputidCheckOut = document.querySelector('#check-out');
const inputGuests = document.querySelector('#guest');

const inputLocationValue = inputLocation.value.trim();
const inputidCheckInValue = inputidCheckIn.value.trim();
const inputidCheckOutValue = inputidCheckOut.value.trim();
const inputGuestsValue = inputGuests.value.trim();

function checkInputs() {
	if (inputLocation === '') {
		setErrorFor(inputLocation);
	} else {
		setSuccessFor(inputLocation);
	}
	if (inputidCheckIn === '') {
		setErrorFor(inputidCheckIn);
	} else {
		setSuccessFor(inputidCheckIn);
	}
	if (inputidCheckOut === '') {
		setErrorFor(inputidCheckOut);
	} else {
		setSuccessFor(inputidCheckOut);
	}
	if (inputGuestsValue === 0) {
		setErrorFor(inputGuests);
	} else {
		setSuccessFor(inputGuests);
	}
}
function setErrorFor() {
	console.log('Wartość inputa nieuzupełniona');
}

function setSuccessFor() {
	console.log('Wartość inputa uzupełniona');
}

const navLinks = document.querySelector('.nav');
const toggleNav = document.querySelector('.nav-toggler');

toggleNav.addEventListener('click', () => {
	navLinks.classList.toggle('open');
	toggleNav.classList.toggle('is-active');
});
