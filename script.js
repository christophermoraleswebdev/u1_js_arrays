// Arrays 
// Great for storing data/basically a list 
let friends = ['adri', 'miles', 'mias']


let fruit = ['orange', 'banana', 'pineapple', 'guava', 'apple']; 
// console.log(fruit[0])
// the console.log above will have an output of orange 

// Arrays start with an index of 0


// CHANGES AT THE END OF THE ARRAY
// .pop() removes the last item
// .push() adds items at the end of the array


// CHANGES AT THE BEGINNING OF THE ARRAY
// .shift() removes the first item in the array
// .unshift() adds item to beginning of the array

// .splice() can add, delete, and rename items
// it can take 3 arguments: where to start, how far to go, and what to do
// fruit.splice(0, 0, 'fuji apple')
// adds fuji apple to the begining of the array
// console.log(fruit)

// fruit.splice(0, 1, 'fuji apple')
// console.log(fruit)

fruit.splice(2,3)
console.log(fruit)