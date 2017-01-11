var SalaryCalculator = (function () {
    function SalaryCalculator(_basic, _hra, _da, _tax) {
        if (_basic === void 0) { _basic = 0; }
        if (_hra === void 0) { _hra = 0; }
        if (_da === void 0) { _da = 0; }
        if (_tax === void 0) { _tax = 0; }
        this._basic = _basic;
        this._hra = _hra;
        this._da = _da;
        this._tax = _tax;
        this._listenerFns = {
            basic: new Array(),
            hra: new Array()
        };
    }
    Object.defineProperty(SalaryCalculator.prototype, "basic", {
        get: function () {
            console.log('getter invoked');
            return this._basic;
        },
        set: function (value) {
            console.log('setter invoked');
            if (this._basic === value)
                return;
            this._basic = value;
        },
        enumerable: true,
        configurable: true
    });
    SalaryCalculator.prototype.onChange = function (attrName, listenerFn) {
        this._listenerFns[attrName].push(listenerFn);
    };
    return SalaryCalculator;
}());
var calculator = new SalaryCalculator(10000, 2000, 3000, 10);
calculator.onChange('basic', function () {
    return 100;
});
