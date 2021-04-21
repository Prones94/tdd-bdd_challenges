const mocha = require("mocha")
const chai = require("chai")
const utils = require("../utils")
const expect = chai.expect

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello()
  expect(hello).to.be.a("string")
  expect(hello).to.equal("Hello")
  expect(hello).with.lengthOf(5)
})

// ========================================================
// Level 1 Challenges
// 1. Write the pending tests check that they are pending, like this:
//    it("should do something that you want done")
// 2. Next, write the test and see that it fails.
// 3. Write the code in the utils.js file to make the test pass.
// 4. Finally see if you would like to refactor your code at all.
// This is called "Red-Green-Refactor"
// ========================================================
it("should return the area", () => {
  const w = 10, h = 3;
  const area = utils.area(w,h)
  expect(w).to.be.a("number")
  expect(h).to.be.a("number")
  expect(area).to.be.a("number")
  expect(area).to.equal(30)
})

it("should return the perimeter", () => {
  const w = 10, h = 10;
  const result = utils.perimeter(w,h)
  expect(w).to.be.a("number")
  expect(h).to.be.a("number")
  expect(result).to.be.a("number")
  expect(result).to.equal(40)
})

it("should return the area of a circle",() => {
  const r = 4;
  const area = utils.circleArea(r)
  expect(r).to.be.a("number")
  expect(area).to.be.above(50)
})



// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

beforeEach((done) => {
  utils.clearCart()
  done()
})

it("Should create a new (object) Item with name and price", function() {
  const item = utils.createItem("apple", 0.99)
  expect(item).to.be.a("object")
  expect(item).to.have.property("name", "apple")
  expect(item).to.have.property("price", 0.99)
  expect(item).to.have.property("quantity", 1)
})

it("Should return an array containing all items in cart",() => {
  const shoppingCart = utils.getShoppingCart()
  expect(shoppingCart).to.be.a("array")
})

it("Should add a new item to the shopping cart",() => {
  const apple = utils.createItem("apple", 0.99)
  const ogCart = utils.getShoppingCart()
  let ogCartSize = ogCart.length

  expect(ogCart).to.be.a("array")
  expect(apple).to.be.a("object")
  expect(ogCartSize).to.equal(0)

  utils.addItemToCart(apple)
  
})

it("Should return the number of items in the cart")

it("Should remove items from cart")

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart")

it("Should validate that an empty cart has 0 items")

it("Should return the total cost of all items in the cart")
