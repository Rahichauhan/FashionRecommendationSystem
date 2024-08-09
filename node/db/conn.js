const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://rahichauhan37:Rahi12345@cluster0.judhvvw.mongodb.net/fashion",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to Mongodb");
}).catch((error)=>{
    console.log(`Error connecting to mongodb ${error}`);
})