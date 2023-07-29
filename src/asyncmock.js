export const misProductos = [
    { id: "1", nombre: "Remera", precio: 1499, img: "../img/remera.jpg", idCat: "2" },
    { id: "2", nombre: "Remera Entrenamiento", precio: 10499, img: "../img/remera e.jpg", idCat: "2" },
    { id: "3", nombre: "Short", precio: 9899, img: "../img/short.jpg", idCat: "2" },
    { id: "4", nombre: "Medias", precio: 1950, img: "../img/medias.jpg", idCat: "2" },
    { id: "5", nombre: "silbato", precio: 7999, img: "../img/silbato.jpg", idCat: "3" },
    { id: "6", nombre: "tarjeta", precio: 1999, img: "../img/tarjetas.jpg", idCat: "3" },
    
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}
export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}
export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}