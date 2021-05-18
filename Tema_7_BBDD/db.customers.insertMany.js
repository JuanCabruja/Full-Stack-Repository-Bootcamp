
// Creamos la colección con varios a la vez 
db.customers.insertMany([
    {
        name: 'Jane',
        lastName: 'Donmoongoovan',
        address: 'Carretera de cádiz',
        phoneNumber: 12343,
        shoppingCart: []
    }, {
        name: 'peter',
        lastName: 'Parker',
        address: 'NY',
        email: 'pparker@gmail.com',
        phoneNumber:123123,
        shoppingCart: []
    }
]);

//
db.products.insertMany([
    {
        name: 'T-Shirt',
        brand: 'Adidas',
        category: 'clothes',
        price: 15
    }, {
        name: 'SmartPhone',
        brand: 'iPhone',
        category: 'electronics',
        price: 1200
    }, {
        name: 'Macarrones',
        brand: 'Carrefour',
        category: 'food',
        price: 2
    }
])