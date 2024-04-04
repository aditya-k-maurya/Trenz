document.addEventListener("DOMContentLoaded", function () {
	//switch appointment - transaction

	const appointBtn = document.querySelector("#appointment-btn");
	const transBtn = document.querySelector("#transaction-btn");
	let appointmentTitle = document.querySelector("#appointment-title");

	const appointmentCont = document.querySelector(".appointment-date");
	const transactionCont = document.querySelector(".transaction-container");

	appointBtn.addEventListener("click", (event) => {
		appointmentTitle.textContent = "Appointments";
		transactionCont.style.display = "none";
		appointmentCont.style.display = "block";
	});

	transBtn.addEventListener("click", (event) => {
		appointmentTitle.textContent = "Transactions";
		transactionCont.style.display = "block";
		appointmentCont.style.display = "none";
	});

	// swipe feature

	let currentSwipedBox = null; // Keep track of the currently swiped box

	function handleStart(event) {
		if (currentSwipedBox && currentSwipedBox !== event.currentTarget) {
			resetSwipedBox(); // Reset the previously swiped box
		}
		currentSwipedBox = event.currentTarget;
		currentSwipedBox.startX = event.touches[0].clientX;
	}

	function handleEnd(event) {
		const deltaX = event.changedTouches[0].clientX - currentSwipedBox.startX;
		const windowWidth = window.innerWidth;

		const appointmentBox = currentSwipedBox.querySelector(".appointment-box");

		if (windowWidth < 650) {
			appointmentBox.style.transform =
				deltaX < -50 ? "translateX(-100px)" : "translateX(0px)";
		}
	}

	function resetSwipedBox() {
		const appointmentBox = currentSwipedBox.querySelector(".appointment-box");
		appointmentBox.style.transform = "translateX(0px)";
		currentSwipedBox = null;
	}

	document.querySelectorAll(".appointment-card").forEach((appointmentCard) => {
		appointmentCard.startX = 0;
		appointmentCard.addEventListener("touchstart", handleStart);
		appointmentCard.addEventListener("touchend", handleEnd);
	});

	document.body.addEventListener("click", function (event) {
		if (!event.target.closest(".appointment-card")) {
			resetSwipedBox();
		}
	});

	// menu script

	const menuDisplay = document.querySelector(".menu-display");
	const menuContainer = document.getElementById("menu");
	const menuIcon = document.getElementById("menuIcon");

	menuDisplay.addEventListener("click", function () {
		if (menuContainer.style.maxHeight === "1000px") {
			// menuContainer.style.display = "none";
			menuContainer.style.maxHeight = "0px";
			menuContainer.style.right = "-100%";
			menuIcon.src = "img/menu.png";
		} else {
			// menuContainer.style.display = "block";
			menuIcon.src = "img/close1.png";
			menuContainer.style.right = "calc(5% - 10px)";
			menuContainer.style.maxHeight = "1000px";
		}
	});
});
