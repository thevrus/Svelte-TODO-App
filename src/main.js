import App from './App.svelte';

import './css/styles.css';

const app = new App({
	target: document.getElementById('app'),
	props: {}
});

window.app = app;

export default app;