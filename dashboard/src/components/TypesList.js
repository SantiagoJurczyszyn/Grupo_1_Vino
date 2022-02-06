import React from 'react';

function TypesList(props){
    return(
        <React.Fragment>
            <tr >
				<td >{props.name}</td>
                <td >{props.amount}</td>
			</tr>
        </React.Fragment>
    )
}
export default TypesList;