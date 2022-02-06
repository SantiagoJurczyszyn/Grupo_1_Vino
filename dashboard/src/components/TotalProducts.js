import React, {useState, useEffect} from 'react';
import ProductsList from './ProductsList';

function TotalProducts(){

	const [products, setProduct] = useState ([]);

	useEffect ( () => {
        fetch("/api/products")
        .then (response => {
            return response.json()
        })
        .then(products => {		
			console.log(products.data.productsList)				
            setProduct(products.data.productsList)
			            
        })
        .catch(error => console.log(error))
    },[])
	

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Nuestros productos</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered table-striped table-hover" id="dataTable" width="100%" cellspacing="0">
									<thead className="table-primary">
										<tr>
                                            <th>Nombre</th>
                                            <th>Tipo</th>
											<th>Enólogo</th>
										</tr>
									</thead>									
									<tbody>	
								{								                                 
									products.map((product,index) => {
								  return <ProductsList  {...product}  key={index} /> 
								})
								}	                                  
                                											
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
	
}
export default TotalProducts;