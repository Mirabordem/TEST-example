const Sculpture = require("./sculpture");


class Series {
    constructor(name) {
        this.name = name;
        this.singleSeries = [];
    }

    addSculptureToSeries(sculpture) {
        if (sculpture instanceof Sculpture) {
            this.singleSeries.push(sculpture);
            return this.singleSeries.length;
        } else {
            return `There is no such order.`;
        }
    }
}



// let dreamerSeries = new Series('Dreamer Series');
// let forgiveYourselfSeries = new Series('Forgive Yourself Series');


// let Dreamer1 = new Sculpture(80, "abstract", "DREAMER");
// let Dreamer2 = new Sculpture(26, "figurative", "DREAMER1");
// let invalidSculpture = new Sculpture(5, 0, null);

// console.log(dreamerSeries.addSculptureToSeries(Dreamer1));
// console.log(dreamerSeries.addSculptureToSeries(invalidSculpture));
// console.log(dreamerSeries.addSculptureToSeries(Dreamer2));
// console.log(dreamerSeries.singleSeries);

// let ForgiveYourself1 = new Sculpture(80, "abstract", "FORGIVE YOURSELF");
// let ForgiveYourself2 = new Sculpture(26, "figurative", "FORGIVE YOURSELF1");
// let invalidSculpture1 = new Sculpture(8, [], "");

// console.log(forgiveYourselfSeries.addSculptureToSeries(ForgiveYourself1));
// console.log(forgiveYourselfSeries.addSculptureToSeries(ForgiveYourself2));
// console.log(forgiveYourselfSeries.addSculptureToSeries(invalidSculpture1));
// console.log(forgiveYourselfSeries.singleSeries);




module.exports = Series;



// class Series {
//     constructor(name) {
//         this.name = name;
//         this.singleSeries = [];
//     };


//     addSculptureToSeries(sculpture) {
//         if (sculpture.confirmOrder()) {
//         return this.singleSeries.push(sculpture);
//         } else {
//             return `There is no such order.`
//         }
//     };
// };
