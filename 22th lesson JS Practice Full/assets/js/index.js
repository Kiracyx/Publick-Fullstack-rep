class User {
  constructor(email = null, gender = null, phone = null, imgSrc = null) {
    this.email = email;
    this.gender = gender;
    this.phone = phone;
    this.imgSrc = imgSrc;
    this.score = 0;
  }

  sendSms(message) {
    console.log(`SMS sent to ${this.phone} with message: ${message}`);
  }
  sendEmail(message) {
    `Email sent to ${this.email} with message: ${message}`;
  }
  addScore(amount) {
    this.score += amount;
    return this.score;
  }
}

const user1 = new User();

console.log(user1);
