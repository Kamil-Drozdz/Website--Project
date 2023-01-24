const modalPopup = document.querySelector('.modal-container');
const errorMessage = document.querySelectorAll('.errorValid');
function toggleModal() {
	modalPopup.classList.toggle('show-modal');
}

const entireForm = document.querySelector('.myForm');

entireForm.addEventListener('submit', e => {
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

const navbarLinks = document.querySelector('.nav');
const navbarToggle = document.querySelector('.nav-toggler');

navbarToggle.addEventListener('click', () => {
	navbarLinks.classList.toggle('open');
	navbarToggle.classList.toggle('is-active');
});
