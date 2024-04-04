document.addEventListener("DOMContentLoaded", function () {
	const transactionData = [
		{
			booking_date: "2024-03-26T09:20",
			template_price: 22,
			client_full_name: "Garvit Bhatia",
			transaction_date: "2024-03-24T12:33:28.388Z",
			template_cost: 2.5,
			transaction_id: "YBFJ1711283608388",
			transaction_month_year: "03-2024",
			payment_total: 270,
			template_name: "Beard Trim",
			booking_staff_code: "GCRA0002",
			party_bookings: [
				{
					staff_name: "Adrian Minnella",
					notes: "",
					client_landline: "",
					created_at: "2024-03-24T12:32:14.834Z",
					client_id: "generic_guest_1711283531020",
					template_cost: "",
					booking_id: "GIDQ1711283534834",
					duration: 40,
					updated_at: "2024-03-24T12:32:29.383Z",
					price: 55,
					template_cadence: "14",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "AMH66",
					start_year_month: "2024-03",
					booking_total: 192.1,
					booking_products: [
						{
							unavailable_times: [],
							quantity: 39,
							cost: 10,
							notes: "",
							taxable: true,
							created_at: "2024-01-22T16:56:20.011Z",
							description: "",
							lower_resource_id: "lig01",
							type: "product",
							product_staff: [],
							shown_on_cart: true,
							product_type: "retail",
							updated_at: "2024-03-11T17:31:03.355Z",
							lower_name: "lightner (scoups)",
							price: 10,
							qty: 1,
							name: "LIGHTNER (SCOUPS)",
							resource_id: "LIG01",
							brand: "Swarts",
							timestamp: 1705942580011,
						},
						{
							unavailable_times: [],
							quantity: -1,
							cost: 5,
							notes: "",
							taxable: true,
							created_at: "2024-03-14T11:55:19.733Z",
							description: "",
							lower_resource_id: "qty2",
							type: "product",
							product_staff: [],
							shown_on_cart: true,
							product_type: "chemical",
							lower_name: "quantity tester",
							price: 10,
							qty: 1,
							name: "QUANTITY TESTER",
							resource_id: "QTY2",
							brand: "TY",
							timestamp: 1710417319733,
						},
						{
							quantity: 1,
							cost: "15.00",
							taxable: true,
							price: "20.00",
							qty: 1,
							name: "COMPLEX CONCURRENT 5",
							template_id: "COMPLEX5",
						},
						{
							quantity: 1,
							cost: "0.00",
							taxable: true,
							price: "75.00",
							qty: 1,
							name: "Mens Bleach & Cut",
							template_id: "2BMC",
						},
					],
					booking_tax: 22.1,
					start_time: "2024-03-26T09:20",
					template_name: "Beard & Men Cut",
					subtotal: 170,
					user_booked: false,
					template_id: "1BEA&MCUT",
					template_slots: [],
					specific_service: "",
				},
			],
			tax_id: null,
			payment_discount: 0,
			booking_products: [
				{
					unavailable_times: [],
					quantity: 44,
					cost: 24.83,
					notes:
						"This is a specifit staff test product by Ricardo, created on 2024/01/16 - NOTES",
					taxable: true,
					created_at: "2024-02-13T15:37:09.528Z",
					description:
						"This is a specifit staff test product by Ricardo, created on 2024/01/16",
					lower_resource_id: "res011624",
					type: "product",
					product_staff: [
						{
							name: "Peter Griffin",
							resource_id: "PGRA001",
							product_price: 30.79,
						},
						{
							name: "Glenn Quagmire",
							resource_id: "GCRA0002",
							product_price: 41.77,
						},
					],
					shown_on_cart: true,
					product_type: "",
					updated_at: "2024-03-11T17:27:53.904Z",
					lower_name: "test res staff jan 16 - 2024",
					price: 41.77,
					qty: 1,
					name: "TEST RES STAFF JAN 16 - 2024",
					resource_id: "RES011624",
					brand: "Test Brand by Ricardo",
					timestamp: 1707838629528,
				},
			],
			client_id: "garvit510bhatia-at-gmail.com",
			payment_tip: 5.84,
			client_phone: "+12498011458",
			client_email: "garvit510bhatia@gmail.com",
			booking_lower_staff_code: "gcra0002",
			booking_lower_staff_name: "glenn quagmire",
			party_bookings_total: 170,
			payment_type: "visa",
			template_id: "1BTW",
			payment_products_total: 41.77,
			booking_id: "RYSL1711283569663",
			booking_staff_name: "Glenn Quagmire",
			payment_tax: 30.39,
		},
		{
			booking_date: "2024-03-24T11:20",
			template_price: 10,
			client_full_name: "Garvit Bhatia",
			transaction_date: "2024-03-24T11:34:22.405Z",
			template_cost: 2.5,
			transaction_id: "WYYM1711280062405",
			transaction_month_year: "03-2024",
			payment_total: 160,
			template_name: "Bang Trim",
			booking_staff_code: "CM9O9O",
			party_bookings: [
				{
					staff_name: "David Test Staff",
					notes: "",
					client_landline: "",
					created_at: "2024-03-24T11:33:34.142Z",
					client_id: "generic_guest_1711280010174",
					template_cost: "",
					booking_id: "DQDI1711280014142",
					duration: 40,
					updated_at: "2024-03-24T11:33:45.394Z",
					price: 55,
					template_cadence: "14",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "DTS123",
					start_year_month: "2024-03",
					booking_total: 118.65,
					booking_products: [
						{
							unavailable_times: [],
							quantity: 44,
							cost: 10,
							notes: "",
							taxable: true,
							created_at: "2024-01-22T16:56:20.011Z",
							description: "",
							lower_resource_id: "lig01",
							type: "product",
							product_staff: [],
							shown_on_cart: true,
							product_type: "retail",
							updated_at: "2024-03-11T17:31:03.355Z",
							lower_name: "lightner (scoups)",
							price: 10,
							qty: "5",
							name: "LIGHTNER (SCOUPS)",
							resource_id: "LIG01",
							brand: "Swarts",
							timestamp: 1705942580011,
						},
					],
					booking_tax: 13.65,
					start_time: "2024-03-24T11:20",
					template_name: "Beard & Men Cut",
					subtotal: 105,
					user_booked: false,
					template_id: "1BEA&MCUT",
					template_slots: [],
					specific_service: "",
				},
			],
			tax_id: null,
			payment_discount: 0,
			booking_products: [
				{
					unavailable_times: [],
					quantity: 24,
					cost: 5,
					notes: "",
					taxable: true,
					created_at: "2024-02-07T22:02:44.732Z",
					description: "",
					lower_resource_id: "072140002541",
					type: "product",
					product_staff: [],
					shown_on_cart: true,
					product_type: "",
					updated_at: "2024-03-11T17:28:07.123Z",
					lower_name: "skin firming hydration",
					price: 12,
					qty: "2",
					name: "SKIN FIRMING HYDRATION",
					resource_id: "072140002541",
					brand: "NIVEA",
					timestamp: 1707343364732,
				},
			],
			client_id: "garvit510bhatia-at-gmail.com",
			payment_tip: 2.93,
			client_phone: "+12498011458",
			client_email: "garvit510bhatia@gmail.com",
			booking_lower_staff_code: "cm9o9o",
			booking_lower_staff_name: "chrit may",
			party_bookings_total: 105,
			payment_type: "visa",
			template_id: "1BFT",
			payment_products_total: 24,
			booking_id: "GCWG1711280040322",
			booking_staff_name: "Chrit May",
			payment_tax: 18.07,
		},
		{
			booking_date: "2024-03-24T10:00",
			template_price: 22,
			client_full_name: "Garvit Bhatia",
			transaction_date: "2024-03-24T11:23:05.252Z",
			template_cost: 2.5,
			transaction_id: "IJSD1711279385252",
			transaction_month_year: "03-2024",
			payment_total: 170,
			template_name: "Beard Trim",
			booking_staff_code: "CM9O9O",
			party_bookings: [
				{
					staff_name: "David Test Staff",
					notes: "",
					client_landline: "",
					created_at: "2024-03-24T11:22:05.767Z",
					client_id: "generic_guest_1711279323206",
					template_cost: "",
					booking_id: "TCQA1711279325767",
					duration: 40,
					updated_at: "2024-03-24T11:22:24.272Z",
					price: 50,
					template_cadence: "30",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "DTS123",
					start_year_month: "2024-03",
					booking_total: 129.95,
					booking_products: [
						{
							unavailable_times: [],
							quantity: 45,
							cost: 10,
							notes: "",
							taxable: true,
							created_at: "2024-01-22T16:56:20.011Z",
							description: "",
							lower_resource_id: "lig01",
							type: "product",
							product_staff: [],
							shown_on_cart: true,
							product_type: "retail",
							updated_at: "2024-03-11T17:31:03.355Z",
							lower_name: "lightner (scoups)",
							price: 10,
							qty: 1,
							name: "LIGHTNER (SCOUPS)",
							resource_id: "LIG01",
							brand: "Swarts",
							timestamp: 1705942580011,
						},
						{
							unavailable_times: [],
							quantity: 3,
							cost: 5,
							notes: "",
							taxable: true,
							created_at: "2024-03-08T23:39:16.185Z",
							description: "",
							lower_resource_id: "nnnnttt",
							type: "product",
							product_staff: [],
							shown_on_cart: false,
							product_type: "chemical",
							lower_name: "no-show-on-cart",
							price: 55,
							qty: 1,
							name: "NO-SHOW-ON-CART",
							resource_id: "NNNNTTT",
							brand: "56hy",
							timestamp: 1709941156185,
						},
					],
					booking_tax: 14.95,
					start_time: "2024-03-24T10:00",
					template_name: "Blow Dry & Style",
					subtotal: 115,
					user_booked: false,
					template_id: "1XBLOW",
					template_slots: [],
					specific_service: "",
				},
			],
			tax_id: null,
			payment_discount: 0,
			booking_products: [
				{
					unavailable_times: [],
					quantity: 96,
					cost: 10,
					notes: "",
					taxable: true,
					created_at: "2024-01-22T16:56:49.294Z",
					description: "",
					lower_resource_id: "perm01",
					type: "product",
					product_staff: [],
					shown_on_cart: true,
					product_type: "",
					updated_at: "2024-03-11T17:35:09.014Z",
					lower_name: "perm (box)",
					price: 10,
					qty: 1,
					name: "PERM (BOX)",
					resource_id: "PERM01",
					brand: "Swarts",
					timestamp: 1705942609294,
				},
			],
			client_id: "garvit510bhatia-at-gmail.com",
			payment_tip: 3.89,
			client_phone: "+12498011458",
			client_email: "garvit510bhatia@gmail.com",
			booking_lower_staff_code: "cm9o9o",
			booking_lower_staff_name: "chrit may",
			party_bookings_total: 115,
			payment_type: "visa",
			template_id: "1BTW",
			payment_products_total: 10,
			booking_id: "GIYJ1711279368183",
			booking_staff_name: "Chrit May",
			payment_tax: 19.11,
		},
		{
			booking_date: "2024-03-24T09:00",
			template_price: 22,
			client_full_name: "Garvit Bhatia",
			transaction_date: "2024-03-24T11:20:42.088Z",
			template_cost: 2.5,
			transaction_id: "VINB1711279242088",
			transaction_month_year: "03-2024",
			payment_total: 700,
			template_name: "Beard Trim",
			booking_staff_code: "CM9O9O",
			party_bookings: [
				{
					staff_name: "David Test Staff",
					notes: "",
					client_landline: "",
					created_at: "2024-03-24T11:20:10.144Z",
					client_id: "generic_guest_1711279207406",
					template_cost: 65,
					booking_id: "WGOI1711279210144",
					duration: 40,
					price: 555,
					template_cadence: "30",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "DTS123",
					start_year_month: "2024-03",
					booking_total: 627.15,
					booking_products: [],
					booking_tax: 72.15,
					start_time: "2024-03-24T09:00",
					template_name: "2-1",
					subtotal: 555,
					user_booked: false,
					template_id: "2-1",
					template_slots: [
						{
							step: "FOIL APPLICATION C2",
							slot: "00:00 - 00:20",
							slot_staff: [],
							concurrency: "2",
						},
						{
							step: "FOILS FINAL SLOT",
							slot: "00:20 - 00:40",
							slot_staff: [],
							concurrency: "1",
						},
					],
					specific_service: "",
				},
			],
			tax_id: null,
			payment_discount: 0,
			booking_products: [],
			client_id: "garvit510bhatia-at-gmail.com",
			payment_tip: 47.99,
			client_phone: "+12498011458",
			client_email: "garvit510bhatia@gmail.com",
			booking_lower_staff_code: "cm9o9o",
			booking_lower_staff_name: "chrit may",
			party_bookings_total: 555,
			payment_type: "master card",
			template_id: "1BTW",
			payment_products_total: 0,
			booking_id: "VFYM1711279226617",
			booking_staff_name: "Chrit May",
			payment_tax: 75.01,
		},
		{
			booking_date: "2023-09-23T09:20",
			template_price: 50,
			client_full_name: "Garvit Bhatia",
			transaction_date: "2024-03-19T19:46:37.081Z",
			template_cost: 0,
			transaction_id: "ZMBP1710877597081",
			transaction_month_year: "03-2024",
			payment_total: 270,
			template_name: "Colour Roots",
			booking_staff_code: "PB44T4",
			party_bookings: [
				{
					staff_name: "Carmen Minnella",
					notes: "",
					client_landline: "",
					created_at: "2024-03-19T19:44:41.772Z",
					client_id: "generic_guest_1710877478476",
					template_cost: 2.5,
					booking_id: "NAKZ1710877481772",
					duration: 20,
					updated_at: "2024-03-19T19:45:10.022Z",
					price: 10,
					template_cadence: "30",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "CMRY6",
					start_year_month: "2023-09",
					booking_total: 135.6,
					booking_products: [
						{
							unavailable_times: [],
							quantity: 14,
							cost: 5,
							notes: "",
							taxable: true,
							created_at: "2024-03-08T14:46:09.183Z",
							description: "",
							lower_resource_id: "ttt444",
							type: "product",
							product_staff: [],
							shown_on_cart: true,
							product_type: "retail",
							updated_at: "2024-03-08T21:11:50.564Z",
							lower_name: "tester3",
							price: 55,
							qty: 1,
							name: "TESTER3",
							resource_id: "TTT444",
							brand: "TYYY",
							timestamp: 1709909169183,
						},
						{
							unavailable_times: [],
							quantity: 35,
							cost: 4,
							notes: "",
							taxable: true,
							created_at: "2024-02-07T21:25:21.382Z",
							description: "",
							lower_resource_id: "075609208348",
							type: "product",
							product_staff: [],
							shown_on_cart: false,
							product_type: "chemical",
							updated_at: "2024-03-08T23:26:45.489Z",
							lower_name: "smoothing body lotion",
							price: 7,
							qty: "5",
							name: "SMOOTHING BODY LOTION",
							resource_id: "075609208348",
							brand: "OLAY",
							timestamp: 1707341121382,
						},
						{
							quantity: 1,
							cost: "15.00",
							taxable: true,
							price: "20.00",
							qty: 1,
							name: "COMPLEX CONCURRENT 5",
							template_id: "COMPLEX5",
						},
					],
					booking_tax: 15.6,
					start_time: "2023-09-23T09:00",
					template_name: "Bang Trim",
					subtotal: 120,
					user_booked: false,
					template_id: "1BFT",
					template_slots: [],
					specific_service: "",
				},
			],
			tax_id: null,
			payment_discount: 0,
			booking_products: [
				{
					unavailable_times: [],
					quantity: 30,
					cost: 5,
					notes: "",
					taxable: true,
					created_at: "2024-02-07T22:02:44.732Z",
					description: "",
					lower_resource_id: "072140002541",
					type: "product",
					product_staff: [],
					shown_on_cart: true,
					product_type: "",
					updated_at: "2024-03-11T17:28:07.123Z",
					lower_name: "skin firming hydration",
					price: 12,
					qty: "5",
					name: "SKIN FIRMING HYDRATION",
					resource_id: "072140002541",
					brand: "NIVEA",
					timestamp: 1707343364732,
				},
			],
			client_id: "garvit510bhatia-at-gmail.com",
			payment_tip: 10.1,
			client_phone: "+12498011458",
			client_email: "garvit510bhatia@gmail.com",
			booking_lower_staff_code: "pb44t4",
			booking_lower_staff_name: "paige backstrom",
			party_bookings_total: 120,
			payment_type: "master card",
			template_id: "1RTS",
			payment_products_total: 60,
			booking_id: "BDVI1710877528661",
			booking_staff_name: "Paige Backstrom",
			payment_tax: 29.9,
		},
		{
			booking_date: "2023-09-20T09:00",
			template_price: 10,
			client_full_name: "Garvit Bhatia",
			transaction_date: "2024-03-19T17:47:33.234Z",
			template_cost: 2.5,
			transaction_id: "XXQY1710870453234",
			transaction_month_year: "03-2024",
			payment_total: 130,
			template_name: "Bang Trim",
			booking_staff_code: "PGRA001",
			party_bookings: [
				{
					staff_name: "Peter Griffin",
					notes: "",
					client_landline: "",
					created_at: "2024-03-19T17:46:58.339Z",
					client_id: "generic_guest_1710870414400",
					template_cost: 2.5,
					booking_id: "HJMW1710870418339",
					duration: 20,
					price: 22,
					template_cadence: "14",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "PGRA001",
					start_year_month: "2023-09",
					booking_total: 55.37,
					booking_products: [
						{
							name: "COMPLEX CONCURRENT 5",
							template_id: "COMPLEX5",
							quantity: 1,
							cost: "15.00",
							price: "20.00",
							qty: 1,
						},
						{
							unavailable_times: [],
							quantity: 37,
							cost: 4,
							notes: "",
							taxable: true,
							created_at: "2024-02-07T21:25:21.382Z",
							description: "",
							lower_resource_id: "075609208348",
							type: "product",
							product_staff: [],
							shown_on_cart: false,
							product_type: "chemical",
							updated_at: "2024-03-08T23:26:45.489Z",
							lower_name: "smoothing body lotion",
							price: 7,
							qty: 1,
							name: "SMOOTHING BODY LOTION",
							resource_id: "075609208348",
							brand: "OLAY",
							timestamp: 1707341121382,
						},
					],
					booking_tax: 6.37,
					start_time: "2023-09-20T09:20",
					template_name: "Beard Trim",
					subtotal: 49,
					user_booked: false,
					template_id: "1BTW",
					template_slots: [],
					specific_service: "",
				},
			],
			tax_id: null,
			payment_discount: 0,
			booking_products: [
				{
					unavailable_times: [],
					quantity: 17,
					cost: 5,
					notes: "",
					taxable: true,
					created_at: "2024-03-08T14:46:09.183Z",
					description: "",
					lower_resource_id: "ttt444",
					type: "product",
					product_staff: [],
					shown_on_cart: true,
					product_type: "retail",
					updated_at: "2024-03-08T21:11:50.564Z",
					lower_name: "tester3",
					price: 55,
					qty: 1,
					name: "TESTER3",
					resource_id: "TTT444",
					brand: "TYYY",
					timestamp: 1709909169183,
				},
			],
			client_id: "garvit510bhatia-at-gmail.com",
			payment_tip: 3.78,
			client_phone: "+12498011458",
			client_email: "garvit510bhatia@gmail.com",
			booking_lower_staff_code: "pgra001",
			booking_lower_staff_name: "peter griffin",
			party_bookings_total: 49,
			payment_type: "master card",
			template_id: "1BFT",
			payment_products_total: 55,
			booking_id: "PXPW1710870388126",
			booking_staff_name: "Peter Griffin",
			payment_tax: 12.22,
		},
	];

	transactionData.sort((a, b) => {
		const dateA = new Date(a.booking_date);
		const dateB = new Date(b.booking_date);
		return dateB - dateA;
	});

	renderTransaction(transactionData);
});

