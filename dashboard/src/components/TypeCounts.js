import React from 'react';
import TypesList from './TypesList';

function TypeCounts(){

let productTypes = [
		{name: "Blanco",
		amount: 5},
		{name:"Champagne",
		amount: 1},
		{name: "Espumoso",
		amount: 1},
		{name: "PetNat",
		 amount: 2},
		{name:"Rosado",
		amount: 3},
		{name:"Tinto",
		amount: 19},
		{name:"Cantidad Totales",
		amount: 6},
		
	]
	

    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">Nuestras categorías</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered table-striped table-hover" id="dataTable" width="100%" cellspacing="0">
									<thead className="table-primary">
										<tr>
                                            <th>Categoría</th>
                                            <th>Cantidad</th>
										</tr>
									</thead>									
									<tbody>	
								{								                                 
									productTypes.map((product,index) => {
								  return <TypesList  {...product}  key={index} /> 
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
export default TypeCounts;