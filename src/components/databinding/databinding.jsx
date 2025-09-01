import { useState, useEffect } from "react";

export function DataBinding(){
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');

    useEffect(()=>{
        setPrice(5600);
        setName("koushik");
    },[]);
    return(
        <div className="container-fluid">
            <h2 className={`rext-center text-warning p-3`}>Data Binding</h2>
            <dl>
                <dt>Product Name</dt>
                <dd>{name}</dd>
                <dt>Price</dt>
                <dd>{price}</dd>
            </dl>
        </div>
    )
}