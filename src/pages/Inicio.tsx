import {
  ShieldCheck,
  Navigation,
  Camera,
  ArrowRight,
  Map as MapIcon,
  LocateFixed,
  Users,
  Droplet,
  Check,
  RefreshCw,
  Clock,
  Bell,
  Lightbulb,
  TrafficCone,
  ClipboardList,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import BottomNav from '../components/BottomNav'
import Header from '../components/Header'

export default function Inicio() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-white pb-24 text-slate-800">
      {/* Header */}
      <Header subtitle="Inicio" toggleOn />

      {/* Greeting */}
      <section className="px-5 pt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-slate-900">¡Hola, Mariana!</h1>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            Jueves, 24 Oct
          </span>
        </div>
        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-slate-500">
          <Navigation className="h-4 w-4 text-slate-400" />
          Zona Metropolitana:{' '}
          <span className="font-semibold text-blue-600">Morelia – Tarímbaro</span>
        </p>
      </section>

      {/* Hero card */}
      <section className="px-5 pt-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#16324f] to-[#0b1f33] p-6 text-white shadow-lg">
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border-[14px] border-white/5" />
          <div className="pointer-events-none absolute right-6 top-8 h-16 w-16 rounded-full border-2 border-dashed border-white/10" />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/15">
            <ShieldCheck className="h-3.5 w-3.5" />
            Ventanilla Única Inteligente
          </span>
          <h2 className="mt-4 text-2xl font-bold leading-snug">
            Tú reportas. Nosotros encontramos quién debe atenderlo.
          </h2>
          <p className="mt-3 max-w-[85%] text-sm leading-relaxed text-slate-300">
            Detección automática por GPS y geocercado limítrofe intermunicipal. Cero confusión con
            dependencias.
          </p>
        </div>
      </section>

      {/* Reportar Incidencia */}
      <section className="px-5 pt-4">
        <Link
          to="/reportar"
          className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#16324f]">
            <Camera className="h-6 w-6 text-white" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-[17px] font-bold leading-tight text-slate-900">
                Reportar Incidencia
              </h3>
              <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-bold tracking-wide text-green-700">
                RÁPIDO
              </span>
            </div>
            <p className="mt-0.5 truncate text-sm text-slate-500">
              Toma una foto y detectamos el m…
            </p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600">
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </section>

      {/* Mapa Metropolitano */}
      <section className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <MapIcon className="h-5 w-5 text-blue-600" />
            Mapa Metropolitano Activo
          </h3>
          <button className="flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600">
            <LocateFixed className="h-3.5 w-3.5" />
            Centrar
          </button>
        </div>

        <div className="relative mt-3 h-56 overflow-hidden rounded-2xl bg-[#e7efe6] ring-1 ring-slate-200">
          {/* faux roads */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-0 top-1/3 h-px w-full bg-white" />
            <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
            <div className="absolute left-1/4 top-0 h-full w-px bg-white/70" />
            <div className="absolute left-0 top-2/3 h-px w-full bg-white/70" />
          </div>
          {/* dashed boundary */}
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
            <line
              x1="20%"
              y1="90%"
              x2="100%"
              y2="30%"
              stroke="#2563eb"
              strokeWidth="2.5"
              strokeDasharray="7 6"
            />
          </svg>

          {/* place labels */}
          <span className="absolute right-3 top-2 text-[10px] text-slate-500">Grande</span>
          <span className="absolute right-16 top-8 text-[10px] text-slate-500">La Aldea</span>
          <span className="absolute right-2 top-8 text-[10px] text-slate-500">Atapaneo</span>
          <span className="absolute right-10 top-20 text-[9px] leading-tight text-slate-500">
            VICENTE
            <br />
            LOMBARDO
            <br />
            TOLEDANO
          </span>
          <span className="absolute left-24 top-24 text-[11px] font-medium text-slate-600">
            Morelia
          </span>
          <span className="absolute left-1 top-16 text-[9px] text-slate-500">Estadio Mor…</span>
          <span className="absolute left-2 top-24 text-[9px] text-slate-500">CD JARDIN</span>
          <span className="absolute left-0 top-32 text-[9px] text-slate-500">…AS Aurrera</span>
          <span className="absolute left-16 bottom-16 text-[9px] text-slate-500">
            VENTURA
            <br />
            PUENTE
          </span>
          <span className="absolute left-32 bottom-16 text-[9px] text-slate-500">LAS AMÉRICAS</span>
          <span className="absolute left-24 bottom-10 text-[9px] text-slate-500">Paseo Altozano</span>
          <span className="absolute left-6 bottom-6 text-[9px] text-slate-500">
            San Juanito
            <br />
            Itzicuaro
          </span>
          <span className="absolute right-8 bottom-6 text-[9px] text-slate-500">
            Jesús del
            <br />
            Monte
          </span>
          <span className="absolute left-14 bottom-1 text-[9px] text-slate-500">Morelos</span>

          {/* top-left info pill */}
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <div className="leading-tight">
              <p className="text-xs font-bold text-slate-800">Límite Morelia / Tarímbaro</p>
              <p className="text-[10px] text-slate-500">Sector El Trébol – Geocerca …</p>
            </div>
          </div>

          {/* top-right pill */}
          <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm">
            Dual OOAPAS/Tarímbaro
          </span>

          {/* markers */}
          <div className="absolute right-20 top-16 flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600 text-white shadow ring-2 ring-white">
              <Check className="h-4 w-4" />
            </span>
            <span className="rounded-md bg-slate-800 px-2 py-1 text-[10px] font-medium text-white">
              Luminaria resuelta
            </span>
          </div>
          <div className="absolute left-6 top-24 flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white shadow ring-2 ring-white">
              <Users className="h-4 w-4" />
            </span>
            <span className="rounded-md bg-slate-800 px-2 py-1 text-[10px] font-medium text-white">
              Bache en atención
            </span>
          </div>
          <div className="absolute right-4 bottom-24 flex items-center gap-1.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white shadow ring-2 ring-white">
              <Droplet className="h-4 w-4" fill="currentColor" />
            </span>
            <span className="rounded-md bg-slate-800 px-2 py-1 text-[10px] font-medium text-white">
              Fuga en reparación
            </span>
          </div>

          {/* legend */}
          <div className="absolute bottom-3 left-3 flex items-center gap-3 rounded-full bg-white/95 px-3 py-1.5 shadow-sm">
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-green-500" /> Resuelto
            </span>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-blue-600" /> En Curso
            </span>
          </div>
        </div>
      </section>

      {/* Tus Reportes Activos */}
      <section className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <ClipboardList className="h-5 w-5 text-blue-600" />
            Tus Reportes Activos
          </h3>
          <Link to="/mis-reportes" className="flex items-center gap-0.5 text-sm font-semibold text-blue-600">
            Mis reportes (3)
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <Link
          to="/reporte/FOL-MOR-2024-892"
          className="mt-3 block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-mono text-sm tracking-wider text-slate-400">FOL-MOR-2024-892</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
                  <RefreshCw className="h-3 w-3" />
                  En atención
                </span>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?w=200&q=60"
              alt="Reporte"
              className="h-14 w-16 rounded-lg object-cover"
            />
          </div>

          <h4 className="mt-2 text-lg font-bold text-slate-900">Fuga de agua en camellón central</h4>
          <p className="mt-1 text-sm leading-relaxed text-slate-500">
            Av. Morelos Norte esquina con Los Ángeles. Asignado a cuadrilla técnica de OOAPAS y…
          </p>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-slate-500">Avance de resolución</span>
            <span className="font-bold text-blue-600">65% completado</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600" style={{ width: '65%' }} />
          </div>

          <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              Actualizado hace 42 min
            </span>
            <span>Cuadrilla #4 en sitio</span>
          </div>
        </Link>
      </section>

      {/* Incidencias Recientes Cercanas */}
      <section className="px-5 pt-6">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Bell className="h-5 w-5 text-blue-600" />
            Incidencias Recientes Cercanas
          </h3>
          <span className="text-xs text-slate-400">Radio 1.5 km</span>
        </div>

        <div className="mt-3 space-y-3">
          <IncidenciaItem
            to="/reporte/TAR-1044"
            icon={<Lightbulb className="h-5 w-5 text-slate-500" />}
            folio="TAR-1044"
            estado="Resuelto"
            estadoClase="bg-green-100 text-green-700"
            estadoIcon={<Check className="h-3 w-3" />}
            titulo="Sustitución de luminaria LED"
            lugar="Fracc. Erandeni • Alumbrado Tarímbaro"
            tiempo="Ayer"
          />
          <IncidenciaItem
            to="/reporte/MOR-3921"
            icon={<TrafficCone className="h-5 w-5 text-slate-500" />}
            folio="MOR-3921"
            estado="En proceso"
            estadoClase="bg-amber-100 text-amber-700"
            estadoIcon={<RefreshCw className="h-3 w-3" />}
            titulo="Bacheo asfáltico en retorno"
            lugar="Salida a Salamanca • Obras Morelia"
            tiempo="Hace 3h"
          />
        </div>
      </section>

      {/* Bottom nav */}
      <BottomNav />
    </div>
  )
}

function IncidenciaItem({
  to,
  icon,
  folio,
  estado,
  estadoClase,
  estadoIcon,
  titulo,
  lugar,
  tiempo,
}: {
  to: string
  icon: React.ReactNode
  folio: string
  estado: string
  estadoClase: string
  estadoIcon: React.ReactNode
  titulo: string
  lugar: string
  tiempo: string
}) {
  return (
    <Link to={to} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-sm ring-1 ring-slate-200">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-wide text-slate-400">{folio}</span>
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${estadoClase}`}
          >
            {estadoIcon}
            {estado}
          </span>
        </div>
        <p className="mt-0.5 truncate font-bold text-slate-900">{titulo}</p>
        <p className="truncate text-xs text-slate-500">{lugar}</p>
      </div>
      <span className="shrink-0 self-start text-xs text-slate-400">{tiempo}</span>
    </Link>
  )
}
