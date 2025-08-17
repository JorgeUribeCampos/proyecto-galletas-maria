
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Creadora {
  id: string;
  nombre: string;
  arquetipo: string;
  especialidadPilar: string;
  avatar: string;
  estadisticas: {
    seguidoresTotal: number;
    crecimientoSemanal: number;
    engagementPromedio: number;
    alcanceSemanal: number;
  };
  redesSociales: {
    instagram: {
      seguidores: number;
      engagementOrganico: number;
      engagementPagado: number;
      alcanceSemanal: number;
      crecimientoSemanal: number;
    };
    tiktok: {
      seguidores: number;
      engagementOrganico: number;
      engagementPagado: number;
      alcanceSemanal: number;
      crecimientoSemanal: number;
    };
  };
  beatsCreativos: Beat[];
  performance: {
    mejorHorario: string;
    mejorDia: string;
    formatoEstrella: string;
    tematicaTop: string;
  };
  ejesALMADominantes: string[];
  capitalSimbolicoTarget: string[];
  tendencia: 'subiendo' | 'bajando' | 'estable';
}

interface Beat {
  id: string;
  nombre: string;
  descripcion: string;
  pilarAsociado: string;
  frecuenciaRecomendada: string;
  ejemplo: string;
  engagementPromedio: number;
  alcancePromedio: number;
  mejorHorario: string;
  ejesALMAActivados: string[];
  estadoImplementacion: 'activo' | 'testing' | 'propuesto' | 'pausado';
  dificultadProduccion: 'baja' | 'media' | 'alta';
  recursosNecesarios: string[];
  kpisPrincipales: string[];
  evolucionSemanal: Array<{
    semana: string;
    engagement: number;
    alcance: number;
    implementaciones: number;
  }>;
}

interface AnalisisComparativo {
  metrica: string;
  creadora1: number;
  creadora2: number;
  creadora3: number;
  benchmark: number;
  unidad: string;
}

