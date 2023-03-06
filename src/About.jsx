import React from 'react';
import BlowUpGrid from './BlowUpGrid';

const About = ({ fade }) => {
	const fade_flag = fade ? '-fade' : '';
	return (
		<div className={'abt' + fade_flag}>
			<div className="spacer"></div>
			<div className="abt-flex">
				<div id={'abt-intro'} className="abt-card">
					hello
				</div>
				<div id={'abt-splash-image'} className="abt-card">
					<BlowUpGrid parentID={'abt-splash-image'} />
				</div>
				<div id={'abt-blurb'} className="abt-card">
					blurb
				</div>
				<div id={'abt-photo'} className="abt-card">
					photo
				</div>
				<div id={'abt-frameworks'} className="abt-card">
					frameworks
				</div>
				<div id={'abt-frameworks'} className="abt-card">
					frame
				</div>
				<div id={'abt-frameworks'} className="abt-card">
					frameworks
				</div>
				<div id={'abt-frameworks'} className="abt-card">
					frameworks
				</div>
				<div id={'abt-frameworks'} className="abt-card">
					frameworks
				</div>
				<div id={'abt-frameworks'} className="abt-card">
					frameworks
				</div>
			</div>
		</div>
	);
};

export default About;
