import { Schema, model, models } from "mongoose";
import { describe } from "node:test";

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [{ type: String }],
    rates: {
      nightly: { type: Number },
      monthly: { type: Number },
      weekly: { type: Number },
    },
    seller_info: {
      name: { type: String },
      phone: { type: String },
      email: { type: String },
    },
    images: [{ type: String }],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Property = models.Property || model("Property", propertySchema);

export default Property;
// In this snippet, we define the Property schema using the Schema constructor from mongoose. The schema defines the structure of the Property model, including the fields owner, name, type, description, location, beds, baths, square_feet, amenities, rates, seller_info, images, and is_featured. The schema also includes timestamps for createdAt and updatedAt fields.
