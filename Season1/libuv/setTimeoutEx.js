const crypto=require("crypto");


// async functions will be called only after main thread is empty 
setTimeout(()=>{
    console.log("call me after 3s");
},3000);

console.log("Hello world line 1");

// async 
crypto.pbkdf2("#Manoj216","salt",5000,50,"sha512",(err,key)=>{
    console.log("from 1");
    console.log(key);
});

console.log("Hello world line 2");


setTimeout(()=>{
    console.log("call me right now ");
},0);



// this is sync so will block main thread 
crypto.pbkdf2Sync("#Manoj216666","salt",500000,50,"sha512",(err,key)=>{
    console.log("from 2");
    console.log(key);
});

console.log("Hello world from line 3")