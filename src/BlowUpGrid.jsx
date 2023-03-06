import anime from 'animejs';
import randomColor from 'randomColor';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Renders a grid of div elements that blow up and change color on click
 * @author EW
 * @date 2023-02-25
 * @param { parentID = false } string|false     ID of the parent container
 *                                              for the grid, if any. If false,
 *                                              grid takes up full page.
 */
function BlowUpGrid({ parentID = false }) {
	const [columns, setColumns] = useState(0);
	const [rows, setRows] = useState(0);
	const [total, setTotal] = useState(1);
	const color = useRef('rgb(31, 32, 32)');

	useEffect(() => {
		//Calculates and sets the number of columns and rows based on the window size.
		function handleResize() {
			const newColumns = Math.floor(
				parentID
					? document.getElementById(parentID).clientWidth / 50
					: document.body.clientWidth / 50
			);
			const newRows = Math.floor(
				parentID
					? document.getElementById(parentID).clientHeight / 50
					: document.body.clientHeight / 50
			);
			setColumns(newColumns);
			setRows(newRows);
			setTotal(newColumns * newRows);
			anime({
				targets: '.bu-grid-item',
				backgroundColor: 'rgb(31, 32, 32)',
				duration: 0,
				easing: 'linear',
			});
		}
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	/**
	 * Changes the color of the clicked grid item to a random color then animates
	 * all other grid items to their new colors with a staggered delay
	 * @author EW
	 * @date 2023-02-25
	 * @param { * } e
	 */
	function handleStagger(e) {
		console.log(e);
		const el = e.target.id;
		color.current = randomColor();
		anime({
			targets: '.bu-grid-item',
			backgroundColor: color.current,
			delay: anime.stagger(40, { grid: [columns, rows], from: el }),
		});
	}

	return (
		<div
			className={parentID ? 'blow-up-module' : 'blow-up'} // in container or full page
			style={{ backgroundColor: color.current }}
		>
			<div id="bu-grid">
				{[...Array(total)].map((_, i) => (
					<div
						key={i}
						className="bu-grid-item"
						id={i}
						onClick={handleStagger}
						// animate={handleStagger}
					/>
				))}
			</div>
		</div>
	);
}

export default BlowUpGrid;
