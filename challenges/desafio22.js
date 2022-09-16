// Crie uma query que incremente as vendas de todos os sanduíches de carne do tipo bovino aos sábados em 120.

db.produtos.updateMany({}, {
    $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] },
});

db.produtos.updateOne({
    nome: "Big Mac",
}, {
    $set: { "vendasPorDia.3": 60 },
});

db.produtos.updateMany({
    tags: "bovino",
}, {
    $set: { "vendasPorDia.6": 120 },
});

db.produtos.find({}, {
    nome: 1,
    vendasPorDia: 1,
    _id: 0,
}).pretty();