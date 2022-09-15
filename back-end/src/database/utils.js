const typeorm = require("typeorm");
const Wilder = require("../model/wilder/index");

const dataSource = new typeorm.DataSource({
    type:"sqlite",
    database:"wilderdb.sqlite",
    entities:[Wilder],
    synchronize:true,
    logging:["query", "error"]
})

let initialized = false;
async function getDatabase () {
    if(!initialized) {
        await dataSource.initialize();
        console.log("connexion à la base de donnée réussie");
        initialized = true;
    }
    return dataSource
}

async function getWilderRepository (){
    return (await getDatabase()).getRepository(Wilder)
}

module.exports = {
    getDatabase,
    getWilderRepository
}