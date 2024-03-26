const multer = require("multer")
const { Partner } = require("../models/userAdminPartners")
const fs = require("fs-extra")
const path = require('path');

const storage = multer.diskStorage({
    destination:(request, file, cd)=>{
        cd(null, "uploads/images")
    },
    filename:(request, file, cd)=>{
        cd(null, file.originalname)
    }
})

const fileFilter = (request, file, cd)=>{

    if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
        cd(null, true)
    } else {
        cd(null, false)
    }
}


multerConnect = multer({ storage: storage, fileFilter: fileFilter } ).single("logo")


exports.updatePartnerImage = [multerConnect, async (request, response, next) => {

    let fileData = request.file;
    // console.log(fileData)
    if(!fileData) {
        response.send("Ошибка при загрузке файла")
    } else {
        const findResult = await Partner.find({});
        if (findResult) {
            await fs.unlink(findResult[0].itemImg)
            await Partner.updateOne({itemImg: `./${fileData.destination}/${fileData.filename}`})
        }
        response.send(fileData);
    }
}]


exports.getPartnerImage = async (request, response) => {
    const pathImg = request.query.image
    const newPath = path.join(__dirname, '../', pathImg)

        response.sendFile(
            newPath
        );
}
