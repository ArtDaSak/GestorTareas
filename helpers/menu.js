import inquirer from 'inquirer';

const opciones = [
    { name: '1. Agregar tarea', value: '1' },
    { name: '2. Listar todas', value: '2' },
    { name: '3. Listar completadas', value: '3' },
    { name: '4. Listar pendientes', value: '4' },
    { name: '5. Completar tarea(s)', value: '5' },
    { name: '6. Eliminar tarea', value: '6' },
    { name: '7. Salir', value: '7' }
  ];
  
  export default async function mostrarMenu() {
    const { opcion } = await inquirer.prompt({
      type: 'list',
      name: 'opcion',
      message: '¿Qué deseas hacer?',
      choices: opciones
    });
    return opcion;
  }