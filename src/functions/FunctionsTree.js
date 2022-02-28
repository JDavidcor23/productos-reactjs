export const averageCustomers = (invoices) =>{
    const customers = {}
    invoices.forEach((invoice)=>{
      let name = invoice.customer.firstName +"_"+ invoice.customer.lastName
      customers[name] = !customers[name] ? invoice.summary.totalPaid :customers[name] +=invoice.summary.totalPaid
    })
    const average = {}
    invoices.forEach((invoice)=>{
        let name = invoice.customer.firstName +"_"+ invoice.customer.lastName
        average[name] = !average[name] ? 1 :average[name] +=1
    })
    const averageCustom = Object.keys(customers)
    const averageNumber = Object.keys(average)
    for(let i=0; i<averageCustom.length; i++){
        if(averageCustom[i] === averageNumber[i]){
            let key = averageCustom[i];
            let result = customers[averageCustom[i]] / average[averageNumber[i]]
            customers[key] = result
       }
    }
    let arryCustumers = []
    let keys = Object.keys(customers)
    for(let i = 0; i<keys.length; i++){
        arryCustumers.push(keys[i] + " = " + customers[keys[i]])
    }
    return arryCustumers
}
export const averageShops = (invoices) =>{
    const shops = {}
    invoices.forEach((invoice)=>{
        let nameShops = invoice.shop.name
        shops[nameShops] = !shops[nameShops] ? invoice.summary.totalPaid :shops[nameShops] +=invoice.summary.totalPaid
    })
    const average = {}
    invoices.forEach((invoice)=>{
        let nameShops = invoice.shop.name
        average[nameShops] = !average[nameShops] ? 1 :average[nameShops] +=1
    })
    const averageCustom = Object.keys(shops)
    const averageNumber = Object.keys(average)
    for(let i=0; i<averageCustom.length; i++){
        if(averageCustom[i] === averageNumber[i]){
            let key = averageCustom[i];
            let result = shops[averageCustom[i]] / average[averageNumber[i]]
            shops[key] = result
       }
    }
    let arryShops = []
    let keys = Object.keys(shops)
    for(let i = 0; i<keys.length; i++){
        arryShops.push(keys[i] + " = " + shops[keys[i]])
    }
    return arryShops
}
export const averageProducts = (invoices) =>{
    const getProducts = invoices.map(f => f.products)
    let products =[]
    for(let i=0; i<getProducts.length;i++){
        const values = getProducts[i].map(invoice => {
        let pro = {}
            let nameProduct = invoice.description
            pro[nameProduct] = !pro[nameProduct] ? ((parseInt(invoice.price) * parseInt(invoice.quantity) / invoice.quantity)) :pro[nameProduct] +=((parseInt(invoice.price) * parseInt(invoice.quantity) / invoice.quantity)) 
            return pro
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
export const averageDates = (invoices) =>{
    const dates = {}
    invoices.forEach((invoice)=>{
        let date = invoice.createdAt.$date.slice(0,10)
        dates[date] = !dates[date] ? invoice.summary.totalPaid :dates[date] +=invoice.summary.totalPaid
    })
    const average = {}
    invoices.forEach((invoice)=>{
        let date = invoice.createdAt.$date.slice(0,10)
        average[date] = !average[date] ? 1 :average[date] +=1
    })
    const averageCustom = Object.keys(dates)
    const averageNumber = Object.keys(average)
    for(let i=0; i<averageCustom.length; i++){
        if(averageCustom[i] === averageNumber[i]){
            let key = averageCustom[i];
            let result = dates[averageCustom[i]] / average[averageNumber[i]]
            dates[key] = result
       }
    }
    let arryDates = []
    let keys = Object.keys(dates)
    for(let i = 0; i<keys.length; i++){
        arryDates.push(keys[i] + " = " + dates[keys[i]])
    }
    return arryDates
}