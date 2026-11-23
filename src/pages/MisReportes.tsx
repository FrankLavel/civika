import {
  LayoutGrid,
  MapPinned,
  CircleCheck,
  Radar,
  GitBranch,
  Lightbulb,
  Droplet,
  Camera,
  MapPin,
  Clock,
  Calendar,
  Building2,
  Landmark,
  ChevronRight,
  Check,
  Eye,
  Smile,
  MapPinPlus,
  Cog,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function MisReportes() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-28 text-slate-800">
      <Header subtitle="Mis Reportes" toggleOn={false} />

      {/* Title */}
      <section className="px-5 pt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
          Monitoreo y Seguimiento
        </p>
        <div className="mt-0.5 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-slate-900">Mis Reportes</h1>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#16324f] px-3 py-1.5 text-xs font-semibold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
            3 Registrados
          </span>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="mt-4 flex gap-2.5 overflow-x-auto px-5 pb-1 [scrollbar-width:none]">
        <Tab icon={<LayoutGrid className="h-4 w-4" />} label="Todos" count={3} active />
        <Tab icon={<MapPinned className="h-4 w-4" />} label="En Proceso" count={2} />
        <Tab icon={<CircleCheck className="h-4 w-4" />} label="Resuelto" count={1} />
      </section>

      {/* Ventanilla Única Conurbada */}
      <section className="px-5 pt-4">
        <div className="flex gap-3 rounded-2xl border-l-4 border-blue-600 bg-indigo-50/70 p-4">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100">
            <Radar className="h-5 w-5 text-blue-600" />
          </span>
          <div>
            <h3 className="font-bold text-slate-900">Ventanilla Única Conurbada</h3>
            <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
              Los folios se coordinan automáticamente entre autoridades estatales y ayuntamientos de
              Morelia, Tarímbaro y Jacona.
            </p>
          </div>
        </div>
      </section>

      {/* Report cards */}
      <section className="space-y-4 px-5 pt-4">
        {/* Card 1 */}
        <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="flex items-center gap-2 font-mono text-sm font-bold tracking-wide text-slate-700">
            <GitBranch className="h-4 w-4 text-slate-400" />
            #MICH-2026-08492
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            En atención · Cuadrilla asignada
          </span>

          <div className="mt-3 flex gap-3">
            <Thumb src="https://loremflickr.com/200/200/pothole,road?lock=11" count={1} />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Baches y Vialidad
              </p>
              <h4 className="text-lg font-bold leading-tight text-slate-900">
                Socavón en carril lateral
              </h4>
              <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                Carr. Morelia–Salamanca (Tarímbar…
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                Hoy, 10:45 AM
              </p>
            </div>
          </div>

          <Stepper
            titulo="Avance de reparación"
            pasoTexto="3 de 4 Pasos"
            pct={75}
            steps={['1. Recibido', '2. Enrutado', '3. Cuadrilla', '4. Cierre']}
            activeUpTo={3}
          />

          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Building2 className="h-3.5 w-3.5" />
              Ayto. Tarímbaro Obras
            </span>
            <VerBtn label="Ver Detalles" to="/reporte/MICH-2026-08492" />
          </div>
        </article>

        {/* Card 2 */}
        <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="flex items-center gap-2 font-mono text-sm font-bold tracking-wide text-slate-700">
            <Lightbulb className="h-4 w-4 text-slate-400" />
            #MICH-2026-07115
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
            <Cog className="h-3.5 w-3.5" />
            Asignado a Serv. Públicos
          </span>

          <div className="mt-3 flex gap-3">
            <Thumb src="https://loremflickr.com/200/200/streetlight,lamp?lock=22" count={2} />
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Alumbrado Público
              </p>
              <h4 className="text-lg font-bold leading-tight text-slate-900">Fallo en poste de luz</h4>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                Av. Morelos Nte. esq. Periférico
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                22 Octubre 2026
              </p>
            </div>
          </div>

          <Stepper
            titulo="Avance de asignación"
            pasoTexto="2 de 4 Pasos"
            pct={50}
            steps={['1. Recibido', '2. Enrutado', '3. Cuadrilla', '4. Cierre']}
            activeUpTo={2}
          />

          <div className="mt-3 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
              <Landmark className="h-3.5 w-3.5" />
              Servicios Públicos Morelia
            </span>
            <VerBtn label="Ver Detalles" to="/reporte/MICH-2026-07115" />
          </div>
        </article>

        {/* Card 3 */}
        <article className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="flex items-center gap-2 font-mono text-sm font-bold tracking-wide text-slate-700">
            <Droplet className="h-4 w-4 text-slate-400" />
            #MICH-2026-05490
          </p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
            <CircleCheck className="h-3.5 w-3.5" />
            Resuelto con evidencia
          </span>

          <div className="mt-3 flex gap-3">
            <div className="relative">
              <Thumb src="https://loremflickr.com/200/200/water,pipe,repair?lock=33" />
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white ring-2 ring-white">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                Fuga de Agua Potable
              </p>
              <h4 className="text-lg font-bold leading-tight text-slate-900">
                Fuga de toma principal
              </h4>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
                Zona Conurbada Zamora–Jacona
              </p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-slate-500">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                18 Octubre 2026
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-green-50 p-3">
            <div className="flex items-start gap-2">
              <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
              <div>
                <p className="text-sm font-bold text-green-800">Dictamen Técnico Completo</p>
                <p className="text-xs text-green-700/80">Reparado por SAPAZ Jacona en 48 hrs</p>
              </div>
            </div>
            <button className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-green-700 ring-1 ring-green-200">
              <Eye className="h-3.5 w-3.5" />
              Acta
            </button>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-sm text-slate-600">
              <Smile className="h-4 w-4 text-amber-500" />
              Calificado: 5/5 estrellas
            </span>
            <VerBtn label="Ver Expediente" to="/reporte/MICH-2026-05490" />
          </div>
        </article>
      </section>

      {/* Floating Nuevo Reporte */}
      <Link
        to="/incidencia-cercana"
        className="fixed bottom-24 right-5 z-20 mx-auto flex items-center gap-2.5 rounded-2xl bg-[#16324f] px-4 py-3 text-left text-white shadow-xl"
      >
        <MapPinPlus className="h-6 w-6" />
        <span className="leading-tight">
          <span className="block text-sm font-bold">Nuevo Reporte</span>
          <span className="block text-[11px] text-slate-300">Detectar geocerca</span>
        </span>
      </Link>

      <BottomNav />
    </div>
  )
}

