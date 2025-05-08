
export const menuData = {
  categories: [
  {
    name: "HAMBÚRGUERES",
    id: "hamburgueres",
    items: [
      { id: "h1", name: "JK CLÁSSICO", description: "Pão brioche, hambúrguer 180g, molho grill, mussarela, tomate, cebola roxa, rúcula ou alface", price: 25.00, imageUrl: "https://i.ibb.co/Q3zCWxp7/2.png", optionsTitle: "Escolha sua verdura:", options: [{ value: "rúcula", label: "Rúcula" }, { value: "alface", label: "Alface" }] },
      { id: "h2", name: "JK ESPECIAL", description: "Pão brioche, hambúrguer 180g, molho bacon, bacon, mussarela, alface, cebola roxa", price: 22.00, imageUrl: "https://i.ibb.co/prXPtZPL/4.png" },
      { id: "h3", name: "JK SUPREMO", description: "Pão brioche, hambúrguer 180g, molho grill, molho cheddar, anel de cebola, picles ou rúcula", price: 26.00, imageUrl: "https://i.ibb.co/S4H8qj41/5.png", optionsTitle: "Escolha seu complemento:", options: [{ value: "picles", label: "Picles" }, { value: "rúcula", label: "Rúcula" }] },
      { id: "h4", name: "JK BARBECUE", description: "Pão brioche, hambúrguer 180g, barbecue, mussarela, bacon, cebola roxa", price: 25.00, imageUrl: "https://i.ibb.co/wZ5ynQF8/6.png" },
      { id: "h5", name: "JK CHEDDAR", description: "Pão brioche, hambúrguer 180g, bacon, cebola caramelizada, molho cheddar, molho bacon", price: 26.00, imageUrl: "https://i.ibb.co/yFHVmQgB/7.png" },
      { id: "h6", name: "JK CHEDDAR DUPLO", description: "Pão brioche, 2 hambúrgueres 180g, bacon, 2 camadas molho cheddar, molho grill, farofa bacon", price: 34.00, imageUrl: "https://i.ibb.co/wrKZPGrb/8.png" },
      { id: "h7", name: "JK CATUPIRY", description: "Pão brioche, hambúrguer 180g, bacon, mussarela, catupiry, molho grill, farofa bacon", price: 25.00, imageUrl: "https://i.ibb.co/pBPQ2DJr/9.png" },
      { id: "h8", name: "JK GOURMET", description: "Pão brioche, costela bovina desfiada, mussarela, molho grill, cebola roxa, tomate", price: 28.00, imageUrl: "https://i.ibb.co/S7sBG3Tr/10.png" },
      { id: "h9", name: "JK PREMIUM", description: "Pão brioche, hambúrguer frango 180g, molho cheddar, alface, cebola roxa, tomate", price: 24.00, imageUrl: "https://i.ibb.co/hx7JD9w2/11.png" },
      { id: "h10", name: "JK KIDS", description: "Pão brioche kids, hambúrguer 70g, mussarela, alface, tomate, batata frita + mini refri", price: 20.00, imageUrl: "https://i.ibb.co/DPyG2xd1/12.png" },
    ]
  },
  {
    name: "PORÇÃO CARNES",
    id: "porcoes-carnes",
    items: [
      { id: "pc1", name: "Picanha", description: "600g de picanha grelhada, 500g batata frita, farofa, vinagrete, molho da casa", price: 110.00, imageUrl: "https://i.ibb.co/twZjrkcR/13.png" },
      { id: "pc2", name: "Ancho", description: "600g de ancho grelhado, 500g batata frita, farofa, vinagrete, molho da casa", price: 90.00, imageUrl: "https://i.ibb.co/BVWsTPCs/14.png" },
      { id: "pc3", name: "Contra Filé", description: "600g de contra filé grelhado, 500g batata frita, farofa, vinagrete, molho da casa", price: 85.00, imageUrl: "https://i.ibb.co/KpHGd3d1/15.png" },
      { id: "pc4", name: "Frango", description: "600g de frango frito, 500g batata frita, barbecue, molho da casa", price: 50.00, imageUrl: "https://i.ibb.co/gFJBy6v9/16.png" },
    ]
  },
  {
    name: "PORÇÃO BATATAS",
    id: "porcoes-batatas",
    items: [
      { id: "pb1", name: "Batata Premium", description: "600g batata frita, molho cheddar, cubos de bacon crocantes", price: 35.00, imageUrl: "https://i.ibb.co/fVpCqsVy/17.png" },
      { id: "pb2", name: "Batata Clássica", description: "600g batata frita, queijo mussarela, bacon crocante", price: 35.00, imageUrl: "https://i.ibb.co/x0FX3F2/18.png" },
      { id: "pb3", name: "Batata Gourmet", description: "600g batata frita, costela bovina desfiada ao molho cheddar, cubos de bacon", price: 40.00, imageUrl: "https://i.ibb.co/7xRd7Xy0/19.png" },
      { id: "pb4", name: "Batata Catupiry", description: "600g batata frita, catupiry, farofa de bacon", price: 40.00, imageUrl: "https://i.ibb.co/wr2n62PM/20.png" },
      { id: "pb5", name: "Anéis de Cebola JK", description: "Porção de anéis de cebola (queijo opcional)", price: 25.00, imageUrl: "https://i.ibb.co/jksLxDdH/21.png", hasCheckboxOption: true, checkboxLabel: "Adicionar Queijo?" },
    ]
  },
  {
    name: "BEBIDAS",
    id: "bebidas",
    items: [
      { id: "b1", name: "Brahma Garrafa 600ml", price: 10.00, imageUrl: "https://i.ibb.co/tpQRCbLY/22.png" },
      { id: "b2", name: "Heineken Garrafa 600ml", price: 14.00, imageUrl: "https://i.ibb.co/SW2R5JM/23.png" },
      { id: "b3", name: "Original Garrafa 600ml", price: 12.00, imageUrl: "https://i.ibb.co/tpQRCbLY/22.png" },
      { id: "b4", name: "Refri Lata 350ml", price: 5.00, imageUrl: "https://i.ibb.co/7dMn6Vvq/24.png" },
      { id: "b5", name: "Refri Garrafa 600ml", price: 7.00, imageUrl: "https://i.ibb.co/mCFds2n9/25.png" },
      { id: "b6", name: "Refri Garrafa 2L", price: 11.00, imageUrl: "https://i.ibb.co/FLs2RbLs/26.png" },
      { id: "b7", name: "Água sem gás", price: 3.00, imageUrl: "https://i.ibb.co/FLs2RbLs/26.png" }, 
      { id: "b8", name: "Água com gás", price: 3.50, imageUrl: "https://i.ibb.co/zVVfRDN8/27.png" },
      { id: "b9", name: "Soda Italiana (consultar sabores)", price: 13.00, imageUrl: "https://i.ibb.co/jkCQj676/28.png" },
      { id: "b10", name: "Sodas Italianas (sem sabor)", price: 12.00, imageUrl: "https://i.ibb.co/B2ShQ5nw/29.png" },
    ]
  }
]
