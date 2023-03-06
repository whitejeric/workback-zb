import { useEffect, useReducer } from 'react';

import Contact from './Contact';
import Content from './Content';
import Nav from './Nav';
import Schedule from './Schedule';
import Workback from './Workback';

const subApps = [
	{ name: 'wb-zb', module: Workback, props: { id: 'wb-zb' } },
	{ name: 'sch-zb', module: Schedule, props: { id: 'sch-zb' } },
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
		page: 'Workback',
		module: Workback,
	};
}

function App() {
	const [state, dispatch] = useReducer(globalReducer, {
		page: 'Workback',
		module: Workback,
		props: { id: 'workback' },
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
