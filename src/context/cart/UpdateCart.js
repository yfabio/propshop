class UpdateCart {
  constructor(state) {
    this.state = state;
  }

  calcItemsPrice() {
    const itemsPrice = this.state.cartItems.reduce(
      (acc, item) => acc + item.price * item.qty,
      0
    );
    this.state.itemsPrice = this.addDecimals(itemsPrice);
  }

  // if order is over $100 then free else $10 shipping
  calcShippingPrice() {
    if (this.state.itemsPrice > 0) {
      this.state.shippingPrice = this.addDecimals(
        this.state.itemsPrice > 100 ? 0 : 10
      );
    } else {
      this.state.shippingPrice = "0";
    }
  }

  // 15% tax
  calcTaxPrice() {
    this.state.taxPrice = this.addDecimals(
      Number(0.15 * this.state.itemsPrice)
    );
  }

  calcTotalPrice() {
    this.state.totalPrice = this.addDecimals(
      [
        Number(this.state.itemsPrice),
        Number(this.state.shippingPrice),
        Number(this.state.taxPrice),
      ].reduce((acc, value) => acc + value, 0)
    );
  }

  addToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this.state));
  }

  update() {
    this.calcItemsPrice();
    this.calcShippingPrice();
    this.calcTaxPrice();
    this.calcTotalPrice();
    this.addToLocalStorage();
  }

  addDecimals(number) {
    return (Math.round(number * 100) / 100).toFixed(2);
  }
}

export default UpdateCart;
