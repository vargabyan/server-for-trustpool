const { Router } = require("express");
const userAdminRoute = Router();
const { postContacts } = require("../controllers/userAdminContactsController")
const { getPartner, updatePartner } = require("../controllers/userAdminPartnersController")
const { updatePartnerImage, getPartnerImage }  = require("../controllers/userAdminPartenrsUploadImageController")

userAdminRoute.post("/post-contacts", postContacts );

userAdminRoute.get("/get-partner", getPartner );
userAdminRoute.put("/update-partner", updatePartner );

userAdminRoute.get("/partner-file-image", getPartnerImage );
userAdminRoute.post("/partner-file-image", updatePartnerImage );


module.exports = userAdminRoute;