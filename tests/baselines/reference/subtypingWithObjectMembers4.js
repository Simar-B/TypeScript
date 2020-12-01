//// [subtypingWithObjectMembers4.ts]
// subtyping when property names do not match

class Base {
    foo: string;
}

class Derived extends Base {
    bar: string;
}

class A {
    foo: Base;
}

class B extends A {
    fooo: Derived; // ok, inherits foo
}

class A2 {
    1: Base; 
}

class B2 extends A2 {
    1.1: Derived; // ok, inherits 1
}

class A3 {
    '1': Base;
}

class B3 extends A3 {
    '1.1': Derived; // ok, inherits '1'
}

//// [subtypingWithObjectMembers4.js]
// subtyping when property names do not match
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
var Base = /** @class */ (function () {
    function Base() {
    }
    return Base;
}());
var Derived = /** @class */ (function (_super) {
    __extends(Derived, _super);
    function Derived() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Derived;
}(Base));
var A = /** @class */ (function () {
    function A() {
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var A2 = /** @class */ (function () {
    function A2() {
    }
    return A2;
}());
var B2 = /** @class */ (function (_super) {
    __extends(B2, _super);
    function B2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B2;
}(A2));
var A3 = /** @class */ (function () {
    function A3() {
    }
    return A3;
}());
var B3 = /** @class */ (function (_super) {
    __extends(B3, _super);
    function B3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B3;
}(A3));
