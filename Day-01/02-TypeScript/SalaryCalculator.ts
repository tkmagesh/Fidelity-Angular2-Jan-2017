class SalaryCalculator{

	constructor(private _basic:number = 0, private _hra:number = 0, private _da:number = 0, private _tax:number = 0){

	}

	get basic(){
		console.log('getter invoked');
		return this._basic;
	}
	set basic(value){
		console.log('setter invoked');
		if (this._basic === value) return;
		this._basic = value;
	}
	_listenerFns : IListenerBag = {
		basic : new Array<IChangeListener>(),
		hra : new Array<IChangeListener>()
	}
	onChange(attrName:string, listenerFn : IChangeListener){
		this._listenerFns[attrName].push(listenerFn);

	}
}

interface IListenerBag{
	basic : Array<IChangeListener>;
	hra : Array<IChangeListener>;
}

interface IChangeListener{
	():number;
}

var calculator : SalaryCalculator = new SalaryCalculator(10000,2000,3000,10);
calculator.onChange('basic', function():number{
	return 100;
})