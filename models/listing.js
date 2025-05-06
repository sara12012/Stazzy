const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        filename: {
            type: String,
            default: 'listingimage'
          },
        url: {
            type: String,
            default: 
            "https://unsplash.com/photos/a-serene-beach-beckons-beneath-a-sunset-sky-K_LoY_UKdcM",
        set: 
        (v) => v === "" ? "https://unsplash.com/photos/a-serene-beach-beckons-beneath-a-sunset-sky-K_LoY_UKdcM" 
        : v,
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;