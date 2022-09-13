db.produtos.updateMany({
    $and: [{
        ingredientes: { $ne: "ketchup" },
    }, {
        nome: { $ne: "McChicken" }
    }]
}, {
    $push: { ingredientes: "ketchup" }
});

db.produtos.find({}, { nome: 1, ingredientes: 1, _id:0 });