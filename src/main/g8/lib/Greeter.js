module.exports = class Greeter {
  constructor (message = 'Hello') {
    this.message = message
  }

  greet (whom = 'world') {
    return `${this.message} ${whom}!`
  }
}
