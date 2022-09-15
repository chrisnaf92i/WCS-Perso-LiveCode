const { createWilder, getWilder } = require("../model/wilder/manager");

async function get (req, res) {
    const wilders = await getWilder();
    res.json(wilders)
}

async function post (req, res) {
    const {firstName, lastName} = req.body;

    if( !firstName || !lastName )
    {
        res.send("Le nom et le prénom sont obligatoire");
    } else {
        const newWilder = await createWilder(firstName, lastName);
        res.status(201).json(newWilder)
    }
}


module.exports = {
    get,
    post
}