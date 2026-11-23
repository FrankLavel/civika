import { Link } from 'react-router-dom'
import {
  ScanSearch,
  MapPinCheckInside,
  BadgeCheck,
  TriangleAlert,
  Droplet,
  Camera,
  MapPin,
  Network,
  ThumbsUp,
  Plus,
} from 'lucide-react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function IncidenciaCercana() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-24 text-slate-800">
      <Header subtitle="Reportar" toggleOn />

      {/* Geo banner */}
      <section className="px-5 pt-4">
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-indigo-50/70 p-3.5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <ScanSearch className="h-5 w-5 text-blue-600" />
            </span>
            <div className="leading-tight">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                Geolocalización Act…
              </p>
              <p className="text-sm text-slate-500">Radio de 50 metros analiz…</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-blue-600 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Coincidencia 98%
          </span>
        </div>
      </section>

      {/* Detected card */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
          <div className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
              <MapPinCheckInside className="h-6 w-6 text-blue-600" />
            </span>
            <div>
              <h1 className="text-2xl font-extrabold leading-tight text-slate-900">
                ¡Incidencia detectada cerca de ti!
              </h1>
            </div>
          </div>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
            Un vecino ya reportó una situación idéntica en este mismo punto geográfico.
          </p>

          <div className="mt-4 flex gap-2.5 rounded-xl bg-indigo-50/70 p-3.5">
            <BadgeCheck className="h-5 w-5 shrink-0 text-blue-600" />
            <p className="text-sm leading-relaxed text-slate-600">
              <span className="font-bold text-slate-800">Ahorra tiempo:</span> No necesitas volver a
              llenar datos. Al sumarte, sumas fuerza ciudadana y elevas la prioridad del equipo
              operativo municipal.
            </p>
          </div>
        </div>
      </section>

      {/* Vecinos card */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-[#16324f] p-5 text-white shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <Avatar label="JB" className="bg-orange-400" />
                <Avatar label="MC" className="bg-green-400 text-green-900" />
                <Avatar label="+21" className="bg-slate-200 text-slate-700" />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-bold">23 vecinos</p>
                <p className="text-sm text-slate-300">respaldando este folio</p>
              </div>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600">
              <TriangleAlert className="h-3.5 w-3.5" />
              Prioridad: ALTA
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-slate-300">Demanda Vecinal Acumulada</span>
            <span className="font-semibold">86% hacia Cuadrilla Inmediata</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full bg-blue-400" style={{ width: '86%' }} />
          </div>
        </div>
      </section>

      {/* Report card */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
              <Droplet className="h-3.5 w-3.5" />
              Fuga de Agua
            </span>
            <span className="font-mono text-sm font-bold tracking-wide text-slate-700">
              #MICH-2026-08410
            </span>
          </div>

          <div className="relative mt-3 h-44 overflow-hidden rounded-xl bg-slate-200">
            <img
              src="https://loremflickr.com/600/400/water,leak,street?lock=51"
              alt="Fuga reportada"
              className="h-full w-full object-cover"
            />
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-2.5 py-1.5 text-xs font-semibold text-white">
              <Camera className="h-3.5 w-3.5" />
              Foto original aportada por vecino
            </span>
          </div>

          <h3 className="mt-3 text-lg font-bold text-slate-900">
            Fuga de agua potable en banqueta frente al Oxxo
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-4 w-4 shrink-0 text-slate-400" />
            Av. Juan Pablo II #450, Límite Morelia - Tarímbaro
          </p>

          <div className="mt-3 rounded-xl bg-slate-100/70 p-3">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                En Programación de Turno
              </span>
              <span className="text-sm font-medium text-slate-500">Hoy 3:00 PM</span>
            </div>
            <p className="mt-1.5 text-sm text-slate-600">
              Asignado a: <span className="font-semibold">OOAPAS &amp; Cuadrilla Metropolitana Sector Norte</span>
            </p>
          </div>

          {/* mini map */}
          <div className="relative mt-3 h-24 overflow-hidden rounded-xl bg-[#e7efe6] ring-1 ring-slate-200">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-white/70" />
            </div>
            <span className="absolute left-24 top-1 text-[9px] text-slate-500">Morelia</span>
            <span className="absolute left-2 top-6 text-[9px] text-slate-500">San Ju… Itzicu…</span>
            <span className="absolute right-16 top-8 text-[9px] text-slate-500">LAS AMÉRICAS</span>
            <span className="absolute left-16 bottom-2 text-[9px] text-slate-500">Morelos</span>
            <span className="absolute right-14 bottom-2 text-[9px] text-slate-500">Jesús del Monte</span>
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-sm">
              <MapPin className="h-4 w-4 text-blue-600" fill="currentColor" />
              <span className="text-xs font-semibold text-slate-700">A solo 18 metros de tu posición</span>
            </div>
          </div>
        </div>
      </section>

      {/* Info line */}
      <section className="px-5 pt-4">
        <div className="flex gap-2.5">
          <Network className="h-5 w-5 shrink-0 text-blue-600" />
          <p className="text-sm leading-relaxed text-slate-500">
            La <span className="font-bold text-slate-700">Ventanilla Única ConectaMich</span> agrupa
            reportes en coordenadas idénticas para evitar duplicar órdenes de trabajo y canalizar
            recursos de forma justa y ágil.
          </p>
        </div>
      </section>

      {/* Actions */}
      <section className="space-y-3 px-5 pt-4">
        <Link
          to="/mis-reportes"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16324f] py-4 text-base font-semibold text-white shadow-sm"
        >
          <ThumbsUp className="h-5 w-5" />
          ¡Sumarme y recibir actualizaciones!
        </Link>
        <Link
          to="/reportar"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-50 py-4 text-base font-semibold text-slate-700"
        >
          <Plus className="h-5 w-5" />
          No es el mismo problema, crear nuevo
        </Link>
      </section>

      <BottomNav />
    </div>
  )
}

function Avatar({ label, className }: { label: string; className: string }) {
  return (
    <span
      className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white ring-2 ring-[#16324f] ${className}`}
    >
      {label}
    </span>
  )
}
