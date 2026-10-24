const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

main()
    .then(()=>{
        console.log("Connected to DB");
    }).catch((err)=>{
        console.log(err);
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/Ghar");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


app.get("/", (req,res)=>{
    res.send("Hi, I am a Problem Solver");
});


const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
}

//Index Route
app.get("/listings", wrapAsync(async (req,res,next) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Route
app.get("/listings/new", (req,res) => {
    res.render("listings/newListing.ejs");
});

//Show Route
app.get("/listings/:id", wrapAsync(async (req,res,next) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", {listing});
}));

//Create Route
app.post("/listings", validateListing, wrapAsync(async (req,res,next) => {
    // if(!req.body.listing){
    //     throw new ExpressError(400, "Send valid data for listing");
    // }
    const newListing = new Listing(req.body.listing);    
    await newListing.save();
    res.redirect("/listings");
}));

//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res, next) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", {listing});
}));

//Update Route
app.put("/listings/:id", validateListing, wrapAsync(async (req, res, next) => {
    // if(!req.body.listing){
    //     throw new ExpressError(400, "Send valid data for listing");
    // }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    res.redirect(`/listings/${id}`);
}));

//Delete Route
app.delete("/listings/:id", wrapAsync(async (req,res, next) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


// app.get("/testDB", async (req, res) => {
//     try {
//         const data = new Listing({
//             title: "New Ghar",
//             description: "Hotel",
//             price: 1200,
//             location: "Kathmandu",
//             country: "Nepal"
//         });

//         const savedData = await data.save();

//         console.log("Data saved successfully!");
//         console.log(savedData);

//         res.json(savedData);

//     } catch (err) {
//         console.error("ERROR:", err);
//         res.status(500).send(err.message);
//     }
// });

app.all(/(.*)/, (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    let {status=500, message="Something went wrong!"} = err;
    res.status(status).render("error.ejs", {message});
    // res.status(status).send(message);
});

app.listen("8080", ()=> {
    console.log("server started!");
});
