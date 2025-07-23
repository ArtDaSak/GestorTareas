import { promises as fs } from 'fs';
import path from 'path';
const filePath = path.resolve('./data', 'tareas.json');

export const leerDB = async () => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

export const guardarDB = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

// models/tarea.js
export class Tarea {
  constructor(id, descripcion, completada = false) {
    this.id = id;
    this.descripcion = descripcion;
    this.completada = completada;
  }
}