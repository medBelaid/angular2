import { Person } from './../models/person';
import { PERSONS } from './../data/mock-persons';

export class PeopleService{
  getAll() : Person[] {
    return PERSONS
  }
}
