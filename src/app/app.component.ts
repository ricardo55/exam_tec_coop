import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /*
● Sku: Carácter tipo numérico con una longitud máxima de 6 dígitos.
● Artículo: Carácter tipo texto con una longitud máxima de 15 dígitos.
● Marca: Carácter tipo texto con una longitud máxima de 15 dígitos.
● Modelo: Carácter tipo texto con una longitud máxima de 20 dígitos.
● Departamento: Carácter numérico con una longitud de 1 dígitos.
● Clase: Carácter numérico con una longitud de 2 dígitos.
● Familia: Carácter numérico con una longitud de 3 dígitos.
● Fecha de Alta: Tipo fecha.
● Stock: Carácter tipo numérico con una longitud máxima de 9 dígitos.
● Cantidad: Carácter tipo numérico con una longitud máxima de 9 dígitos.
● Descontinuado: Carácter tipo numérico con una longitud máxima de 1 dígito.
● Fecha Baja: Tipo fecha.
  */
  art = {
    sku: 0,
    articulo: '',
    marca: '',
    modelo: '',
    departamento: 0,
    clase: 0,
    familia: 0,
    fecha_alta: '2023-03-10',
    stock: 0,
    cantidad: 0,
    descontinuado: 0,
    fecha_baja: '2023-03-12',
  };

  /*
  articulos = [
    { codigo: 1, descripcion: 'papas', precio: 10.55 },
    { codigo: 2, descripcion: 'manzanas', precio: 12.1 },
    { codigo: 3, descripcion: 'melon', precio: 52.3 },
    { codigo: 4, descripcion: 'cebollas', precio: 17 },
    { codigo: 5, descripcion: 'calabaza', precio: 20 },
  ];
  */

  articulos = [
    {
      sku: 123456,
      articulo: 'laptop',
      marca: 'marca1',
      modelo: 'modelo1',
      departamento: 1,
      clase: 1,
      familia: 1,
      fecha_alta: '2023-03-10',
      stock: 1,
      cantidad: 1,
      descontinuado: 1,
      fecha_baja: '2023-03-12',
    },
    {
      sku: 234567,
      articulo: 'camisa',
      marca: 'marca2',
      modelo: 'modelo2',
      departamento: 2,
      clase: 2,
      familia: 2,
      fecha_alta: '2023-03-10',
      stock: 2,
      cantidad: 2,
      descontinuado: 2,
      fecha_baja: '2023-03-12',
    },
    {
      sku: 345678,
      articulo: 'television',
      marca: 'marca3',
      modelo: 'modelo3',
      departamento: 3,
      clase: 3,
      familia: 3,
      fecha_alta: '2023-03-10',
      stock: 3,
      cantidad: 3,
      descontinuado: 3,
      fecha_baja: '2023-03-12',
    },
    {
      sku: 45678,
      articulo: 'cebollas',
      marca: 'marca4',
      modelo: 'modelo4',
      departamento: 4,
      clase: 4,
      familia: 4,
      fecha_alta: '2023-03-10',
      stock: 4,
      cantidad: 4,
      descontinuado: 4,
      fecha_baja: '2023-03-12',
    },
    {
      sku: 5678,
      articulo: 'pañales',
      marca: 'marca5',
      modelo: 'modelo5',
      departamento: 5,
      clase: 5,
      familia: 5,
      fecha_alta: '2023-03-10',
      stock: 5,
      cantidad: 5,
      descontinuado: 5,
      fecha_baja: '2023-03-12',
    },
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  // si el departamento es 1, mostrar el nombre del departamento
  // si el departamento es 2, mostrar el nombre del departamento
  // si el departamento es 3, mostrar el nombre del departamento
  nombreDepartamento(departamento: number) {
    switch (departamento) {
      case 1:
        return 'Domesticos';
      case 2:
        return 'Electronica';
      case 3:
        return 'Mueble Suelto';
      case 4:
        return 'Salas y Comedores';
      default:
        return 'Desconocido';
    }
  }

  // si la clase es 1, mostrar el nombre de la clase
  // si la clase es 2, mostrar el nombre de la clase
  // si la clase es 3, mostrar el nombre de la clase

  nombreClase(clase: number) {
    switch (clase) {
      case 1:
        return 'Comestibles';
      case 2:
        return 'Licuadoras';
      case 3:
        return 'Batidoras';
      case 4:
        return 'Cafeteras';
      default:
        return 'Desconocido';
    }
  }

  // si la familia es 1, mostrar el nombre de la familia
  // si la familia es 2, mostrar el nombre de la familia
  // si la familia es 3, mostrar el nombre de la familia

  nombreFamilia(familia: number) {
    switch (familia) {
      case 1:
        return 'Licuadoras';
      case 2:
        return 'Exclusivo Cop';
      case 3:
        return 'Procesador';
      case 4:
        return 'Batidor';
      default:
        return 'Desconocido';
    }
  }

  // La cantidad no debe ser mayor al stock.

  validarCantidad() {
    if (this.art.cantidad > this.art.stock) {
      alert('La cantidad no debe ser mayor al stock');
      this.art.cantidad = 0;
    }
  }

  validarSku() {
    if (this.art.sku && this.art.sku.toString().length > 6) {
      // Si el valor de sku tiene más de 6 dígitos,
      // establecer un valor predeterminado y mostrar un mensaje de error
      this.art.sku = null;
      alert('El valor de sku no puede tener más de 6 dígitos');
    }
  }

  /*
Baja:

Al ingresar al programa el usuario sólo deberá poder capturar el Sku, una vez capturado se deberá validar si existe. En el caso de existir, se deberá mostrar un botón con la opción para eliminar y al hacer uso de él se deberá solicitar una confirmación para realizar la acción.

*/
  confirmarBorrado(sku: number) {
    if (confirm('¿Está seguro de que desea eliminar este artículo?')) {
      this.borrar(sku);
    }
  }

  borrar(sku: number) {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].sku == sku) {
        this.articulos.splice(x, 1);
        return;
      }
  }

  /*
Al ingresar al programa el usuario sólo deberá poder capturar el Sku, una vez capturado se deberá validar si existe. En el caso de no existir, el usuario podrá ingresar los datos de Artículo, Marca, Modelo, Departamento, Clase, Familia, Cantidad y Stock; el resto de los datos no deberán mostrarse o deberán mostrarse desactivados.

Los datos Fecha de Alta, Descontinuado y Fecha Baja deberán guardarse de la siguiente forma:
Fecha de Alta: Fecha actual 
Descontinuado: 0
Fecha Baja: 1900-01-01

*/

  agregar() {
    if (this.art.sku == 0) {
      alert('Debe ingresar un código de articulo distinto a cero');
      return;
    }
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].sku == this.art.sku) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos.push({
      sku: this.art.sku,
      articulo: this.art.articulo,
      marca: this.art.marca,
      modelo: this.art.modelo,
      departamento: this.art.departamento,
      clase: this.art.clase,
      familia: this.art.familia,
      fecha_alta: this.art.fecha_alta,
      stock: this.art.stock,
      cantidad: this.art.cantidad,
      descontinuado: this.art.descontinuado,
      fecha_baja: this.art.fecha_baja,
    });

    this.art.sku = 0;
    this.art.articulo = '';
    this.art.marca = '';
    this.art.modelo = '';
    this.art.departamento = 0;
    this.art.clase = 0;
    this.art.familia = 0;
    this.art.fecha_alta = '2023-03-10';
    this.art.stock = 0;
    this.art.cantidad = 0;
    this.art.descontinuado = 0;
    this.art.fecha_baja = '2023-03-12';
  }

  /*
  seleccionar(art: { codigo: number; descripcion: string; precio: number }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }
  */

  seleccionar(art: {
    sku: number;
    articulo: string;
    marca: string;
    modelo: string;
    departamento: number;
    clase: number;
    familia: number;
    fecha_alta: string;
    stock: number;
    cantidad: number;
    descontinuado: number;
    fecha_baja: string;
  }) {
    this.art.sku = art.sku;
    this.art.articulo = art.articulo;
    this.art.marca = art.marca;
    this.art.modelo = art.modelo;
    this.art.departamento = art.departamento;
    this.art.clase = art.clase;
    this.art.familia = art.familia;
    this.art.fecha_alta = art.fecha_alta;
    this.art.stock = art.stock;
    this.art.cantidad = art.cantidad;
    this.art.descontinuado = art.descontinuado;
    this.art.fecha_baja = art.fecha_baja;
  }

  /*
  modificar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }
  */

  /*

Cambio:

Al ingresar al programa el usuario sólo deberá poder capturar el Sku, una vez capturado se deberá validar si existe. En el caso de existir, se deberá mostrar un botón con la opción para actualizar y al hacer uso de él se deberán poder actualizar los datos Artículo, Marca, Modelo, Departamento, Clase, Familia, Cantidad, Stock y Descontinuado.

*/

  modificar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].sku == this.art.sku) {
        this.articulos[x].articulo = this.art.articulo;
        this.articulos[x].marca = this.art.marca;
        this.articulos[x].modelo = this.art.modelo;
        this.articulos[x].departamento = this.art.departamento;
        this.articulos[x].clase = this.art.clase;
        this.articulos[x].familia = this.art.familia;
        this.articulos[x].fecha_alta = this.art.fecha_alta;
        this.articulos[x].stock = this.art.stock;
        this.articulos[x].cantidad = this.art.cantidad;
        this.articulos[x].descontinuado = this.art.descontinuado;
        this.articulos[x].fecha_baja = this.art.fecha_baja;
        return;
      }
    alert('No existe el código sku de articulo ingresado');
  }

  /* 
  Consulta

  Para poder consultar los Departamentos-Clase-Familia se deberán crear 3 tablas, 1 para cada uno de los rubros con sus respectivos datos
  */
}


