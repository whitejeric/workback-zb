import React, { useReducer, useState } from 'react';

import EmptyRow from './EmptyRow';
import WBRow from './WBRow';

function rowReducer(state, action) {
	console.log(state, action);
	if (action.type === 'add') {
		return {
			...state,
			rows: [...state.rows, action.payload],
		};
	}
	if (action.type === 'delete') {
		let array = [state.rows];
		array.pop(action.payload);
		//pop row with id of row
		return {
			...state,
			rows: array,
		};
	}
	if (action.type === 'modify') {
		const new_rows = state.rows;
		//pop row with id of row
		return {
			...state,
		};
	}
	return {
		...state,
	};
}

function Workback() {
	const [state, dispatch] = useReducer(rowReducer, {
		rows: [
			{
				order: '1',
				quantity: '',
				task: '',
				status: '',
				people: 'a',
				summary: 's',
				due_date: '',
				row_id: 'hashvalue',
			},
			{
				order: '2',
				quantity: '',
				task: '',
				status: '',
				people: 'a',
				summary: 's',
				due_date: '',
				row_id: 'hashvalue1',
			},
		],
	});
	return (
		<>
			<div className="spacer" />
			<div className="workback-wrap">
				<div className="wb-grid">
					<div className="wb-row" id={'wb-headers'}>
						<div className="wb-heading">Order</div>
						<div className="wb-heading">Quantity</div>
						<div className="wb-heading">Task</div>
						<div className="wb-heading">Status</div>
						<div className="wb-heading">Responsible</div>
						<div className="wb-heading">Summary</div>
						<div className="wb-heading">Due</div>
						<div className="empty" />
					</div>
					{state.rows.map((e, i) => {
						return <WBRow row_data={e} modify={dispatch} key={e.row_id} />;
					})}

					<EmptyRow addRow={dispatch} />
				</div>
			</div>
		</>
	);
}

export default Workback;
