const products = [
    {
        id: "1",
        name: "Cartera",
        price: "1000",
        category: "Carteras",
        img: "https://i.postimg.cc/Gt04V9FK/mochila1.jpg",
        stock:"25",
        description: "Descripcion de cartera"
    },
    { id: "2", name: "Bolso", price: "900", category: "bolsos", img:"https://i.postimg.cc/bvBD0mdK/bolso2.jpg", description:"descripcion de bolso"}
    ,{ id: "3", name: "Cartera", price: "1200", category: "carteras", img:"https://i.postimg.cc/hjQJ2Vdh/modelo5.jpg", description:"descripcion cartera"}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
        
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}