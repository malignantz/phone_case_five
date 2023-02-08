function CartComponent({ items }) {
  function processItems() {
    return items.map((item) => <li>{item}</li>);
  }

  return (
    <>
      <h2>Your cart</h2>
      <ul>
        {items.length === 0 ? <li>No items in cart.</li> : processItems()}
      </ul>
    </>
  );
}
export default CartComponent;
