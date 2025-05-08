const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initdata = require("./data.js");

// setup mongoose
// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
let MONGO_URL = "mongodb+srv://wanderlust:wanderlust1880@wanderlust.2epllgd.mongodb.net/?retryWrites=true&w=majority&appName=wanderlust";
// const dburl = process.env.ATLASDB_URL;

main()
.then((res)=>{
    console.log("connection successfully!")
})
.catch((err)=>{
    console.log(err)
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

let initdb = async()=>{
   await Listing.deleteMany({});
 initdata.data = initdata.data.map((obj)=> ({...obj , owner:'67ff25d1f5307578b5706eaa'}))
   await Listing.insertMany(initdata.data);
}

initdb();