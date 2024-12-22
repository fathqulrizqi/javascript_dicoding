/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */
import Item from './Item.js';

class Inventory {
    constructor(...rest){
        this.items = [];
        rest.forEach(item => this.addItem(item));
    }

    addItem(item){
        this.items.push(item);
    }

    removeItem(id){
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    listItems(){
        return this.items.map(item => item.displayDetails())
    }


    updateItemById(id, itemName, quantity, price) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.updateDetails(itemName, quantity, price);
        } else {
            console.log(`Item with ID ${id} not found.`);
        }



}
}


// Jangan hapus kode di bawah ini!
export default Inventory;