// Function to render transaction cards
function renderTransaction(transactions) {
	const transactionCardContainer = document.querySelector(
		".transaction-card-container"
	);

	let currentDate = null;
	let currentContainer = null;

	transactions.forEach((transaction) => {
		const thisDate = formatDate(transaction.booking_date);

		if (thisDate !== currentDate) {
			// Create a new date container
			currentContainer = createTransactionDateContainer(thisDate);
			transactionCardContainer.appendChild(currentContainer);
			currentDate = thisDate;
		}

		// Create an transaction card and append it to the current date container
		const transactionCard = createTransactionCard(transaction);
		currentContainer.appendChild(transactionCard);
	});
}

function createTransactionDateContainer(date) {
	const transactionDateContainer = document.createElement("div");
	transactionDateContainer.classList.add("transaction-container");

	const currentDate = document.createElement("div");
	currentDate.classList.add("current-date");
	currentDate.innerHTML = `
        <h4>${date}</h4>
        <img src="img/add.png" alt="" />
    `;

	const transactionCardContainer = document.createElement("div");
	transactionCardContainer.classList.add("transaction-card-container");

	transactionDateContainer.appendChild(currentDate);
	transactionDateContainer.appendChild(transactionCardContainer);

	return transactionDateContainer;
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
                <p>${transactionTime(transaction.booking_date)}</p>
            </div>
            <div class="transaction-type">Visa</div>
						<div class="card-text transaction-payment">
							<h3>$${transaction.payment_total}</h3>
							<p>+$${transaction.payment_tip}</p>
						</div>
        </div>
        <div class="transaction-option">
            <img class="transaction-download" src="img/download.png" alt="" />
						<p>Reciept</p>
        </div>
    `;

	return transactionCard;
}

function transactionTime(time) {
	const date = new Date(time);
	let hours = date.getHours();
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const meridiem = hours >= 12 ? "PM" : "AM";

	hours = hours % 12 || 12;

	hours = hours.toString().padStart(2, "0");

	return `${hours}:${minutes} ${meridiem}`;
}

function formatDate(dateString) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", options);
}
