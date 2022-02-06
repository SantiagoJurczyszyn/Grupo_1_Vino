import React, {useState, useEffect} from 'react';
import Panels from './Panels';
import LastUser from "./LastUser"
import LastProduct from "./LastProduct"
function ContentRowTop(){
	
	const [users, setUser] = useState ([]);

    useEffect ( () => {
        fetch("/api/users")
        .then (response => {
            return response.json()
        })
        .then(users => {
			const usersTotal = users.data 
			const lastUser = usersTotal[(usersTotal.length)-1];
            setUser(lastUser)
			//console.log(lastUser)
            
        })
        .catch(error => console.log(error))
    },[])

	const [products, setProduct] = useState ([]);

	useEffect ( () => {
        fetch("/api/products")
        .then (response => {
            return response.json()
        })
        .then(products => {
			
			const productsTotal = products.data.productsList 
			const lastProduct = productsTotal[(productsTotal.length)-1];
            setProduct(lastProduct)
			//console.log(lastProduct)            
        })
        .catch(error => console.log(error))
    },[])


    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">					
				
					<Panels />
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
					                       
                     <LastUser {...users} key={users} />                    
                    				
					{/*<!-- Genres in DB -->*/}
					<LastProduct {...products} key={products}  />

						{/*<!--End Genres In Db-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;