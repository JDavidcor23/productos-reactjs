export const invoicesDates =(invoices)=>{
    const dates = {}
    invoices.forEach((invoice)=>{
    let date = invoice.createdAt.$date.slice(0,10)
    dates[date] = !dates[date] ? 1 :dates[date] +=1
    })
    let arryDates = []
    let keys = Object.keys(dates)
    for(let i = 0; i<keys.length; i++){
        arryDates.push(keys[i] + " = " + dates[keys[i]])
    }
    return arryDates
}
export const invoicesShops =(invoices)=>{
    const shops ={}
    invoices.forEach(invoice => {
        let nameShop = invoice.shop.name
        shops[nameShop] = !shops[nameShop] ? 1 :shops[nameShop] +=1
    })
    let arryShops = []
    let keys = Object.keys(shops)
    for(let i = 0; i<keys.length; i++){
        arryShops.push(keys[i] + " = " + shops[keys[i]])
    }
    return arryShops
}
export const invoicesCustumers =(invoices)=>{
    const customer = {}
    invoices.forEach((invoice)=>{
      let name = invoice.customer.firstName +"_"+ invoice.customer.lastName
      customer[name] = !customer[name] ? 1 :customer[name] +=1
    })
    let arryCustumers = []
    let keys = Object.keys(customer)
    for(let i = 0; i<keys.length; i++){
        arryCustumers.push(keys[i] + " = " + customer[keys[i]])
    }
    return arryCustumers
}
