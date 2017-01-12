"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// this is output component
var core_1 = require("@angular/core");
var user_1 = require("../shared/models/user");
var UserFormComponent = (function () {
    function UserFormComponent() {
        this.userCreated = new core_1.EventEmitter();
        this.newUser = new user_1.User();
        this.active = true; // flag if user is active ... <form ...*ngIf="active">
    }
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        // show the info about user was created
        console.log("OnSubmit() - for Create User was called...");
        console.log(this.newUser);
        console.log('Name: ' + this.newUser.name);
        console.log('Username: ' + this.newUser.username);
        // EventEmitter - sent something to parent component - app.component
        this.userCreated.emit({ user: this.newUser });
        // this line clear input fields
        this.newUser = new user_1.User();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return UserFormComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], UserFormComponent.prototype, "userCreated", void 0);
UserFormComponent = __decorate([
    core_1.Component({
        selector: 'user-form',
        //stylesUrl:
        styles: ["\n    form   {\n      padding: 10px;\n      /*background: #ECF0F1;*/\n      background: lightgreen;\n      border-radius: 3px;\n      margin-bottom: 30px;\n    }\n  "],
        //templateUrl
        template: "\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit()\" *ngIf=\"active\">\n      <div>\n         user-form.component, form (#form) {{form.valid}} (AS OUTPUT)\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': name.invalid && name.touched }\">\n        <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Name\" required\n          [(ngModel)]=\"newUser.name\" #name=\"ngModel\">\n\n      <!--\n      [ngClass]=\"{ 'has-error': name.invalid && name.touched } ... assign ngClass with RED BORDER if...\n      -->\n\n      <!-- \n       [(ngModel)]=\"newUser.name\" // banana box into ng model \n       #name=\"ngModel\">           // direct template reference in DOM\n      -->\n\n        <span class=\"help-block\" *ngIf=\"name.invalid && name.touched\">Some Name is required.</span>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': username.invalid && username.touched }\">\n        <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required\n          [(ngModel)]=\"newUser.username\" #username=\"ngModel\">\n\n        <span class=\"help-block\" *ngIf=\"username.invalid && username.touched\">Some Username is required.</span>\n      </div>\n\n      <!-- form.invalid - form referenced directly to \"#form\" attribute in the element form --> \n      <!-- button is disabled when form.invalid, invalid when input HTML element is required are empty--> \n      \n      <button type=\"submit\" class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"form.invalid\">\n        Create User\n      </button>\n\n    </form>\n  "
    })
], UserFormComponent);
exports.UserFormComponent = UserFormComponent;
//# sourceMappingURL=user-form.component.js.map