import { useEffect, useState } from "react";
import './styles/App.css'
import {calculateCustumers, calculateShops, calculateDates, calculateProducts} from "./functions/FunctionsOne"
import {invoicesDates, invoicesShops, invoicesCustumers} from './functions/FunctionsTwo'
import {averageCustomers, averageShops, averageDates, averageProducts} from './functions/FunctionsTree'
const url = "http://localhost:3004/results/";

function App() {
  const [invoices, setinvoices] = useState([]);
  const [filterinvoice, setFilterinvoice] = useState(false);
  const [invoice, setinvoice] = useState([]);
  const deleteInvoice = (id)=>{
    const newinvoices = invoices.filter((p)=> p._id.$oid !== id)
    setinvoices(newinvoices)
  }
  const getProduct = (invoice)=>{
      let product ={}
      invoice.products.forEach(p => {
        let nameProduct = p.description
         product[nameProduct] = !product[nameProduct] ? (p.price*p.quantity) :product[nameProduct] +=(p.price*p.quantity)

        });
        let arryProduct = []
        let keys = Object.keys(product)
        for(let i = 0; i<keys.length; i++){
          arryProduct.push(keys[i] + " " + product[keys[i]])
        }
        return arryProduct
  }
  const getinvoice = (invoiceFilter) =>{
    setinvoice(invoiceFilter(invoices))
    if(filterinvoice !== true){
      setFilterinvoice(true)
    }
  } 
  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(data => setinvoices(data))
  }, []);
  return (
    <div className="container">
      <div className="container-actions">
        <div className="container-acctions__buttons">
          <h2>Calcular por ingresos</h2>
          <button onClick={()=>getinvoice(calculateCustumers)} className="buttons_actions">Por Clientes</button>
          <button onClick={()=>getinvoice(calculateDates)} className="buttons_actions">Por Fechas</button>
          <button onClick={()=>getinvoice(calculateShops)} className="buttons_actions">Por Tiendas</button>
          <button onClick={()=>getinvoice(calculateProducts)} className="buttons_actions">Por Productos</button>
        </div>
        <div>
          <h2>Calcular cantidad de Facturas</h2>
          <button onClick={()=>getinvoice(invoicesCustumers)} className="buttons_actions">Por Clientes</button>
          <button onClick={()=>getinvoice(invoicesDates)} className="buttons_actions">Por Fechas</button>
          <button onClick={()=>getinvoice(invoicesShops)} className="buttons_actions">Por Tiendas</button>
        </div>
        <div>
          <h2>Calcular Promedio</h2>
          <button onClick={()=>getinvoice(averageCustomers)} className="buttons_actions">Por Clientes</button>
          <button onClick={()=>getinvoice(averageDates)} className="buttons_actions">Por Fechas</button>
          <button onClick={()=>getinvoice(averageShops)} className="buttons_actions">Por Tiendas</button>
          <button onClick={()=>getinvoice(averageProducts)} className="buttons_actions">Por Productos</button>
        </div>
        <div>
          <h2>Todas las invoices</h2>
          <button onClick={()=>setFilterinvoice(false)} className="buttons_actions">Todas</button>
        </div>
      </div>
      <div className="container-invoice">
      {filterinvoice === false ?
        invoices !== undefined  &&
        invoices.map((product)=>(
          <div className="invoice" key={product._id.$oid}>
            <div style={{color:"black"}}>---------------------------------</div>
            <p>{product.customer.firstName} {product.customer.lastName}</p> 
            <div style={{display:"flex", flexDirection:"column"}}>
              {getProduct(product).map((n)=>(
                <p style={{color:"black"}} key={n}>{n}</p>
              
                ))}
            </div>
            <p>{product.summary.totalPaid}</p>
            <button onClick={()=>deleteInvoice(product._id.$oid)} className="delete">ELIMINAR</button>
            <div style={{color:"black"}}>---------------------------------</div>
          </div>
        )):
        invoice.map((product)=>(
          <div className="invoice" key={product}>
            <div style={{color:"black"}}>---------------------------------</div>
            <p>{product}</p> 
            <div style={{color:"black"}}>---------------------------------</div>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
