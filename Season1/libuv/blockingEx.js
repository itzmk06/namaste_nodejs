const crypto=require("crypto");

console.log("Hello world line 1");

// async 
crypto.pbkdf2("#Manoj216","salt",5000,50,"sha512",(err,key)=>{
    console.log("from 1");
    console.log(key);
});

console.log("Hello world line 2");


// this is sync so will block main thread 
crypto.pbkdf2Sync("#Manoj216666","salt",500000,50,"sha512",(err,key)=>{
    console.log("from 2");
    console.log(key);
});

console.log("Hello world from line 3")