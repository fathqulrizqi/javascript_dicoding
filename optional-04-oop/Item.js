/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

class Item {
    constructor(id, itemName, quantity, price){
        this.id = Number(id);
        this.itemName = String(itemName);
        this.quantity = Number(quantity);
        this.price = Number(price);
    }

    updateDetails(itemName, quantity, price){
        this.itemName = itemName;
        this.quantity = quantity;
        this.price = price;
    }

    displayDetails(){ 
        return `ID: ${this.id}, Name: ${this.itemName}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}

// Jangan hapus kode di bawah ini!
export default Item;
