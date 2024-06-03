import salvarUsuario from './usuario/salvarUsuario'
import obterTodos from './usuario/obterTodos'

//Padrão FACADE

export default class Backend {
  static readonly usuarios = {
    salvarUsuario,
    obterTodos
  }
}
