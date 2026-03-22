//! Parte 2 — Productos Archivo: producto.js

//! 2.1 Clase base: Producto
//! Creen la clase Producto:

class Producto{
    // El constructor recibe nombre, precio y categoria.
    constructor(nombre, precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;        
    }
    // Un metodo calcularTotal() que retorna el precio con IVA incluido (19%).
    calcularTotal(){
        return this.precio * 1.19;
    }
    /*
    Un metodo aplicarDescuento(porcentaje) que retorna el precio con ese descuento aplicado, sin modificar el
    precio original. */
    aplicarDescuento(porcentaje){
        return this.precio - (this.precio * porcentaje / 100);
    }
    // Un metodo resumen() que retorna nombre, categoria y precio base.
    resumen(){
        return `Nombre: ${this.nombre}, Categoría: ${this.categoria}, Precio base: ${this.precio}`;
        }

    /* Un metodo tarjeta() que retorna nombre, categoria y precio con IVA — el texto que apareceria en una
    tienda. 
    Pista aplicarDescuento() retorna un valor nuevo — no cambia this.precio. Si lo cambian, calcularTotal() devolvera
    el precio incorrecto en llamadas siguientes. */
    tarjeta(){
        return `Nombre: ${this.nombre}, Categoría: ${this.categoria}, Precio con IVA: ${this.calcularTotal()}`;
    }
}

//! 2.2 Clase extendida: ProductoDigital
/*
2.2 Clase extendida: ProductoDigital

Checkpoint 4
Creen un ProductoDigital. Llamen calcularTotal() y confirmen que retorna el precio sin IVA.
Comparen tarjeta() entre un Producto normal y un ProductoDigital.
*/

// ProductoDigital hereda de Producto
class ProductoDigital extends Producto{
    // Recibe nombre, precio y licencia (ejemplo: "mensual", "anual", "de por vida").
    constructor(nombre, precio, licencia){

        super(nombre, precio, "Digital");
        this.licencia = licencia;
    }
    //Sobreescribe calcularTotal()
    calcularTotal(){
        //En Colombia, los productos digitales no aplican IVA
        return this.precio;
    }
    // Sobreescribe tarjeta() para incluir el tipo de licencia en el texto.
    tarjeta(){      
        return `Nombre: ${this.nombre}, Categoría: ${this.categoria}, Precio: $${this.precio}, Licencia: ${this.licencia}`;
    }
}

/* 2.3 Exportar el modulo
Exporten las dos clases desde producto.js. 
*/
export default Producto;
export {ProductoDigital};