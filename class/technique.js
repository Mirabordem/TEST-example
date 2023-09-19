const Sculpture = require("./sculpture");



class Technique extends Sculpture {
    constructor(inch, style, sculptureName, material, location) {
        super(inch, style, sculptureName);
        this.material = material;
        this.location = location;
    }

    findTechniqueByMaterial() {
        return `AlumixArt Mixed Media with bonded ${this.material}.`;
    }

    findByLocation() {
        return `"${this.sculptureName}" - ${this.location} sculpture`;
    }

    outdoorCommission() {
        return this.location === "outdoor" ? `Outdoor sculpture - "${this.sculptureName}"` : "Not valid";
    }
}


// let technique = new Technique(44, "figurative", "Aligned", "iron", "indoor");

// let technique1 = new Technique(52, "figurative", "Beyond Reaction", "bronze", "indoor");
// let technique2 = new Technique(24, "figurative", "Ready For Change", "marble", "indoor");
// let technique3 = new Technique(92, "figurative", "Receiver", "copper", "outdoor");

// console.log(technique.findTechniqueByMaterial());
// console.log(technique1.findTechniqueByMaterial());
// console.log(technique2.findTechniqueByMaterial());
// console.log(technique3.findTechniqueByMaterial());

// console.log(technique.findByLocation());
// console.log(technique1.findByLocation());
// console.log(technique2.findByLocation());
// console.log(technique3.findByLocation());

// console.log(technique.outdoorCommission());
// console.log(technique3.outdoorCommission());

module.exports = Technique;




// class Technique extends Sculpture {
//     constructor(inch, style, sculptureName, material, location) {
//         super(inch, style, sculptureName);
//         this.material = material;
//         this.location = location;
//     };

//     findTechniqueByMaterial(sculptureName, material) {
//         if (this.material === "iron") {
//          return "AlumixArt Mixed Media with bonded iron.";
//         } else if (this.material === "bronze") {
//           return "AlumixArt Mixed Media with bonded bronze.";
//         } else if (this.material === "copper") {
//           return "AlumixArt Mixed Media with bonded copper.";
//         } else if (this.material === "marble") {
//           return "AlumixArt Mixed Media with bonded marble.";
//         };
//     };

//     findByLocation() {
//         if (this.location === "indoor") {
//             return `"${this.sculptureName}" - indoor sculpture`
//         } else {
//             return `"${this.sculptureName}" - outdoor sculpture`
//         };
//     };

//     outdoorCommission() {
//         if (this.location === "outdoor") {
//             return `Outdoor sculpture - "${this.sculptureName}"`;
//         } else {
//             return `Not valid`;
//         };
//     };
// };
