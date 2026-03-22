class Usuario {
    constructor(nombre, email, rol = "cliente") {
        this.nombre = nombre;
        this.email = email;
        this.rol = rol;
        this.activo = true;
        
    }
    saludo(){
        return `Hola, soy ${this.nombre} y mi rol es ${this.rol}`;
    }
    desactivar(){
        this.activo = false;
        return `${this.nombre} ha sido desactivado.`;
    }
    resumen(){
        let estado;
        if (this.activo === true){
            estado = "activo";
        }
        else{
            estado = "inactivo";
        }
        return `${this.nombre}, ${this.email}, ${this.rol}, ${estado}.`;
    }
    
}

class UsuarioVIP extends Usuario {
    constructor (nombre, email, membresia) {
        super(nombre, email, "cliente VIP")
        this.membresia = membresia
    }
    saludo(){
        return `${super.saludo()} y membresía es ${this.membresia}`;
    }
    beneficios(){
        if (this.membresia === "Gold"){
            return `${this.membresia} recibe un 10 % de descuento.`;
        }
        else if (this.membresia === "Platinum"){
            return `${this.membresia} recibe un 20 % de descuento.`;
        }
        else{
            return `${this.membresia} tiene beneficios estándar`;
        }
        
    }

}

//! module.exports 
// module.exports = Usuario;
export default Usuario; //Aqui estamos exportando
export {UsuarioVIP}