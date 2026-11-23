import { Navigation } from 'lucide-react'

export default function Header({
  subtitle,
  toggleOn = true,
}: {
  subtitle: string
  toggleOn?: boolean
}) {
  return (
    <header className="flex items-center justify-between px-5 pt-5">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 ring-1 ring-slate-200">
          <Navigation className="h-4 w-4 -rotate-45 text-sky-500" fill="currentColor" />
        </div>
        <div className="leading-tight">
          <p className="text-[17px] font-bold text-slate-900">ConectaMich</p>
          <p className="text-xs text-slate-400">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`flex h-6 w-11 items-center rounded-full px-0.5 ${
            toggleOn ? 'justify-end bg-sky-100' : 'justify-start bg-sky-100'
          }`}
        >
          <span
            className={`rounded-full shadow-sm ${
              toggleOn ? 'h-5 w-5 bg-sky-500' : 'h-3 w-3 bg-sky-500'
            }`}
          />
        </span>
        <img
          src="https://i.pravatar.cc/100?img=47"
          alt="Perfil"
          className="h-9 w-9 rounded-full object-cover ring-2 ring-white shadow"
        />
      </div>
    </header>
  )
}