function Tab({
  icon,
  label,
  count,
  active,
}: {
  icon: React.ReactNode
  label: string
  count: number
  active?: boolean
}) {
  return (
    <button
      className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold ${
        active ? 'bg-[#16324f] text-white' : 'bg-slate-100 text-slate-600'
      }`}
    >
      {icon}
      {label}
      <span
        className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-xs font-bold ${
          active ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
        }`}
      >
        {count}
      </span>
    </button>
  )
}

function Thumb({ src, count }: { src: string; count?: number }) {
  return (
    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-200">
      <img src={src} alt="Evidencia" className="h-full w-full object-cover" />
      {count != null && (
        <span className="absolute bottom-1 left-1 inline-flex items-center gap-1 rounded-md bg-slate-900/80 px-1.5 py-0.5 text-[10px] font-semibold text-white">
          <Camera className="h-3 w-3" />
          {count}
        </span>
      )}
    </div>
  )
}

function Stepper({
  titulo,
  pasoTexto,
  pct,
  steps,
  activeUpTo,
}: {
  titulo: string
  pasoTexto: string
  pct: number
  steps: string[]
  activeUpTo: number
}) {
  return (
    <div className="mt-3 rounded-xl bg-slate-100/70 p-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-600">{titulo}</span>
        <span className="font-bold text-slate-800">{pasoTexto}</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-blue-500" style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-2 flex items-center justify-between text-[11px] font-medium">
        {steps.map((s, i) => (
          <span key={s} className={i < activeUpTo ? 'text-blue-600' : 'text-slate-400'}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

function VerBtn({ label, to }: { label: string; to: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600"
    >
      {label}
      <ChevronRight className="h-4 w-4" />
    </Link>
  )
}
