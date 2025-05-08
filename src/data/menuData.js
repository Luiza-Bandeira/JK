
export const menuData = {
  categories: [
    {
      name: "HAMBÚRGUERES",
      id: "hamburgueres",
      items: [
        { id: "h1", name: "JK CLÁSSICO", description: "Pão brioche, hambúrguer 180g, molho grill, mussarela, tomate, cebola roxa, rúcula ou alface", price: 25.00, imageUrl: "https://ibb.co/wrgNsqk", optionsTitle: "Escolha sua verdura:", options: [{ value: "rúcula", label: "Rúcula" }, { value: "alface", label: "Alface" }] },
        { id: "h2", name: "JK ESPECIAL", description: "Pão brioche, hambúrguer 180g, molho bacon, bacon, mussarela, alface, cebola roxa", price: 22.00, imageUrl: "https://ibb.co/bgZCfzg" },
        { id: "h3", name: "JK SUPREMO", description: "Pão brioche, hambúrguer 180g, molho grill, molho cheddar, anel de cebola, picles ou rúcula", price: 26.00, imageUrl: "https://ibb.co/DPm7B9h", optionsTitle: "Escolha seu complemento:", options: [{ value: "picles", label: "Picles" }, { value: "rúcula", label: "Rúcula" }] },
        { id: "h4", name: "JK BARBECUE", description: "Pão brioche, hambúrguer 180g, barbecue, mussarela, bacon, cebola roxa", price: 25.00, imageUrl: "https://ibb.co/bRC6v4S" },
        { id: "h5", name: "JK CHEDDAR", description: "Pão brioche, hambúrguer 180g, bacon, cebola caramelizada, molho cheddar, molho bacon", price: 26.00, imageUrl: "https://ibb.co/tp9FbLG" },
        { id: "h6", name: "JK CHEDDAR DUPLO", description: "Pão brioche, 2 hambúrgueres 180g, bacon, 2 camadas molho cheddar, molho grill, farofa bacon", price: 34.00, imageUrl: "https://ibb.co/MkdpKXc" },
        { id: "h7", name: "JK CATUPIRY", description: "Pão brioche, hambúrguer 180g, bacon, mussarela, catupiry, molho grill, farofa bacon", price: 25.00, imageUrl: "https://ibb.co/SbV3cvY" },
        { id: "h8", name: "JK GOURMET", description: "Pão brioche, costela bovina desfiada, mussarela, molho grill, cebola roxa, tomate", price: 28.00, imageUrl: "https://ibb.co/4Rmj9XZ" },
        { id: "h9", name: "JK PREMIUM", description: "Pão brioche, hambúrguer frango 180g, molho cheddar, alface, cebola roxa, tomate", price: 24.00, imageUrl: "https://ibb.co/39NgG3f" },
        { id: "h10", name: "JK KIDS", description: "Pão brioche kids, hambúrguer 70g, mussarela, alface, tomate, batata frita + mini refri", price: 20.00, imageUrl: "https://ibb.co/hJdBTYf" },
      ]
    },
    {
      name: "PORÇÃO CARNES",
      id: "porcoes-carnes",
      items: [
        { id: "pc1", name: "Picanha", description: "600g de picanha grelhada, 500g batata frita, farofa, vinagrete, molho da casa", price: 110.00, imageUrl: "https://ibb.co/4w1vBrW" },
        { id: "pc2", name: "Ancho", description: "600g de ancho grelhado, 500g batata frita, farofa, vinagrete, molho da casa", price: 90.00, imageUrl: "https://ibb.co/B2Msy4P" },
        { id: "pc3", name: "Contra Filé", description: "600g de contra filé grelhado, 500g batata frita, farofa, vinagrete, molho da casa", price: 85.00, imageUrl: "https://ibb.co/SwrBY05" },
        { id: "pc4", name: "Frango", description: "600g de frango frito, 500g batata frita, barbecue, molho da casa", price: 50.00, imageUrl: "https://ibb.co/6cN9x8s" },
      ]
    },
    {
      name: "PORÇÃO BATATAS",
      id: "porcoes-batatas",
      items: [
        { id: "pb1", name: "Batata Premium", description: "600g batata frita, molho cheddar, cubos de bacon crocantes", price: 35.00, imageUrl: "https://ibb.co/VWrTX3h" },
        { id: "pb2", name: "Batata Clássica", description: "600g batata frita, queijo mussarela, bacon crocante", price: 35.00, imageUrl: "https://ibb.co/m5bTMq2" },
        { id: "pb3", name: "Batata Gourmet", description: "600g batata frita, costela bovina desfiada ao molho cheddar, cubos de bacon", price: 40.00, imageUrl: "https://ibb.co/Gv14bdb" },
        { id: "pb4", name: "Batata Catupiry", description: "600g batata frita, catupiry, farofa de bacon", price: 40.00, imageUrl: "https://ibb.co/yBSn8KJ" },
        { id: "pb5", name: "Anéis de Cebola JK", description: "Porção de anéis de cebola (queijo opcional)", price: 25.00, imageUrl: "https://ibb.co/zhHxkkr", hasCheckboxOption: true, checkboxLabel: "Adicionar Queijo?" },
      ]
    },
    {
      name: "BEBIDAS",
      id: "bebidas",
      items: [
        { id: "b1", name: "Brahma Garrafa 600ml", price: 10.00, imageUrl: "https://ibb.co/84081kJ" },
        { id: "b2", name: "Heineken Garrafa 600ml", price: 14.00, imageUrl: "https://ibb.co/hFDLxGB" },
        { id: "b3", name: "Original Garrafa 600ml", price: 12.00, imageUrl: "https://ibb.co/84081kJ" },
        { id: "b4", name: "Refri Lata 350ml", price: 5.00, imageUrl: "https://ibb.co/jknDxFh" },
        { id: "b5", name: "Refri Garrafa 600ml", price: 7.00, imageUrl: "https://ibb.co/krCTYXy" },
        { id: "b6", name: "Refri Garrafa 2L", price: 11.00, imageUrl: "https://ibb.co/pvVVcHg" },
        { id: "b7", name: "Água sem gás", price: 3.00, imageUrl: "https://ibb.co/pvVVcHg" }, 
        { id: "b8", name: "Água com gás", price: 3.50, imageUrl: "https://ibb.co/ccHFxfy" },
        { id: "b9", name: "Soda Italiana (consultar sabores)", price: 13.00, imageUrl: "https://ibb.co/7tw4htX" },
        { id: "b10", name: "Sodas Italianas (sem sabor)", price: 12.00, imageUrl: "https://ibb.co/8Lc9GsJ" },
      ]
    }
  ]
};
