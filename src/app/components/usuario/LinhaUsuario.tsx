import { Usuario } from '@/core/model/Usuario'
import Image from 'next/image'

export interface LinhaUsuarioProps {
  usuario: Usuario
  onClick: (usuario: Usuario) => void
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
  const timestamp = new Date().getTime()
  const fotoUsuario = `http://source.unsplash.com/random/80x80?avatar&sig=${props.usuario.id}&${timestamp}`

  // const fotoUsuario = 'http://source.unsplash.com/random/80x80?avatar'

  return (
    <div
      className="flex p-4 bg-zinc-900 rounded-md items-center gap-5 cursor-pointer"
      onClick={() => props.onClick?.(props.usuario)}
    >
      <Image
        src={fotoUsuario}
        width={80}
        height={80}
        className="rounded-full"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black capitalize">
          {props.usuario.nome}
        </span>
        <span className="text-sm text-zinc-400">{props.usuario.email}</span>
      </div>
    </div>
  )
}
