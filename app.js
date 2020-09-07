//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea)
        break;
    case 'listar':

        let listado = porHacer.getListado();

        console.log('LISTADO DE TAREAS POR HACER'.green);
        for (let tarea of listado) {
            console.log('---------------------------'.green);
            console.log('Descripción: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('---------------------------'.green);
        }

        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer')
        console.log('*****************************')
        let act = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(act);
        break;

    case 'borrar':
        console.log('Actualiza una tarea por hacer'.red)
        console.log('*****************************'.red)
        let del = porHacer.borrar(argv.descripcion);
        console.log(del);
        break;
    default:
        console.log('Comando no reconocido')
}