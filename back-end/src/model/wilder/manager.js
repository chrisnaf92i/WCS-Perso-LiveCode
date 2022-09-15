const { getWilderRepository } = require("../../database/utils");

async function initializeWilder() {
    const wilderRepository = await getWilderRepository();
    await wilderRepository.clear();

    await wilderRepository.save({firstName:"Ryota", lastName:"Katayose"});
    await wilderRepository.save({firstName:"Alan", lastName:"Shirahama"});
    await wilderRepository.save({firstName:"Hayato", lastName:"Komori"});
    await wilderRepository.save({firstName:"Yuta", lastName:"Nakatsuka"});
    await wilderRepository.save({firstName:"Ryuto", lastName:"Kazuhara"});
    await wilderRepository.save({firstName:"Mandy", lastName:"Sekiguchi"});
    await wilderRepository.save({firstName:"Leo", lastName:"Sano"});
}

async function createWilder(firstName, lastName) {
    const wilderRepository = await getWilderRepository();
    const newWilder = wilderRepository.create({firstName, lastName});

    await wilderRepository.save(newWilder);

    return newWilder
}

async function getWilder() {
    const wilderRepository = await getWilderRepository();
    return wilderRepository.find() 
}

module.exports = {
    initializeWilder,
    createWilder,
    getWilder
}