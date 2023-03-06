import { useEffect, useReducer } from 'react';
import About from './About';
import reactLogo from './assets/react.svg';
import BB from './BB';
import BlowUpGrid from './BlowUpGrid';
import Contact from './Contact';
import Content from './Content';
import EW from './EW';
import Nav from './Nav';
import Rainbow from './Rainbow';
import WebTemplate from './WebTemplate';

const subApps = [
	{ name: 'web template', module: WebTemplate, props: { id: 'wtmp' } },
	{ name: 'about', module: About },
	{ name: 'blow up', module: BlowUpGrid },
	{ name: 'rainbow', module: Rainbow, props: { id: 'rain' } },
];

//keep track of which module is loaded across App
function globalReducer(state, action) {
	console.log(state, action);
	if (action.type === 'changePage') {
		return {
			page: action.payload,
			module: action.module,
			props: action.props,
			contact_visible: false,
		};
	}
	if (action.type === 'openContact' || action.type === 'closeContact') {
		console.log('openContact/closeContact action.type');
		return {
			...state,
			contact_visible: true,
		};
	}
	return {
		page: 'home',
		module: EW,
	};
}

function App() {
	const [state, dispatch] = useReducer(globalReducer, {
		page: 'home',
		module: EW,
		props: { id: 'ew' },
		contact_visibile: false,
	});
	useEffect(() => {
		console.log('contact');
		console.log(state.contact_visible);
	}, [state]);

	return (
		<div className="App">
			<Contact visible={state.contact_visible} />
			<Nav navigate={dispatch} items={subApps} />
			<Content current={state.page} Module={state.module} props={state.props} />
		</div>
	);
}

export default App;
