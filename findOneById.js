/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const { testDriver } = require("../../helpers");

const students = [
  {
    id: 1,
    name: "student1",
    isLateToday: false,
    lateCount: 15,
    redBeltStatus: false,
  },
  {
    id: 2,
    name: "student2",
    isLateToday: false,
    lateCount: 1,
    redBeltStatus: false,
  },
  {
    id: 3,
    name: "student3",
    isLateToday: false,
    lateCount: 0,
    redBeltStatus: false,
  },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true };
const expected1 = {
  id: 3,
  name: "student3",
  isLateToday: false,
  lateCount: 0,
  redBeltStatus: true,
};

const id2 = 3;
const updateData2 = {
  isLateToday: true,
  lateCount: 16,
  randomKey: "randomValue",
};
const expected2 = {
  id: 1,
  name: "student1",
  isLateToday: true,
  lateCount: 16,
  redBeltStatus: false,
};
/* 
  Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

const testCases = [
  { arguments: [id1, updateData1, students], expected: expected1 },
  { arguments: [id2, updateData2, students], expected: expected2 },
  { arguments: [id3, updateData3, students], expected: expected3 },
];
testDriver([findByIdAndUpdate], testCases);

function findByIdAndUpdate(id, updateData1, students) {
  var updateData = Object.entries(updateData1)
  for(var i=0; i<students.length; i++){
      for (var key in students[i]) {
        if(students[i][key]==id){
          for(var k in updateData){
            students[i][updateData[k][0]]=updateData[k][1] 
          }
        }
      }
  }
}

/* ******************************************************************************** */