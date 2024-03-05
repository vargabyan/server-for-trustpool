const { Partner } = require("../models/userAdminPartners")

exports.getPartner = async (req, res) => {
    const findResult = await Partner.find({})

    if (findResult.length) {
        res.send({partnersData:{
                itemGoTo: findResult[0].itemGoTo,
                itemStatus: findResult[0].itemStatus,
                itemContact1: findResult[0].itemContact1,
                itemContact2: findResult[0].itemContact2,
                itemDescriptionText: findResult[0].itemDescriptionText,
                itemLocation: findResult[0].itemLocation,
                itemName: findResult[0].itemName,
                itemImg: findResult[0].itemImg,
            }});
    } else {

        const createResult = await Partner.create({
            itemGoTo: 'По заказам: @Valerii_3_6_9',
            itemStatus: 'gold',
            itemContact1: 'По заказам: @Valerii_3_6_9',
            itemContact2: 'По заказам: @Valerii_3_6_9',
            itemDescriptionText: 'Поставки оборудования для майнинга',
            itemLocation: 'Россия, г. Москва, г. Уфа',
            itemName: 'B.M.TRADE™',
            itemImg: './uploads/images/photo 16.png',
        })

        res.send({partnersData: createResult})
    }
}

exports.updatePartner = async (req, res) => {
    if (!req.body && !req.body.partnerData) return req.sendStatus(404);

    const findResult = await Partner.find({})

    if (findResult) {

        const updateResult = await Partner.updateOne({
            itemGoTo: req.body.partnerData.itemGoTo,
            itemStatus: req.body.partnerData.itemStatus,
            itemContact1: req.body.partnerData.itemContact1,
            itemContact2: req.body.partnerData.itemContact2,
            itemDescriptionText: req.body.partnerData.itemDescriptionText,
            itemLocation: req.body.partnerData.itemLocation,
            itemName: req.body.partnerData.itemName,
            itemImg: req.body.partnerData.itemImg,
        })

        res.send(updateResult)
    }
}
