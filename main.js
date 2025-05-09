import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append( 'dog' );
list.append( 'cat' );
// list.append( 'parrot' );
// list.append( 'hamster' );
list.append( 'snake' );
list.append( 'turtle' );


console.log( list.toString() );
// console.log( list.pop() );
console.log( list.contains( 'jet' ) );
console.log( list.contains( 'turtle' ) );

console.log( list.find( 'turtle' ) );

// BOTH ENTER AT SAME PLACE :(
list.insertAt( 'fish', 1 );
console.log( list.toString() );
list.insertAt( 'fish', 0 );

console.log( list.toString() );
