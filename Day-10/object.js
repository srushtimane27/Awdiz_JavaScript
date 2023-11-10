var studentData = {name: "Awdiz", studentAge: 20, studentsNames: ["Srushti", "Akshay", "Rahul"], myTest: {hi: "How Are You?"}}
console.log(studentData.name)
console.log(studentData.studentAge)
console.log(studentData.studentsNames[0])
console.log(studentData.studentsNames[1])
console.log(studentData.myTest.hi)

// Add data into object
var myData = {};
myData["Name"] = "Sahil";
myData["Age"] = 20;
myData["Department"] = "Computer";
myData["Pass"] = "True";
myData["Days"] = ["Sunday", "Monday"];
console.log(myData);


// Find unique number from array

const numbers = [1, 4, 0, 7, 8, 9, 1, 8, 0, 5, 5];
let temp = {};
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] in temp){
        temp[numbers[i]] += 1;
    } else {
        temp[numbers[i]] = 1;
    }
}
console.log(temp)
console.log(Object.keys(temp));