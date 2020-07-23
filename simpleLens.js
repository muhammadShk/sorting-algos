/**
 * takes in a nested (potentially) object
 * and an array of keys
 * returns either a corresponding value (if it exists)
 * or null if it doesn't
 */
function simpleLens(obj, keysPath) {
    let newObj=obj;
    for(i=0;i<keysPath.length;i++){
        if(newObj.hasOwnProperty(keysPath[i])){
            newObj=newObj[keysPath[i]]
        }
        else{return null}
    }
    return newObj
}

console.log(simpleLens({ hello: 'world' }, ['hello']));
  // should log 'world'
  
console.log(simpleLens({ hello: 'world' }, ['hello', 'world']));
  // should log null
  
const nested = {
    address: {
        street: '1234 First Street',
        city: 'Burbank',
      // country: {
      //   code: 'US'
      // }
    }
}
  
  console.log(simpleLens(nested, ['address', 'street']));
  // should log '1234 First Street'
  
  console.log(simpleLens(nested, ['address', 'country', 'code']));
  // should log null
  
  
  /**
   * takes in an object
   * returns an array of 2-item arrays
   * referencing each key/value pair
   */
  
  const input1 = { firstName: 'Foo', lastName: 'Bar', age: 13 };
  // input1.__proto__.keyOnProto = 'val from proto';
  
  // obj.hasOwnProperty('prop')
  
  function entries(obj) {
    // your code here
  }
  
  console.log(entries(input1));
  // should log [['firstName', 'Foo'], ['lastName', 'Bar'], ['age', 13]]
  
  console.log(entries({ prop1: 'val 1', prop2: 'val 2' }));
  // should log [['prop1', 'val 1'], ['prop2', 'val 2']]
  
  
  /**
   * BONUS
   * takes in a string (the table name)
   * and an object (the key/value pairs to insert)
   * returns a SQL string for the insert
   */
  
  function insertSQL(table, obj) {
    // your code here
  }
  
  console.log(insertSQL('users', { firstName: 'Bob', lastName: 'Smith' }));
  // should log 'insert into users(firstName, lastName) values("Bob", "Smith")'