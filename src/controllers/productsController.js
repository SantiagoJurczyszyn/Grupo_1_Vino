const path = require("path");
const fs = require("fs");

const productsFilePath = path.join(__dirname, "../database/products.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
/**estas tres lineas de arriba las copie igualver lo que tengo qe corregir en este progrma */
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
  // Shop
  list: (req, res) => {
    const productsAMostrar = products;
    res.render("./products/shop", {
      productsAMostrar
    });
  },

  create: (req, res) => {
    if (req.method == "GET") {
    res.render("./products/create");
    } else {
    const newProduct = {
      id: products[products.length - 1].id + 1,
      //usar todas las props que vienen en el body
      ...req.body,
      image: req.file ? req.file.filename : "",
    };

    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/");

  }
},

  // Detail - Detail from one product
  product: (req, res) => {
    // Se recibe un objeto tipo producto
    const requiredId = req.params.id;

    // Buscar el producto en el array
    const requiredProduct = products.find((prod) => {
      // guarda como resultado el primer elemento que coincida con el param
      const condition = prod.id == requiredId;
      return condition;
    });

    res.render("./products/products", {
      product: requiredProduct,
    });
  },

  // Update - Form to edit
  edit: (req, res) => {
    // Solo falta autocompletar los inputs y el action y method del form
    const requiredId = req.params.id;
    const productToEdit = products.find((prod) => {
      /* El primer elemento que devuelva true se guarda como resultado */
      const condition = prod.id == requiredId;
      return condition;
    });

    res.render("./products/edit", {
      product: productToEdit
    });
  },

  update: (req, res) => {
    // Leemos el id que viene por url
    const productId = req.params.id;
    // buscamos la posicion del producto que queremos editar
    const productIndex = products.findIndex((p) => p.id == productId);

    // Generamos el producto actualizado
    const updatedProduct = {
      ...products[productIndex],
      ...req.body,
      name: req.body.name,
      producer: req.body.producer,
      harvestYear: Number(req.body.harvestYear),
      varietal: req.body.varietal,
      type: req.body.type,
      subtype: req.body.subtype,
      price: Number(req.body.price),
      description: req.body.description,
      location: req.body.location,
      altitude: req.body.altitude,
      winemakers: req.body.winemakers,
      varietalComp: req.body.varietalComp,
      soil: req.body.soil,
      avb: Number(req.body.avb),
      breeding: req.body.breeding,
      price: Number(req.body.price),
      image: req.file ? req.file.filename : products[productIndex].image,
    };

    // Reemplazamos el objeto en el array
    products[productIndex] = updatedProduct;

    // Escribimos en el JSON para persistir
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    // Volvemos a la pagina de productos
    // ANTES IBA A res.redirect('/shop');
    //
    res.redirect("/products");
  },

 

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Leer el id
    // Buscando la posicion del prod a eliminar
    // Usar método para recortar el array sin ese producto
    // Guardar el json nuevo

    const productIndex = products.findIndex((product) => {
      return product.id == req.params.id; //busca el índice del elemento cuyo id coincida con el recibido por params.
    });

    // opción 2 : usar el método filter --> conservo todos menos los que tienen el id que quiero borrar. Acá se crear un nuevo array, necesito reguardarlo.

    // opción 3: forEach y solo incluyo los elementos que tengan un id distinto

    // opción 4: const newArray1  = array.slice (0,index); tomo porciones antes y dps del index querido y las uno...
    // const newArray2  = array.slice (index + 1, array.length);
    // const result = newArray1.concat(newArray2); o const result = [...newArray1, ...newArray2]

    products.splice(productIndex, 1); // elimina un elemento indicandole en qué índice arranca (0 por defecto) e indicandole cuantos elementos borrar.. sino especifico extensión mata todo

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, " "));

    res.redirect("/");
  },
};

module.exports = productsController;