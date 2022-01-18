const db=require("../../database/models/index")
const usersAPIControllers={
    list:(req,res)=>{
        db.User.findAll()
        .then(users=>{
            let respuesta={
                meta:{
                    status:200,
                    total:users.length,
                    url:"api/users"
                },
                data:users
            }
            res.json(respuesta)
        })
        .catch(error=>{console.log(error)})
        
        
    }
}

module.exports=usersAPIControllers