export default function CreadorasPage() {
  const [creadoraSeleccionada, setCreadoraSeleccionada] = useState<Creadora | null>(null);
  const [beatSeleccionado, setBeatSeleccionado] = useState<Beat | null>(null);
  const [vistaActiva, setVistaActiva] = useState<'overview' | 'analisis' | 'beats' | 'comparativa'>('overview');
  const [filtroArquetipo, setFiltroArquetipo] = useState('todos');
  const [mostrarModalBeat, setMostrarModalBeat] = useState(false);
  const [mostrarCreacionBeat, setMostrarCreacionBeat] = useState(false);

  const creadoras: Creadora[] = [
    {
      id: '1',
      nombre: 'Ana María González',
      arquetipo: 'Guardiana de Tradiciones',
      especialidadPilar: 'REAL FAMILY MOMENTS',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20warm%20Mexican%20mother%20in%20her%20late%2030s%20with%20kind%20brown%20eyes%2C%20authentic%20smile%2C%20wearing%20casual%20but%20put-together%20clothing%2C%20natural%20lighting%2C%20genuine%20maternal%20warmth%2C%20approachable%20and%20trustworthy%20appearance%2C%20representing%20traditional%20family%20values&width=400&height=400&seq=ana-maria-avatar&orientation=squarish',
      estadisticas: {
        seguidoresTotal: 127500,
        crecimientoSemanal: 1250,
        engagementPromedio: 15.8,
        alcanceSemanal: 89400,
      },
      redesSociales: {
        instagram: {
          seguidores: 85000,
          engagementOrganico: 12.4,
          engagementPagado: 18.7,
          alcanceSemanal: 64200,
          crecimientoSemanal: 850
        },
        tiktok: {
          seguidores: 42500,
          engagementOrganico: 19.2,
          engagementPagado: 24.1,
          alcanceSemanal: 25200,
          crecimientoSemanal: 400
        }
      },
      beatsCreativos: [],
      performance: {
        mejorHorario: '18:00-20:00',
        mejorDia: 'Domingo',
        formatoEstrella: 'Videos familiares',
        tematicaTop: 'Tradiciones dominicales'
      },
      ejesALMADominantes: ['Simbólico', 'Territorial', 'Narrativo'],
      capitalSimbolicoTarget: ['Cultural: Alto', 'Social: Alto', 'Simbólico Puro: Medio'],
      tendencia: 'subiendo'
    },
    {
      id: '2',
      nombre: 'Sofia Hernández',
      arquetipo: 'Madre Anti-Performance',
      especialidadPilar: 'DIARY OF REAL MOMS',
      avatar: 'https://readdy.ai/api/search-image?query=Authentic%20portrait%20of%20a%20millennial%20Mexican%20mother%20in%20her%20early%2030s%20with%20expressive%20eyes%2C%20natural%20no-makeup%20look%2C%20casual%20messy%20bun%2C%20wearing%20comfortable%20clothing%2C%20honest%20expression%20showing%20both%20strength%20and%20vulnerability%2C%20anti-perfection%20aesthetic&width=400&height=400&seq=sofia-avatar&orientation=squarish',
      estadisticas: {
        seguidoresTotal: 94200,
        crecimientoSemanal: 1850,
        engagementPromedio: 22.4,
        alcanceSemanal: 156700
      },
      redesSociales: {
        instagram: {
          seguidores: 67800,
          engagementOrganico: 18.9,
          engagementPagado: 26.3,
          alcanceSemanal: 108500,
          crecimientoSemanal: 1200
        },
        tiktok: {
          seguidores: 26400,
          engagementOrganico: 28.7,
          engagementPagado: 34.2,
          alcanceSemanal: 48200,
          crecimientoSemanal: 650
        }
      },
      beatsCreativos: [],
      performance: {
        mejorHorario: '21:00-23:00',
        mejorDia: 'Miércoles',
        formatoEstrella: 'Stories honestas',
        tematicaTop: 'Confesiones maternales'
      },
      ejesALMADominantes: ['Narrativo', 'Emocional', 'Comunitario'],
      capitalSimbolicoTarget: ['Social: Alto', 'Cultural: Medio', 'Simbólico Puro: Bajo'],
      tendencia: 'subiendo'
    },
    {
      id: '3',
      nombre: 'Carmen Rodríguez',
      arquetipo: 'Madre Consciente',
      especialidadPilar: 'AUTHENTIC TREATS',
      avatar: 'https://readdy.ai/api/search-image?query=Serene%20portrait%20of%20a%20conscious%20Mexican%20mother%20in%20her%20mid-30s%20with%20calm%20confident%20expression%2C%20natural%20beauty%2C%20wearing%20earth-tone%20colors%2C%20peaceful%20demeanor%2C%20mindful%20presence%2C%20representing%20balance%20and%20wellness%2C%20soft%20natural%20lighting&width=400&height=400&seq=carmen-avatar&orientation=squarish',
      estadisticas: {
        seguidoresTotal: 76800,
        crecimientoSemanal: 920,
        engagementPromedio: 18.6,
        alcanceSemanal: 52400
      },
      redesSociales: {
        instagram: {
          seguidores: 54200,
          engagementOrganico: 16.8,
          engagementPagado: 21.4,
          alcanceSemanal: 38700,
          crecimientoSemanal: 650
        },
        tiktok: {
          seguidores: 22600,
          engagementOrganico: 21.9,
          engagementPagado: 25.8,
          alcanceSemanal: 13700,
          crecimientoSemanal: 270
        }
      },
      beatsCreativos: [],
      performance: {
        mejorHorario: '06:00-08:00',
        mejorDia: 'Sábado',
        formatoEstrella: 'Contenido wellness',
        tematicaTop: 'Momentos mindful'
      },
      ejesALMADominantes: ['Sensorial', 'Emocional', 'Simbólico'],
      capitalSimbolicoTarget: ['Cultural: Medio', 'Económico: Medio', 'Social: Medio'],
      tendencia: 'estable'
    }
  ];

  // Beats creativos específicos para cada creadora
  const beatsDatabase: Beat[] = [
    {
      id: 'beat-1',
      nombre: 'Domingo en Casa de la Abuela',
      descripcion: 'Series documentando tradiciones familiares dominicales, desde la preparación hasta la sobremesa',
      pilarAsociado: 'REAL FAMILY MOMENTS',
      frecuenciaRecomendada: 'Semanal',
      ejemplo: 'Video de 3 generaciones preparando mole, mostrando técnicas heredadas',
      engagementPromedio: 24.8,
      alcancePromedio: 78400,
      mejorHorario: '19:00',
      ejesALMAActivados: ['Simbólico', 'Territorial', 'Narrativo', 'Emocional'],
      estadoImplementacion: 'activo',
      dificultadProduccion: 'media',
      recursosNecesarios: ['Camarógrafo familiar', 'Edición emocional', 'Música nostálgica'],
      kpisPrincipales: ['Shares con historia personal', 'Comentarios multigeneracionales', 'Tiempo de visualización completo'],
      evolucionSemanal: [
        { semana: 'S1', engagement: 18.2, alcance: 65200, implementaciones: 1 },
        { semana: 'S2', engagement: 21.4, alcance: 71800, implementaciones: 1 },
        { semana: 'S3', engagement: 24.8, alcance: 78400, implementaciones: 1 },
        { semana: 'S4', engagement: 26.1, alcance: 82100, implementaciones: 2 }
      ]
    },
    {
      id: 'beat-2',
      nombre: 'Confesiones de Madrugada',
      descripcion: 'Testimonios vulnerables grabados tarde en la noche cuando los niños duermen',
      pilarAsociado: 'DIARY OF REAL MOMS',
      frecuenciaRecomendada: 'Bi-semanal',
      ejemplo: 'Video a cámara hablando sobre la presión de ser madre perfecta',
      engagementPromedio: 31.2,
      alcancePromedio: 124800,
      mejorHorario: '22:30',
      ejesALMAActivados: ['Narrativo', 'Emocional', 'Comunitario'],
      estadoImplementacion: 'activo',
      dificultadProduccion: 'baja',
      recursosNecesarios: ['Iluminación suave', 'Audio claro', 'Espacio íntimo'],
      kpisPrincipales: ['Comentarios de apoyo', 'Shares privados', 'Mensajes directos empáticos'],
      evolucionSemanal: [
        { semana: 'S1', engagement: 25.4, alcance: 98200, implementaciones: 2 },
        { semana: 'S2', engagement: 28.7, alcance: 112400, implementaciones: 2 },
        { semana: 'S3', engagement: 31.2, alcance: 124800, implementaciones: 2 },
        { semana: 'S4', engagement: 33.8, alcance: 138200, implementaciones: 3 }
      ]
    },
    {
      id: 'beat-3',
      nombre: 'Rituales de Autocuidado en 5 Minutos',
      descripcion: 'Momentos de bienestar accesibles para madres ocupadas, sin culpa',
      pilarAsociado: 'AUTHENTIC TREATS',
      frecuenciaRecomendada: 'Diaria',
      ejemplo: 'Time-lapse de rutina matutina mindful con café y respiración',
      engagementPromedio: 19.6,
      alcancePromedio: 45200,
      mejorHorario: '07:00',
      ejesALMAActivados: ['Sensorial', 'Emocional', 'Simbólico'],
      estadoImplementacion: 'activo',
      dificultadProduccion: 'baja',
      recursosNecesarios: ['Productos wellness', 'Música relajante', 'Iluminación natural'],
      kpisPrincipales: ['Saves como recordatorio', 'Recreaciones', 'Tiempo de permanencia'],
      evolucionSemanal: [
        { semana: 'S1', engagement: 16.8, alcance: 38400, implementaciones: 5 },
        { semana: 'S2', engagement: 18.2, alcance: 41800, implementaciones: 6 },
        { semana: 'S3', engagement: 19.6, alcance: 45200, implementaciones: 7 },
        { semana: 'S4', engagement: 21.1, alcance: 48600, implementaciones: 7 }
      ]
    },
    {
      id: 'beat-4',
      nombre: 'Experimentos Creativos Familiares',
      descripcion: 'Actividades artísticas que incluyen a toda la familia, documentando el proceso',
      pilarAsociado: 'REAL FAMILY MOMENTS',
      frecuenciaRecomendada: 'Quincenal',
      ejemplo: 'Familia creando arte con materiales reciclados, desde idea hasta resultado',
      engagementPromedio: 22.4,
      alcancePromedio: 67800,
      mejorHorario: '16:00',
      ejesALMAActivados: ['Simbólico', 'Comunitario', 'Sensorial', 'Narrativo'],
      estadoImplementacion: 'testing',
      dificultadProduccion: 'media',
      recursosNecesarios: ['Materiales creativos', 'Espacio de trabajo', 'Documentación continua'],
      kpisPrincipales: ['Recreaciones familiares', 'Compartidos con etiquetas', 'Duración de visualización'],
      evolucionSemanal: [
        { semana: 'S1', engagement: 18.9, alcance: 52400, implementaciones: 1 },
        { semana: 'S2', engagement: 20.7, alcance: 58200, implementaciones: 1 },
        { semana: 'S3', engagement: 22.4, alcance: 67800, implementaciones: 2 },
        { semana: 'S4', engagement: 24.1, alcance: 71200, implementaciones: 2 }
      ]
    },
    {
      id: 'beat-5',
      nombre: 'La Realidad Detrás del Filtro',
      descripcion: 'Comparativas honestas entre lo que se muestra vs la realidad maternal',
      pilarAsociado: 'DIARY OF REAL MOMS',
      frecuenciaRecomendada: 'Semanal',
      ejemplo: 'Split screen: foto Instagram perfecta vs la misma escena real y caótica',
      engagementPromedio: 28.9,
      alcancePromedio: 142600,
      mejorHorario: '20:30',
      ejesALMAActivados: ['Narrativo', 'Emocional', 'Comunitario'],
      estadoImplementacion: 'propuesto',
      dificultadProduccion: 'media',
      recursosNecesarios: ['Edición split-screen', 'Storytelling fuerte', 'Valentía personal'],
      kpisPrincipales: ['Shares con mensaje personal', 'Comentarios de identificación', 'Engagement rate'],
      evolucionSemanal: [
        { semana: 'S1', engagement: 0, alcance: 0, implementaciones: 0 },
        { semana: 'S2', engagement: 0, alcance: 0, implementaciones: 0 },
        { semana: 'S3', engagement: 0, alcance: 0, implementaciones: 0 },
        { semana: 'S4', engagement: 0, alcance: 0, implementaciones: 0 }
      ]
    }
  ];

  // Asignar beats a las creadoras
  creadoras[0].beatsCreativos = [beatsDatabase[0], beatsDatabase[3]]; // Ana María
  creadoras[1].beatsCreativos = [beatsDatabase[1], beatsDatabase[4]]; // Sofia
  creadoras[2].beatsCreativos = [beatsDatabase[2]]; // Carmen

  const analisisComparativo: AnalisisComparativo[] = [
    { metrica: 'Engagement Orgánico IG', creadora1: 12.4, creadora2: 18.9, creadora3: 16.8, benchmark: 8.5, unidad: '%' },
    { metrica: 'Engagement Orgánico TikTok', creadora1: 19.2, creadora2: 28.7, creadora3: 21.9, benchmark: 12.3, unidad: '%' },
    { metrica: 'Crecimiento Semanal', creadora1: 1250, creadora2: 1850, creadora3: 920, benchmark: 450, unidad: 'seguidores' },
    { metrica: 'Alcance Semanal', creadora1: 89400, creadora2: 156700, creadora3: 52400, benchmark: 28500, unidad: 'impresiones' }
  ];

  const creadorasFiltradas = creadoras.filter(creadora => 
    filtroArquetipo === 'todos' || creadora.arquetipo.toLowerCase().includes(filtroArquetipo.toLowerCase())
  );

  const obtenerColorArquetipo = (arquetipo: string) => {
    switch (arquetipo) {
      case 'Guardiana de Tradiciones':
        return 'from-purple-500 to-purple-700';
      case 'Madre Anti-Performance':
        return 'from-blue-500 to-blue-700';
      case 'Madre Consciente':
        return 'from-green-500 to-green-700';
      default:
        return 'from-gray-500 to-gray-700';
    }
  };

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

  const obtenerColorEstadoBeat = (estado: string) => {
    switch (estado) {
      case 'activo':
        return 'bg-green-100 text-green-800';
      case 'testing':
        return 'bg-blue-100 text-blue-800';
      case 'propuesto':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">
                Dashboard
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
              <Link href="/creadoras" className="text-blue-600 font-semibold">
                Creadoras
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Título y Navegación */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <i className="ri-user-heart-line text-purple-600 mr-3"></i>
            Centro de Análisis de Creadoras
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Análisis profundo del rendimiento de creadoras y optimización de beats creativos bajo metodología ALMA
          </p>

          {/* Navegación de vistas */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setVistaActiva('overview')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      vistaActiva === 'overview' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-dashboard-3-line mr-2"></i>
                    Vista General
                  </button>
                  <button
                    onClick={() => setVistaActiva('analisis')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      vistaActiva === 'analisis' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-line-chart-line mr-2"></i>
                    Análisis Detallado
                  </button>
                  <button
                    onClick={() => setVistaActiva('beats')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      vistaActiva === 'beats' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-music-2-line mr-2"></i>
                    Beats Creativos
                  </button>
                  <button
                    onClick={() => setVistaActiva('comparativa')}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      vistaActiva === 'comparativa' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-bar-chart-grouped-line mr-2"></i>
                    Comparativa
                  </button>
                </div>

                {vistaActiva === 'overview' && (
                  <div className="flex items-center space-x-2">
                    <label className="text-sm font-medium text-gray-700">Arquetipo:</label>
                    <select
                      value={filtroArquetipo}
                      onChange={(e) => setFiltroArquetipo(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                    >
                      <option value="todos">Todos</option>
                      <option value="guardiana">Guardiana de Tradiciones</option>
                      <option value="anti-performance">Anti-Performance</option>
                      <option value="consciente">Madre Consciente</option>
                    </select>
                  </div>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setMostrarCreacionBeat(true)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-add-line mr-2"></i>
                  Crear Beat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Vista General */}
        {vistaActiva === 'overview' && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lista de Creadoras */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <i className="ri-team-line text-purple-600 mr-2"></i>
                  Creadoras Activas ({creadorasFiltradas.length})
                </h3>
                <div className="grid gap-4">
                  {creadorasFiltradas.map((creadora) => (
                    <div
                      key={creadora.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                      onClick={() => setCreadoraSeleccionada(creadora)}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <img
                            src={creadora.avatar}
                            alt={creadora.nombre}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full ${obtenerColorTendencia(creadora.tendencia)} bg-white flex items-center justify-center`}>
                            <i className={`${obtenerIconoTendencia(creadora.tendencia)} text-xs`}></i>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{creadora.nombre}</h4>
                          <div className={`text-xs px-2 py-1 rounded-full inline-block bg-gradient-to-r ${obtenerColorArquetipo(creadora.arquetipo)} text-white mb-2`}>
                            {creadora.arquetipo}
                          </div>
                          <div className="text-sm text-gray-600">
                            Especialista en <strong>{creadora.especialidadPilar}</strong>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-purple-600">
                            {creadora.estadisticas.seguidoresTotal.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">seguidores totales</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-gray-900">{creadora.estadisticas.engagementPromedio}%</div>
                          <div className="text-xs text-gray-600">Engagement</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-green-600">+{creadora.estadisticas.crecimientoSemanal}</div>
                          <div className="text-xs text-gray-600">Sem.</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-blue-600">Estado</div>
                          <div className="text-xs text-gray-600">Activa</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-orange-600">{creadora.beatsCreativos.length}</div>
                          <div className="text-xs text-gray-600">Beats</div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Mejor día:</span>
                            <span className="font-medium">{creadora.performance.mejorDia}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-600">Horario óptimo:</span>
                            <span className="font-medium">{creadora.performance.mejorHorario}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Panel de Detalles */}
            <div className="space-y-6">
              {creadoraSeleccionada ? (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Análisis Detallado</h3>
                    <button
                      onClick={() => setCreadoraSeleccionada(null)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Header con avatar */}
                    <div className="text-center">
                      <img
                        src={creadoraSeleccionada.avatar}
                        alt={creadoraSeleccionada.nombre}
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                      />
                      <h4 className="font-bold text-gray-900">{creadoraSeleccionada.nombre}</h4>
                      <div className={`text-xs px-3 py-1 rounded-full inline-block bg-gradient-to-r ${obtenerColorArquetipo(creadoraSeleccionada.arquetipo)} text-white mt-2`}>
                        {creadoraSeleccionada.arquetipo}
                      </div>
                    </div>

                    {/* Métricas por Red Social */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Rendimiento por Red</h5>
                      
                      {/* Instagram */}
                      <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <i className="ri-instagram-line text-pink-600"></i>
                            <span className="font-medium text-gray-900">Instagram</span>
                          </div>
                          <span className="text-sm font-bold text-gray-700">
                            {creadoraSeleccionada.redesSociales.instagram.seguidores.toLocaleString()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <div className="text-gray-600">Orgánico</div>
                            <div className="font-bold text-pink-600">{creadoraSeleccionada.redesSociales.instagram.engagementOrganico}%</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Pagado</div>
                            <div className="font-bold text-purple-600">{creadoraSeleccionada.redesSociales.instagram.engagementPagado}%</div>
                          </div>
                        </div>

                        {/* Rendimiento de Beats por Semana - Instagram */}
                        <div className="mt-4 pt-3 border-t border-pink-200">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-700">Rendimiento Beats Esta Semana</span>
                            <div className="flex items-center text-xs text-pink-600">
                              <i className="ri-information-line mr-1"></i>
                              <span>Promedio semanal</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {creadoraSeleccionada.beatsCreativos.map((beat, index) => (
                              <div key={index} className="flex items-center justify-between text-xs">
                                <span className="text-gray-600 truncate flex-1 mr-2">{beat.nombre}</span>
                                <div className="flex space-x-3">
                                  <span className="font-semibold text-pink-700">
                                    {(beat.engagementPromedio * 0.85).toFixed(1)}%
                                  </span>
                                  <span className="text-gray-500">
                                    {Math.round(beat.alcancePromedio * 0.6).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 p-2 bg-pink-100 rounded text-xs text-pink-800">
                            <i className="ri-lightbulb-line mr-1"></i>
                            <strong>Nota:</strong> Instagram favorece contenido visual estático. Los beats funcionan mejor en formato carrusel y stories interactivas.
                          </div>
                        </div>
                      </div>

                      {/* TikTok */}
                      <div className="bg-gradient-to-r from-gray-50 to-black rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <i className="ri-tiktok-line text-gray-900"></i>
                            <span className="font-medium text-gray-900">TikTok</span>
                          </div>
                          <span className="text-sm font-bold text-gray-700">
                            {creadoraSeleccionada.redesSociales.tiktok.seguidores.toLocaleString()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <div className="text-gray-600">Orgánico</div>
                            <div className="font-bold text-gray-900">{creadoraSeleccionada.redesSociales.tiktok.engagementOrganico}%</div>
                          </div>
                          <div>
                            <div className="text-gray-600">Pagado</div>
                            <div className="font-bold text-gray-700">{creadoraSeleccionada.redesSociales.tiktok.engagementPagado}%</div>
                          </div>
                        </div>

                        {/* Rendimiento de Beats por Semana - TikTok */}
                        <div className="mt-4 pt-3 border-t border-gray-300">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-gray-700">Rendimiento Beats Esta Semana</span>
                            <div className="flex items-center text-xs text-gray-600">
                              <i className="ri-information-line mr-1"></i>
                              <span>Promedio semanal</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {creadoraSeleccionada.beatsCreativos.map((beat, index) => (
                              <div key={index} className="flex items-center justify-between text-xs">
                                <span className="text-gray-600 truncate flex-1 mr-2">{beat.nombre}</span>
                                <div className="flex space-x-3">
                                  <span className="font-semibold text-gray-900">
                                    {(beat.engagementPromedio * 1.15).toFixed(1)}%
                                  </span>
                                  <span className="text-gray-600">
                                    {Math.round(beat.alcancePromedio * 0.4).toLocaleString()}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 p-2 bg-gray-100 rounded text-xs text-gray-800">
                            <i className="ri-lightbulb-line mr-1"></i>
                            <strong>Nota:</strong> TikTok premia contenido auténtico y dinámico. Los beats creativos tienen más engagement que en Instagram.
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ejes ALMA Dominantes */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Ejes ALMA Dominantes</h5>
                      <div className="flex flex-wrap gap-2">
                        {creadoraSeleccionada.ejesALMADominantes.map((eje, index) => (
                          <span
                            key={index}
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                          >
                            {eje}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Capital Simbólico */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Capital Simbólico Target</h5>
                      <div className="space-y-1">
                        {creadoraSeleccionada.capitalSimbolicoTarget.map((capital, index) => (
                          <div key={index} className="text-sm text-gray-700 bg-yellow-50 rounded px-2 py-1">
                            {capital}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Beats Activos */}
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Beats Creativos Activos</h5>
                      <div className="space-y-2">
                        {creadoraSeleccionada.beatsCreativos.map((beat) => (
                          <div
                            key={beat.id}
                            className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
                            onClick={() => {
                              setBeatSeleccionado(beat);
                              setMostrarModalBeat(true);
                            }}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-gray-900">{beat.nombre}</span>
                              <span className={`text-xs px-2 py-1 rounded-full ${obtenerColorEstadoBeat(beat.estadoImplementacion)}`}>
                                {beat.estadoImplementacion}
                              </span>
                            </div>
                            <div className="text-xs text-gray-600 mb-2">{beat.descripcion}</div>
                            <div className="flex justify-between text-xs text-gray-500">
                              <span>Engagement: {beat.engagementPromedio}%</span>
                              <span>Estado: Activo</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-user-heart-line text-gray-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona una Creadora</h3>
                  <p className="text-gray-600 text-sm">
                    Haz clic en cualquier creadora para ver su análisis detallado, rendimiento por red social y beats creativos activos.
                  </p>
                </div>
              )}

              {/* Panel de Estadísticas Generales */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  <i className="ri-bar-chart-2-line text-purple-600 mr-2"></i>
                  Resumen del Ecosistema
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Creadoras Activas</span>
                    <span className="font-bold text-purple-600">{creadoras.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Beats en Desarrollo</span>
                    <span className="font-bold text-blue-600">{beatsDatabase.filter(b => b.estadoImplementacion === 'testing').length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Alcance Semanal Total</span>
                    <span className="font-bold text-green-600">
                      {creadoras.reduce((acc, c) => acc + c.estadisticas.alcanceSemanal, 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Estado General</span>
                    <span className="font-bold text-orange-600">Crecimiento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vista de Análisis Detallado */}
        {vistaActiva === 'analisis' && creadoraSeleccionada && (
          <div className="space-y-8">
            {/* Header del análisis */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={creadoraSeleccionada.avatar}
                  alt={creadoraSeleccionada.nombre}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{creadoraSeleccionada.nombre}</h2>
                  <div className={`text-sm px-3 py-1 rounded-full inline-block bg-gradient-to-r ${obtenerColorArquetipo(creadoraSeleccionada.arquetipo)} text-white`}>
                    {creadoraSeleccionada.arquetipo}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{creadoraSeleccionada.estadisticas.seguidoresTotal.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Seguidores Totales</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">+{creadoraSeleccionada.estadisticas.crecimientoSemanal}</div>
                  <div className="text-sm text-gray-600">Crecimiento Semanal</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{creadoraSeleccionada.estadisticas.engagementPromedio}%</div>
                  <div className="text-sm text-gray-600">Engagement Promedio</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">Activa</div>
                  <div className="text-sm text-gray-600">Estado</div>
                </div>
              </div>
            </div>

            {/* Análisis por Red Social */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Instagram Analysis */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-instagram-line text-pink-600 mr-2"></i>
                  Análisis Instagram
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-pink-50 rounded-lg p-4">
                      <div className="text-lg font-bold text-pink-600">{creadoraSeleccionada.redesSociales.instagram.seguidores.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Seguidores</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="text-lg font-bold text-purple-600">+{creadoraSeleccionada.redesSociales.instagram.crecimientoSemanal}</div>
                      <div className="text-sm text-gray-600">Crecimiento/sem</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Engagement Comparison</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Orgánico</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-pink-500 h-2 rounded-full" 
                              style={{ width: `${creadoraSeleccionada.redesSociales.instagram.engagementOrganico * 5}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-pink-600">{creadoraSeleccionada.redesSociales.instagram.engagementOrganico}%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Pagado</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-purple-500 h-2 rounded-full" 
                              style={{ width: `${creadoraSeleccionada.redesSociales.instagram.engagementPagado * 4}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-purple-600">{creadoraSeleccionada.redesSociales.instagram.engagementPagado}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Insights Instagram</h5>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>• Mejor performance en {creadoraSeleccionada.performance.formatoEstrella}</div>
                      <div>• Horario óptimo: {creadoraSeleccionada.performance.mejorHorario}</div>
                      <div>• Alcance semanal: {creadoraSeleccionada.redesSociales.instagram.alcanceSemanal.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TikTok Analysis */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <i className="ri-tiktok-line text-gray-900 mr-2"></i>
                  Análisis TikTok
                </h3>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-lg font-bold text-gray-900">{creadoraSeleccionada.redesSociales.tiktok.seguidores.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Seguidores</div>
                    </div>
                    <div className="bg-black rounded-lg p-4">
                      <div className="text-lg font-bold text-white">+{creadoraSeleccionada.redesSociales.tiktok.crecimientoSemanal}</div>
                      <div className="text-sm text-gray-300">Crecimiento/sem</div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Engagement Comparison</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Orgánico</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gray-900 h-2 rounded-full" 
                              style={{ width: `${creadoraSeleccionada.redesSociales.tiktok.engagementOrganico * 3}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-gray-900">{creadoraSeleccionada.redesSociales.tiktok.engagementOrganico}%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Pagado</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gray-700 h-2 rounded-full" 
                              style={{ width: `${creadoraSeleccionada.redesSociales.tiktok.engagementPagado * 3}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-gray-700">{creadoraSeleccionada.redesSociales.tiktok.engagementPagado}%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-2">Insights TikTok</h5>
                    <div className="space-y-1 text-sm text-gray-700">
                      <div>• Temática top: {creadoraSeleccionada.performance.tematicaTop}</div>
                      <div>• Día óptimo: {creadoraSeleccionada.performance.mejorDia}</div>
                      <div>• Alcance semanal: {creadoraSeleccionada.redesSociales.tiktok.alcanceSemanal.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Análisis ALMA Específico */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                <i className="ri-dna-line text-purple-600 mr-2"></i>
                Análisis ALMA Específico
              </h3>

              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Ejes Técnicos Dominantes</h4>
                  <div className="space-y-3">
                    {creadoraSeleccionada.ejesALMADominantes.map((eje, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                        <span className="font-medium text-purple-800">{eje}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-purple-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-sm font-bold text-purple-600">Alto</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Capital Simbólico Activado</h4>
                  <div className="space-y-2">
                    {creadoraSeleccionada.capitalSimbolicoTarget.map((capital, index) => (
                      <div key={index} className="p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                        <div className="text-sm font-medium text-yellow-800">{capital}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <h5 className="font-medium text-gray-900 mb-2">Recomendaciones ALMA Personalizadas</h5>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start space-x-2">
                    <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
                    <span>Potenciar contenido en horario {creadoraSeleccionada.performance.mejorHorario} para maximizar {creadoraSeleccionada.especialidadPilar}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
                    <span>Desarrollar serie temática basada en {creadoraSeleccionada.performance.tematicaTop} para activar ejes dominantes</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <i className="ri-arrow-right-s-line text-purple-600 mt-0.5"></i>
                    <span>Incrementar contenido pagado en TikTok debido al alto engagement orgánico ({creadoraSeleccionada.redesSociales.tiktok.engagementOrganico}%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Vista de Beats Creativos */}
        {vistaActiva === 'beats' && (
          <div className="space-y-8">
            {/* Header de Beats */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                <i className="ri-music-2-line text-purple-600 mr-3"></i>
                Laboratorio de Beats Creativos
              </h2>
              <p className="text-gray-600 mb-6">
                Optimización y análisis de beats creativos basados en metodología ALMA para maximizar resonancia auténtica
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{beatsDatabase.filter(b => b.estadoImplementacion === 'activo').length}</div>
                  <div className="text-sm text-gray-600">Beats Activos</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{beatsDatabase.filter(b => b.estadoImplementacion === 'testing').length}</div>
                  <div className="text-sm text-gray-600">En Testing</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">{beatsDatabase.filter(b => b.estadoImplementacion === 'propuesto').length}</div>
                  <div className="text-sm text-gray-600">Propuestos</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">Positivo</div>
                  <div className="text-sm text-gray-600">Resultado General</div>
                </div>
              </div>
            </div>

            {/* Lista de Beats */}
            <div className="grid lg:grid-cols-2 gap-6">
              {beatsDatabase.map((beat) => (
                <div
                  key={beat.id}
                  className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => {
                    setBeatSeleccionado(beat);
                    setMostrarModalBeat(true);
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{beat.nombre}</h3>
                      <p className="text-sm text-gray-600 mb-3">{beat.descripcion}</p>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className={`px-2 py-1 rounded-full ${obtenerColorEstadoBeat(beat.estadoImplementacion)}`}>
                          {beat.estadoImplementacion}
                        </span>
                        <span className="text-gray-600">
                          <i className="ri-building-4-line mr-1"></i>
                          {beat.pilarAsociado}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-purple-600">{beat.engagementPromedio}%</div>
                      <div className="text-xs text-gray-500">engagement</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Ejemplo:</div>
                      <div className="text-sm text-gray-600 bg-gray-50 rounded p-2 italic">
                        "{beat.ejemplo}"
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="text-center">
                        <div className="font-bold text-green-600">Activo</div>
                        <div className="text-xs text-gray-600">Estado</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-blue-600">{beat.alcancePromedio.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Alcance</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-orange-600">{beat.frecuenciaRecomendada}</div>
                        <div className="text-xs text-gray-600">Frecuencia</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-1">Ejes ALMA:</div>
                      <div className="flex flex-wrap gap-1">
                        {beat.ejesALMAActivados.map((eje, index) => (
                          <span key={index} className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                            {eje}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vista Comparativa */}
        {vistaActiva === 'comparativa' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                <i className="ri-bar-chart-grouped-line text-purple-600 mr-3"></i>
                Análisis Comparativo de Creadoras
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Métrica</th>
                      <th className="text-center py-3 px-4 font-semibold text-purple-600">Ana María</th>
                      <th className="text-center py-3 px-4 font-semibold text-blue-600">Sofia</th>
                      <th className="text-center py-3 px-4 font-semibold text-green-600">Carmen</th>
                      <th className="text-center py-3 px-4 font-semibold text-gray-600">Benchmark</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analisisComparativo.map((analisis, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{analisis.metrica}</td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-bold text-purple-600">
                            {analisis.creadora1}
                            {analisis.unidad === '%' && '%'}
                          </span>
                          {analisis.unidad === 'seguidores' && <span className="text-xs text-gray-500 ml-1">seg</span>}
                          {analisis.unidad === 'impresiones' && <span className="text-xs text-gray-500 ml-1">imp</span>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-bold text-blue-600">
                            {analisis.creadora2}
                            {analisis.unidad === '%' && '%'}
                          </span>
                          {analisis.unidad === 'seguidores' && <span className="text-xs text-gray-500 ml-1">seg</span>}
                          {analisis.unidad === 'impresiones' && <span className="text-xs text-gray-500 ml-1">imp</span>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-bold text-green-600">
                            {analisis.creadora3}
                            {analisis.unidad === '%' && '%'}
                          </span>
                          {analisis.unidad === 'seguidores' && <span className="text-xs text-gray-500 ml-1">seg</span>}
                          {analisis.unidad === 'impresiones' && <span className="text-xs text-gray-500 ml-1">imp</span>}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="font-medium text-gray-600">
                            {analisis.benchmark}
                            {analisis.unidad === '%' && '%'}
                          </span>
                          {analisis.unidad === 'seguidores' && <span className="text-xs text-gray-500 ml-1">seg</span>}
                          {analisis.unidad === 'impresiones' && <span className="text-xs text-gray-500 ml-1">imp</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-800 mb-2">Ana María - Guardiana</h4>
                  <div className="space-y-1 text-sm text-purple-700">
                    <div>✓ Líder en estabilidad y crecimiento constante</div>
                    <div>✓ Mejor performance en contenido familiar</div>
                    <div>✓ Resultados sólidos y predecibles</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">Sofia - Anti-Performance</h4>
                  <div className="space-y-1 text-sm text-blue-700">
                    <div>🔥 Engagement más alto en ambas plataformas</div>
                    <div>🔥 Crecimiento acelerado y resultados superiores</div>
                    <div>🔥 Máxima resonancia auténtica</div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                  <h4 className="font-bold text-green-800 mb-2">Carmen - Consciente</h4>
                  <div className="space-y-1 text-sm text-green-700">
                    <div>🎯 Audiencia más cualificada y leal</div>
                    <div>🎯 Engagement consistente y duradero</div>
                    <div>🎯 Mejor conversión en productos wellness</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Beat Detallado */}
        {mostrarModalBeat && beatSeleccionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">{beatSeleccionado.nombre}</h2>
                    <p className="text-purple-100">{beatSeleccionado.pilarAsociado}</p>
                  </div>
                  <button
                    onClick={() => setMostrarModalBeat(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">{beatSeleccionado.engagementPromedio}%</div>
                    <div className="text-sm text-gray-600">Engagement Promedio</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">{beatSeleccionado.alcancePromedio.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Alcance Promedio</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">Activo</div>
                    <div className="text-sm text-gray-600">Estado</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Descripción del Beat</h3>
                  <p className="text-gray-700 mb-4">{beatSeleccionado.descripcion}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Ejemplo de Implementación:</h4>
                    <p className="text-sm text-gray-700 italic">"{beatSeleccionado.ejemplo}"</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Especificaciones Técnicas</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Frecuencia:</span>
                        <span className="font-medium">{beatSeleccionado.frecuenciaRecomendada}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Mejor horario:</span>
                        <span className="font-medium">{beatSeleccionado.mejorHorario}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dificultad:</span>
                        <span className={`px-2 py-1 rounded text-xs ${
                          beatSeleccionado.dificultadProduccion === 'baja' ? 'bg-green-100 text-green-800' :
                          beatSeleccionado.dificultadProduccion === 'media' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {beatSeleccionado.dificultadProduccion}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">Recursos Necesarios</h3>
                    <div className="space-y-2">
                      {beatSeleccionado.recursosNecesarios.map((recurso, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-700">
                          <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                          {recurso}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Ejes ALMA Activados</h3>
                  <div className="flex flex-wrap gap-2">
                    {beatSeleccionado.ejesALMAActivados.map((eje, index) => (
                      <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {eje}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">KPIs Principales</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {beatSeleccionado.kpisPrincipales.map((kpi, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700 bg-blue-50 rounded p-2">
                        <i className="ri-target-line text-blue-600 mr-2"></i>
                        {kpi}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Evolución de Performance</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="font-medium text-gray-600">Semana</div>
                      <div className="font-medium text-gray-600">Engagement</div>
                      <div className="font-medium text-gray-600">Alcance</div>
                      <div className="font-medium text-gray-600">Implementaciones</div>
                    </div>
                    {beatSeleccionado.evolucionSemanal.map((semana, index) => (
                      <div key={index} className="grid grid-cols-4 gap-4 text-sm py-2 border-t border-gray-200">
                        <div>{semana.semana}</div>
                        <div className="font-semibold text-green-600">{semana.engagement}%</div>
                        <div className="font-semibold text-blue-600">{semana.alcance.toLocaleString()}</div>
                        <div className="font-semibold text-purple-600">{semana.implementaciones}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
