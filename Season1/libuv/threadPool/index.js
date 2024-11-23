const crypto=require("crypto");

// process.env.UV_THREADPOOL_SIZE=10000;

crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("1 - first crypto done ")
});


crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("2 - first crypto done ")
});


crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("3 - first crypto done ")
});


crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("4 - first crypto done ")
});

// this took some time because above 4 took time 
crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
    console.log("5 - first crypto done ")
});

