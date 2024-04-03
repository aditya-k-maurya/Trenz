document.addEventListener("DOMContentLoaded", function () {
	// Transaction data array (simulated data for debugging)
	const transactionData = [
		{
			booking_date: "2023-09-12T10:20",
			template_name: "Trial Bride Updo",
			duration: 40,
			// Add other transaction properties as needed
		},
		// Add more transaction objects as needed
	];

	// Sort transactionData by booking_date in descending order
	transactionData.sort((a, b) => {
		const dateA = new Date(a.booking_date);
		const dateB = new Date(b.booking_date);
		return dateB - dateA;
	});

	// Render transactions
	renderTransaction(transactionData);
});

// Function to render transaction cards
function renderTransaction(transactions) {
	const transactionCardContainer = document.querySelector(
		".appointment-card-container"
	);

	// Check if transactionCardContainer exists
	if (!transactionCardContainer) {
		console.error("Transaction card container not found");
		return;
	}

	// Iterate over each transaction and create transaction cards
	transactions.forEach((transaction) => {
		const transactionCard = createTransactionCard(transaction);
		if (transactionCard) {
			transactionCardContainer.appendChild(transactionCard);
		} else {
			console.error("Failed to create transaction card");
		}
	});
}

// Function to create a transaction card
function createTransactionCard(transaction) {
	const durationString =
		transaction.duration > 60
			? `${transaction.duration / 60} Hour(s)`
			: `${transaction.duration} Minute(s)`;

	// Create elements for transaction card
	const transactionCard = document.createElement("div");
	transactionCard.classList.add("appointment-card");

	transactionCard.innerHTML = `
        <div class="appointment-box">
            <div class="card-text">
                <h3>${transaction.template_name}</h3>
                <p>${startTime(
									transaction.booking_date
								)} | ${durationString}</p>
            </div>
            <img class="appointment-done-img" src="img/accept.png" alt="" />
        </div>
        <div class="appointment-option">
            <div class="edit-btn">
                <img src="img/more.png" alt="Edit" />
                <p>Edit</p>
            </div>
            <div class="delete-btn">
                <img src="img/close.png" alt="Edit" />
                <p>Cancel</p>
            </div>
        </div>
    `;

	return transactionCard;
}

// Function to format start time
function startTime(time) {
	const date = new Date(time);
	let hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const meridiem = hours >= 12 ? "PM" : "AM";

	hours = hours % 12 || 12;

	hours = hours.toString().padStart(2, "0");

	return `${hours}:${minutes} ${meridiem}`;
}
