document.addEventListener("DOMContentLoaded", function () {
	const appointmentsData = [
		{
			date: "September 12, 2023",
			name: "Trial Bride Updo",
			time: "10:20 AM",
			duration: "40 Minute(s)",
		},
		{
			date: "September 13, 2023",
			name: "Hair Coloring",
			time: "2:00 PM",
			duration: "60 Minute(s)",
		},
		{
			date: "September 13, 2023",
			name: "Hair Coloring",
			time: "2:00 PM",
			duration: "60 Minute(s)",
		},
		{
			date: "September 12, 2023",
			name: "Hair Coloring",
			time: "2:00 PM",
			duration: "60 Minute(s)",
		},
		// Add more appointments here as needed
	];

	appointmentsData.sort((a, b) => new Date(a.date) - new Date(b.date));

	renderAppointments(appointmentsData);
});

function renderAppointments(appointments) {
	const appointmentCardContainer = document.querySelector(
		".appointment-card-container"
	);

	let currentDate = null;
	let currentContainer = null;

	appointments.forEach((appointment) => {
		if (appointment.date !== currentDate) {
			// Create a new date container
			currentContainer = createAppointmentDateContainer(appointment.date);
			appointmentCardContainer.appendChild(currentContainer);
			currentDate = appointment.date;
		}

		// Create an appointment card and append it to the current date container
		const appointmentCard = createAppointmentCard(appointment);
		currentContainer.appendChild(appointmentCard);
	});
}

function createAppointmentDateContainer(date) {
	const appointmentDateContainer = document.createElement("div");
	appointmentDateContainer.classList.add("appointment-date");

	const currentDate = document.createElement("div");
	currentDate.classList.add("current-date");
	currentDate.innerHTML = `
        <h4>${date}</h4>
        <img src="img/add.png" alt="" />
    `;

	const appointmentCardContainer = document.createElement("div");
	appointmentCardContainer.classList.add("appointment-card-container");

	appointmentDateContainer.appendChild(currentDate);
	appointmentDateContainer.appendChild(appointmentCardContainer);

	return appointmentDateContainer;
}

function createAppointmentCard(appointment) {
	const appointmentCard = document.createElement("div");
	appointmentCard.classList.add("appointment-card");
	appointmentCard.innerHTML = `
        <div class="card-text">
            <h3>${appointment.name}</h3>
            <p>${appointment.time} | ${appointment.duration}</p>
        </div>
        <div class="appointment-option">
            <img class="appointment-done-img" src="img/accept.png" alt="" />
            <div class="appointment-more">
							<div class="edit-btn">
								<img src="img/more.png" alt="Edit" />
								<p>Edit</p>
							</div>
							<div class="delete-btn">
								<img src="img/close.png" alt="Edit" />
								<p>Delete</p>
							</div>
						</div>
        </div>
    `;
	return appointmentCard;
}
