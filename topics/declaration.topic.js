module.exports = () => {

    // var is a globally / object scoped, can be redeclare and update

    var name = "Doe";

    if (true) {
        var name = "John";
    }

    console.log(`Name is ${name}`) // output will be "John"
}