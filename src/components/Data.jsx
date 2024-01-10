import React, { useRef,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_PRODUCT_PROGRESS,GET_PRODUCT_PROGRESS, PATCH_PRODUCT_PROGRESS, POST_PRODUCT_PROGRESS } from "../redux-saga/admin/action/action";

const Data = () => {
  const name = useRef()
  const price = useRef()
  const product = useSelector((state) => state.productReducer);

  const [view, setview] = useState({})

  const dispatch = useDispatch()

  // console.log(product, "product from data");

  const handleSubmit =()=>{
    const data = {
      productName:name.current.value,
      price:price.current.value
    }
    dispatch({type:POST_PRODUCT_PROGRESS,payload:data})
// console.log(data);
  }


  const handleDelete =(val)=>{

    console.log(val);

    dispatch({type:DELETE_PRODUCT_PROGRESS,payload:val})

  }

  //update  

  const handleView =(val)=>{
   setview(val) 
  }

  const handle =(e)=>{
setview({...view,[e.target.name]:e.target.value})
  }

  const handleUpdate =()=>{
    dispatch({type:PATCH_PRODUCT_PROGRESS, payload:view})
  }


 
 

  return (
    <div>

    <input type="text" ref={name}/>
    <input type="number" ref={price} />
    <button onClick={handleSubmit}>Add</button><br />


    <input type="text"  name="productName" value={view?.productName} onChange={handle}/>
    <input type="number"  name="price" value={view?.price}  onChange={handle}/>
    <button onClick={handleUpdate}>Update</button>

      {product.product?.map((val, ind) => {
        return (
          <React.Fragment key={ind}>
          <h1>{val?.id}</h1>
            <h1>{val?.productName}</h1>
            <h2>{val?.price}</h2>
            <button onClick={()=>handleDelete(val)}>Delete</button>
            <button onClick={()=>handleView(val)}>View</button>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Data;
