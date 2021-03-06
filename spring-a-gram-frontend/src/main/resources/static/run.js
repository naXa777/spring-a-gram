(function () {

	requirejs.config({
		packages: [
			{name: 'rest', location: 'bower_components/rest', main: 'browser'},
			{name: 'when', location: 'bower_components/when', main: 'when'},
			{name: 'sockjs-client', location: 'bower_components/sockjs-client', main: 'dist/sockjs'},
			{name: 'stomp-websocket', location: 'bower_components/stomp-websocket', main: 'lib/stomp.min'},
			{name: 'react', location: 'bower_components/react', main: 'react'},
			{name: 'JSXTransformer', location: 'bower_components/jsx-requirejs-plugin/js', main: 'JSXTransformer'},
			{name: 'jsx', location: 'bower_components/jsx-requirejs-plugin/js', main: 'jsx'},
			{name: 'text', location: 'bower_components/requirejs-text', main: 'text'},
			{name: 'lodash', location: 'bower_components/lodash', main: 'lodash.min'}
		],
		deps: ['app/main'],
		jsx: {
			fileExtension: ".jsx",
			harmony: true,
			stripTypes: true
		}
	});

}());