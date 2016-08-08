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
var input_component_1 = require('./input.component');
var confirm_component_1 = require('./confirm.component');
var FormsComponent = (function () {
    function FormsComponent() {
        this.myself = { name: '', age: '' };
        this.confirmedMyself = { name: '', age: '' };
    }
    FormsComponent.prototype.onSubmit = function (myself) {
        this.myself = { name: myself.name, age: myself.age };
    };
    FormsComponent.prototype.onConfirm = function (myself) {
        this.confirmedMyself = { name: myself.name, age: myself.age };
    };
    FormsComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            template: "\n<div class=\"container\">\n  <my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n</div>\n<div class=\"container\">\n  <my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n</div>\n",
            directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent],
            styleUrls: ['app/forms/forms.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], FormsComponent);
    return FormsComponent;
}());
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map