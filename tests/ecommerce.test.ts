import { describe, it, expect, beforeEach } from "vitest"; // `expect` is an assertion, `beforeEach` is a for loop thing that is useful to set variable before every unit test
import {
  addProduct,
  addToCart,
  removeFromCart,
  calculateTotal,
  clearCart,
  applyShippingDiscount
} from "../src/ecommerce";

describe("E-commerce System", () => { // Add test to e-commerce system
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => { // `it` describes the test? This is the unit test for each func
    // Arrange
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);

    // Act
    const sum = calculateTotal();

    // Assert
    expect(sum).toBe(600);
  });

  it("Should add items to cart", () => {
    // Arrange
    let cart = {};

    // Act
    cart = addToCart("Soap", 2);

    // Assert
    expect(cart["Soap"]).toBe(2);
  })

  it("Should have enpty cart", () => {
    // Arrange
    let cart = {}
    cart = addToCart("Soap", 2);
    cart = addToCart("Shampoo", 2);


    // Act
    cart = removeFromCart("Soap", 2);
    cart = removeFromCart("Shampoo", 2);


    // Assert
    expect(cart).toEqual({});
  });

  it("Should apply discount to cart", () => {
    // Arrange
    let cart = {};
    cart = addToCart("Soap", 3);

    // Act
    let discounted = applyShippingDiscount(calculateTotal());

    // Assert
    expect(discounted).toBe(calculateTotal() - 10);
  });
});
