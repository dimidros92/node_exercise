class UserDto {
  /**
   * constructor from User model
   *  @param {object} predicate
   *  @param {number} predicate.id
   *  @param {string} predicate.firstName
   *  @param {string} predicate.lastName
   *  @param {Date} predicate.birthday
   *  @param {string} predicate.gender
   *  @param {string} predicate.username
   */
  constructor(user) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
  }
}
