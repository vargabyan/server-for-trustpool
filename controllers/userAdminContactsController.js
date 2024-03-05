exports.postContacts = (req, res) => {
    if (!req.body && !req.body.contacts) return res.sendStatus(400);
    console.log(req.body)

    res.send('successFul');
}