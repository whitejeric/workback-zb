import React, { useState } from 'react';

//needs unique id so we can delete

function WBRow({
	row_data = {
		order: '',
		quantity: '',
		task: '',
		status: '',
		people: '',
		summary: '',
		due_date: '',
		row_id: 'hashvalue',
	},
	modify,
}) {
	return (
		<div className="wb-row">
			<div className="wb-cell">{row_data.order}</div>
			<div className="wb-cell">{row_data.quantity}</div>
			<div className="wb-cell">{row_data.task}</div>
			<div className="wb-cell">{row_data.status}</div>
			<div className="wb-cell">{row_data.people}</div>
			<div className="wb-cell">{row_data.summary}</div>
			<div className="wb-cell">{row_data.due_date}</div>
			<div className="remove">
				<button>del</button>
			</div>
		</div>
	);
}

export default WBRow;
