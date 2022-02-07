const DB = require('../../database/models');
const Op = DB.Sequelize.Op;

module.exports = {
    list: (req, res) => {

        /*  Pedido en el Sprint 8
            api/products/
            Deberá devolver un objeto literal con la siguiente estructura:
            - count → cantidad total de productos en la base.
            - countByCategory → objeto literal con una propiedad por categoría 
                    con el total de productos.
            - products → array con la colección de productos, cada uno con:
                    ● id
                    ● name
                    ● description
                    ● un array con principal relación de uno a muchos (ej: categories).
                    ● detail → URL para obtener el detalle */

        /* findAndCountAll - Search for multiple elements in the database, returns both data and total count
            This is a convenience method that combinesfindAll and count (see below) this is useful when dealing with queries related to pagination where you want to retrieve data with a limit and offset but also need to know the total number of records that match the query:
    
            The success handler will always receive an object with two properties:
            - count: an integer, total number records matching the where clause and other filters due to associations
            - rows: an array of objects, the records matching the where clause and other filters due to associations
                    within the limit and offset range */

        let response = {
            meta: {
                status: 200,
                msg: '',
                url: 'api/products'
            },
            data: {
                count: 0,
                countByType: {},
                varietalsTotal: 0,
                winemakersTotal: 0,
                producersTotal: 0,
                productsList: [],

            }
        }

        let promises = [
            DB.Product.findAndCountAll({ include: ['product_type', 'Winemaker'] }),
            DB.Type.findAll(),
            DB.Winemaker.findAll(),
            // aca va el nombre de Modelo (uf!)
            DB.Varietal.count(),
            DB.Winemaker.count(),
            DB.Producer.count(),
            
        ];
        Promise.all(promises)
            .then(result => {
                let products = result[0];
                let types = result[1];
                let winemakers = result[2];
                let varietalsTot = result[3];
                let winemakersTot = result[4];
                let producersTot = result[5];

                types.forEach(type => {
                    response.data.countByType[type.name] = 0;
                });

                response.data.countByType.totalTypes = types.length;

                // tendria que usar products.count que devuelve findAndCountAll - pero cuenta 42
                response.data.count = products.rows.length;

                // los que agregamos para completar los paneles de totales
                response.data.varietalsTotal = varietalsTot;
                response.data.winemakersTotal = winemakersTot;
                response.data.producersTotal = producersTot;

                response.data.productsList = products.rows.map(row => {
                    response.data.countByType[row.product_type.name]++;

                    let product = {
                        id: row.id,
                        name: row.name,
                        description: row.description,
                        // type_id relacion 1:1 belongsTo  row.[nombre de la relacion en el include].name ('as' en el modelo)
                        type: row.product_type.name,
                        // winemakers relacion 1:N Hay una tabla auxiliar (o como se llame) belongsToMany  row.[nombre de la relacion en el include].map ('as' en el modelo)
                        winemakers: row.Winemaker.map(winmak => winmak.name),

                        // detail → URL para obtener el detalle - supongo que parecida a esto
                        urlDetail: `http://localhost:3030/api/products/${row.id}`
                    }
                    return product
                });
                response.meta.status = 200;
                response.meta.msg = 'Te mostramos el listado de productos!';
                return res.json(response);
            })
            .catch(err => {
                response.meta.msg = 'Error inesperado... fijate en la terminal, debería haber un mensaje de error más claro ';
                console.log(err);
                return res.status(500).json(response);
            });
    },
    detail: async (req, res) => {
        const { id } = req.params;
        try{
            const product = await DB.Product.findByPk( id,
                {
                    include : ['product_type', 'Winemaker', "product_image"]
                });
                return res.json({
                    meta: {
                        status: 500,
                        msg: 'Here is your product!',
                        url: 'api/products'
                    },
                    data:{
                        
                        id: product.id,
                        name: product.name,
                        year: product.year,
                        price: product.price,
                        description: product.description,
                        location: product.location,
                        altitude: product.altitude,
                        soil: product.soil,
                        abv: product.abv,
                        breeding: product.breeding,
                        varietal: product.varietal_comp,
                        type: product.product_type.name,
                        winemakers: product.Winemaker.map(w => w.name),
                        url_image: `http://localhost:3030/img/product-img/${
                            product.product_image.map(i => i.file_name)}`
                        
                    }
                })
        } catch(e){
            console.log(e)
        }

    }
}