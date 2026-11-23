import { Link } from 'react-router-dom'
import {
  LifeBuoy,
  Phone,
  MessageCircleQuestion,
  ShieldCheck,
  FileText,
  ChevronRight,
} from 'lucide-react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Ayuda() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-24 text-slate-800">
      <Header subtitle="Ayuda / Info" toggleOn />

      <section className="px-5 pt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">Soporte Ciudadano</p>
        <h1 className="mt-0.5 text-2xl font-extrabold text-slate-900">Ayuda / Info</h1>
      </section>

      {/* Emergencia */}
      <section className="px-5 pt-4">
        <div className="flex items-center gap-3 rounded-2xl bg-gradient-to-br from-[#16324f] to-[#0b1f33] p-5 text-white shadow-lg">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
            <Phone className="h-5 w-5" />
          </span>
          <div>
            <p className="text-lg font-bold">Emergencias 911</p>
            <p className="text-sm text-slate-300">Atención inmediata las 24 horas</p>
          </div>
        </div>
      </section>

      {/* Opciones */}
      <section className="space-y-3 px-5 pt-4">
        <Opcion
          icon={<MessageCircleQuestion className="h-5 w-5 text-blue-600" />}
          titulo="Preguntas frecuentes"
          desc="Cómo reportar, seguimiento y tiempos de atención"
        />
        <Opcion
          icon={<LifeBuoy className="h-5 w-5 text-blue-600" />}
          titulo="Contactar soporte"
          desc="Escríbenos y te ayudamos con tu folio"
        />
        <Opcion
          icon={<ShieldCheck className="h-5 w-5 text-blue-600" />}
          titulo="Aviso de privacidad"
          desc="Cómo protegemos tus datos ciudadanos"
        />
        <Opcion
          icon={<FileText className="h-5 w-5 text-blue-600" />}
          titulo="Términos y condiciones"
          desc="Uso de la Ventanilla Única ConectaMich"
        />
      </section>

      {/* Acerca */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-indigo-50/70 p-4 text-center">
          <p className="text-sm font-semibold text-slate-700">ConectaMich</p>
          <p className="text-xs text-slate-500">Ventanilla Única Metropolitana • v1.0.0</p>
          <Link to="/" className="mt-2 inline-block text-sm font-semibold text-blue-600">
            Volver al Inicio
          </Link>
        </div>
      </section>

      <BottomNav />
    </div>
  )
}

function Opcion({
  icon,
  titulo,
  desc,
}: {
  icon: React.ReactNode
  titulo: string
  desc: string
}) {
  return (
    <button className="flex w-full items-center gap-3 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-slate-200">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-bold text-slate-900">{titulo}</p>
        <p className="text-sm text-slate-500">{desc}</p>
      </div>
      <ChevronRight className="h-5 w-5 shrink-0 text-slate-400" />
    </button>
  )
}
