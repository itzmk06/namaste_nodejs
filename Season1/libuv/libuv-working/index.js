// first timer will be executed 
// then any operations related to poll will be executed 
// then set immediate will be executed
// then closing happens 

// poll operations 
const https=require("https");

https.get("https://jsonplaceholder.typicode.com/users",(req,res)=>{
    console.log("get started---------------------")
    // console.log(req);
    // console.log(res);
    console.log("Successfully fetched data!");
    // console.log(res?.data);
    console.log("get ended---------------------")
});

// set immediate things 
setImmediate(()=>{
    console.log("Set immediate is executed ")
})

// timer things 
setTimeout(()=>{console.log("Set time out executed")},0)

// normal code 
console.log("Hello world from end of line ")

// order or execution 
// ->Hello world from end of line 
// ->set timeout is executed 
// ->set immediate is executed 
// ->get started things will happen after wards since it takes time 
