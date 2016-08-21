var ItemsCommandSchema = require('server/models/ItemsCommandSchema')
var CommandsSchema = require('server/models/CommandsSchema')
var Generic_rest = require('server/controllers/generic_rest')



var CommandsInit = function(CommandModel) {


var CommandPublicControllers = {}

  // consultar all by user
  CommandPublicControllers.index = function (req, res) {
    return Generic_rest.index(CommandsSchema, req, res)
  }
  // query  by id

  // query by state is_public true
  // buscar
  // editar
  // eliminar

  // crear
  return CommandPublicControllers
}


module.exports = CommandsInit