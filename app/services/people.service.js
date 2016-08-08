"use strict";
var mock_persons_1 = require('./../data/mock-persons');
var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getAll = function () {
        return mock_persons_1.PERSONS;
    };
    return PeopleService;
}());
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map