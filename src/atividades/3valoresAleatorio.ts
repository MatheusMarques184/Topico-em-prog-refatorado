function filterArray (arr) {
    const arrEmbaralhado = arr.sort(() => Math.random() - 0.5);
    return arrEmbaralhado.slice(0, 3);
}

const arr = [
    { id: 1, nome: "Objeto 1" },
    { id: 2, nome: "Objeto 2" },
    { id: 3, nome: "Objeto 3" },
    { id: 4, nome: "Objeto 4" },
    { id: 5, nome: "Objeto 5" },
    { id: 6, nome: "Objeto 6" },
    { id: 8, nome: "Objeto 8" },
    { id: 9, nome: "Objeto 9" },
    { id: 10, nome: "Objeto 10" },
    { id: 11, nome: "Objeto  11" },
    { id: 12, nome: "Objeto 12" },
  ]

console.log(filterArray(arr))