export const misProductos = [
    { id: "1", nombre: "Remera", precio: 1500, img: "../img/remera.jpg", idCat: "2" },
    { id: "2", nombre: "Remera Entrenamiento", precio: 1200, img: "../img/remera e.jpg", idCat: "2" },
    { id: "3", nombre: "Short", precio: 1180, img: "../img/short.jpg", idCat: "3" },
    { id: "4", nombre: "Medias", precio: 1900, img: "../img/medias.jpg", idCat: "3" },
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}