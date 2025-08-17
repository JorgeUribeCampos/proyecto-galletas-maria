
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FormatoContenido {
  id: string;
  nombre: string;
  tipo: string;
  impresiones: number;
  alcance: number;
  engagement: number;
  clics: number;
  shares: number;
  engagementRate: number;
  oportunidad: number;
  pilar: string;
  estado: 'saturado' | 'oportunidad' | 'equilibrado';
  tendencia: 'subiendo' | 'bajando' | 'estable';
  ejesALMADetectados: string[];
  capitalObjetivo: string;
  perfilMaternal: string;
}

interface ContenidoPropuesto {
  id: string;
  titulo: string;
  formato: string;
  pilar: string;
  tono: string;
  topicosRelacionados: string[];
  kpis: string[];
  recursos: string;
  presupuesto: string;
  cronograma: string;
  prioridad: 'alta' | 'media' | 'baja';
  ejesALMATarget: string[];
  capitalSimbolicoObjetivo: string[];
  perfilMaternalTarget: string;
}

export default function ContenidosPage() {
  const [filtroFormato, setFiltroFormato] = useState('todos');
  const [filtroEstado, setFiltroEstado] = useState('todos');
  const [formatoSeleccionado, setFormatoSeleccionado] = useState<FormatoContenido | null>(null);
  const [mostrarFabrica, setMostrarFabrica] = useState(false);
  const [contenidoSeleccionado, setContenidoSeleccionado] = useState<ContenidoPropuesto | null>(null);
  const [mostrarEngagementModal, setMostrarEngagementModal] = useState(false);
  const [mostrarOportunidadModal, setMostrarOportunidadModal] = useState(false);
  const [oportunidadSeleccionada, setOportunidadSeleccionada] = useState<FormatoContenido | null>(null);
  const [mostrarIndiceModal, setMostrarIndiceModal] = useState(false);

  const formatos: FormatoContenido[] = [
    {
      id: '1',
      nombre: 'Testimonios Maternos Reales',
      tipo: 'Video',
      impresiones: 245000,
      alcance: 180000,
      engagement: 28600,
      clics: 4200,
      shares: 2400,
      engagementRate: 15.9,
      oportunidad: 94,
      pilar: 'DIARY OF REAL MOMS',
      estado: 'oportunidad',
      tendencia: 'subiendo',
      ejesALMADetectados: ['Narrativo', 'Emocional', 'Comunitario'],
      capitalObjetivo: 'Cultural: Medio, Social: Alto',
      perfilMaternal: 'Madres auténticas, anti-performance',
    },
    {
      id: '2',
      nombre: 'Rituales Familiares Documentados',
      tipo: 'Video',
      impresiones: 128000,
      alcance: 95000,
      engagement: 16150,
      clics: 3250,
      shares: 1840,
      engagementRate: 17.0,
      oportunidad: 91,
      pilar: 'REAL FAMILY MOMENTS',
      estado: 'oportunidad',
      tendencia: 'subiendo',
      ejesALMADetectados: ['Simbólico', 'Territorial', 'Sensorial'],
      capitalObjetivo: 'Social: Alto, Simbólico Puro: Medio',
      perfilMaternal: 'Transmisoras de tradiciones',
    },
    {
      id: '3',
      nombre: 'Momentos de Placer Consciente',
      tipo: 'Imagen',
      impresiones: 189000,
      alcance: 142000,
      engagement: 22680,
      clics: 3780,
      shares: 1890,
      engagementRate: 16.0,
      oportunidad: 87,
      pilar: 'AUTHENTIC TREATS',
      estado: 'oportunidad',
      tendencia: 'subiendo',
      ejesALMADetectados: ['Sensorial', 'Emocional', 'Simbólico'],
      capitalObjetivo: 'Económico: Medio, Cultural: Medio',
      perfilMaternal: 'Madres que se premian conscientemente',
    },
    {
      id: '4',
      nombre: 'Stories de Conexión Intergeneracional',
      tipo: 'Historia',
      impresiones: 156000,
      alcance: 120000,
      engagement: 21600,
      clics: 2880,
      shares: 720,
      engagementRate: 18.0,
      oportunidad: 89,
      pilar: 'MINDFUL NOURISHMENT',
      estado: 'oportunidad',
      tendencia: 'subiendo',
      ejesALMADetectados: ['Narrativo', 'Territorial', 'Comunitario'],
      capitalObjetivo: 'Cultural: Alto, Social: Alto',
      perfilMaternal: 'Puentes generacionales',
    },
    {
      id: '5',
      nombre: 'Contenido Performance Aspiracional',
      tipo: 'Video',
      impresiones: 310000,
      alcance: 220000,
      engagement: 18600,
      clics: 2480,
      shares: 620,
      engagementRate: 8.5,
      oportunidad: 23,
      pilar: 'Performance Social',
      estado: 'saturado',
      tendencia: 'bajando',
      ejesALMADetectados: ['Simbólico', 'Narrativo'],
      capitalObjetivo: 'Económico: Alto, Simbólico Puro: Alto',
      perfilMaternal: 'Madres performativas',
    },
    {
      id: '6',
      nombre: 'Posts Genéricos de Productos',
      tipo: 'Imagen',
      impresiones: 67000,
      alcance: 52000,
      engagement: 3380,
      clics: 520,
      shares: 130,
      engagementRate: 6.5,
      oportunidad: 15,
      pilar: 'Promocional Tradicional',
      estado: 'saturado',
      tendencia: 'bajando',
      ejesALMADetectados: ['Sensorial'],
      capitalObjetivo: 'Económico: Variable',
      perfilMaternal: 'Sin segmentación específica',
    },
  ];

  const contenidosPropuestos: ContenidoPropuesto[] = [
    {
      id: '1',
      titulo: 'Serie: "Confesiones de Maternidad Real"',
      formato: 'Video Testimonial',
      pilar: 'DIARY OF REAL MOMS',
      tono: 'Vulnerable pero esperanzador',
      topicosRelacionados: ['Performance vs Realidad Maternal', 'Rituales de Descompresión'],
      kpis: ['Engagement Rate > 18%', 'Comentarios auténticos > 85%', 'Shares con mensaje personal > 40%'],
      recursos: '1 directora sensible, madres reales, 3 días/mes',
      presupuesto: '$4,500/mes',
      cronograma: '2 confesiones/mes por 6 meses',
      prioridad: 'alta',
      ejesALMATarget: ['Narrativo', 'Emocional', 'Comunitario'],
      capitalSimbolicoObjetivo: ['Reducir presión por Capital Simbólico Puro', 'Aumentar Capital Social auténtico'],
      perfilMaternalTarget: 'Madres cansadas de performar perfección',
    },
    {
      id: '2',
      titulo: 'Documental: "Tradiciones que Alimentan"',
      formato: 'Contenido Intergeneracional',
      pilar: 'REAL FAMILY MOMENTS',
      tono: 'Nostálgico y reverent',
      topicosRelacionados: ['Tradiciones Alimentarias Heredadas', 'Conexión Intergeneracional'],
      kpis: ['Tiempo de visualización > 80%', 'Menciones familiares > 60%', 'Guardados > 25%'],
      recursos: '1 antropólogo, 1 camarógrafo, familias voluntarias',
      presupuesto: '$8,000/serie',
      cronograma: '1 documental/trimestre por 1 año',
      prioridad: 'alta',
      ejesALMATarget: ['Territorial', 'Simbólico', 'Narrativo'],
      capitalSimbolicoObjetivo: ['Potenciar Capital Cultural familiar', 'Fortalecer Capital Social intergeneracional'],
      perfilMaternalTarget: 'Madres transmisoras con raíces familiares fuertes',
    },
    {
      id: '3',
      titulo: 'Experiencias: "Momentos de Placer Consciente"',
      formato: 'Contenido Sensorial + Stories',
      pilar: 'AUTHENTIC TREATS',
      tono: 'Mindful y placentero',
      topicosRelacionados: ['Momentos de Placer Consciente', 'Escape Creativo'],
      kpis: ['Engagement sensorial > 16%', 'Tiempo contemplación > 45seg', 'Recreaciones > 30%'],
      recursos: '1 fotógrafo food, 1 especialista mindfulness',
      presupuesto: '$3,200/mes',
      cronograma: '4 experiencias/mes por 4 meses',
      prioridad: 'media',
      ejesALMATarget: ['Sensorial', 'Emocional', 'Simbólico'],
      capitalSimbolicoObjetivo: ['Legitimar Capital Cultural del autocuidado', 'Reducir culpa maternal'],
      perfilMaternalTarget: 'Madres que buscan equilibrio sin culpa',
    },
  ];

  const formatosFiltrados = formatos.filter((formato) => {
    const cumpleFormato = filtroFormato === 'todos' || formato.tipo.toLowerCase() === filtroFormato;
    const cumpleEstado = filtroEstado === 'todos' || formato.estado === filtroEstado;
    return cumpleFormato && cumpleEstado;
  });

  const obtenerColorEstado = (estado: string) => {
    switch (estado) {
      case 'saturado':
        return 'from-red-400 to-red-600';
      case 'oportunidad':
        return 'from-green-400 to-green-600';
      default:
        return 'from-yellow-400 to-yellow-600';
    }
  };

  const obtenerIconoTendencia = (tendencia: string) => {
    switch (tendencia) {
      case 'subiendo':
        return 'ri-arrow-up-line text-green-600';
      case 'bajando':
        return 'ri-arrow-down-line text-red-600';
      default:
        return 'ri-arrow-right-line text-yellow-600';
    }
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

  const obtenerColorPilar = (pilar: string) => {
    switch (pilar) {
      case 'DIARY OF REAL MOMS':
        return 'bg-pink-100 text-pink-800';
      case 'REAL FAMILY MOMENTS':
        return 'bg-blue-100 text-blue-800';
      case 'AUTHENTIC TREATS':
        return 'bg-green-100 text-green-800';
      case 'MINDFUL NOURISHMENT':
        return 'bg-orange-100 text-orange-800';
      case 'RECIPES THAT HUG':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link href="/contenidos" className="text-blue-600 font-semibold">
                Contenidos
              </Link>
              <Link href="/insights" className="text-gray-600 hover:text-blue-600 transition-colors">
                Insights
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contenidos Propietarios</h1>
          <p className="text-xl text-gray-600 mb-6">
            Análisis ALMA de formatos: detecta ejes técnicos, capital simbólico y perfiles maternos objetivo
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setMostrarFabrica(false)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      !mostrarFabrica ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <i className="ri-dna-line mr-2"></i>
                    Diagnóstico ALMA
                  </button>
                  <button
                    onClick={() => setMostrarFabrica(true)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      mostrarFabrica ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    <i className="ri-settings-3-line mr-2"></i>
                    Fábrica de Contenido
                  </button>
                </div>

                {!mostrarFabrica && (
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                      <span>ALMA Detectado</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span>Alta Oportunidad</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span>Saturado</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {!mostrarFabrica ? (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Análisis ALMA de Formatos de Contenido
                </h3>
                <p className="text-gray-600 mb-6">
                  Cada formato analizado bajo los 6 ejes técnicos del ALMA con detección de capital simbólico
                </p>
                <div className="grid gap-4">
                  {formatosFiltrados.map((formato) => (
                    <div
                      key={formato.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                      onClick={() => setFormatoSeleccionado(formato)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-4 h-4 rounded-full bg-gradient-to-br ${obtenerColorEstado(formato.estado)}`}
                          ></div>
                          <h4 className="font-medium text-gray-900">{formato.nombre}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${obtenerColorPilar(formato.pilar)}`}
                          >
                            {formato.pilar}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <i
                            className={`${obtenerIconoTendencia(formato.tendencia)} text-sm`}
                          ></i>
                          <span
                            className="text-sm font-medium text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              setOportunidadSeleccionada(formato);
                              setMostrarOportunidadModal(true);
                            }}
                          >
                            {formato.oportunidad}% Oportunidad
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-3">
                        <div className="text-sm">
                          <div className="text-gray-500">Perfil Maternal</div>
                          <div className="font-medium text-purple-600">{formato.perfilMaternal}</div>
                        </div>
                        <div className="text-sm">
                          <div className="text-gray-500">Capital Objetivo</div>
                          <div className="font-medium text-green-600">{formato.capitalObjetivo}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs text-gray-500">Ejes ALMA:</span>
                        {formato.ejesALMADetectados.map((eje, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {eje}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Engagement</div>
                          <div className="font-semibold">{formato.engagementRate}%</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Alcance</div>
                          <div className="font-semibold">{formato.alcance.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Shares</div>
                          <div className="font-semibold">{formato.shares.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Clics</div>
                          <div className="font-semibold">{formato.clics.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <i className="ri-treasure-map-line text-purple-600 mr-2"></i>
                  Matriz de Capital Simbólico (Bourdieu)
                </h3>
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <i className="ri-book-line text-blue-600 text-xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Cultural</h4>
                      <p className="text-sm text-gray-600">Conocimiento, educación, refinamiento</p>
                      <div className="mt-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        Tradiciones, Arte
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <i className="ri-money-dollar-circle-line text-green-600 text-xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Económico</h4>
                      <p className="text-sm text-gray-600">Recursos financieros, lujo, poder adquisitivo</p>
                      <div className="mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                        Premium, Exclusivo
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <i className="ri-group-line text-purple-600 text-xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Social</h4>
                      <p className="text-sm text-gray-600">Conexiones, redes, pertenencia</p>
                      <div className="mt-2 text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                        Comunidad, Vínculos
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <i className="ri-award-line text-pink-600 text-xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Simbólico Puro</h4>
                      <p className="text-sm text-gray-600">Prestigio, reconocimiento, honor</p>
                      <div className="mt-2 text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded">
                        Estatus, Respeto
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {formatoSeleccionado ? (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{formatoSeleccionado.nombre}</h3>
                    <button
                      onClick={() => setFormatoSeleccionado(null)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <i className="ri-treasure-map-line text-purple-600 mr-2"></i>
                        <span className="font-medium text-gray-900">Pilar de contenido</span>
                      </div>
                      <div
                        className={`text-sm font-semibold px-3 py-1 rounded-full inline-block ${obtenerColorPilar(
                          formatoSeleccionado.pilar
                        )}`}
                      >
                        {formatoSeleccionado.pilar}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Perfil Maternal Target</h4>
                      <p className="text-sm text-gray-600 bg-pink-50 rounded-lg p-3">
                        {formatoSeleccionado.perfilMaternal}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Ejes ALMA Detectados</h4>
                      <div className="flex flex-wrap gap-1">
                        {formatoSeleccionado.ejesALMADetectados.map((eje, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {eje}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Capital Simbólico Detectado</h4>
                      <p className="text-sm text-gray-600 bg-yellow-50 rounded-lg p-3">
                        {formatoSeleccionado.capitalObjetivo}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Índice de Oportunidad ALMA</span>
                        <span
                          className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"
                          onClick={() => setMostrarIndiceModal(true)}
                        >
                          {formatoSeleccionado.oportunidad}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${formatoSeleccionado.oportunidad}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">
                          {formatoSeleccionado.engagementRate}%
                        </div>
                        <div className="text-sm text-gray-600">Engagement Rate</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <div className="text-xl font-bold text-gray-900">
                          {formatoSeleccionado.alcance.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Alcance</div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Estado ALMA</span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full capitalize ${
                            formatoSeleccionado.estado === 'oportunidad'
                              ? 'bg-green-100 text-green-800'
                              : formatoSeleccionado.estado === 'saturado'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {formatoSeleccionado.estado}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <i
                          className={`${obtenerIconoTendencia(formatoSeleccionado.tendencia)} mr-2`}
                        ></i>
                        <span className="capitalize">{formatoSeleccionado.tendencia}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-dna-line text-gray-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona un formato</h3>
                  <p className="text-gray-600 text-sm">
                    Haz clic en cualquier formato para ver análisis ALMA completo: ejes técnicos, capital simbólico y
                    perfil maternal.
                  </p>
                </div>
              )}

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <i className="ri-dna-line text-purple-600 mr-2"></i>
                  Insights del ALMA
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      <strong>Anti-performance</strong> es la tendencia dominante. Contenido auténtico supera 3x al
                      aspiracional.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      <strong>Capital Social</strong> sobre Capital Económico. Conexión auténtica genera más engagement.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Eje <strong>Territorial</strong> subutilizado. Oportunidad en contenido regionalizado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <i className="ri-dna-line text-purple-600 mr-2"></i>
                  Contenidos Propuestos por el ALMA
                </h3>
                <p className="text-gray-600 mb-6">
                  Propuestas basadas en análisis de los 6 ejes técnicos y 4 pilares estratégicos
                </p>
                <div className="space-y-4">
                  {contenidosPropuestos.map((contenido) => (
                    <div
                      key={contenido.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                      onClick={() => setContenidoSeleccionado(contenido)}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 mb-2">{contenido.titulo}</h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                            <span className="flex items-center">
                              <i className="ri-play-circle-line mr-1"></i>
                              {contenido.formato}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${obtenerColorPilar(contenido.pilar)}`}
                            >
                              {contenido.pilar}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600">
                            <strong>Target:</strong> {contenido.perfilMaternalTarget}
                          </div>
                        </div>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${obtenerColorPrioridad(
                            contenido.prioridad
                          )}`}
                        >
                          {contenido.prioridad}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className="text-xs text-gray-500">Ejes ALMA:</span>
                        {contenido.ejesALMATarget.map((eje, index) => (
                          <span
                            key={index}
                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                          >
                            {eje}
                          </span>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-gray-500">Presupuesto</div>
                          <div className="font-medium">{contenido.presupuesto}</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Cronograma</div>
                          <div className="font-medium">{contenido.cronograma}</div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t">
                        <div className="text-xs text-gray-500 mb-1">Capital Simbólico Objetivo:</div>
                        <div className="flex flex-wrap gap-1">
                          {contenido.capitalSimbolicoObjetivo.map((capital, index) => (
                            <span
                              key={index}
                              className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full"
                            >
                              {capital}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {contenidoSeleccionado ? (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Brief ALMA</h3>
                    <button
                      onClick={() => setContenidoSeleccionado(null)}
                      className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">{contenidoSeleccionado.titulo}</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        <strong>Tono ALMA:</strong> {contenidoSeleccionado.tono}
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-4">
                      <h5 className="font-medium text-gray-900 mb-2">Perfil Maternal Target</h5>
                      <p className="text-sm text-gray-700">{contenidoSeleccionado.perfilMaternalTarget}</p>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Ejes ALMA a Activar</h5>
                      <div className="flex flex-wrap gap-2">
                        {contenidoSeleccionado.ejesALMATarget.map((eje, index) => (
                          <span
                            key={index}
                            className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                          >
                            {eje}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Estrategia de Capital Simbólico</h5>
                      <div className="space-y-1">
                        {contenidoSeleccionado.capitalSimbolicoObjetivo.map((objetivo, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <i className="ri-arrow-right-s-line text-purple-600 mr-1"></i>
                            <span>{objetivo}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">KPIs ALMA</h5>
                      <div className="space-y-1">
                        {contenidoSeleccionado.kpis.map((kpi, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-700">
                            <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                            {kpi}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Recursos Necesarios</h5>
                      <p className="text-sm text-gray-700">{contenidoSeleccionado.recursos}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium text-gray-900 mb-1">Presupuesto</h5>
                        <p className="text-lg font-bold text-green-600">{contenidoSeleccionado.presupuesto}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 mb-1">Cronograma</h5>
                        <p className="text-sm text-gray-700">{contenidoSeleccionado.cronograma}</p>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors whitespace-nowrap">
                        <i className="ri-download-line mr-2"></i>
                        Descargar Brief ALMA
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-dna-line text-gray-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona una Propuesta</h3>
                  <p className="text-gray-600 text-sm">
                    Haz clic en cualquier propuesta ALMA para ver brief detallado con estrategia de capital simbólico y
                    perfil maternal.
                  </p>
                </div>
              )}

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <i className="ri-dna-line text-purple-600 mr-2"></i>
                  Recomendaciones ALMA
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Priorizar <strong>Eje Narrativo + Emocional</strong> - mayor resonancia en madres anti-performance
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Reducir presión por <strong>Capital Simbólico Puro</strong> - aumentar Capital Social auténtico
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      Activar <strong>Eje Territorial</strong> para personalización regional según NSE y contexto
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Formatos ALMA Activos</p>
                <p className="text-2xl font-bold text-purple-600">
                  {formatosFiltrados.filter(
                    (f) =>
                      f.pilar.includes('DIARY') ||
                      f.pilar.includes('REAL') ||
                      f.pilar.includes('AUTHENTIC') ||
                      f.pilar.includes('MINDFUL')
                  ).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-dna-line text-purple-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div
            className="bg-white rounded-xl shadow-sm p-6 cursor-pointer hover:shadow-lg transition-all"
            onClick={() => setMostrarEngagementModal(true)}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Engagement ALMA Promedio</p>
                <p className="text-2xl font-bold text-indigo-600">16.3%</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <i className="ri-heart-line text-indigo-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Capital Social Alto</p>
                <p className="text-2xl font-bold text-green-600">
                  {formatosFiltrados.filter((f) => f.capitalObjetivo.includes('Social: Alto')).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-group-line text-green-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Propuestas ALMA</p>
                <p className="text-2xl font-bold text-blue-600">{contenidosPropuestos.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-lightbulb-line text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>

        {mostrarEngagementModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-indigo-600 to-blue-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-heart-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Engagement ALMA Promedio</h2>
                      <div className="text-4xl font-bold text-blue-100">16.3%</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setMostrarEngagementModal(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border-l-4 border-indigo-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-information-line text-indigo-600 mr-2"></i>
                    ¿Qué significa 16.3% de Engagement ALMA?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Este <strong>NO es un engagement tradicional</strong> de redes sociales. Es una métrica específica que
                    mide la <strong>resonancia auténtica</strong> de tu contenido bajo el análisis ALMA. Mide conexión
                    emocional genuina, no solo interacciones superficiales.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <div className="text-sm text-indigo-800 font-medium">
                      🎯 <strong>Tu resultado:</strong> 16.3% indica <strong>Alto Engagement Auténtico</strong> -
                      contenido que resuena profundamente
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-bar-chart-line text-purple-600 mr-2"></i>
                    Tabla de Interpretación - Engagement ALMA
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rango
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Clasificación
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Descripción
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Estado
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-green-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-800">20%+</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <i className="ri-trophy-line mr-1"></i>
                              Excepcional
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Contenido viral auténtico</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <i className="ri-fire-line text-orange-500"></i> Viral
                          </td>
                        </tr>
                        <tr className="bg-blue-50 ring-2 ring-blue-300">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">15-19%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <i className="ri-heart-fill mr-1"></i>
                              Alto Engagement
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <strong>Contenido que resuena profundamente</strong>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">
                            <i className="ri-star-fill text-blue-600"></i> TU NIVEL: 16.3%
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-700">10-14%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <i className="ri-thumb-up-line mr-1"></i>
                              Moderado
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Contenido funcional</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <i className="ri-checkbox-circle-line text-yellow-500"></i> Estable
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-700">5-9%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              <i className="ri-arrow-down-line mr-1"></i>
                              Bajo
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Necesita optimización</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <i className="ri-tools-line text-orange-500"></i> Mejorar
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-700">&lt;5%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <i className="ri-error-warning-line mr-1"></i>
                              Crítico
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Revisar estrategia</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <i className="ri-alert-line text-red-500"></i> Urgente
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center">
                      <i className="ri-lightbulb-line text-blue-600 mr-2"></i>
                      <span className="text-sm font-medium text-blue-800">
                        🎯 <strong>Tu resultado:</strong> 16.3% indica <strong>Alto Engagement Auténtico</strong> -
                        contenido que resuena profundamente
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="ri-star-line mr-2"></i>
                    Resumen Ejecutivo
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    <strong>16.3% de Engagement ALMA significa que estás en el punto dulce</strong> - generas conexión
                    auténtica sin caer en contenido superficial. Tu audiencia no solo consume, sino que <strong>siente</strong>
                    tu contenido. Es un indicador de que tu estrategia anti-performance está funcionando perfectamente y que
                    las madres realmente se conectan con tu mensaje auténtico.
                  </p>
                </div>
              </div>

              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Análisis ALMA • Engagement auténtico vs superficial
                  </div>
                  <button
                    onClick={() => setMostrarEngagementModal(false)}
                    className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                  >
                    <i className="ri-check-line mr-2"></i>
                    Entendido
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {mostrarOportunidadModal && oportunidadSeleccionada && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-lightbulb-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Índice de Oportunidad ALMA</h2>
                      <div className="text-4xl font-bold text-blue-100">{oportunidadSeleccionada.oportunidad}%</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setMostrarOportunidadModal(false);
                      setOportunidadSeleccionada(null);
                    }}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-information-line text-blue-600 mr-2"></i>
                    ¿Qué significa {oportunidadSeleccionada.oportunidad}% de Oportunidad ALMA?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    El <strong>Índice de Oportunidad ALMA</strong> mide qué tan preparado está tu contenido para generar
                    <strong> resonancia auténtica profunda</strong> basado en los 6 ejes técnicos detectados y el análisis
                    de capital simbólico.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="text-sm text-blue-800 font-medium">
                      🎯 <strong>"{oportunidadSeleccionada.nombre}":</strong> {oportunidadSeleccionada.oportunidad}%
                      indica{` `}
                      {oportunidadSeleccionada.oportunidad >= 90
                        ? 'oportunidad excepcional'
                        : oportunidadSeleccionada.oportunidad >= 70
                        ? 'alta oportunidad'
                        : oportunidadSeleccionada.oportunidad >= 50
                        ? 'oportunidad moderada'
                        : oportunidadSeleccionada.oportunidad >= 30
                        ? 'oportunidad limitada'
                        : 'oportunidad crítica'}
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <i className="ri-compass-3-line text-purple-600 mr-2"></i>
                      Ejes ALMA Detectados
                    </h3>
                    <div className="space-y-2">
                      {oportunidadSeleccionada.ejesALMADetectados.map((eje, index) => (
                        <div key={index} className="flex items-center">
                          <i className="ri-checkbox-circle-fill text-purple-600 mr-2"></i>
                          <span className="text-sm font-medium text-gray-700">{eje}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                      <div className="text-xs text-purple-800 font-medium">
                        Múltiples ejes activos = Mayor potencial de resonancia auténtica
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <i className="ri-treasure-map-line text-green-600 mr-2"></i>
                      Capital Simbólico Target
                    </h3>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="text-sm text-green-800 font-medium mb-2">
                        {oportunidadSeleccionada.capitalObjetivo}
                      </div>
                      <div className="text-xs text-green-700">
                        Balance estratégico entre diferentes tipos de capital
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-sm text-gray-700">
                        <strong>Perfil Target:</strong> {oportunidadSeleccionada.perfilMaternal}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-bar-chart-line text-orange-600 mr-2"></i>
                    Interpretación del Índice de Oportunidad
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Rango
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Clasificación
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Potencial de Resonancia
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Recomendación
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr
                          className={oportunidadSeleccionada.oportunidad >= 90 ? 'bg-green-50 ring-2 ring-green-300' : ''}
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-800">90-100%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <i className="ri-trophy-line mr-1"></i>
                              Excepcional
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Resonancia auténtica garantizada</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Priorizar inmediatamente</td>
                        </tr>
                        <tr
                          className={
                            oportunidadSeleccionada.oportunidad >= 70 && oportunidadSeleccionada.oportunidad < 90
                              ? 'bg-blue-50 ring-2 ring-blue-300'
                              : ''
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-800">70-89%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              <i className="ri-star-line mr-1"></i>
                              Alta Oportunidad
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Conexión emocional profunda esperada</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Desarrollar estratégicamente</td>
                        </tr>
                        <tr
                          className={
                            oportunidadSeleccionada.oportunidad >= 50 && oportunidadSeleccionada.oportunidad < 70
                              ? 'bg-yellow-50 ring-2 ring-yellow-300'
                              : ''
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-yellow-700">50-69%</td>
                          <td className="px-6 py-4 whitespace-unwrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              <i className="ri-lightbulb-line mr-1"></i>
                              Moderada
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Potencial con optimización</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Mejorar ejes ALMA</td>
                        </tr>
                        <tr
                          className={
                            oportunidadSeleccionada.oportunidad >= 30 && oportunidadSeleccionada.oportunidad < 50
                              ? 'bg-orange-50 ring-2 ring-orange-300'
                              : ''
                          }
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-orange-700">30-49%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                              <i className="ri-alert-line mr-1"></i>
                              Limitada
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Requiere reestructuración</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Repensar estrategia</td>
                        </tr>
                        <tr className={oportunidadSeleccionada.oportunidad < 30 ? 'bg-red-50 ring-2 ring-red-300' : ''}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-red-700">&lt;30%</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                              <i className="ri-close-circle-line mr-1"></i>
                              Crítica
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">Riesgo de rechazo auténtico</td>
                          <td className="px-6 py-4 text-sm text-gray-500">Evitar o transformar</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <i className="ri-dna-line text-blue-600 mr-2"></i>
                      Factores ALMA
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Activación de múltiples ejes técnicos</div>
                      <div>• Coherencia en capital simbólico</div>
                      <div>• Alineación con perfil maternal</div>
                      <div>• Potencial anti-performance</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <i className="ri-heart-line text-green-600 mr-2"></i>
                      Resonancia Esperada
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Engagement emocional profundo</div>
                      <div>• Conexión auténtica genuina</div>
                      <div>• Compartidos con mensaje personal</div>
                      <div>• Construcción de comunidad</div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <i className="ri-target-line text-purple-600 mr-2"></i>
                      Objetivo Estratégico
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <div>• Diferenciación auténtica</div>
                      <div>• Construcción de capital social</div>
                      <div>• Reducción de performance</div>
                      <div>• Fidelización maternal</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="ri-lightbulb-line mr-2"></i>
                    Interpretación de tu {oportunidadSeleccionada.oportunidad}%
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {oportunidadSeleccionada.oportunidad >= 90 ? (
                      <></>
                    ) : oportunidadSeleccionada.oportunidad >= 70 ? (
                      <></>
                    ) : oportunidadSeleccionada.oportunidad >= 50 ? (
                      <></>
                    ) : oportunidadSeleccionada.oportunidad >= 30 ? (
                      <></>
                    ) : (
                      <></>
                    )}
                  </p>
                </div>
              </div>

              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Análisis ALMA • Oportunidad de resonancia auténtica
                  </div>
                  <button
                    onClick={() => {
                      setMostrarOportunidadModal(false);
                      setOportunidadSeleccionada(null);
                    }}
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                  >
                    <i className="ri-check-line mr-2"></i>
                    Entendido
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {mostrarIndiceModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-lightbulb-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Índice de Oportunidad ALMA</h2>
                      <p className="text-purple-100">Guía completa para interpretar y aplicar el índice</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMostrarIndiceModal(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Explicación Principal */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-information-line text-purple-600 mr-2"></i>
                    ¿Qué es el Índice de Oportunidad ALMA?
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    El <strong>Índice de Oportunidad ALMA</strong> es una métrica avanzada que mide el potencial de éxito de
                    tu contenido basándose en el análisis de los <strong>6 ejes técnicos</strong> y su alineación con
                    patrones maternos auténticos. No mide solo el rendimiento actual, sino la <strong>capacidad de generar
                    resonancia emocional profunda</strong>.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">6</div>
                        <div className="text-gray-700">Ejes Técnicos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">4</div>
                        <div className="text-gray-700">Pilares Estratégicos</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                        <div className="text-gray-700">Escala Máxima</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tabla de Ranking */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-trophy-line text-orange-600 mr-2"></i>
                    Tabla de Interpretación y Ranking
                  </h3>
                  <div className="overflow-hidden rounded-lg border border-gray-200 mb-6">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Rango</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Clasificación</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Descripción</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">Acción Recomendada</th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-700">ROI Esperado</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr className="bg-green-50 hover:bg-green-100 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-green-800">90-100%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-800">
                              <i className="ri-trophy-line mr-1"></i>
                              EXCEPCIONAL
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div>Resonancia auténtica garantizada</div>
                            <div className="text-xs text-gray-600 mt-1">Activación óptima de ejes ALMA</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="font-semibold text-green-700">PRIORIZAR INMEDIATAMENTE</div>
                            <div className="text-xs">Escalar producción</div>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="font-bold text-green-600">350-450%</div>
                          </td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-blue-800">70-89%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800">
                              <i className="ri-star-line mr-1"></i>
                              ALTA OPORTUNIDAD
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div>Conexión emocional profunda esperada</div>
                            <div className="text-xs text-gray-600 mt-1">Múltiples ejes alineados</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="font-semibold text-blue-700">DESARROLLAR ESTRATÉGICAMENTE</div>
                            <div className="text-xs">Invertir recursos</div>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="font-bold text-blue-600">250-350%</div>
                          </td>
                        </tr>
                        <tr className="bg-yellow-50 hover:bg-yellow-100 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-yellow-800">50-69%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">
                              <i className="ri-lightbulb-line mr-1"></i>
                              MODERADA
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div>Potencial con optimización</div>
                            <div className="text-xs text-gray-600 mt-1">Algunos ejes desalineados</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="font-semibold text-yellow-700">OPTIMIZAR EJES ALMA</div>
                            <div className="text-xs">Ajustar estrategia</div>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="font-bold text-yellow-600">150-250%</div>
                          </td>
                        </tr>
                        <tr className="bg-orange-50 hover:bg-orange-100 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-orange-800">30-49%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-unwrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-800">
                              <i className="ri-alert-line mr-1"></i>
                              LIMITADA
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div>Requiere reestructuración</div>
                            <div className="text-xs text-gray-600 mt-1">Pocos ejes activados</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="font-semibold text-orange-700">REPENSAR ESTRATEGIA</div>
                            <div className="text-xs">Cambiar enfoque</div>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="font-bold text-orange-600">80-150%</div>
                          </td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="text-sm font-bold text-red-800">&lt;30%</span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800">
                              <i className="ri-close-circle-line mr-1"></i>
                              CRÍTICA
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">
                            <div>Riesgo de rechazo auténtico</div>
                            <div className="text-xs text-gray-600 mt-1">Desalineación total</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <div className="font-semibold text-red-700">EVITAR O TRANSFORMAR</div>
                            <div className="text-xs">Descontinuar</div>
                          </td>
                          <td className="px-6 py-4 text-sm">
                            <div className="font-bold text-red-600">0-80%</div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Ranking de Contenidos Actuales */}
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-bar-chart-box-line text-indigo-600 mr-2"></i>
                    Ranking de Oportunidades - Tu Contenido
                  </h3>
                  <div className="space-y-4">
                    {formatos
                      .sort((a, b) => b.oportunidad - a.oportunidad)
                      .map((formato, index) => (
                        <div
                          key={formato.id}
                          className={`flex items-center justify-between p-4 rounded-lg border-l-4 ${
                            formato.oportunidad >= 90
                              ? 'bg-green-50 border-green-500'
                              : formato.oportunidad >= 70
                              ? 'bg-blue-50 border-blue-500'
                              : formato.oportunidad >= 50
                              ? 'bg-yellow-50 border-yellow-500'
                              : formato.oportunidad >= 30
                              ? 'bg-orange-50 border-orange-500'
                              : 'bg-red-50 border-red-500'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                                index === 0
                                  ? 'bg-yellow-500'
                                  : index === 1
                                  ? 'bg-gray-400'
                                  : index === 2
                                  ? 'bg-orange-600'
                                  : 'bg-gray-300'
                              }`}
                            >
                              {index === 0 ? (
                                <i className="ri-trophy-line"></i>
                              ) : index === 1 ? (
                                <i className="ri-medal-line"></i>
                              ) : index === 2 ? (
                                <i className="ri-award-line"></i>
                              ) : (
                                index + 1
                              )}
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{formato.nombre}</div>
                              <div className="text-sm text-gray-600">
                                {formato.pilar} • {formato.ejesALMADetectados.length} ejes activos
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`text-2xl font-bold ${
                                formato.oportunidad >= 90
                                  ? 'text-green-600'
                                  : formato.oportunidad >= 70
                                  ? 'text-blue-600'
                                  : formato.oportunidad >= 50
                                  ? 'text-yellow-600'
                                  : formato.oportunidad >= 30
                                  ? 'text-orange-600'
                                  : 'text-red-600'
                              }`}
                            >
                              {formato.oportunidad}%
                            </div>
                            <div className="text-sm text-gray-500">
                              {formato.oportunidad >= 90
                                ? 'Excepcional'
                                : formato.oportunidad >= 70
                                ? 'Alta Oportunidad'
                                : formato.oportunidad >= 50
                                ? 'Moderada'
                                : formato.oportunidad >= 30
                                ? 'Limitada'
                                : 'Crítica'}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* Factores que Influyen en el Índice */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <i className="ri-arrow-up-circle-line text-green-600 mr-2"></i>
                      Factores que AUMENTAN el Índice
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Múltiples Ejes ALMA Activos</div>
                          <div className="text-sm text-gray-600">3+ ejes técnicos detectados y alineados</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Autenticidad Anti-Performance</div>
                          <div className="text-sm text-gray-600">Contenido genuino vs aspiracional</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Capital Social Alto</div>
                          <div className="text-sm text-gray-600">Conexión comunitaria y vínculos</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Resonancia Emocional</div>
                          <div className="text-sm text-gray-600">Eje emocional profundo y genuino</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <i className="ri-arrow-down-circle-line text-red-600 mr-2"></i>
                      Factores que REDUCEN el Índice
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Performance Aspiracional</div>
                          <div className="text-sm text-gray-600">Contenido superficial o "perfecto"</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Pocos Ejes Activados</div>
                          <div className="text-sm text-gray-600">Menos de 2 ejes técnicos detectados</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Desalineación de Perfil</div>
                          <div className="text-sm text-gray-600">No coincide con arquetipos maternos</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Contenido Genérico</div>
                          <div className="text-sm text-gray-600">Sin segmentación maternal específica</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cómo Mejorar tu Índice */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="ri-rocket-line mr-2"></i>
                    Cómo Mejorar tu Índice de Oportunidad
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-100 mb-3">Estrategias Inmediatas:</h4>
                      <div className="space-y-2 text-sm text-purple-100">
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Activar más ejes ALMA en tu contenido actual</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Enfocar en madres anti-performance</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Incorporar elementos de conexión social</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Desarrollar narrativas emocionales profundas</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-100 mb-3">Estrategias a Largo Plazo:</h4>
                      <div className="space-y-2 text-sm text-purple-100">
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Crear contenido específico por territorio</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Desarrollar arquetipos maternos únicos</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Integrar tradiciones intergeneracionales</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2 flex-shrink-0"></i>
                          <span>Construir comunidad auténtica</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Sistema ALMA • Índice de Oportunidad basado en 6 ejes técnicos
                  </div>
                  <button
                    onClick={() => setMostrarIndiceModal(false)}
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
