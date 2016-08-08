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
var InputComponent = (function () {
    function InputComponent() {
        this.myself = { name: '', age: '' };
        this.isFilled = false;
        this.isValid = false;
        this.submitted = new core_1.EventEmitter();
    }
    InputComponent.prototype.checkInputs = function () {
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
    InputComponent.prototype.onSubmit = function () {
        this.submitted.emit(this.myself);
    };
    InputComponent = __decorate([
        core_1.Component({
            selector: 'my-input',
            template: "\n  <h1>Your Details plz</h1>\n  <div>\n    <label for=\"name\">Your name</label>\n    <input id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"checkInputs()\">\n  </div>\n  <div>\n    <label for=\"age\">Your age</label>\n    <input id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"checkInputs()\">\n  </div>\n  <br>\n  <div>Filled out: {{isFilled ? 'Yes' : 'Non'}}</div>\n  <div>Valid: {{isValid ? 'Yes' : 'Non'}}</div>\n  <button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n\n  ",
            inputs: ['myself'],
            outputs: ['submitted']
        }), 
        __metadata('design:paramtypes', [])
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map