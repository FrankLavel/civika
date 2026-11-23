import { Link, useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Share2,
  CircleCheck,
  MapPin,
  ScanSearch,
  Map as MapIcon,
  ClipboardCheck,
  Star,
  ThumbsUp,
  MessageSquareText,
} from 'lucide-react'

export default function DetalleReporte() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto min-h-screen w-full max-w-[430px] bg-slate-50 pb-10 text-slate-800">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-5">
        <button onClick={() => navigate(-1)} className="flex items-center gap-3">
          <ArrowLeft className="h-5 w-5 text-slate-700" />
          <span className="text-lg font-bold text-slate-900">Detalle De Reporte</span>
        </button>
        <img
          src="https://i.pravatar.cc/100?img=47"
          alt="Perfil"
          className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow"
        />
      </div>

      {/* Sub nav */}
      <div className="flex items-center justify-between px-5 pt-4">
        <Link to="/mis-reportes" className="flex items-center gap-1.5 text-sm font-semibold text-blue-600">
          <ArrowLeft className="h-4 w-4" />
          Volver a mis reportes
        </Link>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm ring-1 ring-slate-200">
          <Share2 className="h-4 w-4" />
        </button>
      </div>

      {/* Header card */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <span className="inline-block rounded-lg bg-blue-50 px-3 py-1 font-mono text-sm font-semibold text-blue-700">
            #MICH-2026-05490
          </span>
          <div className="mt-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
              <CircleCheck className="h-3.5 w-3.5" />
              Resuelto y Verificado
            </span>
          </div>
          <h1 className="mt-3 text-xl font-bold text-slate-900">
            Fuga en red matriz de agua potable
          </h1>
          <p className="mt-1.5 flex items-start gap-1.5 text-sm text-slate-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
            Av. Morelos Poniente esq. Río Duero (Límite Jacona-Zamora)
          </p>

          <div className="mt-4 flex gap-2.5 rounded-xl bg-indigo-50/70 p-3">
            <ScanSearch className="h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <p className="text-sm font-bold text-slate-800">Asignación Conurbada Automática</p>
              <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                El algoritmo de límite territorial canalizó la red hidráulica directamente al organismo
                operador correspondiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Evidencia Gráfica */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Evidencia Gráfica</h3>
            <div className="flex rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
              <button className="rounded-md bg-white px-3 py-1.5 text-slate-800 shadow-sm">
                Comparar
              </button>
              <button className="px-3 py-1.5 text-slate-500">Alternar</button>
            </div>
          </div>
          <p className="mt-0.5 text-sm text-slate-500">Supervisión técnica del trabajo en sitio</p>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <figure>
              <div className="relative h-28 overflow-hidden rounded-xl bg-slate-200">
                <img
                  src="https://loremflickr.com/300/300/water,leak,pipe?lock=41"
                  alt="Antes"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 rounded-md bg-slate-900/80 px-2 py-0.5 text-[11px] font-bold text-white">
                  Antes
                </span>
              </div>
              <figcaption className="mt-1.5 text-center text-xs text-slate-500">
                18 Oct • 09:15 AM
              </figcaption>
            </figure>
            <figure>
              <div className="relative h-28 overflow-hidden rounded-xl bg-slate-200">
                <img
                  src="https://loremflickr.com/300/300/asphalt,road,new?lock=42"
                  alt="Resuelto"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-md bg-green-600 px-2 py-0.5 text-[11px] font-bold text-white">
                  <CircleCheck className="h-3 w-3" />
                  Resuelto
                </span>
              </div>
              <figcaption className="mt-1.5 text-center text-xs text-slate-500">
                18 Oct • 05:20 PM
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Zona Limítrofe */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Zona Limítrofe Intermunicipal</h3>
            <MapIcon className="h-5 w-5 text-blue-600" />
          </div>
          <p className="mt-0.5 text-sm text-slate-500">
            Conurbación Río Duero • Coordenadas: 19.9547° N, 102.3021° W
          </p>

          <div className="relative mt-3 h-40 overflow-hidden rounded-xl bg-[#e9eee7] ring-1 ring-slate-200">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-0 top-1/2 h-px w-full bg-white" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-white" />
              <div className="absolute left-1/4 top-0 h-full w-px bg-white/70" />
            </div>
            <span className="absolute left-2 top-2 text-[9px] text-slate-500">Zamora</span>
            <span className="absolute right-10 top-3 text-[8px] leading-tight text-slate-500">
              Fraccionamiento
              <br />
              Monte Olivo
            </span>
            <span className="absolute left-2 top-14 text-[9px] text-slate-500">Uripa Zan…</span>
            <span className="absolute left-3 bottom-8 text-[9px] text-slate-500">Jacona</span>
            <span className="absolute right-14 bottom-6 text-[9px] text-slate-500">El Platanal</span>
            <span className="absolute right-2 bottom-3 text-[9px] text-slate-500">Parque…</span>

            <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-900 ring-4 ring-white" />
            <span className="absolute left-1/2 top-1/2 ml-3 -translate-y-1/2 rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
              Intersección
              <br />
              Perimetral Jacona
            </span>
          </div>
        </div>
      </section>

      {/* Ficha de Resolución */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <ClipboardCheck className="h-5 w-5 text-blue-600" />
            Ficha de Resolución Interinstitucional
          </h3>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <Ficha label="Categoría" value="Agua Potable" sub="Infraestructura hidráulica" />
            <Ficha label="Municipio Receptor" value="Jacona (SAPAJ)" sub="Operador autorizado" />
            <Ficha label="Cuadrilla Asignada" value="Brigada Técnica …" sub="4 técnicos en campo" />
            <Ficha
              label="Nivel de Prioridad"
              value={<span className="text-red-600">● Urgente</span>}
              sub="Tiempo récord: 8h 05m"
            />
          </div>
        </div>
      </section>

      {/* Trazabilidad */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Trazabilidad en Tiempo Real</h3>
              <p className="mt-0.5 text-sm text-slate-500">Registro inmutable de acciones públicas</p>
            </div>
            <span className="shrink-0 text-xs font-bold tracking-wide text-slate-400">4/4 PASOS</span>
          </div>

          <ol className="relative mt-4 ml-2 space-y-5 border-l-2 border-blue-200 pl-6">
            <TimelineItem
              title="Reporte recibido"
              time="18 Oct • 09:15 AM"
              desc="Georreferenciación satelital delimitó con precisión el tramo conector perteneciente a la red municipal de Jacona."
            />
            <TimelineItem
              title="Asignado a dependencia"
              timeBadge="18 Oct • 10:00 AM"
              desc="Canalizado sin fricción burocrática a SAPAJ Jacona a través de la Ventanilla Única de ConectaMich."
            />
            <TimelineItem
              title="En atención en sitio"
              time="18 Oct • 01:30 PM"
              desc="Cuadrilla 4 acudió con refacciones para reemplazo de junta y codo en tubería matriz de 4 pulgadas."
            />
            <TimelineItem
              title="Incidencia Resuelta"
              timeBadge="18 Oct • 05:20 PM"
              desc="Fuga sellada con prueba hidrostática exitosa y asfalto bacheado al 100%. Evidencia fotográfica validada por supervisor."
              done
            />
          </ol>
        </div>
      </section>

      {/* Calificación */}
      <section className="px-5 pt-4">
        <div className="rounded-2xl bg-indigo-50/70 p-5 text-center">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
            <MessageSquareText className="h-5 w-5" />
          </span>
          <h3 className="mt-3 text-lg font-bold text-slate-900">
            ¿Cómo calificarías la atención de este reporte?
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Tu retroalimentación audita la efectividad intermunicipal.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-8 w-8 text-amber-400" fill="currentColor" />
            ))}
          </div>
          <p className="mt-3 text-sm font-semibold text-blue-600">
            ¡Excelente resolución intermunicipal!
          </p>
          <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16324f] py-4 text-base font-semibold text-white shadow-sm">
            <ThumbsUp className="h-5 w-5" />
            Confirmar conformidad
          </button>
        </div>
      </section>
    </div>
  )
}

function Ficha({
  label,
  value,
  sub,
}: {
  label: string
  value: React.ReactNode
  sub: string
}) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3">
      <p className="text-[11px] text-slate-400">{label}</p>
      <p className="mt-0.5 font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-500">{sub}</p>
    </div>
  )
}

function TimelineItem({
  title,
  time,
  timeBadge,
  desc,
  done,
}: {
  title: string
  time?: string
  timeBadge?: string
  desc: string
  done?: boolean
}) {
  return (
    <li className="relative">
      <span
        className={`absolute -left-[31px] top-0.5 h-4 w-4 rounded-full ring-4 ring-white ${
          done ? 'bg-green-500' : 'bg-blue-500'
        }`}
      />
      <div className="flex items-start justify-between gap-2">
        <h4 className={`font-bold ${done ? 'text-green-600' : 'text-slate-900'}`}>{title}</h4>
        {time && <span className="shrink-0 text-xs text-slate-400">{time}</span>}
        {timeBadge && (
          <span
            className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${
              done ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-600'
            }`}
          >
            {timeBadge}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm leading-relaxed text-slate-500">{desc}</p>
    </li>
  )
}
