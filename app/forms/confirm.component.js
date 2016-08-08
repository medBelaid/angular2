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
var core_1 = require('@angular/core');
var ConfirmComponent = (function () {
    function ConfirmComponent() {
        this.myself = { name: '', age: '' };
        this.isFilled = false;
        this.isValid = false;
        this.confirmed = new core_1.EventEmitter();
    }
    ConfirmComponent.prototype.checkInputs = function () {
        if (this.myself.name != '' && this.myself.age != '') {
            this.isFilled = true;
        }
        else {
            this.isFilled = false;
        }
        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
            this.isValid = true;
        }
        else {
            this.isValid = false;
        }
    };
    ConfirmComponent.prototype.onConfirm = function () {
        this.confirmed.emit(this.myself);
    };
    ConfirmComponent = __decorate([
        core_1.Component({
            selector: 'my-confirm',
            template: "\n    <h1>Your submitted the following details, Is this correct?</h1>\n    <p>your name is <span class=\"highlight\">{{myself.name}}</span>\n    and you are <span class=\"highlight\">{{myself.age}}</span> years old.\n    Plz click confirm if you have made any changes to this information.</p>\n    <div>\n      <label for=\"name\">Your name</label>\n      <input id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"checkInputs()\">\n    </div>\n    <div>\n      <label for=\"age\">Your age</label>\n      <input id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"checkInputs()\">\n    </div>\n    <br>\n    <div>Filled out: {{isFilled ? 'Yes' : 'Non'}}</div>\n    <div>Valid: {{isValid ? 'Yes' : 'Non'}}</div>\n    <button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>\n    ",
            inputs: ['myself'],
            outputs: ['confirmed']
        }), 
        __metadata('design:paramtypes', [])
    ], ConfirmComponent);
    return ConfirmComponent;
}());
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map