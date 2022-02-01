const db = require("../../database/models/index.js")

const usersAPIControllers={

    list:(req,res)=>{
        db.User.findAll({
            attributes: ['id','first_name','last_name','email']
          })
        .then(users=>{
            for (let i=0;i<users.length;i++) {
                users[i].dataValues.detail=`http://localhost:3030/api/users/${users[i].id}`
            }
            
            let respuesta={
                meta:{
                    status:200,
                    count:users.length,
                    url:"api/users"
                },
                data:users
            }
            res.json(respuesta)
        })
        .catch(error=>{
            console.log(error)
            let respuesta={
                meta:{
                    status:500,
                    statusMsg : "Error inesperado... fijate en la terminal, debería haber un mensaje de error más claro "
                },
                data:[]
            }
            res.status(500).json(respuesta)
        })
        
        
    },

    detail: (req,res) => {
        /*
        ○ Deberá devolver un objeto literal con la siguiente estructura:
        ■ Una propiedad por cada campo en base.
        ■ Una URL para la imagen de perfil (para mostrar la imagen).
        ■ Sin información sensible (ej: password y categoría).*/
        
        let id = Number(req.params.id);
        

        db.User.findByPk(id, {attributes: ['first_name', 'last_name', 'email', 'image']})
        .then(user => {
        
        let image = user.image;
        console.log("usuario") 
        console.log(user)   
        if(user){ 
    
        let response = {
            meta: {
                status: 200
            },
            data: {
                id : user.id,
                first_Name : user.first_name,
                last_Name : user.last_name,
                email : user.email,
                url_image : `http://localhost:3030/img/users-img/${image}`
    
            }
        }
        return res.json(response)
        }    else {
                    res.status(404).json({
                        meta : {
                            status : 404,
                            statusMsg : "User not found"
                        },
                        data : []
                    });
                }
    
            })
            .catch(error => {
                res.status(500).json({
                    meta : {
                        status : 500,
                        statusMsg : "Internal server error"
                    },
                    data : []
                });
            }); 
    }
}

module.exports = usersAPIControllers