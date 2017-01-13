var pgm = (function(){
	function addSync(x,y){
		console.log(`		[Service] processing ${x} and ${y}`);
		var result = x + y;
		console.log(`		[Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[Client] result = ${result}`);
	}

	function addAsyncCallback(x,y, onResult){
		console.log(`		[Service] processing ${x} and ${y}`);
		setTimeout(function(){
			var result = x + y;
			console.log(`		[Service] returning result`);
			//return result;
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncCallbackClient(x,y){
		console.log(`[Client] triggering addAsyncCallback`);
		addAsyncCallback(x,y, function(result){
			console.log(`[Client] result = ${result}`);	
		});
	}

	var addAsyncEvents = (function(){
		var _callbacks = [];

		function subscribe(callbackFn){
			_callbacks.push(callbackFn);
		}

		function process(x,y){
			console.log(`		[Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`		[Service] returning result`);
				_callbacks.forEach(cb => cb(result));
			},3000);
		}
		return {
			subscribe : subscribe,
			process : process
		}
	})();

	function addAsyncPromise(x,y){

		var promise = new Promise(function(resolveFn, rejectFn){
			console.log(`		[Service] processing ${x} and ${y}`);
			setTimeout(function(){
				var result = x + y;
				console.log(`		[Service] returning result`);
				resolveFn(result);
			},3000);
		});
		return promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	}
})();