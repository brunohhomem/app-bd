'use server'

import RepositorioUsuario from './RepositorioUsuario'

export default async function exluirUsuario(id: string) {
  return RepositorioUsuario.excluir(id)
}
