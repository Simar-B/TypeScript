//// [tests/cases/compiler/emitBundleWithShebang2.ts] ////

//// [test.ts]
#!/usr/bin/env gjs
class Doo {}
class Scooby extends Doo {}

//// [test2.ts]
#!/usr/bin/env js
class Dood {}
class Scoobyd extends Dood {}

//// [outFile.js]
#!/usr/bin/env gjs
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + b + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Doo = /** @class */ (function () {
    function Doo() {
    }
    return Doo;
}());
var Scooby = /** @class */ (function (_super) {
    __extends(Scooby, _super);
    function Scooby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Scooby;
}(Doo));
var Dood = /** @class */ (function () {
    function Dood() {
    }
    return Dood;
}());
var Scoobyd = /** @class */ (function (_super) {
    __extends(Scoobyd, _super);
    function Scoobyd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Scoobyd;
}(Dood));
