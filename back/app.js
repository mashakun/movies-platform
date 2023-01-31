import mongoose from 'mongoose';

const dbUrl = "mongodb://localhost/moviesPlatform";

async function main() {
    await mongoose.connect(dbUrl);
    console.log("connected");
}


main();
console.log("hello");