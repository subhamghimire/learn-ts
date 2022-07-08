// type Student = {
//   [key: string]: boolean;
// };
// const conforms: Student = {
//   name: true,
//   age: true,
// };
var Genre;
(function (Genre) {
    Genre[Genre["Rock"] = 0] = "Rock";
    Genre[Genre["CountryAndWestern"] = 1] = "CountryAndWestern";
    Genre[Genre["Classical"] = 2] = "Classical";
    Genre[Genre["Pop"] = 3] = "Pop";
    Genre[Genre["HeavyMetal"] = 4] = "HeavyMetal";
})(Genre || (Genre = {}));
var MusicCollection = /** @class */ (function () {
    function MusicCollection() {
        this.collection = new Map();
    }
    MusicCollection.prototype.Add = function (genre, artist) {
        this.collection.set(genre, artist);
    };
    MusicCollection.prototype.Get = function (genre) {
        return this.collection.get(genre);
    };
    return MusicCollection;
}());
var collection = new MusicCollection();
collection.Add(Genre.Classical, ["Debussy", "Bach", "Elgar", "Beethoven"]);
collection.Add(Genre.CountryAndWestern, [
    "Dolly Parton",
    "Toby Keith",
    "Willie Nelson",
]);
collection.Add(Genre.HeavyMetal, ["Tygers of Pan Tang", "Saxon", "Doro"]);
collection.Add(Genre.Pop, ["Michael Jackson", "Abba", "The Spice Girls"]);
collection.Add(Genre.Rock, ["Deep Purple", "Led Zeppelin", "The Dixie Dregs"]);
console.log(collection.Get(Genre.HeavyMetal));
