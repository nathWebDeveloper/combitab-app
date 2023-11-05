//Adaptar a Typescript: const mongoose = require('mongoose') 
//Adaptacion:
import mongoose from 'mongoose';
const { Schema } = mongoose;
const rutasSchema = new Schema({
    
  id_ruta: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    trim: true
  },

  id_administrador: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    trim: true
  },

  Ruta: {
    type: String,
    required: [true, 'Debe proveer el nombre de la ruta'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },

  Recorrido: {
    type: String,
    required: true,
    trim: true,
    maxlength:50
  },

  Descripcion: {
    type: String,
    required: true,
    trim: true,
    maxlength:200
  },

  Precio: {
    type: Boolean,
    required: true,
    trim: true,
    default: 8
  },
})

const Rutas = mongoose.model('Rutas', rutasSchema)
module.exports = Rutas