import React from 'react';


const ProductRow = (props) => {
  return (

    <tr className="ProductRow">
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>

  );

}

export default ProductRow;