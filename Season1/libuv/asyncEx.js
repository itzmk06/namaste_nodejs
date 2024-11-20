const fs=require("fs");
const https=require("https");

// this is async code 
setTimeout(()=>{
    console.log("Executing after 5 sec");
},5000);


fs.readFile("./ex.txt",(err,data)=>{
    console.log(`File data is ${data}`);
});    

https.get("https://jsonplaceholder.typicode.com/users",(req,res)=>{
    console.log("Successfully fetched data!");
});    


// this is sync
fs.readFileSync("./ex.txt","utf8",(err,data)=>{
    console.log("this is from sync file read!")
    console.log(data);
})