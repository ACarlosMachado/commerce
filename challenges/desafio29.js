// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.

db.produtos.updateMany({}, {
    $rename: {
        descricao: "descricaoSite",
      },
});

db.produtos.find({}, {
    nome: 1,
    descricaoSite: 1,
    _id: 0,
}).pretty();