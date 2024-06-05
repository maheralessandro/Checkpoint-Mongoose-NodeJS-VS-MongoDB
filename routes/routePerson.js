const express = require('express') ;
const {CrearePerson, crea, selection, selectionOne, selectionId, addFood, personName, rimuoviPersona, rimMary, filtro} = require('../handlers/person');

const personRoute = express.Router() ;


personRoute.post('/person',CrearePerson);

personRoute.post('/auto',crea);

personRoute.get('/select',selection);

personRoute.get('/selectone', selectionOne) ;

personRoute.get('/selectid', selectionId) ;

personRoute.put('/modif', addFood) ;

personRoute.put('/age', personName) ;

personRoute.delete('/rimuovi' , rimuoviPersona) ;

personRoute.post('/filtro', filtro) ;

personRoute.delete('/rimmary' , rimMary) ;

module.exports = personRoute ;