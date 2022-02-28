
# Como ejecuto el programa
- necesitas json server(global) para poder consumir la endpoint
- el documento data.json necesitas ponerle un nombre al json
[![json](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646031863/dsehwsvqcd0qf0b1vpjy.png "json")](https://res.cloudinary.com/dhu6ga6hl/image/upload/v1646031863/dsehwsvqcd0qf0b1vpjy.png "json")
- luego abre una línea de comandos en donde esta la data
- escribe **json-server --watch data.json --port 3004** ,luego enter
- despues abre el proyecto de react y le das npm run start



## El ejercicio número 1 se le pide:
Con base al archivo “data.json” proporcionado que hace referencia a una base de datos de
facturas realizar:
1. Calcular valor total de las ventas (por fechas, tienda, producto, cliente)
2. Calcular cantidad de facturas generadas (por fechas, tienda, producto, cliente)
3. Calcular promedio de venta (por fechas, tienda, producto, cliente)
4. Eliminar una factura del listado
5. Eliminar un producto a una factura y actualizar su objeto summary

## Respuesta:
Primero use el Hook useEffect para hacer la petición fetch y añadirlo a la variable invoices.
Segundo cree unas funciones:
En la carpeta FunctionsOne, FunctionsTwo, FunctionsTree están las funciones para calcular los ingresos

### calculateCustumers: 
Recibe las facturas, creo un objeto vacío llamado customers, hago una iteración del parámetro, creó una variable llamada name, para obtener el nombre de los clientes, después hago una operación ternaria y le asignó al objeto customers la llave del nombre y preguntó si la llave ya existe lo sumo con su valor de total a pagar, si no se le asigna el primer valor de total a pagar. Después de esa iteración hago otra para que me regrese un Array y lo pueda recorrer después.

### calculateProducts: 
recibe las facturas, hago un mapeo para obtener los productos, hago una iteración de ese mapeo y logró acceder a todos los productos y hago lo mismo que en  calculateCustumers declaro un objeto, hago una operación ternaria y saco los resultados. pero este me entrega los objetos separados haci que hago otra iteración del array, este no me logra acceder a los valores haci que hago otra iteración para poder acceder a estos, vuelvo a hacer la misma comparación y ya me entrega el objeto que necesito y lo paso a un Array.

### Otras funciones: 
Estas funciones hacen lo mismo que la primera y la segunda(para las funciones de products) con sus respectivas peticiones.
En el App.js hay otras funciones:
deleteInvoice:esta como su nombre lo dice borra la factura deseada, se hace un método filter para que me retorne todo lo que no sea igual al id que le pace en el parámetro.
getProduct: me trae todos los productos de la iteración de todas las facturas.
getinvoice le agrega e parametro invoices a la función deseada
