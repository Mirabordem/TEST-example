const chai = require("chai");
const expect = chai.expect;

const Sculpture = require("../class/sculpture.js");
const Client = require("../class/client.js");
const Series = require("../class/series.js");
const Technique = require("../class/technique.js");


describe ('Classes, Constructors and Inheritance', function () {
    it('SCULPTURE: should set inch, style, and sculptureName attributes on creation', function () {

        let sculpture = new Sculpture(44, "figurative", "Aligned");

        expect(sculpture.inch).to.equal(44);
        expect(sculpture.style).to.equal("figurative");
        expect(sculpture.sculptureName).to.equal("Aligned");

        let sculpture1 = new Sculpture(80, "abstract", "Diver");

        expect(sculpture1.inch).to.equal(80);
        expect(sculpture1.style).to.equal("abstract");
        expect(sculpture1.sculptureName).to.equal("Diver");

    });

    it('CLIENT: should be a subclass of Sculpture', function () {

        let newClient = new Client(44, "figurative", "Aligned");
        expect(newClient instanceof Sculpture).to.be.true;

    });

    it('CLIENT: should have clientName, and type attributes', function () {

        let newClient1 = new Client(44, "figurative", "Aligned");
        expect(newClient1).to.haveOwnProperty("clientName");
        expect(newClient1).to.haveOwnProperty("type");


        let newClient2 = new Client(44, "figurative", "Aligned", "John Smith", "private");
        expect(newClient2.clientName).to.equal("John Smith");
        expect(newClient2.type).to.equal("private");
    });

    it('TECHNIQUE: should be a subclass of Sculpture', function () {

        let technique = new Technique(44, "figurative", "Aligned");
        expect(technique instanceof Sculpture).to.be.true;

    });

    it('TECHNIQUE: should have material, and location attributes', function () {

        let technique1 = new Technique(44, "figurative", "Aligned");
        expect(technique1).to.haveOwnProperty("material");
        expect(technique1).to.haveOwnProperty("location");


        let technique2 = new Technique(44, "figurative", "Aligned", "iron", "indoor");
        expect(technique2.material).to.equal("iron");
        expect(technique2.location).to.equal("indoor");
    });


    it('SERIES: should set a name and an empty array of series name on creation', function () {

        let series = new Series('Dreamer Series');

        expect(series.name).to.eql("Dreamer Series");
        expect(series.singleSeries).to.be.an("array");
        expect(series.singleSeries).to.be.empty;
    });
});


describe ('Validating and setting the order', function () {

    it("Sculpture order is valid when the inch, style, and sculptureName are established", function () {

        let validSculpture = new Sculpture(80, "abstract", "Diver");
        let invalidSculpture = new Sculpture(5, 0, null);

        expect(validSculpture.confirmOrder()).to.be.true;
        expect(invalidSculpture.confirmOrder()).to.be.false;
    });


    it("If sculpture is more than 60 inch it should be created in studio1, otherwise in studio2", function () {

        let sculpture = new Sculpture(44, "figurative", "Aligned");
        let sculpture1 = new Sculpture(80, "abstract", "Diver");

        expect(sculpture.workingStudio()).to.eql("studio2")
        expect(sculpture1.workingStudio()).to.eql("studio1")
    });
});


describe ('Set the type of client', function () {

    it("Establish the client by the type of order", function () {

        let newClient1 = new Client(72, "abstract", "Heal Naturally", "Mary Brown", "business");
        let newClient2 = new Client(80, "figurative", "Diver", "Amy Knight", "private");
        let newClient3 = new Client(24, "figurative", "Ready For Change", "101 Project", "gallery");

        expect(newClient1.findClientType()).to.eql("Mary Brown is a business client.");
        expect(newClient2.findClientType()).to.eql("Amy Knight is a private client.");
        expect(newClient3.findClientType()).to.eql('"101 Project" is an art gallery.');
    });
});


describe ('Creating sculpture series and adding a sculpture', function () {

    it("Add sculpture to a new series", function () {

        let dreamerSeries = new Series();
        let forgiveYourselfSeries = new Series();

        let Dreamer1 = new Sculpture(80, "abstract", "DREAMER");
        let Dreamer2 = new Sculpture(26, "figurative", "DREAMER1");
        let invalidSculpture = new Sculpture(5, 0, null);


        expect(dreamerSeries.addSculptureToSeries(Dreamer1)).to.eql(1);
        expect(dreamerSeries.addSculptureToSeries(invalidSculpture)).to.eql(`There is no such order.`);
        expect(dreamerSeries.addSculptureToSeries(Dreamer2)).to.eql(2);
        expect(dreamerSeries.singleSeries).to.eql([Dreamer1, Dreamer2])


        let ForgiveYourself1 = new Sculpture(80, "abstract", "FORGIVE YOURSELF");
        let ForgiveYourself2 = new Sculpture(26, "figurative", "FORGIVE YOURSELF1");
        let invalidSculpture1 = new Sculpture(8, [], "");


        expect(forgiveYourselfSeries.addSculptureToSeries(ForgiveYourself1)).to.eql(1);
        expect(forgiveYourselfSeries.addSculptureToSeries(ForgiveYourself2)).to.eql(2);
        expect(forgiveYourselfSeries.addSculptureToSeries(invalidSculpture1)).to.eql(`There is no such order.`);
        expect(forgiveYourselfSeries.singleSeries).to.eql([ForgiveYourself1, ForgiveYourself2])
    });
});


 describe ('Establishing a particular technique and installation location', function () {

    it('find the correct technique by material', function () {

        let technique = new Technique(44, "figurative", "Aligned", "iron", "indoor");
        let technique1 = new Technique(52, "figurative", "Beyond Reaction", "bronze", "indoor");
        let technique2 = new Technique(24, "figurative", "Ready For Change", "marble", "indoor");
        let technique3 = new Technique(92, "figurative", "Receiver", "copper", "outdoor");

        expect(technique.findTechniqueByMaterial()).to.eql(`AlumixArt Mixed Media with bonded iron.`)
        expect(technique1.findTechniqueByMaterial()).to.eql(`AlumixArt Mixed Media with bonded bronze.`)
        expect(technique2.findTechniqueByMaterial()).to.eql(`AlumixArt Mixed Media with bonded marble.`)
        expect(technique3.findTechniqueByMaterial()).to.eql(`AlumixArt Mixed Media with bonded copper.`)
    });

    it('find the ultimate location for the sculpture', function () {

        let technique = new Technique(44, "figurative", "Aligned", "iron", "indoor");
        let technique1 = new Technique(52, "figurative", "Beyond Reaction", "bronze", "indoor");
        let technique2 = new Technique(24, "figurative", "Ready For Change", "marble", "indoor");
        let technique3 = new Technique(92, "figurative", "Receiver", "copper", "outdoor");

        expect(technique.findByLocation()).to.eql(`"Aligned" - indoor sculpture`)
        expect(technique1.findByLocation()).to.eql(`"Beyond Reaction" - indoor sculpture`)
        expect(technique2.findByLocation()).to.eql(`"Ready For Change" - indoor sculpture`)
        expect(technique3.findByLocation()).to.eql(`"Receiver" - outdoor sculpture`)
    });

    it('find the outdoor commissions', function () {

        let technique = new Technique(44, "figurative", "Aligned", "iron", "indoor");
        let technique3 = new Technique(92, "figurative", "Receiver", "copper", "outdoor");

        expect(technique.outdoorCommission()).to.eql(`Not valid`)
        expect(technique3.outdoorCommission()).to.eql(`Outdoor sculpture - "Receiver"`)
    });
});
