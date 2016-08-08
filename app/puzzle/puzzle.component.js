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
var PuzzleComponent = (function () {
    function PuzzleComponent() {
    }
    PuzzleComponent.prototype.ngOnInit = function () {
        this.switch1Num = Math.round(Math.random());
        this.switch2Num = Math.round(Math.random());
        this.switch3Num = Math.round(Math.random());
        this.switch4Num = Math.round(Math.random());
        console.log(this.switch1Num, this.switch2Num, this.switch3Num, this.switch4Num);
    };
    PuzzleComponent = __decorate([
        core_1.Component({
            selector: 'puzzle',
            template: "\n  <section class=\"setup\">\n   <h2>Game Setup</h2>\n   Enter your name please:\n   <input type=\"text\" #name (keyup)=\"0\">\n  </section>\n  <section\n  [style.display]=\"name.value==='' ? 'none':'block' \"\n  [ngClass]=\"{\n    puzzle:true,\n    solved: switch1.value == switch1Num &&\n            switch2.value == switch2Num &&\n            switch3.value == switch3Num &&\n            switch4.value == switch4Num\n  }\"\n  >\n   <h2>The puzzle | {{ switch1.value == switch1Num &&\n           switch2.value == switch2Num &&\n           switch3.value == switch3Num &&\n           switch4.value == switch4Num ? 'SOLVED':'NOT SOLVED' }}</h2>\n   <p>Welcome <span class=\"name\">{{name.value}}</span> </p>\n   <br>\n   Switch1: <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n   Switch2: <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n   Switch3: <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n   Switch4: <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n  </section>\n  <h2 [hidden]=\"switch1.value != switch1Num ||\n          switch2.value != switch2Num ||\n          switch3.value != switch3Num ||\n          switch4.value != switch4Num\">\n  Congratulations {{name.value}}, you did it!</h2>\n",
            styleUrls: ['app/puzzle/puzzle.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], PuzzleComponent);
    return PuzzleComponent;
}());
exports.PuzzleComponent = PuzzleComponent;
//# sourceMappingURL=puzzle.component.js.map