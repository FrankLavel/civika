import { Routes, Route, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Reportar from './pages/Reportar'
import ReporteEnviado from './pages/ReporteEnviado'
import MisReportes from './pages/MisReportes'
import DetalleReporte from './pages/DetalleReporte'
import IncidenciaCercana from './pages/IncidenciaCercana'
import Ayuda from './pages/Ayuda'

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reportar" element={<Reportar />} />
        <Route path="/incidencia-cercana" element={<IncidenciaCercana />} />
        <Route path="/reporte-enviado" element={<ReporteEnviado />} />
        <Route path="/mis-reportes" element={<MisReportes />} />
        <Route path="/reporte/:id" element={<DetalleReporte />} />
        <Route path="/ayuda" element={<Ayuda />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
