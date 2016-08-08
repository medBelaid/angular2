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
var test_component_1 = require('./test/test.component');
var BindingsComponent = (function () {
    function BindingsComponent() {
        this.name = "Mohamed Belaid";
        this.name2 = "";
        this.values = "";
        this.hobbies = "";
    }
    BindingsComponent.prototype.onKeyup = function (value) {
        this.values += value + ' | ';
    };
    BindingsComponent = __decorate([
        core_1.Component({
            selector: 'my-bindings',
            template: "\n  <h3>[style.color]=\"inputElement.value === 'yes' ? 'red':'gray'\" </h3>\n  <h2>Hello <span [style.color]=\"inputElement.value === 'yes' ? 'red':'gray'\">{{name}}</span></h2>\n  <p>Try to write 'yes' inside input !!\n    <span [class.is-awesome]=\"inputElement.value === 'yes'\"> Is it awesome?</span>\n  <input type=\"text\" #inputElement (keyup)=\"0\">\n  <button [disabled]=\"inputElement.value !== 'yes'\" >Only enabled if 'yes' was entered</button>\n  <h2>Event Binding && Two Way Databinding</h2>\n  <input [value]=\"name\" #input2 (keyup)=\"onKeyup(input2.value) \">\n  <p>{{values}}\n  <br>\n  <input [(ngModel)]=\"name\">\n  <section class=\"parent\">\n    <h2>this is the parent component</h2>\n    <h4>Please enter your name</h4>\n    <input [(ngModel)]=\"name2\"> <p>{{name2}}</p>\n    <section class=\"child\">\n      <test [Myname]=\"name2\" (hobbiesChanged)=\"hobbies = $event\"></test>\n    </section>\n    <p>My hobbies are: {{hobbies}}</p>\n  </section>\n  <p>Change your source here:\n  <input #imageSource value=\"https://pbs.twimg.com/profile_images/674634336772206593/41b1p-6l.png\" (keyup)=\"0\">\n  <img [src]=\"imageSource.value\">\n  </p>\n",
            styleUrls: ['app/bindings/bindings.css'],
            directives: [test_component_1.TestComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BindingsComponent);
    return BindingsComponent;
}());
exports.BindingsComponent = BindingsComponent;
//# sourceMappingURL=bindings.component.js.map