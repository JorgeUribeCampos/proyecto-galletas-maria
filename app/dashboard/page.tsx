
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface KPISemanal {
  semana: string;
  fechaInicio: string;
  fechaFin: string;
  topicosRelevantes: Array<{
    nombre: string;
    oportunidad: number;
    volumen: number;
    crecimiento: number;
  }>;
  contenidosRelevantes: Array<{
    titulo: string;
    engagement: number;
    alcance: number;
    tipo: string;
  }>;
  insightsGenerados: Array<{
    titulo: string;
    prioridad: 'alta' | 'media' | 'baja';
    impacto: number;
    categoria: string;
  }>;
  pilaresActivados: Array<{
    nombre: string;
    porcentajeActivacion: number;
    contenidosAsociados: number;
    tendencia: 'subiendo' | 'bajando' | 'estable';
  }>;
}

export default function DashboardPage() {
  const [mostrarGuiaArquetipos, setMostrarGuiaArquetipos] = useState(false);
  const [kpiSeleccionado, setKpiSeleccionado] = useState<string | null>(null);
  const [semanaActual, setSemanaActual] = useState(0); // 0 = semana actual

  // Datos históricos de las últimas 5 semanas
  const datosSemanales: KPISemanal[] = [
    {
      semana: 'Semana Actual',
      fechaInicio: '16 Dic 2024',
      fechaFin: '22 Dic 2024',
      topicosRelevantes: [
        { nombre: 'Performance vs Realidad Maternal', oportunidad: 93, volumen: 14500, crecimiento: 12 },
        { nombre: 'Rituales de Descompresión', oportunidad: 92, volumen: 15420, crecimiento: 8 },
        { nombre: 'Cocina como Refugio Emocional', oportunidad: 91, volumen: 13750, crecimiento: 15 },
        { nombre: 'Conexión Intergeneracional', oportunidad: 89, volumen: 18900, crecimiento: 5 },
        { nombre: 'Escape Creativo Familiar', oportunidad: 87, volumen: 12850, crecimiento: -2 },
      ],
      contenidosRelevantes: [
        { titulo: 'Stories Intergeneracionales', engagement: 18.0, alcance: 156000, tipo: 'Historia' },
        { titulo: 'Testimonios Maternos Reales', engagement: 15.9, alcance: 245000, tipo: 'Video' },
        { titulo: 'Rituales Familiares', engagement: 17.0, alcance: 128000, tipo: 'Video' },
        { titulo: 'Momentos de Placer Consciente', engagement: 16.0, alcance: 189000, tipo: 'Imagen' },
        { titulo: 'Cocina Intuitiva', engagement: 10.5, alcance: 110000, tipo: 'Video' },
      ],
      insightsGenerados: [
        { titulo: 'Convergencia Bienestar-Creatividad', prioridad: 'alta', impacto: 95, categoria: 'estrategicos' },
        { titulo: 'Saturación en Videos Cortos', prioridad: 'alta', impacto: 88, categoria: 'estrategicos' },
        { titulo: 'Potencial Audio-Podcast', prioridad: 'alta', impacto: 92, categoria: 'contenido' },
        { titulo: 'Vacío Contenido Senior', prioridad: 'media', impacto: 76, categoria: 'contenido' },
        { titulo: 'Preferencia Interactividad', prioridad: 'media', impacto: 84, categoria: 'audiencia' },
      ],
      pilaresActivados: [
        { nombre: 'DIARY OF REAL MOMS', porcentajeActivacion: 85, contenidosAsociados: 23, tendencia: 'subiendo' },
        { nombre: 'RECIPES QUE HUG', porcentajeActivacion: 78, contenidosAsociados: 19, tendencia: 'subiendo' },
        { nombre: 'REAL FAMILY MOMENTS', porcentajeActivacion: 72, contenidosAsociados: 15, tendencia: 'estable' },
        { nombre: 'AUTHENTIC TREATS', porcentajeActivacion: 68, contenidosAsociados: 12, tendencia: 'subiendo' },
        { nombre: 'MINDFUL NOURISHMENT', porcentajeActivacion: 65, contenidosAsociados: 11, tendencia: 'estable' },
      ],
    },
    {
      semana: 'Semana -1',
      fechaInicio: '9 Dic 2024',
      fechaFin: '15 Dic 2024',
      topicosRelevantes: [
        { nombre: 'Rituales de Descompresión', oportunidad: 89, volumen: 14200, crecimiento: 5 },
        { nombre: 'Performance vs Realidad Maternal', oportunidad: 87, volumen: 13800, crecimiento: 18 },
        { nombre: 'Conexión Intergeneracional', oportunidad: 86, volumen: 17900, crecimiento: 8 },
        { nombre: 'Cocina como Refugio Emocional', oportunidad: 83, volumen: 11950, crecimiento: 22 },
        { nombre: 'Escape Creativo Familiar', oportunidad: 82, volumen: 13100, crecimiento: 1 },
      ],
      contenidosRelevantes: [
        { titulo: 'Testimonios Maternos Reales', engagement: 14.2, alcance: 228000, tipo: 'Video' },
        { titulo: 'Rituales Familiares', engagement: 15.8, alcance: 119000, tipo: 'Video' },
        { titulo: 'Stories Intergeneracionales', engagement: 16.5, alcance: 142000, tipo: 'Historia' },
        { titulo: 'Momentos de Placer Consciente', engagement: 14.8, alcance: 175000, tipo: 'Imagen' },
        { titulo: 'Cocina Intuitiva', engagement: 9.8, alcance: 98000, tipo: 'Video' },
      ],
      insightsGenerados: [
        { titulo: 'Anti-performance Tendencia', prioridad: 'alta', impacto: 89, categoria: 'estrategicos' },
        { titulo: 'Oportunidad Podcast Format', prioridad: 'alta', impacto: 85, categoria: 'contenido' },
        { titulo: 'Engagement Stories Alto', prioridad: 'media', impacto: 78, categoria: 'audiencia' },
        { titulo: 'Gap Audiencia Senior', prioridad: 'media', impacto: 72, categoria: 'contenido' },
        { titulo: 'Capital Social Dominante', prioridad: 'baja', impacto: 65, categoria: 'audiencia' },
      ],
      pilaresActivados: [
        { nombre: 'DIARY OF REAL MOMS', porcentajeActivacion: 82, contenidosAsociados: 21, tendencia: 'subiendo' },
        { nombre: 'RECIPES QUE HUG', porcentajeActivacion: 71, contenidosAsociados: 16, tendencia: 'subiendo' },
        { nombre: 'REAL FAMILY MOMENTS', porcentajeActivacion: 69, contenidosAsociados: 14, tendencia: 'subiendo' },
        { nombre: 'AUTHENTIC TREATS', porcentajeActivacion: 63, contenidosAsociados: 10, tendencia: 'estable' },
        { nombre: 'MINDFUL NOURISHMENT', porcentajeActivacion: 58, contenidosAsociados: 9, tendencia: 'subiendo' },
      ],
    },
    {
      semana: 'Semana -2',
      fechaInicio: '2 Dic 2024',
      fechaFin: '8 Dic 2024',
      topicosRelevantes: [
        { nombre: 'Conexión Intergeneracional', oportunidad: 84, volumen: 16500, crecimiento: 12 },
        { nombre: 'Rituales de Descompresión', oportunidad: 81, volumen: 13500, crecimiento: 15 },
        { nombre: 'Escape Creativo Familiar', oportunidad: 79, volumen: 12950, crecimiento: 3 },
        { nombre: 'Performance vs Realidad Maternal', oportunidad: 76, volumen: 11600, crecimiento: 25 },
        { nombre: 'Momentos de Placer Consciente', oportunidad: 74, volumen: 10800, crecimiento: 8 },
      ],
      contenidosRelevantes: [
        { titulo: 'Stories Intergeneracionales', engagement: 15.2, alcance: 128000, tipo: 'Historia' },
        { titulo: 'Rituales Familiares', engagement: 14.5, alcance: 105000, tipo: 'Video' },
        { titulo: 'Testimonios Maternos Reales', engagement: 13.1, alcance: 198000, tipo: 'Video' },
        { titulo: 'Momentos de Placer Consciente', engagement: 13.8, alcance: 162000, tipo: 'Imagen' },
        { titulo: 'Cocina Intuitiva', engagement: 8.9, alcance: 85000, tipo: 'Video' },
      ],
      insightsGenerados: [
        { titulo: 'Tendencia Intergeneracional', prioridad: 'alta', impacto: 82, categoria: 'estrategicos' },
        { titulo: 'Formato Video Dominante', prioridad: 'media', impacto: 75, categoria: 'contenido' },
        { titulo: 'Crecimiento Performance Topic', prioridad: 'alta', impacto: 79, categoria: 'estrategicos' },
        { titulo: 'Engagement Estable', prioridad: 'baja', impacto: 68, categoria: 'audiencia' },
        { titulo: 'Oportunidad Placer Consciente', prioridad: 'media', impacto: 71, categoria: 'contenido' },
      ],
      pilaresActivados: [
        { nombre: 'REAL FAMILY MOMENTS', porcentajeActivacion: 75, contenidosAsociados: 18, tendencia: 'subiendo' },
        { nombre: 'DIARY OF REAL MOMS', porcentajeActivacion: 72, contenidosAsociados: 17, tendencia: 'subiendo' },
        { nombre: 'RECIPES QUE HUG', porcentajeActivacion: 58, contenidosAsociados: 12, tendencia: 'estable' },
        { nombre: 'AUTHENTIC TREATS', porcentajeActivacion: 55, contenidosAsociados: 8, tendencia: 'subiendo' },
        { nombre: 'MINDFUL NOURISHMENT', porcentajeActivacion: 48, contenidosAsociados: 7, tendencia: 'estable' },
      ],
    },
    {
      semana: 'Semana -3',
      fechaInicio: '25 Nov 2024',
      fechaFin: '1 Dic 2024',
      topicosRelevantes: [
        { nombre: 'Escape Creativo Familiar', oportunidad: 78, volumen: 12550, crecimiento: 7 },
        { nombre: 'Conexión Intergeneracional', oportunidad: 76, volumen: 14700, crecimiento: 18 },
        { nombre: 'Rituales de Descompresión', oportunidad: 73, volumen: 11750, crecimiento: 9 },
        { nombre: 'Momentos de Placer Consciente', oportunidad: 69, volumen: 9980, crecimiento: 14 },
        { nombre: 'Performance vs Realidad Maternal', oportunidad: 65, volumen: 9280, crecimiento: 35 },
      ],
      contenidosRelevantes: [
        { titulo: 'Rituales Familiares', engagement: 13.8, alcance: 95000, tipo: 'Video' },
        { titulo: 'Stories Intergeneracionales', engagement: 14.1, alcance: 115000, tipo: 'Historia' },
        { titulo: 'Momentos de Placer Consciente', engagement: 12.9, alcance: 148000, tipo: 'Imagen' },
        { titulo: 'Testimonios Maternos Reales', engagement: 11.8, alcance: 178000, tipo: 'Video' },
        { titulo: 'Escape Creativo', engagement: 12.5, alcance: 132000, tipo: 'Video' },
      ],
      insightsGenerados: [
        { titulo: 'Escape Creativo Lidera', prioridad: 'alta', impacto: 78, categoria: 'estrategicos' },
        { titulo: 'Crecimiento Intergeneracional', prioridad: 'alta', impacto: 76, categoria: 'estrategicos' },
        { titulo: 'Emergencia Performance Topic', prioridad: 'media', impacto: 65, categoria: 'contenido' },
        { titulo: 'Estabilidad Engagement', prioridad: 'baja', impacto: 62, categoria: 'audiencia' },
        { titulo: 'Diversificación Formatos', prioridad: 'media', impacto: 69, categoria: 'contenido' },
      ],
      pilaresActivados: [
        { nombre: 'REAL FAMILY MOMENTS', porcentajeActivacion: 71, contenidosAsociados: 16, tendencia: 'subiendo' },
        { nombre: 'DIARY OF REAL MOMS', porcentajeActivacion: 62, contenidosAsociados: 13, tendencia: 'estable' },
        { nombre: 'AUTHENTIC TREATS', porcentajeActivacion: 48, contenidosAsociados: 7, tendencia: 'subiendo' },
        { nombre: 'RECIPES QUE HUG', porcentajeActivacion: 42, contenidosAsociados: 8, tendencia: 'subiendo' },
        { nombre: 'MINDFUL NOURISHMENT', porcentajeActivacion: 38, contenidosAsociados: 5, tendencia: 'estable' },
      ],
    },
    {
      semana: 'Semana -4',
      fechaInicio: '18 Nov 2024',
      fechaFin: '24 Nov 2024',
      topicosRelevantes: [
        { nombre: 'Conexión Intergeneracional', oportunidad: 72, volumen: 12400, crecimiento: 22 },
        { nombre: 'Escape Creativo Familiar', oportunidad: 69, volumen: 11720, crecimiento: 5 },
        { nombre: 'Rituales de Descompresión', oportunidad: 65, volumen: 10780, crecimiento: 12 },
        { nombre: 'Momentos de Placer Consciente', oportunidad: 58, volumen: 8750, crecimiento: 8 },
        { nombre: 'Tradiciones Alimentarias', oportunidad: 54, volumen: 9200, crecimiento: 15 },
      ],
      contenidosRelevantes: [
        { titulo: 'Stories Intergeneracionales', engagement: 13.2, alcance: 98000, tipo: 'Historia' },
        { titulo: 'Escape Creativo', engagement: 12.1, alcance: 118000, tipo: 'Video' },
        { titulo: 'Rituales Familiares', engagement: 12.8, alcance: 87000, tipo: 'Video' },
        { titulo: 'Momentos de Placer Consciente', engagement: 11.5, alcance: 125000, tipo: 'Imagen' },
        { titulo: 'Testimonios Maternos Reales', engagement: 10.9, alcance: 152000, tipo: 'Video' },
      ],
      insightsGenerados: [
        { titulo: 'Dominio Intergeneracional', prioridad: 'alta', impacto: 72, categoria: 'estrategicos' },
        { titulo: 'Crecimiento Creativo', prioridad: 'media', impacto: 69, categoria: 'contenido' },
        { titulo: 'Oportunidad Tradiciones', prioridad: 'media', impacto: 64, categoria: 'contenido' },
        { titulo: 'Engagement Consistente', prioridad: 'baja', impacto: 58, categoria: 'audiencia' },
        { titulo: 'Diversidad Temas', prioridad: 'baja', impacto: 55, categoria: 'estrategicos' },
      ],
      pilaresActivados: [
        { nombre: 'REAL FAMILY MOMENTS', porcentajeActivacion: 65, contenidosAsociados: 14, tendencia: 'subiendo' },
        { nombre: 'DIARY OF REAL MOMS', porcentajeActivacion: 52, contenidosAsociados: 11, tendencia: 'estable' },
        { nombre: 'AUTHENTIC TREATS', porcentajeActivacion: 38, contenidosAsociados: 5, tendencia: 'estable' },
        { nombre: 'MINDFUL NOURISHMENT', porcentajeActivacion: 35, contenidosAsociados: 4, tendencia: 'subiendo' },
        { nombre: 'RECIPES QUE HUG', porcentajeActivacion: 28, contenidosAsociados: 4, tendencia: 'subiendo' },
      ],
    },
  ];

  const semanaActualData = datosSemanales[semanaActual];

  const obtenerColorTendencia = (tendencia: string) => {
    switch (tendencia) {
      case 'subiendo':
        return 'text-green-600';
      case 'bajando':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  const obtenerIconoTendencia = (tendencia: string) => {
    switch (tendencia) {
      case 'subiendo':
        return 'ri-arrow-up-line';
      case 'bajando':
        return 'ri-arrow-down-line';
      default:
        return 'ri-arrow-right-line';
    }
  };

  const obtenerColorCrecimiento = (crecimiento: number) => {
    if (crecimiento > 0) return 'text-green-600';
    if (crecimiento < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const obtenerColorPrioridad = (prioridad: string) => {
    switch (prioridad) {
      case 'alta':
        return 'bg-red-100 text-red-800';
      case 'media':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <i className="ri-brain-line text-white text-xl"></i>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Content Insight</h1>
              </Link>
            </div>
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link href="/topicos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Tópicos
              </Link>
              <Link href="/contenidos" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contenidos
              </Link>
              <Link href="/insights" className="text-gray-600 hover:text-blue-600 transition-colors">
                Insights
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header del Dashboard */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dashboard de Content Insight</h1>
            <p className="text-xl text-gray-600">
              Visión integral de tu estrategia de contenido con análisis ALMA en tiempo real
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex items-center space-x-4">
            <div className="bg-white rounded-lg px-4 py-2 shadow-sm border">
              <select
                value={semanaActual}
                onChange={(e) => setSemanaActual(parseInt(e.target.value))}
                className="text-sm font-medium text-gray-700 bg-transparent border-none focus:outline-none pr-8"
              >
                {datosSemanales.map((semana, index) => (
                  <option key={index} value={index}>
                    {semana.semana} ({semana.fechaInicio} - {semana.fechaFin})
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={() => setMostrarGuiaArquetipos(true)}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-guide-line mr-2"></i>
              Guía de Arquetipos
            </button>
          </div>
        </div>

        {/* KPIs Dinámicos Semanales */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {/* Top Tópicos */}
          <div
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-6 border-2 border-blue-300 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            onClick={() => setKpiSeleccionado(kpiSeleccionado === 'topicos' ? null : 'topicos')}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse"></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-hashtag text-white text-2xl drop-shadow-lg"></i>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-sm text-white/90 font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  TOP 5
                </span>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="text-5xl font-black text-white drop-shadow-2xl">
                {semanaActualData.topicosRelevantes[0].oportunidad}%
              </div>
              <div className="text-xl font-bold text-white/95 drop-shadow-lg">
                TÓPICOS MÁS RELEVANTES
              </div>
              <div className="text-sm text-white/80 font-medium truncate bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                {semanaActualData.topicosRelevantes[0].nombre}
              </div>

              {/* Preview Top 3 */}
              <div className="space-y-1 mt-4">
                {semanaActualData.topicosRelevantes.slice(1, 4).map((topico, index) => (
                  <div key={index} className="flex items-center justify-between text-xs text-white/70 bg-white/5 px-2 py-1 rounded">
                    <span className="truncate flex-1">#{index + 2} {topico.nombre}</span>
                    <span className="font-bold ml-2">{topico.oportunidad}%</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-white/60 text-center mt-3 font-medium">
                Click para ver Top 5 completo
              </div>
            </div>
          </div>

          {/* Top Contenidos */}
          <div
            className="bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl p-6 border-2 border-emerald-300 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            onClick={() => setKpiSeleccionado(kpiSeleccionado === 'contenidos' ? null : 'contenidos')}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-file-list-3-line text-white text-2xl drop-shadow-lg"></i>
              </div>
              <div className="flex items-center space-x-2">
                <i className="ri-trending-up-line text-white text-xl animate-bounce"></i>
                <span className="text-sm text-white/90 font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  TOP 5
                </span>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="text-5xl font-black text-white drop-shadow-2xl">
                {semanaActualData.contenidosRelevantes[0].engagement}%
              </div>
              <div className="text-xl font-bold text-white/95 drop-shadow-lg">
                CONTENIDOS DESTACADOS
              </div>
              <div className="text-sm text-white/80 font-medium truncate bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                {semanaActualData.contenidosRelevantes[0].titulo}
              </div>

              {/* Preview Top 3 */}
              <div className="space-y-1 mt-4">
                {semanaActualData.contenidosRelevantes.slice(1, 4).map((contenido, index) => (
                  <div key={index} className="flex items-center justify-between text-xs text-white/70 bg-white/5 px-2 py-1 rounded">
                    <span className="truncate flex-1">#{index + 2} {contenido.titulo}</span>
                    <span className="font-bold ml-2">{contenido.oportunidad}%</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-white/60 text-center mt-3 font-medium">
                Click para ver Top 5 completo
              </div>
            </div>
          </div>

          {/* Top Insights */}
          <div
            className="bg-gradient-to-br from-purple-600 to-violet-800 rounded-xl p-6 border-2 border-purple-300 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            onClick={() => setKpiSeleccionado(kpiSeleccionado === 'insights' ? null : 'insights')}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-lightbulb-line text-white text-2xl drop-shadow-lg"></i>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-white/30 text-white font-bold px-3 py-1 rounded-full backdrop-blur-sm shadow-lg">
                  {semanaActualData.insightsGenerados.length}
                </span>
                <span className="text-sm text-white/90 font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  TOP 5
                </span>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="text-5xl font-black text-white drop-shadow-2xl">
                {semanaActualData.insightsGenerados[0].impacto}
              </div>
              <div className="text-xl font-bold text-white/95 drop-shadow-lg">
                INSIGHTS ESTRATÉGICOS
              </div>
              <div className="text-sm text-white/80 font-medium truncate bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                {semanaActualData.insightsGenerados[0].titulo}
              </div>

              {/* Preview Top 3 */}
              <div className="space-y-1 mt-4">
                {semanaActualData.insightsGenerados.slice(1, 4).map((insight, index) => (
                  <div key={index} className="flex items-center justify-between text-xs text-white/70 bg-white/5 px-2 py-1 rounded">
                    <span className="truncate flex-1">#{index + 2} {insight.titulo}</span>
                    <span className="font-bold ml-2">{insight.impacto}</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-white/60 text-center mt-3 font-medium">
                Click para ver Top 5 completo
              </div>
            </div>
          </div>

          {/* Top Pilares */}
          <div
            className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 border-2 border-orange-300 cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
            onClick={() => setKpiSeleccionado(kpiSeleccionado === 'pilares' ? null : 'pilares')}
          >
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <i className="ri-building-4-line text-white text-2xl drop-shadow-lg"></i>
              </div>
              <div className="flex items-center space-x-2">
                <i
                  className={`${obtenerIconoTendencia(semanaActualData.pilaresActivados[0].tendencia)} ${obtenerColorTendencia(
                    semanaActualData.pilaresActivados[0].tendencia
                  )} text-xl animate-bounce`}
                ></i>
                <span className="text-sm text-white/90 font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  TOP 5
                </span>
              </div>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="text-5xl font-black text-white drop-shadow-2xl">
                {semanaActualData.pilaresActivados[0].porcentajeActivacion}%
              </div>
              <div className="text-xl font-bold text-white/95 drop-shadow-lg">
                PILARES DOMINANTES
              </div>
              <div className="text-sm text-white/80 font-medium bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm">
                <div className="truncate">{semanaActualData.pilaresActivados[0].nombre}</div>
                <div className="text-xs text-white/60 mt-1">
                  {semanaActualData.pilaresActivados[0].contenidosAsociados} contenidos asociados
                </div>
              </div>

              {/* Preview Top 3 */}
              <div className="space-y-1 mt-4">
                {semanaActualData.pilaresActivados.slice(1, 4).map((pilar, index) => (
                  <div key={index} className="flex items-center justify-between text-xs text-white/70 bg-white/5 px-2 py-1 rounded">
                    <span className="truncate flex-1">#{index + 2} {pilar.nombre}</span>
                    <span className="font-bold ml-2">{pilar.porcentajeActivacion}%</span>
                  </div>
                ))}
              </div>

              <div className="text-xs text-white/60 text-center mt-3 font-medium">
                Click para ver Top 5 completo
              </div>
            </div>
          </div>
        </div>

        {/* Panel Expandido de KPI Seleccionado */}
        {kpiSeleccionado && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-blue-500">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {kpiSeleccionado === 'topicos' && 'Top 5 Tópicos Más Relevantes'}
                {kpiSeleccionado === 'contenidos' && 'Top 5 Contenidos Más Relevantes'}
                {kpiSeleccionado === 'insights' && 'Top 5 Insights Generados'}
                {kpiSeleccionado === 'pilares' && 'Top 5 Pilares Más Activados'}
              </h3>
              <button
                onClick={() => setKpiSeleccionado(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Datos de la Semana Actual */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="ri-calendar-line text-blue-600 mr-2"></i>
                  {semanaActualData.semana} ({semanaActualData.fechaInicio} - {semanaActualData.fechaFin})
                </h4>

                {kpiSeleccionado === 'topicos' && (
                  <div className="space-y-3">
                    {semanaActualData.topicosRelevantes.map((topico, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{topico.nombre}</div>
                            <div className="text-xs text-gray-600">{topico.volumen.toLocaleString()} menciones</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-blue-600">{topico.oportunidad}%</div>
                          <div
                            className={`text-xs flex items-center ${obtenerColorCrecimiento(topico.crecimiento)}`}
                          >
                            <i className={`${topico.crecimiento >= 0 ? 'ri-arrow-up-line' : 'ri-arrow-down-line'} mr-1`}></i>
                            {Math.abs(topico.crecimiento)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {kpiSeleccionado === 'contenidos' && (
                  <div className="space-y-3">
                    {semanaActualData.contenidosRelevantes.map((contenido, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{contenido.titulo}</div>
                            <div className="text-xs text-gray-600">
                              {contenido.alcance.toLocaleString()} alcance • {contenido.tipo}
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{contenido.engagement}%</div>
                          <div className="text-xs text-gray-500">engagement</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {kpiSeleccionado === 'insights' && (
                  <div className="space-y-3">
                    {semanaActualData.insightsGenerados.map((insight, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{insight.titulo}</div>
                            <div className="flex items-center space-x-2 mt-1">
                              <span
                                className={`text-xs px-2 py-1 rounded-full ${obtenerColorPrioridad(insight.prioridad)}`}
                              >
                                {insight.prioridad}
                              </span>
                              <span className="text-xs text-gray-600">{insight.categoria}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-purple-600">{insight.impacto}</div>
                          <div className="text-xs text-gray-500">impacto</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {kpiSeleccionado === 'pilares' && (
                  <div className="space-y-3">
                    {semanaActualData.pilaresActivados.map((pilar, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 text-sm">{pilar.nombre}</div>
                            <div className="text-xs text-gray-600">{pilar.contenidosAsociados} contenidos asociados</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-orange-600">{pilar.porcentajeActivacion}%</div>
                          <div
                            className={`text-xs flex items-center justify-end ${obtenerColorTendencia(pilar.tendencia)}`}
                          >
                            <i className={`${obtenerIconoTendencia(pilar.tendencia)} mr-1`}></i>
                            {pilar.tendencia}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Histórico de Semanas Anteriores */}
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <i className="ri-history-line text-gray-600 mr-2"></i>
                  Evolución Histórica (5 semanas)
                </h4>

                <div className="space-y-4">
                  {datosSemanales.slice(0, 5).map((semana, semanaIndex) => (
                    <div key={semanaIndex} className={`p-4 rounded-lg border-l-4 ${semanaIndex === semanaActual ? 'bg-blue-50 border-blue-500' : 'bg-gray-50 border-gray-300'}`}>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="font-medium text-gray-900">{semana.semana}</h5>
                        <span className="text-xs text-gray-500">{semana.fechaInicio} - {semana.fechaFin}</span>
                      </div>

                      {kpiSeleccionado === 'topicos' && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-800 mb-1">Líder: {semana.topicosRelevantes[0].nombre}</div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Oportunidad: {semana.topicosRelevantes[0].oportunidad}%</span>
                            <span className={obtenerColorCrecimiento(semana.topicosRelevantes[0].crecimiento)}>
                              {semana.topicosRelevantes[0].crecimiento >= 0 ? '+' : '-'}{semana.topicosRelevantes[0].crecimiento}%
                            </span>
                          </div>
                        </div>
                      )}

                      {kpiSeleccionado === 'contenidos' && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-800 mb-1">Mejor: {semana.contenidosRelevantes[0].titulo}</div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Engagement: {semana.contenidosRelevantes[0].engagement}%</span>
                            <span>Alcance: {semana.contenidosRelevantes[0].alcance.toLocaleString()}</span>
                          </div>
                        </div>
                      )}

                      {kpiSeleccionado === 'insights' && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-800 mb-1">Top: {semana.insightsGenerados[0].titulo}</div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Impacto: {semana.insightsGenerados[0].impacto}</span>
                            <span className={`px-2 py-1 rounded ${obtenerColorPrioridad(semana.insightsGenerados[0].prioridad)}`}>
                              {semana.insightsGenerados[0].prioridad}
                            </span>
                          </div>
                        </div>
                      )}

                      {kpiSeleccionado === 'pilares' && (
                        <div className="text-sm">
                          <div className="font-medium text-gray-800 mb-1">Dominante: {semana.pilaresActivados[0].nombre}</div>
                          <div className="flex justify-between text-xs text-gray-600">
                            <span>Activación: {semana.pilaresActivados[0].porcentajeActivacion}%</span>
                            <span className={`flex items-center ${obtenerColorTendencia(semana.pilaresActivados[0].tendencia)}`}>
                              <i className={`${obtenerIconoTendencia(semana.pilaresActivados[0].tendencia)} mr-1`}></i>
                              {semana.pilaresActivados[0].tendencia}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contenido Principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna Principal - Resumen Ejecutivo */}
          <div className="lg:col-span-2 space-y-8">
            {/* Situación Actual */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-dashboard-3-line text-blue-600 mr-3"></i>
                Situación Actual de los Contenidos
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">Lo que Funciona</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-green-700">
                      <i className="ri-check-line mr-2"></i>
                      <span>Stories Intergeneracionales (18% engagement)</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <i className="ri-check-line mr-2"></i>
                      <span>Contenido Anti-Performance (93% oportunidad)</span>
                    </div>
                    <div className="flex items-center text-green-700">
                      <i className="ri-check-line mr-2"></i>
                      <span>ALMA detectando 6 ejes técnicos</span>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <h3 className="font-semibold text-red-800 mb-2">Problemas Críticos</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-red-700">
                      <i className="ri-close-line mr-2"></i>
                      <span>Videos cortos saturados (engagement ↓)</span>
                    </div>
                    <div className="flex items-center text-red-700">
                      <i className="ri-close-line mr-2"></i>
                      <span>Gap contenido senior (+50 años)</span>
                    </div>
                    <div className="flex items-center text-red-700">
                      <i className="ri-close-line mr-2"></i>
                      <span>Baja interactividad en stories</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">Oportunidades Inmediatas</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-blue-700">
                      <i className="ri-arrow-right-line mr-2"></i>
                      <span>Podcast formato (92% potencial)</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <i className="ri-arrow-right-line mr-2"></i>
                      <span>Rituales de descompresión (92%)</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <i className="ri-arrow-right-line mr-2"></i>
                      <span>Cocina como refugio (91%)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Plan de Acción Inmediato */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <i className="ri-flashlight-line text-orange-600 mr-3"></i>
                Plan de Acción - Próximos 30 Días
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Reducir Videos Cortos 30%</h3>
                    <p className="text-sm text-gray-600 mb-2">Redirigir recursos hacia podcast y contenido largo</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-time-line mr-1"></i>
                      <span>Semana 1-2 • Impacto: +25% engagement esperado</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-red-600">URGENTE</div>
                    <div className="text-xs text-gray-500">ROI: 280%</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Lanzar Podcast Semanal</h3>
                    <p className="text-sm text-gray-600 mb-2">"Rituales de Descompresión" con expertos maternales</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-time-line mr-1"></i>
                      <span>Semana 2-3 • Meta: 5K descargas/episodio</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-yellow-600">ALTA</div>
                    <div className="text-xs text-gray-500">ROI: 380%</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Contenido Senior (+50 años)</h3>
                    <p className="text-sm text-gray-600 mb-2">Tutoriales pausados, lenguaje no técnico</p>
                    <div className="flex items-center text-xs text-gray-500">
                      <i className="ri-time-line mr-1"></i>
                      <span>Semana 3-4 • Nuevo segmento: 15K usuarios</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-600">MEDIA</div>
                    <div className="text-xs text-gray-500">ROI: 245%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Lateral - Monitoreo y Arquetipos */}
          <div className="space-y-8">
            {/* Monitoreo ALMA */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  <i className="ri-radar-line text-purple-600 mr-2"></i>
                  Monitor ALMA
                </h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-600 font-medium">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Ejes Detectados</span>
                  <span className="font-bold text-purple-600">6/6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Territorios Activos</span>
                  <span className="font-bold text-blue-600">9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Insights Generados Hoy</span>
                  <span className="font-bold text-green-600">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Contenido Procesado</span>
                  <span className="font-bold text-orange-600">1,247</span>
                </div>
              </div>

              <Link
                href="/insights"
                className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center block whitespace-nowrap cursor-pointer"
              >
                <i className="ri-brain-line mr-2"></i>
                Ver Análisis Completo
              </Link>
            </div>

            {/* Arquetipos Principales */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                <i className="ri-user-heart-line text-pink-600 mr-2"></i>
                Arquetipos Detectados
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-purple-800">Guardiana de Tradiciones</h4>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">42% Gen X</span>
                  </div>
                  <p className="text-xs text-purple-600 mb-2">Sur 28% • Centro-Occ 22%</p>

                  <div className="space-y-1">
                    <div className="text-xs text-gray-600 mb-1">Participación en Pilares:</div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-orange-600">REAL FAMILY</span>
                        <span className="font-semibold text-orange-700">68%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-purple-600">MINDFUL NOURISH</span>
                        <span className="font-semibold text-purple-700">52%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-pink-600">DIARY REAL</span>
                        <span className="font-semibold text-pink-700">38%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-green-600">AUTHENTIC</span>
                        <span className="font-semibold text-green-700">24%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-blue-800">Madre Anti-Performance</h4>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Alta resonancia</span>
                  </div>
                  <p className="text-xs text-blue-600 mb-2">Rechaza perfección Instagram</p>

                  <div className="space-y-1">
                    <div className="text-xs text-gray-600 mb-1">Participación en Pilares:</div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-pink-600">DIARY REAL</span>
                        <span className="font-semibold text-pink-700">84%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-orange-600">REAL FAMILY</span>
                        <span className="font-semibold text-orange-700">61%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-green-600">AUTHENTIC</span>
                        <span className="font-semibold text-green-700">47%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-purple-600">MINDFUL NOURISH</span>
                        <span className="font-semibold text-purple-700">32%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium text-green-800">Madre Consciente</h4>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Equilibrio</span>
                  </div>
                  <p className="text-xs text-green-600 mb-2">Bienestar + creatividad</p>

                  <div className="space-y-1">
                    <div className="text-xs text-gray-600 mb-1">Participación en Pilares:</div>
                    <div className="grid grid-cols-2 gap-1 text-xs">
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-green-600">AUTHENTIC</span>
                        <span className="font-semibold text-green-700">76%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-purple-600">MINDFUL NOURISH</span>
                        <span className="font-semibold text-purple-700">58%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-pink-600">DIARY REAL</span>
                        <span className="font-semibold text-pink-700">43%</span>
                      </div>
                      <div className="flex items-center justify-between bg-white rounded px-2 py-1">
                        <span className="text-orange-600">REAL FAMILY</span>
                        <span className="font-semibold text-orange-700">29%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMostrarGuiaArquetipos(true)}
                className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                <i className="ri-guide-line mr-2"></i>
                Guía Completa
              </button>
            </div>

            {/* Navegación Rápida */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                <i className="ri-compass-3-line text-blue-600 mr-2"></i>
                Acciones Rápidas
              </h3>

              <div className="space-y-3">
                <Link
                  href="/topicos"
                  className="flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-nodes-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Mapa ALMA</div>
                    <div className="text-xs text-gray-600">9 territorios activos</div>
                  </div>
                </Link>

                <Link
                  href="/contenidos"
                  className="flex items-center p-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
                >
                  <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-file-chart-line text-white text-sm"></i>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm">Fábrica Consciente</div>
                    <div className="text-xs text-gray-600">3 propuestas listas</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer de Navegación Rápida */}
        <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            <i className="ri-compass-3-line text-blue-600 mr-2"></i>
            Navegación Rápida
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/topicos"
              className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-nodes-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Explorar Tópicos</h3>
                <p className="text-sm text-gray-600">Mapa de conversaciones</p>
              </div>
            </Link>

            <Link
              href="/contenidos"
              className="flex items-center p-4 bg-indigo-50 hover:bg-indigo-100 rounded-lg border border-indigo-200 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-file-chart-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Analizar Contenidos</h3>
                <p className="text-sm text-gray-600">Performance y gaps</p>
              </div>
            </Link>

            <Link
              href="/insights"
              className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-lightbulb-line text-white"></i>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Banco de Insights</h3>
                <p className="text-sm text-gray-600">Recomendaciones IA</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Modal Guía de Arquetipos */}
        {mostrarGuiaArquetipos && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-guide-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Manual Completo de Arquetipos Maternos</h2>
                      <p className="text-purple-100">Metodología, construcción y aplicación estratégica en pilares de contenido</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMostrarGuiaArquetipos(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-12">
                {/* Introducción Metodológica */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border-l-4 border-indigo-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-microscope-line text-indigo-600 mr-3"></i>
                    Fundamentos Metodológicos de los Arquetipos ALMA
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4"> Base Científica:</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-indigo-200">
                          <div className="font-medium text-indigo-800 mb-2"> Psicología Analítica (Jung)</div>
                          <p className="text-sm text-gray-700">Los arquetipos representan patrones universales de comportamiento maternal que emergen del inconsciente colectivo. Cada arquetipo contiene una estructura psíquica específica que influye en decisiones de consumo.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-indigo-200">
                          <div className="font-medium text-indigo-800 mb-2"> Sociología de Bourdieu</div>
                          <p className="text-sm text-gray-700">Cada arquetipo manifiesta diferentes tipos de capital simbólico (cultural, económico, social). Esto determina qué contenido resuena y por qué una madre lo compartirá.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-indigo-200">
                          <div className="font-medium text-indigo-800 mb-2"> Análisis de Big Data</div>
                          <p className="text-sm text-gray-700">Procesamos 2.4 millones de interacciones maternas reales para identificar patrones recurrentes de comportamiento, lenguaje y preferencias de contenido.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4"> Proceso de Construcción:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                          <div>
                            <div className="font-medium text-gray-900">Recolección de Datos</div>
                            <div className="text-sm text-gray-600">157,000 conversaciones maternas auténticas procesadas por IA</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                          <div>
                            <div className="font-medium text-gray-900">Análisis de Clusters</div>
                            <div className="text-sm text-gray-600">Identificación de 47 patrones iniciales reducidos a 4 arquetipos dominantes</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                          <div>
                            <div className="font-medium text-gray-900">Validación Territorial</div>
                            <div className="text-sm text-gray-600">Mapeo por estados mexicanos y NSE para confirmar patrones regionales</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                          <div>
                            <div className="font-medium text-gray-900">Testing de Contenido</div>
                            <div className="text-sm text-gray-600">Validación con 12,000 interacciones reales durante 6 meses</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-purple-500">
                    <h5 className="font-bold text-gray-900 mb-3"> Por Qué Funcionan los Arquetipos:</h5>
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-purple-800 mb-1">Reconocimiento Instantáneo</div>
                        <div className="text-gray-700">El cerebro procesa arquetipos 60% más rápido que descripciones demográficas. "Guardiana de Tradiciones" activa patrones de reconocimiento inmediatos.</div>
                      </div>
                      <div>
                        <div className="font-medium text-green-800 mb-1">Conexión Emocional Profunda</div>
                        <div className="text-gray-700">Los arquetipos activan el sistema límbico antes que la corteza prefrontal. La madre se "siente entendida" antes de procesar racionalmente.</div>
                      </div>
                      <div>
                        <div className="font-medium text-blue-800 mb-1">Memoria de Largo Plazo</div>
                        <div className="text-gray-700">Contenido basado en arquetipos se recuerda 3.2x más tiempo que comunicación genérica. Crea asociaciones duraderas marca-arquetipo.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arquetipos Detallados */}
                <div className="space-y-10">
                  {/* La Guardiana de Tradiciones - Expandido */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="ri-heart-3-line text-purple-600 mr-3"></i>
                      LA GUARDIANA DE TRADICIONES
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Datos Demográficos</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Edad dominante:</span>
                              <span className="font-medium">35-50 años (Gen X: 42%)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">NSE:</span>
                              <span className="font-medium">Medio-Alto (C+/B-)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Ubicación:</span>
                              <span className="font-medium">Sur 28%, Centro-Occ 22%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Hijos promedio:</span>
                              <span className="font-medium">2.3</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Estado civil:</span>
                              <span className="font-medium">Casada 78%</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white rounded-lg p-6 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Perfil Psicológico</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Nostalgia: 85% alta</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-pink-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Orgullo familiar: 92% alta</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-indigo-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Responsabilidad: 89% alta</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                              <span className="text-gray-700">Ansiedad performance: 23% baja</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg p-6 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Motivaciones Profundas</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-purple-800 mb-3">Motivaciones Primarias:</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <strong>Transmisión Cultural:</strong> Asegurar que las tradiciones familiares no se pierdan</li>
                                <li>• <strong>Validación Intergeneracional:</strong> Reconocimiento de abuelas y suegras</li>
                                <li>• <strong>Diferenciación Digital:</strong> Destacar en un mundo de perfección artificial</li>
                                <li>• <strong>Legado Familiar:</strong> Construir memoria familiar duradera</li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-semibold text-purple-800 mb-3">Miedos y Resistencias:</h5>
                              <ul className="space-y-2 text-sm text-gray-700">
                                <li>• <strong>Pérdida de Identidad:</strong> Que las tradiciones se "modernicen" hasta desaparecer</li>
                                <li>• <strong>Juicio Generacional:</strong> Críticas de las generaciones mayores</li>
                                <li>• <strong>Irrelevancia:</strong> Que sus hijos rechacen las tradiciones</li>
                                <li>• <strong>Competencia Digital:</strong> Sentirse abrumada por madres "perfectas" online</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-purple-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Lenguaje Característico</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-purple-800 mb-3">Frases que Usa:</h5>
                              <div className="space-y-2 text-sm">
                                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                                  <em>"Como hacía mi abuela..."</em>
                                </div>
                                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                                  <em>"Esta receta tiene más de 50 años en la familia"</em>
                                </div>
                                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                                  <em>"Los niños de antes vs los de ahora"</em>
                                </div>
                                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                                  <em>"Lo auténtico nunca pasa de moda"</em>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h5 className="font-semibold text-purple-800 mb-3">Palabras Clave:</h5>
                              <div className="flex flex-wrap gap-2">
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">tradición</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">auténtico</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">abuela</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">herencia</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">valores</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">"de antes"</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">familia</span>
                                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium">raíces</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-6 text-white">
                      <h4 className="font-bold text-white mb-4"> Estrategia de Contenido para REAL FAMILY MOMENTS</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-100 mb-3">Qué Crear:</h5>
                          <ul className="space-y-2 text-sm text-purple-100">
                            <li>• <strong>Series documentales:</strong> "Tradiciones que Alimentan" - 3 generaciones cocinando juntas</li>
                            <li>• <strong>Tutoriales nostálgicos:</strong> "Como lo hacía la abuela" con técnicas tradicionales</li>
                            <li>• <strong>Historias familiares:</strong> El origen de recetas familiares específicas</li>
                            <li>• <strong>Comparativas generacionales:</strong> "Antes vs Ahora" con respeto y admiración</li>
                            <li>• <strong>Rituales familiares:</strong> Documentar tradiciones navideñas, cumpleaños, domingos</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-purple-100 mb-3">Cómo Comunicar:</h5>
                          <ul className="space-y-2 text-sm text-purple-100">
                            <li>• <strong>Tono nostálgico reverente:</strong> Admiración sin idealización</li>
                            <li>• <strong>Validación intergeneracional:</strong> "Tu abuela sabía..." </li>
                            <li>• <strong>Storytelling familiar:</strong> Cada producto tiene una historia</li>
                            <li>• <strong>Lenguaje inclusivo temporal:</strong> Conectar pasado con presente</li>
                            <li>• <strong>Llamadas a la acción heredadas:</strong> "Comparte tu tradición familiar"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* La Madre Auténtica Anti-Performance - Expandido */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-l-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="ri-emotion-happy-line text-blue-600 mr-3"></i>
                      LA MADRE AUTÉNTICA ANTI-PERFORMANCE
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Datos Demográficos</h4>
                          <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Edad dominante:</span>
                              <span className="font-medium">28-45 años (Millennials: 67%)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">NSE:</span>
                              <span className="font-medium">Medio-Alto (B-/C+)</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Ubicación:</span>
                              <span className="font-medium">Urbano 85%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Profesionista:</span>
                              <span className="font-medium">72% activa</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Uso redes:</span>
                              <span className="font-medium">4.2 hrs/día</span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white rounded-lg p-6 border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Trigger Points</h4>
                          <div className="space-y-2 text-sm">
                            <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                              <span className="text-red-800 font-medium">Perfección aspiracional</span>
                            </div>
                            <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                              <span className="text-red-800 font-medium">Madres "Instagram perfect"</span>
                            </div>
                            <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                              <span className="text-red-800 font-medium">Consejos no solicitados</span>
                            </div>
                            <div className="bg-red-50 p-2 rounded border-l-4 border-red-400">
                              <span className="text-red-800 font-medium">Competencia maternal</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg p-6 border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Sistema de Valores Core</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-blue-800 mb-3">Lo que VALORA:</h5>
                              <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                  <i className="ri-heart-fill text-blue-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Honestidad Brutal</div>
                                    <div className="text-xs text-gray-600">Prefiere verdad incómoda que mentira bonita</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-heart-fill text-blue-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Vulnerabilidad Controlada</div>
                                    <div className="text-xs text-gray-600">Comparte luchas pero con propósito</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-heart-fill text-blue-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Conexión Auténtica</div>
                                    <div className="text-xs text-gray-600">Busca madres que "la entiendan"</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-heart-fill text-blue-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Progreso sobre Perfección</div>
                                    <div className="text-xs text-gray-600">Celebra pequeños logros reales</div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-800 mb-3">Lo que RECHAZA:</h5>
                              <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                  <i className="ri-close-circle-fill text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Performance Aspiracional</div>
                                    <div className="text-xs text-gray-600">Todo perfecto, todo controlado</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-close-circle-fill text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Consejos Genéricos</div>
                                    <div className="text-xs text-gray-600">"Solo disfruta cada momento"</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-close-circle-fill text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Competencia Maternal</div>
                                    <div className="text-xs text-gray-600">Comparaciones de logros</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-close-circle-fill text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Soluciones Simplistas</div>
                                    <div className="text-xs text-gray-600">Respuestas fáciles a problemas complejos</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-blue-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Discurso Maternal Característico</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-blue-800 mb-3">Confesiones Típicas:</h5>
                              <div className="space-y-2 text-sm">
                                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                  <em>"Algunos días solo sobrevivo, y está bien"</em>
                                </div>
                                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                  <em>"No, no amo cada segundo de la maternidad"</em>
                                </div>
                                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                  <em>"Mi casa no siempre está ordenada, y no me importa"</em>
                                </div>
                                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                                  <em>"A veces les pongo Netflix para tener 30 min de paz"</em>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h5 className="font-semibold text-blue-800 mb-3">Hashtags Que Usa:</h5>
                              <div className="flex flex-wrap gap-2">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#MadreRealNoPerfecta</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#MaternidadSinFiltro</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#VidaRealDeMadre</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#NoAlPerformanceMaternal</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#MaternidadAuhentica</span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">#SoloSobreviviendo</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg p-6 text-white">
                      <h4 className="font-bold text-white mb-4"> Estrategia de Contenido para DIARY OF REAL MOMS</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-100 mb-3">Contenidos de Alta Resonancia:</h5>
                          <ul className="space-y-2 text-sm text-blue-100">
                            <li>• <strong>Confesiones vulnerables:</strong> "La verdad que nadie dice sobre..."</li>
                            <li>• <strong>Días difíciles documentados:</strong> Reality maternal sin filtros</li>
                            <li>• <strong>Fails celebrados:</strong> "Mis peores momentos maternos"</li>
                            <li>• <strong>Expectativa vs Realidad:</strong> Comparativas honestas</li>
                            <li>• <strong>Testimonios de supervivencia:</strong> "Cómo salí adelante cuando..."</li>
                            <li>• <strong>Conversaciones tabú:</strong> Temas que otros evitan</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-blue-100 mb-3">Tonalidad y Enfoque:</h5>
                          <ul className="space-y-2 text-sm text-blue-100">
                            <li>• <strong>Empático pero directo:</strong> "Te entiendo porque lo vivo"</li>
                            <li>• <strong>Validación sin soluciones:</strong> A veces solo necesita ser escuchada</li>
                            <li>• <strong>Humor negro maternal:</strong> Reírse para no llorar</li>
                            <li>• <strong>Comunidad sobre competencia:</strong> "Estamos juntas en esto"</li>
                            <li>• <strong>Honestidad radical:</strong> Sin endulzar la realidad</li>
                            <li>• <strong>Progreso incremental:</strong> Celebrar pequeños avances</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* La Madre Consciente y Equilibrada - Expandido */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="ri-leaf-line text-green-600 mr-3"></i>
                      LA MADRE CONSCIENTE Y EQUILIBRADA
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Filosofía de Vida</h4>
                          <div className="space-y-3 text-sm">
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                              <div className="font-medium text-green-800">Mindfulness Aplicado</div>
                              <div className="text-green-700">Presente consciente en lo cotidiano</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                              <div className="font-medium text-green-800">Equilibrio Dinámico</div>
                              <div className="text-green-700">Balance entre roles sin perfección</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                              <div className="font-medium text-green-800">Autocuidado Integral</div>
                              <div className="text-green-700">Bienestar físico, mental y emocional</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                              <div className="font-medium text-green-800">Crecimiento Continuo</div>
                              <div className="text-green-700">Aprendizaje y evolución personal</div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white rounded-lg p-6 border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Áreas de Interés</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Nutrición consciente: 94%</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Yoga/meditación: 87%</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-teal-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Sostenibilidad: 82%</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-lime-500 rounded-full mr-2"></div>
                              <span className="text-gray-700">Arte terapia: 76%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg p-6 border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Necesidades Emocionales Específicas</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-green-800 mb-3">Busca Activamente:</h5>
                              <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                  <i className="ri-seedling-line text-green-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Herramientas Prácticas</div>
                                    <div className="text-xs text-gray-600">Técnicas aplicables en lo cotidiano</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-seedling-line text-green-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Comunidad Alineada</div>
                                    <div className="text-xs text-gray-600">Madres con valores similares</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-seedling-line text-green-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Validación Sin Juicio</div>
                                    <div className="text-xs text-gray-600">Apoyo en decisiones conscientes</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-seedling-line text-green-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Inspiración Auténtica</div>
                                    <div className="text-xs text-gray-600">Ejemplos reales, no aspiracionales</div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-semibold text-green-800 mb-3">Evita/Rechaza:</h5>
                              <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                  <i className="ri-close-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Extremismo Wellness</div>
                                    <div className="text-xs text-gray-600">Todo o nada, perfección tóxica</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-close-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Culpa por Autocuidado</div>
                                    <div className="text-xs text-gray-600">Mensajes que priorizan solo a otros</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-close-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Soluciones Caras</div>
                                    <div className="text-xs text-gray-600">Bienestar solo para privilegiados</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-close-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Competencia Espiritual</div>
                                    <div className="text-xs text-gray-600">"Más consciente que tú"</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-green-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Dilemas Internos Recurrentes</h4>
                          <div className="grid md:grid-cols-1 gap-4">
                            <div className="space-y-3">
                              <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                                <div className="font-medium text-amber-800 mb-2">⚖️ "Equilibrio vs Excelencia"</div>
                                <div className="text-sm text-amber-700">"¿Puedo ser buena madre, profesional y mantener mi bienestar sin que algo sufra?"</div>
                              </div>

                              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                                <div className="font-medium text-blue-800 mb-2">🤱 "Autocuidado vs Egoísmo"</div>
                                <div className="text-sm text-blue-700">"¿Está bien tomar tiempo para mí cuando mis hijos necesitan tanto?"</div>
                              </div>

                              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                                <div className="font-medium text-purple-800 mb-2">🎭 "Autenticidad vs Expectativas"</div>
                                <div className="text-sm text-purple-700">"¿Cómo mantener mis valores cuando todos esperan algo diferente?"</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg p-6 text-white">
                      <h4 className="font-bold text-white mb-4"> Estrategia de Contenido para MINDFUL NOURISHMENT + AUTHENTIC TREATS</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-100 mb-3">MINDFUL NOURISHMENT:</h5>
                          <ul className="space-y-2 text-sm text-green-100">
                            <li>• <strong>Rituales familiares conscientes:</strong> Cenas sin distracciones, cocina meditativa</li>
                            <li>• <strong>Alimentación intuitiva para familias:</strong> Escuchar al cuerpo, no a las dietas</li>
                            <li>• <strong>Momentos de presencia:</strong> Mindfulness en lo cotidiano</li>
                            <li>• <strong>Sostenibilidad práctica:</strong> Pequeños cambios, gran impacto</li>
                            <li>• <strong>Bienestar intergeneracional:</strong> Transmitir valores conscientes</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-green-100 mb-3">AUTHENTIC TREATS:</h5>
                          <ul className="space-y-2 text-sm text-green-100">
                            <li>• <strong>Placeres sin culpa:</strong> "Me lo merezco y está bien"</li>
                            <li>• <strong>Autocuidado accesible:</strong> 5 minutos de bienestar</li>
                            <li>• <strong>Creatividad como terapia:</strong> Arte, escritura, movimiento</li>
                            <li>• <strong>Momentos de reconexión:</strong> Conmigo misma, con mi esencia</li>
                            <li>• <strong>Rituales de renovación:</strong> Pequeñas ceremonias personales</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* La Madre Creativa y Expresiva - Expandido */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-orange-500">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <i className="ri-palette-line text-orange-600 mr-3"></i>
                      LA MADRE CREATIVA Y EXPRESIVA
                    </h3>

                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg p-6 border border-orange-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Perfil Creativo</h4>
                          <div className="space-y-3 text-sm">
                            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                              <div className="font-medium text-orange-800">Expresión Personal</div>
                              <div className="text-orange-700">Arte como identidad y escape</div>
                            </div>
                            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                              <div className="font-medium text-orange-800">Transmisión Cultural</div>
                              <div className="text-orange-700">Enseñar a través de la creatividad</div>
                            </div>
                            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                              <div className="font-medium text-orange-800">Comunidad Artística</div>
                              <div className="text-orange-700">Busca tribu creativa maternal</div>
                            </div>
                            <div className="bg-orange-50 p-3 rounded border-l-4 border-orange-400">
                              <div className="font-medium text-orange-800">Legado Familiar</div>
                              <div className="text-orange-700">Crear memorias tangibles</div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 bg-white rounded-lg p-6 border border-orange-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Uso del Tiempo</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-gray-600">Creatividad diaria:</span>
                              <span className="font-medium">45-90 min</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Proyectos familiares:</span>
                              <span className="font-medium">Fines de semana</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Documentación:</span>
                              <span className="font-medium">2-3 hrs/semana</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-600">Comunidad online:</span>
                              <span className="font-medium">1 hr/día</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg p-6 border border-orange-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Motivaciones Creativas Profundas</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-semibold text-orange-800 mb-3">Necesidades Emocionales:</h5>
                              <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                  <i className="ri-palette-fill text-orange-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Escape Constructivo</div>
                                    <div className="text-xs text-gray-600">Desconectar del estrés creando</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-palette-fill text-orange-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Identidad Propia</div>
                                    <div className="text-xs text-gray-600">Ser más que "solo mamá"</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-palette-fill text-orange-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Logro Tangible</div>
                                    <div className="text-xs text-gray-600">Crear algo que perdure</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-palette-fill text-orange-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Conexión Familiar</div>
                                    <div className="text-xs text-gray-600">Unir a través del arte</div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h5 className="font-semibold text-orange-800 mb-3">Frustraciones Comunes:</h5>
                              <ul className="space-y-3 text-sm text-gray-700">
                                <li className="flex items-start">
                                  <i className="ri-time-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Falta de Tiempo</div>
                                    <div className="text-xs text-gray-600">"Nunca termino mis proyectos"</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-money-dollar-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Limitaciones Económicas</div>
                                    <div className="text-xs text-gray-600">Materiales vs gastos familiares</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-group-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Falta de Comprensión</div>
                                    <div className="text-xs text-gray-600">"Es solo un hobby"</div>
                                  </div>
                                </li>
                                <li className="flex items-start">
                                  <i className="ri-creative-commons-line text-red-500 mr-2 mt-0.5"></i>
                                  <div>
                                    <div className="font-medium">Perfeccionismo</div>
                                    <div className="text-xs text-gray-600">Nunca está "suficientemente bien"</div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white rounded-lg p-6 border border-orange-200">
                          <h4 className="font-bold text-gray-900 mb-4"> Dinámicas Familiares Creativas</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                              <h5 className="font-semibold text-yellow-800 mb-2">Con Pareja</h5>
                              <ul className="text-xs text-yellow-700 space-y-1">
                                <li>• Busca validación de su tiempo creativo</li>
                                <li>• Negocia espacio físico para crear</li>
                                <li>• Quiere que valore su expresión artística</li>
                                <li>• A veces siente culpa por "tiempo egoísta"</li>
                              </ul>
                            </div>

                            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                              <h5 className="font-semibold text-pink-800 mb-2">Con Hijos</h5>
                              <ul className="text-xs text-pink-700 space-y-1">
                                <li>• Los incluye en proyectos familiares</li>
                                <li>• Enseña técnicas adaptadas por edad</li>
                                <li>• Documenta su crecimiento creativamente</li>
                                <li>• Frustra cuando interrumpen su proceso</li>
                              </ul>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                              <h5 className="font-semibold text-purple-800 mb-2">Con Comunidad</h5>
                              <ul className="text-xs text-purple-700 space-y-1">
                                <li>• Busca madres con intereses similares</li>
                                <li>• Comparte tutoriales y procesos</li>
                                <li>• Organiza actividades grupales</li>
                                <li>• Inspira a otras madres a crear</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-6 text-white">
                      <h4 className="font-bold text-white mb-4"> Estrategia de Contenido para REAL FAMILY MOMENTS</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-orange-100 mb-3">Tipos de Contenido:</h5>
                          <ul className="space-y-2 text-sm text-orange-100">
                            <li>• <strong>Tutoriales madre-hijo:</strong> Proyectos creativos para hacer juntos</li>
                            <li>• <strong>Time-lapse de creación:</strong> Proceso completo condensado</li>
                            <li>• <strong>Transformaciones familiares:</strong> Antes/después de espacios</li>
                            <li>• <strong>Fails creativos celebrados:</strong> "Cuando no sale como esperaba"</li>
                            <li>• <strong>Series temáticas:</strong> "31 días de creatividad familiar"</li>
                            <li>• <strong>Soluciones creativas cotidianas:</strong> Arte en lo mundano</li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="font-semibold text-orange-100 mb-3">Enfoques de Comunicación:</h5>
                          <ul className="space-y-2 text-sm text-orange-100">
                            <li>• <strong>Inspiracional pero accesible:</strong> "Tú también puedes hacerlo"</li>
                            <li>• <strong>Proceso sobre perfección:</strong> Mostrar el camino, no solo el resultado</li>
                            <li>• <strong>Inclusión multigeneracional:</strong> Abuela, madre, hija creando</li>
                            <li>• <strong>Soluciones económicas:</strong> "Creatividad con presupuesto familiar"</li>
                            <li>• <strong>Validación del tiempo creativo:</strong> "Tu arte importa"</li>
                            <li>• <strong>Comunidad de apoyo:</strong> "Comparte tu creación"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Por Qué Funcionan los Arquetipos */}
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border-l-4 border-gray-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-question-line text-gray-600 mr-3"></i>
                    ¿Por Qué los Arquetipos Revolucionan la Comunicación?
                  </h3>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4"> Ventajas Neurológicas:</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="font-medium text-blue-800 mb-2">Reconocimiento Instantáneo</div>
                          <p className="text-sm text-gray-700">El cerebro procesa arquetipos 60% más rápido que descripciones demográficas. "Guardiana de Tradiciones" activa patrones de reconocimiento inmediatos.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="font-medium text-green-800 mb-2">Conexión Emocional Profunda</div>
                          <p className="text-sm text-gray-700">Los arquetipos activan el sistema límbico antes que la corteza prefrontal. La madre se "siente entendida" antes de procesar racionalmente.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="font-medium text-purple-800 mb-2">Memoria de Largo Plazo</div>
                          <p className="text-sm text-gray-700">Contenido basado en arquetipos se recuerda 3.2x más tiempo que comunicación genérica. Crea asociaciones duraderas marca-arquetipo.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4"> Impacto en Pilares de Contenido:</h4>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="font-medium text-orange-800 mb-2">Personalización Masiva</div>
                          <p className="text-sm text-gray-700">Un arquetipo permite personalizar para 15,000-40,000 madres simultáneamente. Escalabilidad sin perder autenticidad.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="font-medium text-red-800 mb-2">Predicción de Resonancia</div>
                          <p className="text-sm text-gray-700">94.7% de precisión en predecir qué contenido funcionará para cada arquetipo. Menos prueba y error, más certeza estratégica.</p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="font-medium text-indigo-800 mb-2">Coherencia Cross-Platform</div>
                          <p className="text-sm text-gray-700">Los arquetipos mantienen coherencia en Instagram, TikTok, podcast, newsletter. Una estrategia, múltiples ejecuciones.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg p-6 text-white">
                    <h4 className="font-bold text-white mb-4"> Aplicación Estratégica en los 4 Pilares</h4>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="font-semibold text-purple-100 mb-2">DIARY OF REAL MOMS</div>
                        <div className="text-xs text-purple-100">Madre Anti-Performance comparte vulnerabilidad controlada. Guardiana documenta sabiduría heredada.</div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="font-semibold text-blue-100 mb-2">REAL FAMILY MOMENTS</div>
                        <div className="text-xs text-blue-100">Guardiana lidera tradiciones. Creativa organiza actividades. Consciente crea rituales mindful.</div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="font-semibold text-green-100 mb-2">AUTHENTIC TREATS</div>
                        <div className="text-xs text-green-100">Consciente equilibra placer y bienestar. Anti-Performance se permite sin culpa.</div>
                      </div>

                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="font-semibold text-orange-100 mb-2">MINDFUL NOURISHMENT</div>
                        <div className="text-xs text-orange-100">Consciente guía la alimentación intuitiva. Guardiana integra tradiciones saludables.</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Implementación Práctica */}
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border-l-4 border-yellow-500">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-tools-line text-yellow-600 mr-3"></i>
                    Implementación Práctica: Del Arquetipo al Contenido
                  </h3>

                  <div className="space-y-6">
                    <div className="bg-white rounded-lg p-6 border border-yellow-200">
                      <h4 className="font-bold text-gray-900 mb-4"> Framework de Aplicación (5 Pasos)</h4>
                      <div className="grid md:grid-cols-5 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">1</div>
                          <div className="font-semibold text-gray-900 mb-2">IDENTIFICA</div>
                          <div className="text-xs text-gray-600">¿Qué arquetipo predomina en tu audiencia?</div>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">2</div>
                          <div className="font-semibold text-gray-900 mb-2">MAPEA</div>
                          <div className="text-xs text-gray-600">¿Qué motivaciones/miedos activan?</div>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">3</div>
                          <div className="font-semibold text-gray-900 mb-2">SELECCIONA</div>
                          <div className="text-xs text-gray-600">¿Qué pilar conecta mejor?</div>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">4</div>
                          <div className="font-semibold text-gray-900 mb-2">CREA</div>
                          <div className="text-xs text-gray-600">Contenido específico para ese arquetipo</div>
                        </div>

                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">5</div>
                          <div className="font-semibold text-gray-900 mb-2">MIDE</div>
                          <div className="text-xs text-gray-600">Valida resonancia y ajusta</div>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <h4 className="font-bold text-gray-900 mb-4"> Ejemplo Práctico: Post para Instagram</h4>
                        <div className="space-y-4">
                          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                            <h5 className="font-semibold text-purple-800 mb-2"> ANTES (Genérico):</h5>
                            <p className="text-sm text-purple-700 italic">"¡Disfruta momentos especiales en familia con nuestros productos! #FamiliaFeliz #MomentosEspeciales"</p>
                          </div>

                          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                            <h5 className="font-semibold text-green-800 mb-2"> DESPUÉS (Guardiana de Tradiciones):</h5>
                            <p className="text-sm text-green-700 italic">"Esta receta tiene 3 generaciones en mi familia. Mi abuela me enseñó que el secreto no está en los ingredientes, sino en el amor que le pones. ¿Cuál es la tradición culinaria que más atesoras de tu familia?"</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <h4 className="font-bold text-gray-900 mb-4"> Métricas de Éxito por Arquetipo</h4>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Guardiana - Shares con historia personal:</span>
                            <span className="font-bold text-purple-600">+340%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Anti-Performance - Comentarios auténticos:</span>
                            <span className="font-bold text-blue-600">+280%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Consciente - Saves para referencia:</span>
                            <span className="font-bold text-green-600">+425%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700">Creativa - Recreaciones originales:</span>
                            <span className="font-bold text-orange-600">+380%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Manual Completo de Arquetipos ALMA • 157,000 conversaciones analizadas • Precisión: 94.7%
                  </div>
                  <button
                    onClick={() => setMostrarGuiaArquetipos(false)}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                  >
                    <i className="ri-check-line mr-2"></i>
                    Entendido
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
