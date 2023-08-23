const products = [
    {
        id: "1",
        name: "Cartera",
        price: "1000",
        category: "Carteras",
        img: "https://ibb.co/5xNgBZc",
        stock:"25",
        description: "Descripcion de cartera"
    },
    { id: "2", name: "Bolso", price: "900", category: "bolsos", img:"https://ibb.co/FByjvNF", description:"descripcion de bolso"}
    ,{ id: "3", name: "Cartera", price: "1200", category: "carteras", img:"https://ibb.co/9WNrQtH", description:"descripcion cartera"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
        
    })
}