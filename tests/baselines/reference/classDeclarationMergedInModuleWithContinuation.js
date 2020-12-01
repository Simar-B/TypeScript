//// [classDeclarationMergedInModuleWithContinuation.ts]
module M {
    export class N { }
    export module N {
        export var v = 0;
    }
}

module M {
    export class O extends M.N {
    }
}

//// [classDeclarationMergedInModuleWithContinuation.js]
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
var M;
(function (M) {
    var N = /** @class */ (function () {
        function N() {
        }
        return N;
    }());
    M.N = N;
    (function (N) {
        N.v = 0;
    })(N = M.N || (M.N = {}));
})(M || (M = {}));
(function (M) {
    var O = /** @class */ (function (_super) {
        __extends(O, _super);
        function O() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return O;
    }(M.N));
    M.O = O;
})(M || (M = {}));
