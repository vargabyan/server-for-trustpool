const { Schema, model } = require("mongoose")


const contentSchemaUserAdminPartners = new Schema(
    {
        itemGoTo: String,
        itemStatus: String,
        itemContact1: String,
        itemContact2: String,
        itemDescriptionText: String,
        itemLocation: String,
        itemName: String,
        itemImg: String,
    },
    {
        versionKey: false,
        capped: { max: 1 },
    }
)

exports.Partner = model("Partner", contentSchemaUserAdminPartners)