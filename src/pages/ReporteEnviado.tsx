import { Link } from 'react-router-dom'
import {
  Check,
  BadgeCheck,
  Share2,
  Copy,
  TriangleAlert,
  MapPin,
  Landmark,
  CircleCheck,
  Calendar,
  Bell,
  IdCard,
  ArrowRight,
  Home,
} from 'lucide-react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function ReporteEnviado() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-24 text-slate-800">
      <Header subtitle="Reportar" toggleOn={false} />

      {/* Success emblem */}
      <div className="flex flex-col items-center px-5 pt-6">
        <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-green-100/60">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-200/60">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0d2b22]">
              <Check className="h-10 w-10 text-white" strokeWidth={3} />
            </div>
          </div>
          <span className="absolute bottom-1 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white ring-4 ring-slate-50">
            <BadgeCheck className="h-4 w-4" />
          </span>
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700">
          <Share2 className="h-3.5 w-3.5" />
          Ruteo Metropolitano Automatizado
        </span>

        <h1 className="mt-3 text-center text-2xl font-extrabold text-slate-900">
          ¡Reporte enviado con éxito!
        </h1>
        <p className="mt-2 text-center text-sm leading-relaxed text-slate-500">
          Tu reporte ha sido canalizado directamente a la autoridad correspondiente gracias a la
          Ventanilla Única Metropolitana.
        </p>
      </div>

      {/* Detail card */}
      <section className="px-5 pt-5">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-green-400" />
          <div className="p-5">
            {/* Folio */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                  Folio Único de Seguimiento
                </p>
                <p className="mt-0.5 font-mono text-lg font-bold text-slate-900">#MICH-2026-08492</p>
              </div>
              <button className="flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600">
                <Copy className="h-4 w-4" />
                Copiar
              </button>
            </div>

            <hr className="my-4 border-slate-100" />

            {/* Categoría */}
            <Row
              icon={<TriangleAlert className="h-5 w-5 text-red-500" />}
              iconBg="bg-red-50"
              label="Categoría y Prioridad"
            >
              <p className="text-lg font-bold text-slate-900">Baches y Vialidad Urbana</p>
              <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-600">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Alta (Riesgo vial)
              </span>
            </Row>

            {/* Ubicación */}
            <Row
              icon={<MapPin className="h-5 w-5 text-blue-600" />}
              iconBg="bg-blue-50"
              label="Ubicación Geocodificada"
            >
              <p className="text-lg font-bold text-slate-900">Límite Morelia – Tarímbaro (Km 4.2)</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-500">
                Tramo Metropolitano Conurbado • Coord: 19.7821, -101.1739
              </p>
            </Row>

            {/* Municipio & Dependencia */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-100/70 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-200">
                <Landmark className="h-4 w-4 text-slate-500" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold text-slate-500">Municipio & Dependencia</p>
                <p className="truncate font-bold text-slate-900">Mpio. Tarímbaro • Obras Públic…</p>
              </div>
              <CircleCheck className="h-6 w-6 shrink-0 text-green-500" />
            </div>

            {/* Fecha / Notificaciones */}
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="text-[11px] font-semibold text-slate-500">Fecha y Registro</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-slate-800">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  24 Oct 2026, 10:4…
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 p-3">
                <p className="text-[11px] font-semibold text-slate-500">Notificaciones</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-slate-800">
                  <Bell className="h-4 w-4 text-slate-400" />
                  SMS y Push Activos
                </p>
              </div>
            </div>

            <hr className="my-4 border-slate-100" />

            {/* Estado */}
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-sm font-medium text-blue-600">
                <span className="h-2 w-2 rounded-full bg-blue-600" />
                Estado: Asignado a cuadrilla técnica
              </span>
              <span className="font-mono text-xs tracking-wide text-slate-400">ID-SEC-89</span>
            </div>
          </div>
        </div>
      </section>

      {/* Garantía Cívica */}
      <section className="px-5 pt-4">
        <div className="flex gap-3 rounded-2xl bg-indigo-50 p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
            <IdCard className="h-5 w-5" />
          </span>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Garantía Cívica Michoacán</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-500">
              Recibirás actualizaciones en tiempo real conforme la cuadrilla acuda al lugar y comience
              los trabajos de reparación.
            </p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="space-y-3 px-5 pt-5">
        <Link
          to="/reporte/MICH-2026-08492"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16324f] py-4 text-base font-semibold text-white shadow-sm"
        >
          Ver seguimiento en tiempo real
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          to="/"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-50 py-4 text-base font-semibold text-blue-700"
        >
          <Home className="h-5 w-5" />
          Volver al Inicio
        </Link>
      </section>

      <BottomNav />
    </div>
  )
}

function Row({
  icon,
  iconBg,
  label,
  children,
}: {
  icon: React.ReactNode
  iconBg: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-4 flex gap-3">
      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconBg}`}>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold text-slate-500">{label}</p>
        {children}
      </div>
    </div>
  )
}
