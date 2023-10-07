// Define the variable
const cats = ["Milo", "Otis", "Garfield"];
//Define the Functions
function destructivelyAppendCat(name) {
    cats.push(name);
}
module.exports = {
    destructivelyAppendCat,
    destructivelyPrependCat,

};

