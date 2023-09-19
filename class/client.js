
const Sculpture = require("./sculpture");




class Client extends Sculpture {
    constructor(inch, style, sculptureName, clientName, type) {
        super(inch, style, sculptureName);
        this.clientName = clientName;
        this.type = type;
    };

    findClientType() {
        if (this.type === "private") {
          return `${this.clientName} is a private client.`;
        } else if (this.type === "business") {
          return `${this.clientName} is a business client.`;
        } else {
          return `"${this.clientName}" is an art gallery.`;
        };
    };
};

// let newClient = new Client(44, "figurative", "Aligned", "John Smith", "private");
// let newClient1 = new Client(72, "abstract", "Heal Naturally", "Mary Brown", "business");
// let newClient2 = new Client(80, "figurative", "Diver", "Amy Knight", "private");
// let newClient3 = new Client(24, "figurative", "Ready For Change", "101 Project", "gallery");

// console.log(newClient.findClientType());
// console.log(newClient1.findClientType());
// console.log(newClient2.findClientType());
// console.log(newClient3.findClientType());


module.exports = Client;
