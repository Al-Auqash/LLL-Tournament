var mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        role: {
            type: String,
            required: [true, "role is required"]
        },
        username: {
            type: String,
            required: [true, "username is required"]
        },
        email: {
            type: String,
            required: [true, "email is required"]
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
    },
    {
        timestamps: true,
    },
    {
        collection: "users",
    }
);

module.exports = mongoose.model("user", userSchema);
