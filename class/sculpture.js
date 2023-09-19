
class Sculpture {
    constructor(inch, style, sculptureName) {
        this.inch = inch;
        this.style = style;
        this.sculptureName = sculptureName;
    }

    confirmOrder() {
        return this.inch && this.style && this.sculptureName;
    }

    workingStudio() {
        return this.inch > 60 ? "studio1" : "studio2";
    }
}




// let sculpture = new Sculpture(44, "figurative", "Aligned");
// let sculpture1 = new Sculpture(80, "abstract", "Diver");

// console.log(sculpture instanceof Sculpture);

// console.log(sculpture.confirmOrder());
// console.log(sculpture1.confirmOrder());

// console.log(sculpture.workingStudio());
// console.log(sculpture1.workingStudio());

module.exports = Sculpture;




// class Sculpture {
//     constructor(inch, style, sculptureName) {
//         this.inch = inch;
//         this.style = style;
//         this.sculptureName = sculptureName;
//     };


//     confirmOrder() {
//         return (this.inch > 10)
//         && (typeof this.style === "string")
//         && (typeof this.sculptureName === "string");
//     };


//     workingStudio() {
//         if (this.inch > 60) return "studio1";
//         else return "studio2";
//     };
// };
