// const { testDriver } = require("../../helpers");

const obj1 = { firstName: "Foo", lastName: "Bar", age: 13 };
obj1.__proto__.keyOnProto = "val from proto";
const expected1 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

// const testCases = [{ arguments: [obj1], expected: expected1 }];
// testDriver([entries], testCases);

function entries(obj) {
    var newArray=[]
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArray.push([key, obj[key]]);
        }
    }
    return newArray;
}
console.log(entries(obj1));



/* ******************************************************************************** */



/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

// const { testDriver } = require("../../helpers");

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
  "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
  first_name: "John",
  last_name: "Doe",
  age: 30,
  is_admin: false,
};
const expected2 =
  "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes areount the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

const testCases = [
  { arguments: [table, insertData1], expected: expected1 },
  { arguments: [table, insertData2], expected: expected2 },
];
testDriver([insert, insertFunctional], testCases);

function insert(tableName, columnValuePairs) {
    var tempArray = entries(columnValuePairs);
    var keyStr = '';
    var valStr = '';
    for (i=0; i<tempArray.length;i++) {
        var numCheck = !isNaN(tempArray[i][1]);
        keyStr+= tempArray[i][0] + ", ";
        valStr+= (numCheck ? "" : "'") + tempArray[i][1] + (numCheck ? "" : "'") + ", ";
    }
    var returnStr = 'INSERT INTO ' + tableName + ' (' + keyStr.substring(0,keyStr.length-2) + ') VALUES (' + valStr.substring(0,valStr.length-2) + ');';
    
    return returnStr;
}

console.log(insert(table,insertData1));

function insertFunctional(tableName, columnValuePairs) {
    
}

/* ******************************************************************************** */