import React,{Component} from "react";

export class TaskQuantity extends Component{
state={total:550,
    product:[
    {id:1,productname:'abc',price:10.00,quantity:1,netprice:10.00},
    {id:2,productname:'cde',price:20.00,quantity:2,netprice:40.00},
    {id:3,productname:'fgh',price:30.00,quantity:3,netprice:90.00},
    {id:4,productname:'ijk',price:40.00,quantity:4,netprice:160.00},
    {id:5,productname:'klm',price:50.00,quantity:5,netprice:250.00}
]};

    render(){
        return(
            <div className="table-responsive container">
<table className="table caption-top">
  <caption className="bottom-border"><h3>Buy Products</h3></caption>
  <thead>
   <tr>
    <td>id</td>
    <td>Product Name</td>
    <td className="text-center">Price</td>
    <td className="text-center">Quantity</td>
    <td className="text-center">Net Price</td>
   </tr>
  </thead>
  <tbody>
   {this.PopulateTbodyProctData(this.state.product,this.state)}
  </tbody>
  <tfoot>
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td className="text-center"><span className="text-primary"><b>Total:</b></span></td>
    <td className="text-center"><span className="text-primary"><b>${this.state.total}</b></span></td>
</tr>
  </tfoot>

</table>
</div>
        );
    }

    PopulateTbodyProctData=(prod)=>{
       return prod.map((product,index)=>{
return(
     <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.productname}</td>
        <td className="text-center"><input type="text" defaultValue={product.price} onChange={(e)=>{this.changePrice(e,product,index)}}/>  </td>
        <td className="text-center"><input type="text" defaultValue={product.quantity} onChange={(e)=>{this.changeQuantity(e,product,index)}}/></td>
        <td className="text-center">$ {product.netprice}</td>
      </tr>
     );
       })
    }

    changePrice=(e,product,index)=>{
        let ProductArr = this.state.product;
        ProductArr[index].price = e.target.value;
        ProductArr[index].netprice = e.target.value*product.quantity;
        if(!isNaN(e.target.value)){
        this.setState({product:ProductArr});
        this.setState({total:ProductArr.reduce((totalprice,Subnetprice) =>  totalprice = totalprice + Subnetprice.netprice , 0 )});
        }

    }

    changeQuantity=(e,product,index)=>{
        let ProductArr = this.state.product;
         ProductArr[index].quantity = e.target.value;
         ProductArr[index].netprice = e.target.value*product.price;
         if(!isNaN(e.target.value)){
            this.setState({product:ProductArr});
            this.setState({total:ProductArr.reduce((totalprice,Subnetprice) =>  totalprice = totalprice + Subnetprice.netprice , 0 )});
         }
    }
}