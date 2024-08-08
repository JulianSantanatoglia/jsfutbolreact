const products = [
    {
        id: '1',
        name: 'Camiseta Argentina',
        price: 30,
        category: 'america',
        img: '../src/components/Card-product/assets/camiseta-arg.jpg',
        stock: 3,
        description: 'Camiseta de la Seleccion Argentina'
    },
    {
        id: '2',
        name: 'Camiseta España',
        price: 30,
        category: 'europa',
        img: '../src/components/Card-product/assets/camiseta-esp.jpg',
        stock: 12,
        description: 'Camiseta de España'
    },
    {
        id: '3',
        name: 'Camiseta Alemania',
        price: 30,
        category: 'europa',
        img: '../src/components/Card-product/assets/camiseta-ale.jpg',
        stock: 10,
        description: 'Camiseta de Alemania'
    },
    {
        id: '4',
        name: 'Camiseta Francia',
        price: 15,
        category: 'europa',
        img: '../src/components/Card-product/assets/camiseta-francia.jpg',
        stock: 30,
        description: 'Camiseta de Francia'
    },
    {
        id: '5',
        name: 'Camiseta Brasil',
        price: 9,
        category: 'america',
        img: '../src/components/Card-product/assets/camiseta-brasil.jpg',
        stock: 15,
        description: 'Camiseta de Brasil'
    },
    {
        id: '6',
        name: 'Camiseta Inglaterra',
        price: 19,
        category: 'europa',
        img: '../src/components/Card-product/assets/camiseta-inglaterra.jpg',
        stock: 25,
        description: 'Camiseta de Inglaterra'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}