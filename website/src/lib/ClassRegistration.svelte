<script lang="ts">
	type Person = {
		email: string;
		name: string;
		registrationID: string;
	};

	type ClassData = {
		location : string;
		date: string;
		slots: number;
		registeredNumber: number;
		waitlistSize: number;
		registered: Person[];
		waitlist: Person[];
	};

	export let classData: ClassData = {
		location: "Monpetit Martial Arts Room",
		date: 'Tuesday, May 8th - 5:30PM',
		slots: 20,
		registeredNumber: 7,
		waitlistSize: 5,
		registered: [],
		waitlist: []
	};

	let email = '';
	let fullName = '';

	function handleSubmit(): void {
		registerPerson(email, fullName);
	}

	function generateRegistrationId(): string {
		const timestamp = new Date().getTime();
		const randomString = Math.random().toString(36).substring(7);
		return `${timestamp}-${randomString}`;
	}

	function registerPerson(email: string, fullName: string): void {
		const registrationId = generateRegistrationId(); //NOTE  implement func to gen unique registration ids

		if (classData.registeredNumber < classData.slots) {
			classData.registered.push({ email, name: fullName, registrationID: registrationId });
			classData.registeredNumber++;
		} else {
			classData.waitlist.push({ email, name: fullName, registrationID: registrationId });
			classData.waitlistSize++;
		}

		console.log('Updated classData:', classData);
	}
</script>

<div class="class-registration">
	<h2 class="text-center">{classData.date}</h2>
	<h2 class="text-center">{classData.location}</h2>
	<h2 class="text-center">
		{#if classData.registeredNumber < classData.slots}
			Spaces left: {classData.slots - classData.registeredNumber}
		{:else}
			Waitlist size: {classData.waitlistSize}
		{/if}
	</h2>

	<form on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<label for="email">Email:</label>
			<input type="email" id="email" bind:value={email} required />
		</div>
		<div class="form-group">
			<label for="fullName">Full Name:</label>
			<input type="text" id="fullName" bind:value={fullName} required />
		</div>
		<div class="d-flex justify-content-center">
			<button class="" type="submit">Register</button>
		</div>
	</form>
</div>

<style>
	button {
		outline: 1px #7193ac solid;
		background-color: #ffffff;
		color: #7193ac;
	}

	button:hover {
		background-color: #7193ac;
		color: #ffffff;
	}

	.class-registration {
		max-width: 400px;
		margin: 0 auto;
		font-family: 'Source Sans Pro', sans-serif;
	}
	.form-group {
		margin-bottom: 1rem;
	}
	label {
		display: block;
		margin-bottom: 0.5rem;
	}
	input {
		width: 100%;
		padding: 0.5rem;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}
	button {
		background-color: #ffffff;
		border: none;
		border-radius: 2px;
		font-size: 1rem;
		font-weight: bold;
		color: #7193ac;
		padding: 12px 24px;
		cursor: pointer;
	}
</style>
