/* 
3.3 Reto adicional
Si terminan antes del tiempo: Agreguen una funcion calcularTotalCarrito(productos) en
un archivo nuevo utilidades.js. La funcion recibe un array de productos y retorna la suma de
calcularTotal() de cada uno. Importenla en index.js y usela con al menos tres productos.
*/
function calcularTotalCarrito(productos){
    let sumar_productos = 0;
    for (let i = 0; i < productos.length; i++){
        sumar_productos = sumar_productos + productos[i].calcularTotal(); 
    }
    return sumar_productos;
}
export {calcularTotalCarrito}