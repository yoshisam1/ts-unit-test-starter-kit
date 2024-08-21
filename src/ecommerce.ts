export type Product = {
  id: string;
  price: number;
  stock: number;
};

export const stock: Record<string, Product> = {};
export let cart: Record<string, number> = {};

/**
 * Adds a product to the store's inventory.
 * @param productId - The ID of the product.
 * @param price - The price of the product.
 * @param stockCount- The number of items available in stock.
 * @returns The updated product.
 */
export function addProduct(
  productId: string,
  price: number,
  stockCount: number
): Product {
  const product = { id: productId, price, stock: stockCount };
  stock[productId] = product;
  return product;
}

/**
 * Updates the quantity of a product in the cart.
 * @param productId - The ID of the product.
 * @param quantity - The quantity to add (positive) or remove (negative) from the cart.
 * @returns The updated cart.
 */
function updateCart(
  productId: string,
  quantity: number
): Record<string, number> {
  cart[productId] = (cart[productId] || 0) + quantity;
  if (cart[productId] <= 0) {
    delete cart[productId];
  }
  return cart;
}

/**
 * Adds a specified quantity of a product to the cart.
 * @param productId - The ID of the product.
 * @param quantity - The quantity of the product to add.
 * @returns The updated cart.
 */
export function addToCart(
  productId: string,
  quantity: number
): Record<string, number> {
  const product = stock[productId];
  if (!product || product.stock < quantity) {
    throw new Error("Insufficient stock");
  }
  return updateCart(productId, quantity);
}

/**
 * Removes a specified quantity of a product from the cart.
 * @param productId - The ID of the product.
 * @param quantity - The quantity of the product to remove.
 * @returns The updated cart.
 */
export function removeFromCart(
  productId: string,
  quantity: number
): Record<string, number> {
  if (!cart[productId] || cart[productId] < quantity) {
    throw new Error("Cannot remove item from cart");
  }
  return updateCart(productId, -quantity);
}

/**
 * Calculates the total cost of all items in the cart.
 * @returns The total cost of the items in the cart.
 */
export function calculateTotal(): number {
  return Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = stock[productId];
    total = total + product.price * quantity;
    return total;
  }, 0);
}

/**
 * Clears the shopping cart by removing all items.
 * @returns The cleared cart (empty object).
 */
export function clearCart(): Record<string, number> {
  cart = {};
  return cart;
}

/**
 * Applies a shipping discount to the total cost if total cost exceeds a certain threshold.
 *
 * @param {number} total - The total cost to apply the discount to.
 * @return {number} The total cost with the discount applied, or the original total cost if the discount is not applicable.
 */
 export function applyShippingDiscount(total: number): number {
  let discounted = total - 10;

   // Activity 1 code here
   return discounted;
 }
