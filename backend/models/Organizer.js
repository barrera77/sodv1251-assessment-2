export default class Organizer {
  constructor(id, name, address, city, email, phone, role, eventsOrganized) {
    this.id = id;
    this.address = address;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.role = role;
    this.eventsOrganized = [];
  }

  addEvents(event) {
    this.eventsOrganized.push(event);
  }
}
