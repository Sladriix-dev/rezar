import bcrypt from 'bcryptjs';
const data = {

    users: [
        {
            name: 'Kevin',
            email: 'sladriix@gmail.com',
            password: bcrypt.hashSync('diagla08!', 8),
            isAdmin: true,
        },
        {
            name: 'Babi',
            email: 'babi@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],

    products: [
        {
            name:'Rezar Blade 17',
            category:'PC',
            image:'/images/p1.jpg',
            price:2399,
            countInStock: 10,
            brand:'Rezar',
            rating:4.5,
            numReviews:238,
            description:'Le remplacement ultime du bureau avec les derniers GPU NVIDIA® GeForce RTX™ série 30, le processeur Intel® Core™ de 12e génération (14 cœurs) et les écrans les plus rapides',
        },
        {
            name:'Rezar Kaira Pro',
            category:'Console',
            image:'/images/p2.jpg',
            price:219,
            countInStock: 17,
            brand:'Rezar',
            rating:4.0,
            numReviews:687,
            description:'Casque sans fil PlayStation 5 Dual avec technologie haptique ',
        },
        {
            name:'R1 Edition Maingear',
            category:'PC',
            image:'/images/p3.jpg',
            price:5499,
            countInStock: 0,
            brand:'Rezar',
            rating:4.8,
            numReviews:146,
            description:'Le PC de bureau par excellence préconfiguré pour la performance',
        },
        {
            name:'Raptor 27 1440P 165Hz',
            category:'PC',
            image:'/images/p4.jpg',
            price:849,
            countInStock: 6,
            brand:'Rezar',
            rating:4.5,
            numReviews:215,
            description:'Le moniteur gaming ultime ',
        },
        {
            name:'Kishi for Android',
            category:'Mobile',
            image:'/images/p5.jpg',
            price:89,
            countInStock: 4,
            brand:'Puma',
            rating:4.5,
            numReviews:73,
            description:'Universal Gaming Controller for Android ',
        },
        {
            name:'Rezar Blade 15',
            category:'PC',
            image:'/images/p6.jpg',
            price:1999,
            countInStock: 11,
            brand:'Rezar',
            rating:4.5,
            numReviews:331,
            description:'A 15-inch gaming laptop featuring the latest NVIDIA® GeForce RTX™ ',
        },
    ]
}

export default data;