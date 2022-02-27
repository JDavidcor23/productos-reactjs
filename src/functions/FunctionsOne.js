export const calculateCustumers = (invoices) =>{
    const customers = {}
    invoices.forEach((invoice)=>{
      let name = invoice.customer.firstName +"_"+ invoice.customer.lastName
      customers[name] = !customers[name] ? invoice.summary.totalPaid :customers[name] +=invoice.summary.totalPaid
    })
    let arryCustumers = []
    let keys = Object.keys(customers)
    for(let i = 0; i<keys.length; i++){
        arryCustumers.push(keys[i] + " = " + customers[keys[i]])
    }
    return arryCustumers
}
export const calculateProducts = (invoices) =>{
    const getProducts = invoices.map(f => f.products)
    let products =[]
    for(let i=0; i<getProducts.length;i++){
        const values = getProducts[i].map(invoice => {
        let products = {}
            let nameProduct = invoice.reference
            products[nameProduct] = !products[nameProduct] ? (parseInt(invoice.price) * parseInt(invoice.quantity)) :products[nameProduct] +=(parseInt(invoice.price) * parseInt(invoice.quantity))
            return products
        })
        products.push(values)
    }
    let pr = {}
    for(let i = 0; i<products.length; i++){
        for(let i2 = 0; i<products[i].length; i++){
            let nameProduct = Object.keys(products[i][i2])
            let precioProduct = Object.values(products[i][i2])
            pr[nameProduct] = !pr[nameProduct] ? parseInt(precioProduct) :pr[nameProduct] +=parseInt(precioProduct)
    }
    }
    let arryProducts= []
    let keys = Object.keys(pr)
    for(let i = 0; i<keys.length; i++){
        arryProducts.push(keys[i] + " = " + pr[keys[i]])
    }
    return arryProducts
}
export const calculateShops = (invoices)=>{
const shops ={}
invoices.forEach(invoice => {
    let nameShops = invoice.shop.name
    shops[nameShops] = !shops[nameShops] ? invoice.summary.totalPaid :shops[nameShops] +=invoice.summary.totalPaid
})
let arryShops = []
let keys = Object.keys(shops)
for(let i = 0; i<keys.length; i++){
    arryShops.push(keys[i] + " = " + shops[keys[i]])
}
return arryShops
}
export const calculateDates =(invoices)=>{
const dates = {}
invoices.forEach((invoice)=>{
    let date = invoice.createdAt.$date.slice(0,10)
    dates[date] = !dates[date] ? invoice.summary.totalPaid :dates[date] +=invoice.summary.totalPaid
})
let arryDates = []
let keys = Object.keys(dates)
for(let i = 0; i<keys.length; i++){
    arryDates.push(keys[i] + " = " + dates[keys[i]])
}
return arryDates
}


