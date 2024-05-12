const allData = [
    {
        id:'Tate Armchair',
        img1:'images/chair11.jpg',
        img2: 'images/chaie12.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 899.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Walnut, Seude, Foam',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Living'
    },
    {
        id:"Vase Concrete",
        img1:'data/vase.jpg',
        img2: 'data/vase.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 99.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'false',
        type:'Living'
    },
    {
        id:"RedWood Chair",
        img1:'data/woodchair1.jpeg',
        img2: 'data/woodchair2.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 299.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'false',
        type:'Living'
    },
    {
        id:"Yves Bar Stool",
        img1:'images/chair21.jpg',
        img2: 'images/chair22.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 399.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele, Leather',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Dining'
    },
    {
        id:"Guild Coffee Table",
        img1:'images/chair 3.jpg',
        img2: 'images/chair 3.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 349.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'false',
        type:'Dining'
    },
    {
        id:"Bancroft Sofa" ,
        img1:'data/bigsofa.jpeg',
        img2: 'data/bigsofa2.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 999.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'false',
        type:'Dining'
    },
    {
        id:"Wagner Eiffel Chair",
        img1:'data/blackchair1.jpeg',
        img2: 'data/blackchair1.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 249.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'false',
        type:'Dining'
    },
    {
        id:"Hex floor Lamp",
        img1:'data/lamp.jpg',
        img2: 'data/lamp.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 349.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Dining'
    },
    {
        id:"Parana Storagebox",
        img1:'data/storagebox.jpg',
        img2: 'data/storagebox.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 149.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Bedroom'
    },
    {
        id:"Anders Bed",
        img1:'data/bed11.jpg',
        img2: 'data/bed12.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 1499.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Bedroom'
    },
    {
        id:"Soma bed",
        img1:'data/bed21.jpg',
        img2: 'data/bed22.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 1249.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Bedroom'
    },
    {   id:"Ball floor Lamp",
        img1:'data/floorlamp.jpg',
        img2: 'data/floorlamp.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 249.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Bedroom'
    },
    {
        id:'Tate Armchair1',
        img1:'images/chair11.jpg',
        img2: 'images/chaie12.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 899.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Walnut, Seude, Foam',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Living'
    },
    {
        id:"Vase Concrete1",
        img1:'data/vase.jpg',
        img2: 'data/vase.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 99.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Dining'
    },
    {
        id:"RedWood Chair1",
        img1:'data/woodchair1.jpeg',
        img2: 'data/woodchair2.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 299.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Bedroom'
    },
    {
        id:"Yves Bar Stool1",
        img1:'images/chair21.jpg',
        img2: 'images/chair22.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 399.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele, Leather',
        weight:'14KG',
        origin:'Australia',
        isSale:'falsey',
        type:'Dining'
    },
    {
        id:"Guild Coffee Table1",
        img1:'images/chair 3.jpg',
        img2: 'images/chair 3.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 349.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Dining'
    },
    {
        id:"Bancroft Sofa1" ,
        img1:'data/bigsofa.jpeg',
        img2: 'data/bigsofa2.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 999.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Living'
    },
    {
        id:"Wagner Eiffel Chair1",
        img1:'data/blackchair1.jpeg',
        img2: 'data/blackchair1.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 249.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Dining'
    },
    {
        id:"Hex floor Lamp1",
        img1:'data/lamp.jpg',
        img2: 'data/lamp.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 349.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Living'
    },
    {
        id:"Parana Storagebox1",
        img1:'data/storagebox.jpg',
        img2: 'data/storagebox.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 149.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Bedroom'
    },
    {
        id:"Anders Bed1",
        img1:'data/bed11.jpg',
        img2: 'data/bed12.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 1499.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Bedroom'
    },
    {
        id:"Soma bed1",
        img1:'data/bed21.jpg',
        img2: 'data/bed22.jpeg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 1249.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Living'
    },
    {   id:"Ball floor Lamp1",
        img1:'data/floorlamp.jpg',
        img2: 'data/floorlamp.jpg',
        des: 'Proin magna. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.',
        price: '$ 249.00 USD',
        dimentions:'26cmx12cmx60cm',
        materials:'Powder Coated Steele',
        weight:'14KG',
        origin:'Australia',
        isSale:'true',
        type:'Living'
    },
]

export default allData;