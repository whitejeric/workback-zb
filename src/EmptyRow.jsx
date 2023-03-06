import React, { useEffect, useState } from 'react';

function EmptyRow({ addRow }) {
	const [values, setValues] = useState({
		order: null,
		quantity: null,
		task: null,
		status: null,
		people: null,
		summary: null,
		due_date: null,
		row_id: null,
	});

	function handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		setValues((previous_values) => {
			return {
				...previous_values,
				[name]: value,
			};
		});
	}

	useEffect(() => {
		console.log(values);
	});

	function handleAdd() {
		//if any state values null return err
		//else compute row_id and

		addRow({
			type: 'add',
			payload: values,
		});

		//clear inputs
	}

	return (
		<div className="wb-row">
			<div className="wb-cell">
				<input
					type="text"
					placeholder="Order"
					onChange={handleChange}
					name="order"
				/>
			</div>
			<div className="wb-cell">
				<input
					type="text"
					placeholder="#"
					onChange={handleChange}
					name="quantity"
				/>
			</div>
			<div className="wb-cell">
				<textarea
					placeholder="ex. deliver items"
					onChange={handleChange}
					name="task"
				/>
			</div>
			<div className="wb-cell">
				<input
					type="text"
					placeholder="ex. incomplete"
					onChange={handleChange}
					name="status"
				/>
			</div>
			<div className="wb-cell">
				<input
					type="text"
					placeholder="ex. John Doe"
					onChange={handleChange}
					name="people"
				/>
			</div>
			<div className="wb-cell">
				<div className="wb-cell">
					<textarea
						type="text"
						placeholder="ex. drop of items at X"
						onChange={handleChange}
						name="summary"
					/>
				</div>
			</div>
			<div className="wb-cell">
				<input
					type="text"
					placeholder="feb 2"
					onChange={handleChange}
					name="due_date"
				/>
			</div>
			<div className="empty">
				<button onClick={handleAdd}>add</button>
			</div>
		</div>
	);
}

export default EmptyRow;
