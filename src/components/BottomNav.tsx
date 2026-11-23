import { Link, useLocation } from 'react-router-dom'
import { Home, Camera, ClipboardList, LifeBuoy } from 'lucide-react'

export default function BottomNav() {
  const { pathname } = useLocation()
  const isInicio = pathname === '/'
  const isReportar =
    pathname.startsWith('/reportar') ||
    pathname.startsWith('/reporte') ||
    pathname.startsWith('/incidencia')
  const isReportes = pathname.startsWith('/mis-reportes')
  const isAyuda = pathname.startsWith('/ayuda')

  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 mx-auto max-w-[430px] border-t border-slate-200 bg-white/95 backdrop-blur">
      <div className="relative flex items-end justify-around px-4 pb-2 pt-2.5">
        <NavItem to="/" icon={<Home className="h-5 w-5" />} label="Inicio" active={isInicio} />
        <div className="flex w-16 flex-col items-center">
          <Link
            to="/reportar"
            className="-mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#16324f] text-white shadow-lg ring-4 ring-white"
          >
            <Camera className="h-6 w-6" />
          </Link>
          <span
            className={`mt-1 text-[11px] font-medium ${isReportar ? 'text-blue-600' : 'text-slate-500'}`}
          >
            Reportar
          </span>
        </div>
        <NavItem
          to="/mis-reportes"
          icon={<ClipboardList className="h-5 w-5" />}
          label="Mis Reportes"
          active={isReportes}
          badge={3}
        />
        <NavItem
          to="/ayuda"
          icon={<LifeBuoy className="h-5 w-5" />}
          label="Ayuda / Info"
          active={isAyuda}
        />
      </div>
    </nav>
  )
}

function NavItem({
  to,
  icon,
  label,
  active,
  badge,
}: {
  to: string
  icon: React.ReactNode
  label: string
  active?: boolean
  badge?: number
}) {
  return (
    <Link to={to} className="flex w-16 flex-col items-center gap-1">
      <span className={`relative ${active ? 'text-blue-600' : 'text-slate-400'}`}>
        {icon}
        {badge != null && (
          <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
            {badge}
          </span>
        )}
      </span>
      <span className={`text-[11px] font-medium ${active ? 'text-blue-600' : 'text-slate-500'}`}>
        {label}
      </span>
    </Link>
  )
}
