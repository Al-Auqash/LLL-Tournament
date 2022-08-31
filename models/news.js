var mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
    {
        title: String,
        content: String,
        createdAt: {
            type: Date,
            default: new Date(),
        },
    },
    {
        collection: "news",
    }
);

module.exports = mongoose.model("newsModel", newsSchema);
