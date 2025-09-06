const marvel_heroes = ["Thor", "Iron-Man", "Spider-Man"]
const Dc_heroes = ["Super-Man", "Flash", "Bat-Man"]
// marvel_heroes.push(Dc_heroes)
// console.log(marvel_heroes)

// const allheroes = marvel_heroes.concat(Dc_heroes)
// console.log(allheroes);

//spread example glass (when glass falls on the ground it spreads that is the simple example of spread)

const all_new_heroes = [...marvel_heroes,...Dc_heroes ]
// console.log(all_new_heroes)
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7,[4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("Utpal"))
console.log(Array.from("Utpal"))