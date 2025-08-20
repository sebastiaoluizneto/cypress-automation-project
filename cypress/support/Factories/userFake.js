import { faker } from '@faker-js/faker';

export function makeUser() {
  return {
    name: faker.person.firstName(),
    email: faker.internet.email().toLowerCase(),
    password: faker.internet.password({ length: 10, memorable: false })
  };
}
