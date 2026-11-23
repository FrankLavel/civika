import { Link } from 'react-router-dom'
import {
  Camera,
  Pencil,
  Plus,
  Crosshair,
  MapPin,
  Waypoints,
  BadgeCheck,
  Building2,
  Landmark,
  CircleDot,
  Route,
  LayoutGrid,
  Check,
  Lightbulb,
  Droplet,
  Trash2,
  MoreHorizontal,
  FileText,
  Info,
  Send,
  Bookmark,
} from 'lucide-react'
import Header from '../components/Header'
import BottomNav from '../components/BottomNav'

export default function Reportar() {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-24 text-slate-800">
      <Header subtitle="Reportar" toggleOn />

      {/* Step indicator */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#16324f] text-sm font-bold text-white">
                2
              </span>
              <h2 className="text-lg font-bold text-slate-900">Detalles de la Incidencia</h2>
            </div>
            <span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-600">
              Paso 2 de 3
            </span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
            <div className="h-full rounded-full bg-blue-600" style={{ width: '66%' }} />
          </div>
          <div className="mt-2 flex items-center justify-between text-xs font-medium">
            <span className="text-blue-600">Evidencia &amp; GPS</span>
            <span className="text-slate-700">Validación Límite</span>
            <span className="text-slate-400">Confirmación</span>
          </div>
        </div>
      </section>

      {/* Evidencia Fotográfica */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-slate-900">
              <Camera className="h-5 w-5 text-blue-600" />
              Evidencia Fotográfica
            </h3>
            <span className="text-sm font-medium text-slate-400">1/3 fotos</span>
          </div>

          <div className="relative mt-3 h-44 overflow-hidden rounded-xl bg-slate-700">
            <img
              src="https://images.unsplash.com/photo-1631651363531-fd29aa1e6a5a?w=600&q=60"
              alt="Bache"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
              GPS Meta-verificado
            </span>
            <div className="absolute bottom-3 right-3 flex gap-2">
              <button className="flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white">
                <Pencil className="h-3.5 w-3.5" />
                Cambiar
              </button>
              <button className="flex items-center gap-1.5 rounded-lg bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-white">
                <Plus className="h-3.5 w-3.5" />
                Añadir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación Precisa */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-slate-900">
              <Crosshair className="h-5 w-5 text-blue-600" />
              Ubicación Precisa
            </h3>
            <span className="font-mono text-sm font-semibold text-blue-600">
              19.7420° N, 101.1712° W
            </span>
          </div>

          {/* faux map */}
          <div className="relative mt-3 h-40 overflow-hidden rounded-xl bg-[#eef1e9] ring-1 ring-slate-200">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
              <div className="absolute left-1/3 top-0 h-full w-px bg-white" />
              <div className="absolute left-2/3 top-0 h-full w-px bg-white/70" />
              <div className="absolute left-0 top-1/4 h-px w-full bg-white/60 rotate-6" />
            </div>
            <span className="absolute left-2 top-2 text-[9px] text-slate-500">Chiquimitío</span>
            <span className="absolute left-28 top-2 text-[9px] text-slate-500">Tarímbaro</span>
            <span className="absolute right-3 top-3 text-[9px] text-slate-500">Uruétaro</span>
            <span className="absolute right-6 top-10 text-[9px] leading-tight text-slate-500">
              El Cerrito
              <br />
              Grande
            </span>
            <span className="absolute left-2 top-16 text-[9px] text-slate-500">El Quinceo</span>
            <span className="absolute left-16 top-20 text-[9px] leading-tight text-slate-500">
              Fraccionamiento
              <br />
              Galaxia Tarímbaro
            </span>
            <span className="absolute right-2 top-20 text-[8px] leading-tight text-slate-500">
              FRACCIONAMIENTO
              <br />
              MISIÓN DEL VALLE
            </span>
            <span className="absolute right-10 bottom-6 text-[9px] text-slate-500">La Aldea</span>
            <span className="absolute right-2 bottom-6 text-[9px] text-slate-500">Atapaneo</span>
            <span className="absolute left-4 bottom-3 text-[9px] text-slate-500">Av. Jesús…</span>

            {/* center pin */}
            <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full rounded-bl-none bg-blue-600 text-white shadow-lg ring-4 ring-white">
              <MapPin className="h-5 w-5" fill="currentColor" />
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <p className="flex items-center gap-1.5 text-sm text-slate-600">
              <MapPin className="h-4 w-4 text-slate-400" />
              Av. Erandeni / Carr. Morelia–Salam…
            </p>
            <button className="text-sm font-semibold text-blue-600">Ajustar</button>
          </div>
        </div>
      </section>

      {/* Algoritmo Metropolitano */}
      <section className="px-5 pt-4">
        <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
          <div className="border-l-4 border-blue-600 p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-2.5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <Waypoints className="h-5 w-5 text-blue-600" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wide text-blue-600">
                    Algoritmo Metropolitano
                  </p>
                  <p className="text-lg font-bold leading-tight text-slate-900">
                    Ubicación limítrofe detectada
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                <BadgeCheck className="h-3.5 w-3.5" />
                Auto-asignado
              </span>
            </div>

            <div className="mt-3 space-y-2.5">
              <InfoRow
                icon={<Building2 className="h-4 w-4 text-slate-500" />}
                label="Municipio Asignado"
                value="Tarímbaro, Michoacán"
              />
              <InfoRow
                icon={<Landmark className="h-4 w-4 text-slate-500" />}
                label="Dependencia Responsable"
                value="Dir. de Obras Públicas y Urbanismo"
              />
              <InfoRow
                icon={<CircleDot className="h-4 w-4 text-green-500" />}
                label="Compromiso de Atención"
                value={<span className="text-green-600">48 a 72 horas hábiles</span>}
              />
            </div>

            <div className="mt-3 flex gap-2.5 rounded-xl bg-indigo-50/70 p-3">
              <Route className="h-5 w-5 shrink-0 text-blue-600" />
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-bold text-slate-800">Cero burocracia:</span> Aunque es zona
                limítrofe con Morelia, tu reporte ya quedó radicado institucionalmente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categoría del Problema */}
      <section className="px-5 pt-5">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-bold text-slate-900">
            <LayoutGrid className="h-5 w-5 text-blue-600" />
            Categoría del Problema
          </h3>
          <span className="text-xs text-slate-400">Obligatorio</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip icon={<Check className="h-4 w-4" />} label="Baches y vialidad" selected />
          <Chip icon={<Lightbulb className="h-4 w-4" />} label="Alumbrado público" />
          <Chip icon={<Droplet className="h-4 w-4" />} label="Fuga de agua" />
          <Chip icon={<Trash2 className="h-4 w-4" />} label="Recolección de basura" />
          <Chip icon={<MoreHorizontal className="h-4 w-4" />} label="Otros" />
        </div>
      </section>

      {/* Descripción Breve */}
      <section className="px-5 pt-5">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-bold text-slate-900">
            <FileText className="h-5 w-5 text-blue-600" />
            Descripción Breve
          </h3>
          <span className="text-xs text-slate-400">83/250</span>
        </div>
        <div className="mt-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <p className="text-sm leading-relaxed text-slate-700">
            Bache profundo sobre el carril derecho saliendo de la gasolinera, daña llantas de autos y
            motos.
          </p>
          <div className="mt-3 flex gap-2 rounded-xl bg-blue-50/70 p-3">
            <Info className="h-4 w-4 shrink-0 text-blue-500" />
            <p className="text-xs leading-relaxed text-slate-500">
              Un dato de referencia (negocio cercano, poste) agiliza 35% la cuadrilla.
            </p>
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="space-y-3 px-5 pt-5">
        <Link
          to="/reporte-enviado"
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16324f] py-4 text-base font-semibold text-white shadow-sm"
        >
          <Send className="h-5 w-5" />
          Confirmar y Enviar Reporte
        </Link>
        <button className="flex w-full items-center justify-center gap-2 py-2 text-sm font-semibold text-slate-500">
          <Bookmark className="h-4 w-4" />
          Guardar borrador
        </button>
      </section>

      <BottomNav />
    </div>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
      <span className="shrink-0">{icon}</span>
      <div className="min-w-0">
        <p className="text-[11px] text-slate-400">{label}</p>
        <p className="font-semibold text-slate-800">{value}</p>
      </div>
    </div>
  )
}

function Chip({
  icon,
  label,
  selected,
}: {
  icon: React.ReactNode
  label: string
  selected?: boolean
}) {
  return (
    <button
      className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium ${
        selected
          ? 'bg-[#16324f] text-white'
          : 'bg-white text-slate-600 ring-1 ring-slate-200'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
