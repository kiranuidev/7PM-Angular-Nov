var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var UserDetails = (function (_super) {
    __extends(UserDetails, _super);
    function UserDetails() {
        _super.apply(this, arguments);
    }
    return UserDetails;
}(Person));
