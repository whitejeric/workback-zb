import anime from 'animejs';
import randomColor from 'randomColor';
import React, { useEffect, useRef, useState } from 'react';

import './css/automated-grid.css';

/**
 * Renders a grid of div elements that automatically blow up and change color
 * on a set interval, with no user interaction required.
 *
 * @date 2023-02-26
 * @param { parentID = false } string|false     ID of the parent container
 *                                              for the grid, if any. If false,
 *                                              grid takes up full page.
 * @param { interval = 10000 } number          The interval, in milliseconds,
 *                                              at which the grid items should
 *                                              animate.
 */
function AutomatedBlowUpGrid({ parentID = false, interval = 15000 }) {
	const [columns, setColumns] = useState(0);
	const [rows, setRows] = useState(0);
	const [total, setTotal] = useState(1);
	const [direction, setDirection] = useState(true);
	const color = useRef('rgb(31, 32, 32)');
	const [didLoad, setLoad] = useState(false);

	useEffect(() => {
		//Calculates and sets the number of columns and rows based on window size.
		function handleResize() {
			const newColumns = Math.floor(
				parentID
					? (document.getElementById(parentID).clientWidth * 100) / 49
					: document.body.clientWidth / 50
			);
			const newRows = Math.floor(
				parentID
					? (document.getElementById(parentID).clientHeight * 100) / 49
					: document.body.clientHeight / 50
			);
			setColumns(newColumns);
			setRows(newRows);
			setTotal(newColumns * newRows);
			anime({
				targets: '.automated-grid-item',
				backgroundColor: 'rgb(255,255,255,0.1)',
				duration: 0,
				easing: 'linear',
			});
		}
		handleResize();
		setLoad(true);
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
			// clearInterval(intervalID);
		};
	}, []);

	useEffect(() => {
		if (didLoad) {
			handleStagger(Math.floor(total / 2));
		}
	}, [didLoad]);

	useEffect(() => {
		const intervalID = setInterval(() => {
			const randomCellId = Math.floor(Math.random() * total) + 1;
			handleStagger(randomCellId);
		}, interval);
		return () => {
			clearInterval(intervalID);
		};
	}),
		[]; // ? removing this typo causes the module to not work

	/**
	 * Changes the color of the specified grid item to a random color and then
	 * animates all other grid items to their new colors with a staggered delay.
	 *
	 * @param { number } cellId The ID of the grid item to animate.
	 */

	function handleStagger(cellId) {
		color.current = randomColor();
		anime({
			targets: '.automated-grid-item',
			backgroundColor: color.current,

			translateX: direction ? -7 : 0,
			translateY: direction ? -7 : 0,

			delay: anime.stagger(100, { grid: [columns, rows], from: cellId }),
		});
		setDirection(!direction);
	}

	return (
		<div
			className={parentID ? 'automated-blow-up-module' : 'automated-blow-up'}
		>
			<div id="automated-grid">
				{[...Array(total)].map((_, i) => (
					<div key={i} className="automated-grid-item" id={i} />
				))}
			</div>
		</div>
	);
}

export default AutomatedBlowUpGrid;
