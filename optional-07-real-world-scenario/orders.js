class Customer{
  constructor(id, customerName){
    this.id = id;
    this.customerName = customerName;
  }

  generateUniqueId(){
    return `_${Math.random().toString(36).slice(2, 9)}`;
    };
}



class Order{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  displayDetails() {
    return `Name: ${this.name}, Price: ${this.price}`;
  }

}
Order()

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const customer = new Customer(new Customer().generateUniqueId(), customerName);
  const newOrder = {
    id: customer.generateUniqueId(),
    customer,
    items,
    status: "Pending",
    total: items.reduce((sum, item) => sum + item.price, 0),
  };
  items.push(newOrder);
  return newOrder;
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const order = orders.find((order) => order.id === orderId);
  if (order) {
    order.status = status;
    return order;
  }
  return null;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  return orders
  .filter((order) => order.status === 'Selesai')
  .reduce((sum, order) => sum + order.total, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const index = orders.findIndex((order) => order.id === id);
  if(index !== -1) {
    orders.splice(index, 1);
    return true;
  }
  return false;
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
