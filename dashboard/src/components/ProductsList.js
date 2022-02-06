import React from 'react';

function ProductsList(props){
    return(
        <React.Fragment>
            <tr >
				<td >{props.name}</td>
                <td >{props.type}</td>
                <td >{props.winemakers}</td>
			</tr>
        </React.Fragment>
    )
}
export default ProductsList;