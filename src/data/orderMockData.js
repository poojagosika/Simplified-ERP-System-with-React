const mockData = [];
const orderDate = new Date();
const statuses = ["Shipped", "Processing", "Delivered", "Cancelled"];

function generateUperCase(length = 1) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function generateRandomName(length = 5) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

for (let i = 1; i <= 105; i++) {
  let date = new Date(orderDate.getTime() + i * 24 * 60 * 60 * 1000);
  let formattedDate = date.toISOString().split("T")[0]; // YYYY-MM-DD format

  const order = {
    orderId: `${1000 + i}`,
    customerName: generateUperCase() + generateRandomName(),
    orderDate: formattedDate,
    status: statuses[Math.floor(Math.random() * statuses.length)],
  };

  mockData.push(order);
}

// Convert to JSON
const OrderMockDataJson = mockData;

export default OrderMockDataJson;
