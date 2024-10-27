export default class Attendee {
  constructor(
    id,
    name,
    avatar = "https://avatar.iran.liara.run/public",
    address,
    city,
    email,
    phone,
    username,
    password
  ) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.address = address;
    this.city = city;
    this.email = email;
    this.phone = phone;
    this.username = username;
    this.password = password;
    this.events = [];
  }

  //Assign event to the attendee
  addEvent(event) {
    this.events.push(event);
  }
}
