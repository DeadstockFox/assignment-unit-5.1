console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Michael',
  lastName: 'Kenyon',
  hasSiblings: true,
  shoeCount: 14,
  favThreeFoods: ['pizza', 'sandwiches', 'boba']
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/

//let fullName = `${me.firstName} ${me.lastName}`;
//I tried it both ways and they each seem to work.
let fullName = me.firstName + " " + me.lastName;
console.log('My full name is:', fullName);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/

console.log('My three favorite foods are:', me.favThreeFoods)
console.log('First food:', me.favThreeFoods[0])
console.log('Second food:', me.favThreeFoods[2]);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/

//Fun fact: I collect shoes!
//The "deadstock" in my github username is actually a shoe term meaning fresh or unworn.

console.log(`I own ${me.shoeCount} pairs of shoes!`);
me.shoeCount = 15; // Can also do me.shoeCount +=1 ?
console.log('My new show count is:', me.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'light blue';
console.log(me.favoriteColor);
console.log(me);