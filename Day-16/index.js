function outerFunction(){
    const myname = "srushti";
    function innerFunction(){
        return `Hello World, My Name is ${myname}..`;
    }
    return innerFunction;
}


var result = outerFunction();
console.log(result())


console.log("start");
Promise.resolve().then(() => {
    console.log("promise");
});
console.log("end");


//
console.log("start")
setTimeout(() => {
    console.log("setTimeOut")
},0)
Promise.resolve().then(() => {
    console.log("promise")
})
console.log("end")


