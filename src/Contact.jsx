import React, { useState } from 'react';

function Contact({ visible }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Submit:', { name, email, message });
	};

	return visible ? (
		<div className="contact-pop-up">
			<form onSubmit={handleSubmit}>
				<h2>Contact</h2>
				<label>
					Name:
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Message:
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
				<button type="submit">Subbmit</button>
			</form>
		</div>
	) : null;
}

export default Contact;
