document.addEventListener("DOMContentLoaded", function () {
	const appointmentsData = [
		{
			booking_discount: 0,
			staff_code: "PGRA001",
			start_year_month: "2024-03",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: "",
			payment_status: "Paid",
			payment_total: 47.46,
			reminder_sent_1: true,
			template_name: "Mens Cut (Long Hair)",
			notes: "",
			template_slots: [],
			booking_products: [],
			duration: 40,
			created_at: "2024-02-28T17:13:35.363Z",
			staff_name: "Peter Griffin",
			client_id: "garvit510bhatia-at-gmail.com",
			stripe_payment_intent: "pi_3OoqjXLJaF9vLeVF1of06HUK",
			client_phone: "+12498011458",
			payment_tip: 0,
			reminder_sent_24: true,
			specific_service: "",
			booking_concurrency: "1",
			reminder_sent_48: true,
			start_time: "2024-03-06T10:00",
			user_booked: false,
			updated_at: "2024-02-28T17:15:58.414Z",
			payment_products_total: 0,
			template_id: "1CML",
			booking_id: "KAYF1709140415363",
			payment_tax: 5.46,
			price: 42,
		},
		{
			created_at: "2024-03-19T19:42:02.194Z",
			staff_name: "Peter Griffin",
			client_id: "garvit510bhatia-at-gmail.com",
			staff_code: "PGRA001",
			start_year_month: "2023-09",
			client_phone: "+12498011458",
			template_cadence: "30",
			specific_service: "",
			client_name: "Garvit Bhatia",
			template_cost: "",
			booking_concurrency: "1",
			start_time: "2023-09-22T09:20",
			user_booked: false,
			template_name: "Colour Roots",
			updated_at: "2024-03-19T19:42:17.914Z",
			template_id: "1RTS",
			client_landline: "+11111111111",
			booking_id: "AXGX1710877322194",
			notes: "",
			template_slots: [],
			booking_products: [
				{
					unavailable_times: [],
					quantity: 35,
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
			price: 50,
			duration: 20,
		},
		{
			booking_discount: 0,
			staff_code: "CN43R5",
			start_year_month: "2024-03",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: 2.5,
			transaction_id: "BSZY1710857308628",
			payment_status: "Paid",
			payment_total: 25,
			template_name: "Bang Trim",
			party_bookings: [
				{
					staff_name: "Chrit May",
					notes: "",
					client_landline: "+11111111111",
					created_at: "2024-03-19T14:07:48.837Z",
					client_id: "garvit510bhatia-at-gmail.com",
					template_cost: 2.5,
					booking_id: "RDYP1710857268837",
					duration: 20,
					price: 10,
					template_cadence: "30",
					client_name: "Garvit Bhatia",
					client_phone: "+12498011458",
					booking_concurrency: "1",
					staff_code: "CM9O9O",
					start_year_month: "2024-03",
					booking_total: 11.3,
					booking_products: [],
					booking_tax: 1.3,
					start_time: "2024-03-01T16:20",
					template_name: "Bang Trim",
					subtotal: 10,
					user_booked: false,
					template_id: "1BFT",
					template_slots: [],
					specific_service: "",
				},
			],
			client_landline: "+11111111111",
			notes: "",
			tax_id: null,
			template_slots: [],
			booking_products: [],
			duration: 20,
			created_at: "2024-03-19T14:07:34.040Z",
			staff_name: "Chantal Narbonne",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			payment_tip: 2.4,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2024-03-01T16:00",
			user_booked: false,
			party_payment: true,
			updated_at: "2024-03-19T14:08:28.628Z",
			payment_products_total: 0,
			template_id: "1BFT",
			booking_id: "KEZR1710857254040",
			payment_tax: 2.6,
			price: 10,
		},
		{
			created_at: "2024-02-29T12:35:50.913Z",
			staff_name: "Lindsey Gutmann",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			staff_code: "LG48Y5",
			start_year_month: "2024-04",
			template_cadence: "30",
			specific_service: "",
			template_cost: "",
			client_name: "Garvit Bhatia",
			booking_concurrency: "1",
			start_time: "2024-04-01T15:00",
			user_booked: false,
			template_name: "Blow Dry & Style",
			template_id: "1XBLOW",
			booking_id: "AYEG1709210150913",
			notes: "",
			template_slots: [],
			price: 50,
			duration: 40,
		},
		{
			booking_discount: 0,
			staff_code: "PGRA001",
			start_year_month: "2024-02",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			payment_status: "Paid",
			payment_total: 47.46,
			reminder_sent_1: true,
			template_name: "Blow Dry (Short Hair)",
			notes: "",
			template_slots: [],
			booking_products: [],
			duration: 20,
			created_at: "2024-02-14T13:50:07.136Z",
			staff_name: "Peter Griffin",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12048003600",
			payment_tip: 0,
			specific_service: "",
			booking_concurrency: 1,
			start_time: "2024-02-14T13:00",
			user_booked: false,
			updated_at: "2024-02-14T13:50:11.022Z",
			payment_products_total: 0,
			template_id: "1BLOW",
			booking_id: "OGUR1707918607136",
			payment_tax: 5.46,
			price: "42.00",
		},
		{
			created_at: "2024-03-04T19:27:37.552Z",
			staff_name: "Chrit May",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			staff_code: "CM9O9O",
			start_year_month: "2024-03",
			reminder_sent_24: true,
			specific_service: "",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: "55.00",
			booking_concurrency: "1",
			start_time: "2024-03-06T09:00",
			user_booked: true,
			reminder_sent_1: true,
			template_name: "1-2-2",
			template_id: "GGRGRGRG",
			booking_id: "JSZI1709580457552",
			client_landline: "",
			template_slots: [
				{
					step: "FOILS FINAL SLOT",
					slot: "00:00 - 00:20",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "FOIL APPLICATION C2",
					slot: "00:20 - 00:40",
					slot_staff: [],
					concurrency: "2",
				},
				{
					step: "FOIL APPLICATION C2",
					slot: "00:40 - 01:00",
					slot_staff: [],
					concurrency: "2",
				},
			],
			price: "5555.00",
			duration: 60,
		},
		{
			created_at: "2024-01-25T14:32:18.734Z",
			staff_name: "MARTIN LAWRENCE",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12048003600",
			staff_code: "MLAW123",
			start_year_month: "2024-01",
			template_cadence: "30",
			client_name: "Garvit Bhati",
			booking_concurrency: 1,
			start_time: "2024-01-26T09:00",
			user_booked: true,
			template_name: "HAIR WASH",
			template_id: "HW123",
			booking_id: "HYZJ1706193138734",
			template_slots: [],
			price: "20.00",
			duration: 20,
		},
		{
			created_at: "2024-01-25T14:47:19.330Z",
			booking_discount: 0,
			staff_name: "Chrit May",
			client_id: "garvit510bhatia-at-gmail.com",
			stripe_payment_intent: "pi_3OcXWnLJaF9vLeVF0BUzzjos",
			staff_code: "CM9O9O",
			start_year_month: "2024-01",
			client_phone: "+15879000697",
			template_cadence: "",
			client_name: "Garvit Bhatia",
			payment_status: "Paid",
			booking_concurrency: 1,
			start_time: "2024-01-26T10:00",
			user_booked: false,
			template_name: "HAIR WASH",
			updated_at: "2024-01-25T18:19:58.226Z",
			template_id: "HW123",
			booking_id: "GSIT1706194039330",
			notes: "",
			template_slots: [],
			booking_products: [],
			price: "20.00",
			duration: 20,
		},
		{
			booking_discount: 0,
			staff_code: "DTS123",
			start_year_month: "2024-02",
			template_cadence: "45",
			client_name: "Garvit Bhatia",
			template_cost: 145.07,
			payment_status: "Paid",
			payment_total: 274.07,
			template_name: "TEST SRV COMPLEX Jan 13 - 2024",
			notes: "",
			template_slots: [
				{
					step: "TEST SRV CHILD 1 Jan 13 - 2024",
					slot: "00:00 - 00:20",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "TEST SRV CHILD 1 Jan 13 - 2024",
					slot: "00:20 - 00:40",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "TEST SRV CHILD 1 Jan 13 - 2024",
					slot: "00:40 - 01:00",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "TEST SRV CHILD 1 Jan 13 - 2024",
					slot: "01:00 - 01:20",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "TEST SRV CHILD 1 Jan 13 - 2024",
					slot: "01:20 - 01:40",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "TEST SRV CHILD 1 Jan 13 - 2024",
					slot: "01:40 - 02:00",
					slot_staff: [],
					concurrency: "1",
				},
				{
					step: "TEST SRV CHILD 2 Jan 13 - 2024",
					slot: "02:00 - 02:20",
					slot_staff: [],
					concurrency: "2",
				},
				{
					step: "TEST SRV CHILD 2 Jan 13 - 2024",
					slot: "02:20 - 02:40",
					slot_staff: [],
					concurrency: "2",
				},
				{
					step: "TEST SRV CHILD 3 Jan 13 - 2024",
					slot: "02:40 - 03:00",
					slot_staff: [],
					concurrency: "1",
				},
			],
			booking_products: [],
			duration: 180,
			created_at: "2024-02-24T17:22:02.093Z",
			staff_name: "David Test Staff",
			client_id: "garvit510bhatia-at-gmail.com",
			stripe_payment_intent: "pi_3OnOwHLJaF9vLeVF171us0XB",
			client_phone: "+12498011458",
			payment_tip: 35.75,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2024-02-24T09:00",
			user_booked: false,
			updated_at: "2024-02-24T17:23:08.418Z",
			payment_products_total: 0,
			template_id: "TEST011324-1 complex",
			booking_id: "LHAT1708795322093",
			payment_tax: 27.42,
			price: 210.9,
		},
		{
			booking_discount: 0,
			staff_code: "CM9O9O",
			start_year_month: "2024-03",
			template_cadence: "14",
			client_name: "Garvit Bhatia",
			template_cost: 2.5,
			transaction_id: "IJSD1711279385252",
			payment_status: "Paid",
			payment_total: 170,
			reminder_sent_1: true,
			template_name: "Beard Trim",
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
			client_landline: "+11111111111",
			notes: "",
			tax_id: null,
			template_slots: [],
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
			duration: 20,
			created_at: "2024-03-24T11:22:48.183Z",
			staff_name: "Chrit May",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			payment_tip: 3.89,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2024-03-24T10:00",
			user_booked: false,
			party_payment: true,
			updated_at: "2024-03-24T11:23:05.252Z",
			payment_products_total: 10,
			template_id: "1BTW",
			booking_id: "GIYJ1711279368183",
			payment_tax: 19.11,
			price: 22,
		},
		{
			booking_discount: 0,
			staff_code: "PGRA001",
			start_year_month: "2023-09",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: 2.5,
			transaction_id: "XXQY1710870453234",
			payment_status: "Paid",
			payment_total: 130,
			template_name: "Bang Trim",
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
			client_landline: "+11111111111",
			notes: "",
			tax_id: null,
			template_slots: [],
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
			duration: 20,
			created_at: "2024-03-19T17:46:28.126Z",
			staff_name: "Peter Griffin",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			payment_tip: 3.78,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2023-09-20T09:00",
			user_booked: false,
			party_payment: true,
			updated_at: "2024-03-19T17:47:33.234Z",
			payment_products_total: 55,
			template_id: "1BFT",
			booking_id: "PXPW1710870388126",
			payment_tax: 12.22,
			price: 10,
		},
		{
			booking_discount: 0,
			staff_code: "PGRA001",
			start_year_month: "2023-09",
			template_cadence: "14",
			client_name: "Garvit Bhatia",
			template_cost: 2.5,
			transaction_id: "QQTM1710870063860",
			payment_status: "Paid",
			payment_total: 100,
			template_name: "Beard Trim",
			party_bookings: [
				{
					staff_name: "Glenn Quagmire",
					notes: "",
					client_landline: "",
					created_at: "2024-03-19T17:39:03.435Z",
					client_id: "generic_guest_1710869939084",
					template_cost: 2.5,
					booking_id: "ASBY1710869943435",
					duration: 20,
					updated_at: "2024-03-19T17:39:40.868Z",
					price: 10,
					template_cadence: "30",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "GCRA0002",
					start_year_month: "2023-09",
					booking_total: 67.6,
					booking_products: [
						{
							unavailable_times: [],
							quantity: 47,
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
							name: "Conditioning Treatment & Blow",
							template_id: "1CTB",
							quantity: 1,
							cost: "0.00",
							price: "45.00",
							qty: 1,
						},
					],
					booking_tax: 2.6,
					start_time: "2023-09-14T09:00",
					template_name: "Bang Trim",
					subtotal: 65,
					user_booked: false,
					template_id: "1BFT",
					template_slots: [],
					specific_service: "",
				},
			],
			client_landline: "+11111111111",
			notes: "",
			tax_id: null,
			template_slots: [],
			booking_products: [
				{
					unavailable_times: [],
					quantity: 69,
					cost: 0.5,
					notes: "Use 1 cup.",
					taxable: true,
					created_at: "2024-01-11T15:50:17.282Z",
					description: "Hydrating Shampoo",
					lower_resource_id: "sh345",
					type: "product",
					product_staff: [
						{
							name: "Paige Backstrom",
							resource_id: "PB44T4",
							product_price: 0.9,
						},
					],
					shown_on_cart: true,
					product_type: "",
					updated_at: "2024-03-11T17:34:17.296Z",
					lower_name: "shampoo olay",
					price: 0.8,
					qty: "5",
					name: "SHAMPOO OLAY",
					resource_id: "SH345",
					brand: "OLAY",
					timestamp: 1704988217282,
				},
			],
			duration: 20,
			created_at: "2024-03-19T17:40:00.375Z",
			staff_name: "Peter Griffin",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			payment_tip: 3.02,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2023-09-14T09:20",
			user_booked: false,
			party_payment: true,
			updated_at: "2024-03-19T17:41:03.860Z",
			payment_products_total: 4,
			template_id: "1BTW",
			booking_id: "XKIY1710870000375",
			payment_tax: 5.98,
			price: 22,
		},
		{
			cancelled: true,
			created_at: "2024-01-23T17:47:34.052Z",
			staff_name: "MARTIN LAWRENCE",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12048003600",
			staff_code: "MLAW123",
			start_year_month: "2024-01",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			booking_concurrency: 1,
			start_time: "2024-01-29T09:20",
			user_booked: true,
			template_name: "HAIR WASH",
			template_id: "HW123",
			booking_id: "MRXS1706032054052",
			template_slots: [],
			cancelled_date: "2024-01-25T14:31:15.615Z",
			price: 20,
			duration: 20,
		},
		{
			booking_discount: 0,
			staff_code: "CAM4T",
			start_year_month: "2024-03",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: "",
			payment_status: "Paid",
			payment_total: 87.89,
			reminder_sent_1: true,
			template_name: "Mens Cut (Long Hair)",
			notes: "",
			template_slots: [],
			booking_products: [
				{
					unavailable_times: [],
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
					lower_name: "test res staff jan 16 - 2024",
					price: 35.78,
					qty: 1,
					name: "TEST RES STAFF JAN 16 - 2024",
					resource_id: "RES011624",
					brand: "Test Brand by Ricardo",
					timestamp: 1707838629528,
				},
			],
			duration: 40,
			created_at: "2024-02-28T17:11:01.416Z",
			staff_name: "Cosimo A. Minnella",
			client_id: "garvit510bhatia-at-gmail.com",
			stripe_payment_intent: "pi_3OoqieLJaF9vLeVF0uUZFPyo",
			client_phone: "+12498011458",
			payment_tip: 0,
			reminder_sent_24: true,
			specific_service: "",
			booking_concurrency: "1",
			reminder_sent_48: true,
			start_time: "2024-03-06T09:20",
			user_booked: false,
			updated_at: "2024-02-28T17:15:04.057Z",
			payment_products_total: 35.78,
			template_id: "1CML",
			booking_id: "SMXP1709140261416",
			payment_tax: 10.11,
			price: 42,
		},
		{
			booking_discount: 0,
			staff_code: "GCRA0002",
			start_year_month: "2024-03",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: "",
			payment_status: "Paid",
			payment_total: 189.06,
			reminder_sent_1: true,
			template_name: "Mens Cut (Long Hair)",
			notes: "",
			template_slots: [],
			booking_products: [
				{
					unavailable_times: [],
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
					lower_name: "test res staff jan 16 - 2024",
					price: 41.77,
					qty: 3,
					name: "TEST RES STAFF JAN 16 - 2024",
					resource_id: "RES011624",
					brand: "Test Brand by Ricardo",
					timestamp: 1707838629528,
				},
			],
			duration: 40,
			created_at: "2024-02-28T17:05:21.627Z",
			staff_name: "Glenn Quagmire",
			client_id: "garvit510bhatia-at-gmail.com",
			stripe_payment_intent: "pi_3OoqaQLJaF9vLeVF1o27hJff",
			client_phone: "+12498011458",
			payment_tip: 0,
			reminder_sent_24: true,
			specific_service: "",
			booking_concurrency: "1",
			reminder_sent_48: true,
			start_time: "2024-03-05T09:00",
			user_booked: false,
			updated_at: "2024-02-28T17:06:43.407Z",
			payment_products_total: 125.31,
			template_id: "1CML",
			booking_id: "DCKS1709139921627",
			payment_tax: 21.75,
			price: 42,
		},
		{
			booking_discount: 0,
			staff_code: "PB44T4",
			start_year_month: "2023-09",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: "",
			transaction_id: "ZMBP1710877597081",
			payment_status: "Paid",
			payment_total: 270,
			template_name: "Colour Roots",
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
			client_landline: "+11111111111",
			notes: "",
			tax_id: null,
			template_slots: [],
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
			duration: 20,
			created_at: "2024-03-19T19:45:28.661Z",
			staff_name: "Paige Backstrom",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			payment_tip: 10.1,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2023-09-23T09:20",
			user_booked: false,
			party_payment: true,
			updated_at: "2024-03-19T19:46:37.081Z",
			payment_products_total: 60,
			template_id: "1RTS",
			booking_id: "BDVI1710877528661",
			payment_tax: 29.9,
			price: 50,
		},
		{
			booking_discount: 0,
			staff_code: "GCRA0002",
			start_year_month: "2024-03",
			template_cadence: "30",
			client_name: "Garvit Bhatia",
			template_cost: 2.5,
			transaction_id: "QUUT1710861386782",
			payment_status: "Paid",
			payment_total: 1000,
			template_name: "Bang Trim",
			party_bookings: [
				{
					staff_name: "Peter Griffin",
					notes: "",
					client_landline: "",
					created_at: "2024-03-19T15:15:14.305Z",
					client_id: "generic_guest_1710861310393",
					template_cost: "",
					booking_id: "KJVV1710861314305",
					duration: 40,
					price: 85,
					template_cadence: "30",
					client_name: "Generic Guest",
					client_phone: null,
					booking_concurrency: "1",
					staff_code: "PGRA001",
					start_year_month: "2024-03",
					booking_total: 161.59,
					booking_products: [
						{
							unavailable_times: [],
							quantity: -2,
							cost: 5,
							notes: "",
							taxable: true,
							created_at: "2024-03-08T13:43:52.901Z",
							description: "",
							lower_resource_id: "tt26",
							type: "product",
							product_staff: [],
							lower_name: "tester",
							price: 10,
							qty: 1,
							name: "TESTER",
							resource_id: "TT26",
							brand: "TR",
							timestamp: 1709905432901,
						},
						{
							unavailable_times: [],
							quantity: 44,
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
							qty: "4",
							name: "SKIN FIRMING HYDRATION",
							resource_id: "072140002541",
							brand: "NIVEA",
							timestamp: 1707343364732,
						},
					],
					booking_tax: 18.59,
					start_time: "2024-03-01T09:20",
					template_name: "Updo",
					subtotal: 143,
					user_booked: false,
					template_id: "1TUP",
					template_slots: [],
					specific_service: "",
				},
			],
			client_landline: "+11111111111",
			notes: "",
			tax_id: null,
			template_slots: [],
			booking_products: [
				{
					unavailable_times: [],
					quantity: 65,
					cost: 5,
					notes: "",
					taxable: true,
					created_at: "2024-03-08T13:43:52.901Z",
					description: "",
					lower_resource_id: "tt26",
					type: "product",
					product_staff: [],
					lower_name: "tester",
					price: 10,
					qty: "67",
					name: "TESTER",
					resource_id: "TT26",
					brand: "TR",
					timestamp: 1709905432901,
				},
				{
					name: "FOIL APPLICATION C2",
					template_id: "FOILAPPLICATION",
					quantity: 1,
					cost: "5.00",
					price: "7.00",
					qty: 1,
				},
			],
			duration: 20,
			created_at: "2024-03-19T15:14:03.201Z",
			staff_name: "Glenn Quagmire",
			client_id: "garvit510bhatia-at-gmail.com",
			client_phone: "+12498011458",
			payment_tip: 62.1,
			specific_service: "",
			booking_concurrency: "1",
			start_time: "2024-03-01T09:00",
			user_booked: false,
			party_payment: true,
			updated_at: "2024-03-19T15:16:26.782Z",
			payment_products_total: 677,
			template_id: "1BFT",
			booking_id: "KWMR1710861243201",
			payment_tax: 107.9,
			price: 10,
		},
	];

	appointmentsData.sort((a, b) => {
		const dateA = new Date(a.start_time.split("T")[0]);
		const dateB = new Date(b.start_time.split("T")[0]);
		return dateB - dateA;
	});

	renderAppointments(appointmentsData);
});

function renderAppointments(appointments) {
	const appointmentCardContainer = document.querySelector(
		".appointment-card-container"
	);

	let currentDate = null;
	let currentContainer = null;

	appointments.forEach((appointment) => {
		const thisDate = formatDate(appointment.start_time);

		if (thisDate !== currentDate) {
			// Create a new date container
			currentContainer = createAppointmentDateContainer(thisDate);
			appointmentCardContainer.appendChild(currentContainer);
			currentDate = thisDate;
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
	const durationString =
		appointment.duration > 60
			? `${appointment.duration / 60} Hour(s)`
			: `${appointment.duration} Minute(s)`;

	const appointmentCard = document.createElement("div");
	appointmentCard.classList.add("appointment-card");

	appointmentCard.innerHTML = `
      <div class = "appointment-box">
        <div class="card-text">
          <h3>${appointment.template_name}</h3>
          <p>${startTime(appointment.start_time)} | ${durationString}</p>
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
						<p>Delete</p>
					</div>
        </div>
    `;
	return appointmentCard;
}

function startTime(time) {
	const date = new Date(time);
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${hours}:${minutes}`;
}

function formatDate(dateString) {
	const options = { year: "numeric", month: "long", day: "numeric" };
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", options);
}
