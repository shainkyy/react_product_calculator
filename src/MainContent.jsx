import React,{ Component } from "react";

export class MainContent extends Component{

    state = {appTitle:"Employees",customersCount:5,
customers:[
    {id:1,name:'shainky',photo:'https://picsum.photos/200/60',phone:'26927-222',address:{city:'New York'}},
    {id:2,name:'Jack',photo:'https://picsum.photos/201/60',phone:'88887-822',address:{city:'Paris'}},
    {id:3,name:'John',photo:'https://picsum.photos/203/60',phone:'98727-722',address:{city:'Punjab'}},
    {id:4,name:'Harry',photo:'https://picsum.photos/205/60',phone:'56927-882',address:{city:'New Jersy'}},
    {id:5,name:'William',photo:'https://picsum.photos/202/60',phone:'',address:{city:'Colombo'}},
    {id:6,name:'Prince',photo:'https://picsum.photos/209/60',phone:'26927-132',address:{city:'Europe'}},
    {id:7,name:'Robert',photo:'https://picsum.photos/208/60',phone:null,address:{city:'Thai Land'}},
    {id:8,name:'Kate',photo:'https://picsum.photos/207/60',phone:'37333-222',address:{city:'Vellore'}},
    {id:9,name:'Zean',photo:'https://picsum.photos/206/60',phone:'22347-222',address:{city:'America'}}
]};

customeNameStyle = (cust) =>{
    if(cust.name.startsWith('s')){
        return {color:'white',backgroundColor:'#3ababa',textAlign:'center'}
    }else if(cust.name.startsWith('W')){
       return{color:'#3ababa',backgroundColor:'#ebe7dd',border:'1px solid #3ababa',textAlign:'center'}
    }else{
        return {color:'white',backgroundColor:'#2a2a',textAlign:'center'};
    }
}

customeNameClass=(cust)=>{
    if(cust.address.city.startsWith('E')){
        return 'text-highlight';
    }else if(cust.address.city.startsWith('N')){
        return 'text-highlight';
    }else{
        return '';
    }
}
    render(){
        return <div>
            <h1 className="border-bottom m-2 p-1">{this.state.appTitle} 
                <span className="badge bg-secondary m-1">
                {this.state.customersCount}
                </span>
                <button className="btn btn-success" onClick={this.OnClickRefresh}>Refresh</button>
            </h1>
            <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Image</td>
                        <td>Name</td>
                        <td>Mobile</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>{this.getCustomerRowDetails(this.state.customers)}
                
                </tbody>
            </table>
            </div>
        </div>;
    }

    OnClickRefresh = ()=>{
        this.setState({customersCount:8});
    }
    getPhonetoRender=(phone)=>{
       return phone?phone:<div className="bg-warning text-center p-2">No Phone</div>;
    }

    getCustomerRowDetails=(customers)=>{
            return customers.map((cust,index)=>{
                return(
                    <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td><img src={cust.photo}/>
                    <button className="btn btn-info" onClick={()=>{this.ChangePhoto(cust,index);}}>Change Image</button>
                    </td>
                    <td style={this.customeNameStyle(cust)}>{cust.name}</td>
                    <td style={{textAlign:'center'}}>{this.getPhonetoRender(cust.phone)}</td>
                    <td className={this.customeNameClass(cust)}>{cust.address.city}</td>
                </tr>
                );
             }) 
    }

    ChangePhoto=(user,index)=>{
// console.log(user);
// console.log(index);
let custArr = this.state.customers;
custArr[index].photo='https://picsum.photos/220/60';
this.setState({customers:custArr});
    };
}