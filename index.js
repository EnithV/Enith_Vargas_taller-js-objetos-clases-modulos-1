/*
En este taller van a construir desde cero el nucleo de una tienda online. No es un ejercicio aislado — es un
sistema pequeno pero real, con la misma estructura que usarian en un proyecto profesional.
El sistema tendra tres modulos independientes: uno para gestionar usuarios, otro para productos, y un punto
de entrada que los conecta. Al terminar, tendran un proyecto que funciona con node index.js y que
demuestra todo lo que vieron en las ultimas tres clases.

Parte 3 — Conectar todo en index.js
Archivo: index.js
Este archivo no define nada — solo importa y orquesta. Su trabajo es usar lo que los otros dos modulos
construyeron.
*/
//! Enith_Vargas_taller-js-objetos-clases-modulos-1 GENERATION


//! 3.1 Importar los modulos
/*
Importen todas las clases que necesiten desde usuario.js y producto.js. Recuerden que la ruta empieza
con ./ porque los archivos estan en la misma carpeta.
*/
import Producto from "./producto.js";
import Usuario from "./usuario.js";
import { UsuarioVIP } from "./usuario.js";
import { ProductoDigital } from "./producto.js";
//! 3.3 Reto Adicional
//Importenla en index.js
import { calcularTotalCarrito } from "./utilidades.js";


//! Checkpoint 1
console.log();
console.log("================================================================================");
console.log("CHECKPOINT 1");
console.log("================================================================================");
const usuario1 = new Usuario("María Pérez", "mariaperez@gmail.com", "cliente");
const usuario2 = new Usuario("Pablo Domínguez", "pablodominguez@gmail.com", "cliente");

console.log(usuario1.saludo());
console.log(usuario1.resumen());

console.log(usuario2.saludo());
console.log(usuario2.resumen());

//! Checkpoint 2
console.log();
console.log("================================================================================");
console.log("CHECKPOINT 2");
console.log("================================================================================");
const usuarioVIP1 = new UsuarioVIP("Juana Cano", "juanacano@gmail.com", "Platinum");
console.log(usuarioVIP1.saludo());
console.log(usuarioVIP1.resumen());
console.log(usuarioVIP1.beneficios());
console.log(usuarioVIP1.desactivar());

//! Checkpoint 3
/*Creen dos productos de categorias distintas. Llamen tarjeta() en ambos y verifiquen que
calcularTotal() refleja el IVA correctamente. Apliquen un descuento y confirmen que el precio
original no cambio.
*/
console.log();
console.log("================================================================================");
console.log("CHECKPOINT 3");
console.log("================================================================================");
const producto1 = new Producto("Arroz", 7000, "Granos");
const producto2 = new Producto("Carne", 18000, "Carnes");

console.log(producto1.tarjeta());
console.log(producto1.aplicarDescuento(10));
console.log(producto1.precio);
console.log(producto1.calcularTotal());

console.log(producto2.tarjeta());
console.log(producto2.aplicarDescuento(10));
console.log(producto2.precio);
console.log(producto2.calcularTotal());


//! Checkpoint 4
/*
Creen un ProductoDigital. Llamen calcularTotal() y confirmen que retorna el precio sin IVA.
Comparen tarjeta() entre un Producto normal y un ProductoDigital.
*/
console.log();
console.log("================================================================================");
console.log("CHECKPOINT 4");
console.log("================================================================================");
const productoDigital1 = new ProductoDigital("Suscripción Netflix", 29000, "mensual");

console.log(productoDigital1.tarjeta());
console.log(productoDigital1.precio);
console.log(productoDigital1.calcularTotal());


//! 3.2 Simular la tienda
// Con las clases importadas, construyan el siguiente escenario:
console.log();
console.log("================================================================================");
console.log("==============================SIMULAR TIENDA====================================");
console.log("================================================================================");
// 1. Creen al menos tres usuarios: un cliente regular, un administrador y un UsuarioVIP.
const usuario3 = new Usuario("Ximena Vargas", "ximenavargas@gmail.com", "administrador");
const usuario4 = new Usuario("Goliat Martínez", "goliatmartinez@gmail.com", "cliente regular");
const usuarioVIP2 = new UsuarioVIP("Clay Ballén", "cleyballen@gmail.com", "Gold");
// 2. Creen al menos cuatro productos: dos fisicos de categorias distintas y dos digitales con diferentes tipos
// de licencia.
const productoDigital2 = new ProductoDigital("Curso Udemy Python en 100 Días", 49900, "de por vida");
const productoDigital3 = new ProductoDigital("HBO Max", 40000, "mensual");
const producto3 = new Producto("Laptop Dell Intel(R) Core(TM) i7-7700HQ", 4000000, "Electrónicos");
const producto4 = new Producto("Atún", 8000, "Enlatados");
// 3. Desactiven uno de los usuarios y verifiquen que resumen() lo refleja.
console.log();
console.log("================================================================================");
console.log("DESACTIVAR USUARIO");
console.log("================================================================================");
console.log(usuario4.desactivar());
console.log(usuario4.resumen());
// 4. Apliquen un descuento de 20% a uno de los productos fisicos e impriman el precio resultante.
console.log();
console.log("================================================================================");
console.log("20 % DE DESCUENTO");
console.log("================================================================================");
console.log(producto3.nombre);
console.log(`Precio Producto: $${producto3.precio}`);
console.log(`Precio con descuento del 20%: es $${producto3.aplicarDescuento(20)}.`);
/*
Checkpoint 5
Ejecuten node index.js. El output debe mostrar la tarjeta de cada producto y el resumen de
cada usuario. Ninguna clase debe estar definida en este archivo.
*/
console.log();
console.log("================================================================================");
console.log("CHECKPOINT 5");
console.log("================================================================================");
// 5. Impriman la tarjeta() de todos los productos.
console.log("================================================================================");
console.log("TARJETAS DE LOS PRODUCTOS");
console.log("================================================================================");
console.log(producto1.tarjeta());
console.log(producto2.tarjeta());
console.log(producto3.tarjeta());
console.log(producto4.tarjeta());
console.log(productoDigital1.tarjeta());
console.log(productoDigital2.tarjeta());
console.log(productoDigital3.tarjeta());
// 6. Impriman el resumen() de todos los usuarios
console.log();
console.log("================================================================================");
console.log("RESUMEN DE USUARIOS");
console.log("================================================================================");
console.log(usuario1.resumen());
console.log(usuario2.resumen());
console.log(usuario3.resumen());
console.log(usuario4.resumen());
console.log(usuarioVIP1.resumen());
console.log(usuarioVIP2.resumen());
// 7. Use la funcion calcularTotalCarrito con al menos tres productos.
console.log("================================================================================");
console.log("RETO ADICIONAL");
console.log("================================================================================");

const totalCarrito = calcularTotalCarrito([producto1, producto2, producto3]);
console.log(`Total del Carrito: $${totalCarrito}`);
