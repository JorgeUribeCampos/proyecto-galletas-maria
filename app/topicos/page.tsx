
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Topico {
  id: string;
  nombre: string;
  volumen: number;
  sentimiento: {
    positivo: number;
    neutral: number;
    negativo: number;
  };
  emociones: {
    alegria: number;
    enojo: number;
    sorpresa: number;
    miedo: number;
    tristeza: number;
    nostalgia: number;
    ternura: number;
    orgullo: number;
    estres: number;
    culpa: number;
    cansancio: number;
  };
  engagement: number;
  oportunidad: number;
  x: number;
  y: number;
  conexiones: string[];
  categoria: string;
  ejesDetectados: string[];
  pilarAsociado: string;
  capitalSimbolicoDetectado: string[];
  nseInferido: string;
  contextoTerritorial: string;
  estadosResonancia: Array<{
    estado: string;
    porcentaje: number;
    intensidad: 'alta' | 'media' | 'baja';
  }>;
}

interface PalabraCloud {
  palabra: string;
  topico: string;
  volumen: number;
  sentimiento: number;
  menciones: string[];
  contextos: string[];
  insights: string[];
}

export default function TopicosPage() {  const [filtroVolumen, setFiltroVolumen] = useState('todos');

      palabra: palabra,
      topico: palabra === 'creatividad' ? 'Escape Creativo Familiar' : 'Performance vs Realidad Maternal',
      volumen: palabra === 'creatividad' ? 12850 : 15420,
      sentimiento: palabra === 'creatividad' ? 78 : 72,
      menciones: palabra === 'creatividad' ? [
        `La ${palabra} es nuestro refugio familiar`,
        `${palabra} que une generaciones en casa`,
        `Mi espacio de ${palabra} con los niños`,
        `${palabra} auténtica, sin presión de perfección`,
        `Momentos de ${palabra} pura con mi familia`
      ] : [
        `La ${palabra} auténtica no necesita filtros`,
        `${palabra} real vs ${palabra} de Instagram`,
        `Mi ${palabra} imperfecta pero verdadera`,
      ],
      contextos: palabra === 'creatividad' ? [
        'Actividades familiares',
        'Arte doméstico',
        'Tiempo de calidad',
        'Tradiciones creativas',
        'Proyectos intergeneracionales'
      ] : ['Redes sociales', 'Conversaciones familiares', 'Blogs maternales'],
      insights: palabra === 'creatividad' ? [
        `Alta resonancia emocional con ${palabra} familiar`,
        'Escape positivo del estrés maternal',
        'Conexión intergeneracional a través del arte',
        'Capital cultural transmitido de forma natural',
        'Terapia familiar sin etiquetas formales'
      ] : [
        `Alta resonancia emocional con ${palabra}`,
        'Tendencia anti-performance dominante',
        'Búsqueda de autenticidad maternal',
      ],
    };

    setPalabraSeleccionada(palabraData);
    setMostrarModalPalabra(true);
  };

  const topicos: Topico[] = [
    {
      id: '1',
      nombre: 'Rituales de Descompresión Maternal',
      volumen: 15420,
      sentimiento: { positivo: 65, neutral: 25, negativo: 10 },
      emociones: {
        alegria: 35,
        enojo: 5,
        sorpresa: 10,
        miedo: 8,
        tristeza: 15,
        nostalgia: 12,
        ternura: 25,
        orgullo: 18,
        estres: 35,
        culpa: 22,
        cansancio: 45,
      },
      engagement: 8.4,
      oportunidad: 92,
      x: 300,
      y: 200,
      conexiones: ['2', '4'],
      categoria: 'Bienestar Maternal',
      ejesDetectados: ['Emocional', 'Narrativo', 'Simbólico'],
      pilarAsociado: 'DIARY OF REAL MOMS',
      capitalSimbolicoDetectado: ['Capital Cultural: Medio', 'Capital Social: Alto'],
      nseInferido: 'Medio-Alto',
      contextoTerritorial: 'Urbano, Estados centrales',
      estadosResonancia: [
        { estado: 'Ciudad de México', porcentaje: 18.5, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 12.3, intensidad: 'alta' },
        { estado: 'Nuevo León', porcentaje: 10.8, intensidad: 'alta' },
        { estado: 'Estado de México', porcentaje: 15.2, intensidad: 'media' },
        { estado: 'Puebla', porcentaje: 8.7, intensidad: 'media' },
        { estado: 'Guanajuato', porcentaje: 7.1, intensidad: 'media' },
        { estado: 'Veracruz', porcentaje: 6.9, intensidad: 'baja' },
        { estado: 'Yucatán', porcentaje: 5.4, intensidad: 'baja' },
      ],
    },
    {
      id: '2',
      nombre: 'Escape Creativo Familiar',
      volumen: 12850,
      sentimiento: { positivo: 78, neutral: 18, negativo: 4 },
      emociones: {
        alegria: 60,
        enojo: 2,
        sorpresa: 25,
        miedo: 3,
        tristeza: 5,
        nostalgia: 30,
        ternura: 40,
        orgullo: 35,
        estres: 8,
        culpa: 5,
        cansancio: 10,
      },
      engagement: 9.2,
      oportunidad: 87,
      x: 500,
      y: 150,
      conexiones: ['1', '3', '5'],
      categoria: 'Creatividad Familiar',
      ejesDetectados: ['Simbólico', 'Comunitario', 'Sensorial'],
      pilarAsociado: 'REAL FAMILY MOMENTS',
      capitalSimbolicoDetectado: ['Capital Cultural: Alto', 'Capital Social: Medio'],
      nseInferido: 'Alto',
      contextoTerritorial: 'Mixto urbano-suburbano',
      estadosResonancia: [
        { estado: 'Ciudad de México', porcentaje: 22.1, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 16.4, intensidad: 'alta' },
        { estado: 'Nuevo León', porcentaje: 14.2, intensidad: 'alta' },
        { estado: 'Querétaro', porcentaje: 9.8, intensidad: 'media' },
        { estado: 'Estado de México', porcentaje: 11.7, intensidad: 'media' },
        { estado: 'Morelos', porcentaje: 7.3, intensidad: 'media' },
        { estado: 'Quintana Roo', porcentaje: 6.2, intensidad: 'baja' },
        { estado: 'Colima', porcentaje: 4.8, intensidad: 'baja' },
      ],
    },
    {
      id: '3',
      nombre: 'Conexión Auténtica Intergeneracional',
      volumen: 18900,
      sentimiento: { positivo: 72, neutral: 22, negativo: 6 },
      emociones: {
        alegria: 45,
        enojo: 3,
        sorpresa: 20,
        miedo: 7,
        tristeza: 12,
        nostalgia: 55,
        ternura: 65,
        orgullo: 50,
        estres: 15,
        culpa: 8,
        cansancio: 18,
      },
      engagement: 7.8,
      oportunidad: 89,
      x: 700,
      y: 180,
      conexiones: ['2', '6'],
      categoria: 'Vínculos Familiares',
      ejesDetectados: ['Narrativo', 'Territorial', 'Emocional'],
      pilarAsociado: 'MINDFUL NOURISHMENT',
      capitalSimbolicoDetectado: ['Capital Social: Alto', 'Capital Simbólico Puro: Medio'],
      nseInferido: 'Medio',
      contextoTerritorial: 'Multi-regional, enfoque rural',
      estadosResonancia: [
        { estado: 'Michoacán', porcentaje: 15.8, intensidad: 'alta' },
        { estado: 'Oaxaca', porcentaje: 13.2, intensidad: 'alta' },
        { estado: 'Puebla', porcentaje: 12.7, intensidad: 'alta' },
        { estado: 'Hidalgo', porcentaje: 11.4, intensidad: 'media' },
        { estado: 'Tlaxcala', porcentaje: 9.6, intensidad: 'media' },
        { estado: 'Guanajuato', porcentaje: 10.3, intensidad: 'media' },
        { estado: 'Chiapas', porcentaje: 8.9, intensidad: 'baja' },
        { estado: 'Guerrero', porcentaje: 7.2, intensidad: 'baja' },
      ],
    },
    {
      id: '4',
      nombre: 'Momentos de Placer Consciente',
      volumen: 11200,
      sentimiento: { positivo: 68, neutral: 28, negativo: 4 },
      emociones: {
        alegria: 70,
        enojo: 2,
        sorpresa: 15,
        miedo: 4,
        tristeza: 8,
        nostalgia: 25,
        ternura: 35,
        orgullo: 20,
        estres: 12,
        culpa: 15,
        cansancio: 20,
      },
      engagement: 8.9,
      oportunidad: 84,
      x: 250,
      y: 350,
      conexiones: ['1', '7'],
      categoria: 'Bienestar Sensorial',
      ejesDetectados: ['Sensorial', 'Emocional', 'Simbólico'],
      pilarAsociado: 'AUTHENTIC TREATS',
      capitalSimbolicoDetectado: ['Capital Económico: Medio', 'Capital Cultural: Medio'],
      nseInferido: 'Medio',
      contextoTerritorial: 'Urbano diversificado',
      estadosResonancia: [
        { estado: 'Ciudad de México', porcentaje: 19.7, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 14.8, intensidad: 'alta' },
        { estado: 'Nuevo León', porcentaje: 13.1, intensidad: 'alta' },
        { estado: 'Quintana Roo', porcentaje: 11.2, intensidad: 'media' },
        { estado: 'Baja California', porcentaje: 9.8, intensidad: 'media' },
        { estado: 'Estado de México', porcentaje: 12.4, intensidad: 'media' },
        { estado: 'Nayarit', porcentaje: 6.7, intensidad: 'baja' },
        { estado: 'Campeche', porcentaje: 5.1, intensidad: 'baja' },
      ],
    },
    {
      id: '5',
      nombre: 'Tradiciones Alimentarias Heredadas',
      volumen: 9800,
      sentimiento: { positivo: 75, neutral: 22, negativo: 3 },
      emociones: {
        alegria: 55,
        enojo: 1,
        sorpresa: 12,
        miedo: 5,
        tristeza: 8,
        nostalgia: 80,
        ternura: 60,
        orgullo: 65,
        estres: 5,
        culpa: 3,
        cansancio: 8,
      },
      engagement: 8.1,
      oportunidad: 86,
      x: 600,
      y: 320,
      conexiones: ['2', '8', '9'],
      categoria: 'Herencia Cultural',
      ejesDetectados: ['Territorial', 'Simbólico', 'Narrativo'],
      pilarAsociado: 'REAL FAMILY MOMENTS',
      capitalSimbolicoDetectado: ['Capital Cultural: Alto', 'Capital Simbólico Puro: Alto'],
      nseInferido: 'Diverso',
      contextoTerritorial: 'Regional específico, tradiciones locales',
      estadosResonancia: [
        { estado: 'Oaxaca', porcentaje: 18.9, intensidad: 'alta' },
        { estado: 'Yucatán', porcentaje: 16.2, intensidad: 'alta' },
        { estado: 'Michoacán', porcentaje: 14.7, intensidad: 'alta' },
        { estado: 'Puebla', porcentaje: 12.8, intensidad: 'media' },
        { estado: 'Veracruz', porcentaje: 11.5, intensidad: 'media' },
        { estado: 'Chiapas', porcentaje: 10.3, intensidad: 'media' },
        { estado: 'Tabasco', porcentaje: 8.1, intensidad: 'baja' },
        { estado: 'Guerrero', porcentaje: 7.4, intensidad: 'baja' },
      ],
    },
    {
      id: '6',
      nombre: 'Performance vs Realidad Maternal',
      volumen: 14500,
      sentimiento: { positivo: 52, neutral: 31, negativo: 17 },
      emociones: {
        alegria: 25,
        enojo: 15,
        sorpresa: 20,
        miedo: 25,
        tristeza: 30,
        nostalgia: 15,
        ternura: 20,
        orgullo: 40,
        estres: 65,
        culpa: 55,
        cansancio: 60,
      },
      engagement: 11.2,
      oportunidad: 93,
      x: 800,
      y: 300,
      conexiones: ['3', '9'],
      categoria: 'Autenticidad Maternal',
      ejesDetectados: ['Narrativo', 'Emocional', 'Comunitario'],
      pilarAsociado: 'DIARY OF REAL MOMS',
      capitalSimbolicoDetectado: ['Capital Social: Variable', 'Capital Simbólico Puro: Bajo'],
      nseInferido: 'Medio-Alto',
      contextoTerritorial: 'Urbano, redes sociales intensivas',
      estadosResonancia: [
        { estado: 'Ciudad de México', porcentaje: 24.3, intensidad: 'alta' },
        { estado: 'Nuevo León', porcentaje: 17.8, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 15.2, intensidad: 'alta' },
        { estado: 'Estado de México', porcentaje: 13.9, intensidad: 'media' },
        { estado: 'Querétaro', porcentaje: 8.7, intensidad: 'media' },
        { estado: 'Baja California', porcentaje: 7.4, intensidad: 'media' },
        { estado: 'Aguascalientes', porcentaje: 5.8, intensidad: 'baja' },
        { estado: 'Colima', porcentaje: 4.2, intensidad: 'baja' },
      ],
    },
    {
      id: '7',
      nombre: 'Cocina como Refugio Emocional',
      volumen: 13750,
      sentimiento: { positivo: 74, neutral: 21, negativo: 5 },
      emociones: {
        alegria: 48,
        enojo: 3,
        sorpresa: 8,
        miedo: 12,
        tristeza: 18,
        nostalgia: 62,
        ternura: 58,
        orgullo: 28,
        estres: 22,
        culpa: 8,
        cansancio: 35,
      },
      engagement: 9.8,
      oportunidad: 91,
      x: 420,
      y: 450,
      conexiones: ['4', '8'],
      categoria: 'Cocina Emocional',
      ejesDetectados: ['Sensorial', 'Emocional', 'Narrativo'],
      pilarAsociado: 'RECIPES THAT HUG',
      capitalSimbolicoDetectado: ['Capital Cultural: Medio', 'Capital Social: Alto'],
      nseInferido: 'Medio',
      contextoTerritorial: 'Hogares diversos, cocina como santuario',
      estadosResonancia: [
        { estado: 'Estado de México', porcentaje: 16.8, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 15.3, intensidad: 'alta' },
        { estado: 'Puebla', porcentaje: 13.7, intensidad: 'alta' },
        { estado: 'Ciudad de México', porcentaje: 14.2, intensidad: 'media' },
        { estado: 'Guanajuato', porcentaje: 11.9, intensidad: 'media' },
        { estado: 'Michoacán', porcentaje: 10.4, intensidad: 'media' },
        { estado: 'Hidalgo', porcentaje: 8.6, intensidad: 'baja' },
        { estado: 'Morelos', porcentaje: 6.3, intensidad: 'baja' },
      ],
    },
    {
      id: '8',
      nombre: 'Cocina Intuitiva Anti-Performance',
      volumen: 10950,
      sentimiento: { positivo: 82, neutral: 15, negativo: 3 },
      emociones: {
        alegria: 68,
        enojo: 2,
        sorpresa: 22,
        miedo: 4,
        tristeza: 6,
        nostalgia: 45,
        ternura: 52,
        orgullo: 38,
        estres: 8,
        culpa: 5,
        cansancio: 12,
      },
      engagement: 10.5,
      oportunidad: 88,
      x: 650,
      y: 420,
      conexiones: ['5', '7', '9'],
      categoria: 'Libertad Culinaria',
      ejesDetectados: ['Narrativo', 'Comunitario', 'Simbólico'],
      pilarAsociado: 'RECIPES THAT HUG',
      capitalSimbolicoDetectado: ['Capital Cultural: Bajo', 'Capital Social: Alto'],
      nseInferido: 'Diverso',
      contextoTerritorial: 'Multi-generacional, tradiciones orales',
      estadosResonancia: [
        { estado: 'Yucatán', porcentaje: 17.4, intensidad: 'alta' },
        { estado: 'Oaxaca', porcentaje: 15.8, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 14.1, intensidad: 'alta' },
        { estado: 'Michoacán', porcentaje: 12.6, intensidad: 'media' },
        { estado: 'Veracruz', porcentaje: 11.2, intensidad: 'media' },
        { estado: 'Puebla', porcentaje: 10.7, intensidad: 'media' },
        { estado: 'Chiapas', porcentaje: 9.3, intensidad: 'baja' },
        { estado: 'Tabasco', porcentaje: 7.8, intensidad: 'baja' },
      ],
    },
    {
      id: '9',
      nombre: 'Gestión Culinaria Familiar',
      volumen: 16750,
      sentimiento: { positivo: 58, neutral: 35, negativo: 7 },
      emociones: {
        alegria: 40,
        enojo: 8,
        sorpresa: 15,
        miedo: 12,
        tristeza: 10,
        nostalgia: 25,
        ternura: 48,
        orgullo: 55,
        estres: 45,
        culpa: 30,
        cansancio: 50,
      },
      engagement: 10.8,
      oportunidad: 90,
      x: 480,
      y: 320,
      conexiones: ['5', '6', '8'],
      categoria: 'Logística Familiar',
      ejesDetectados: ['Emocional', 'Comunitario', 'Sensorial'],
      pilarAsociado: 'RECIPES THAT HUG',
      capitalSimbolicoDetectado: ['Capital Social: Alto', 'Capital Cultural: Medio'],
      nseInferido: 'Medio',
      contextoTerritorial: 'Hogares multigeneracionales, cocina central',
      estadosResonancia: [
        { estado: 'Estado de México', porcentaje: 20.4, intensidad: 'alta' },
        { estado: 'Ciudad de México', porcentaje: 18.1, intensidad: 'alta' },
        { estado: 'Jalisco', porcentaje: 13.7, intensidad: 'alta' },
        { estado: 'Puebla', porcentaje: 12.2, intensidad: 'media' },
        { estado: 'Guanajuato', porcentaje: 10.8, intensidad: 'media' },
        { estado: 'Nuevo León', porcentaje: 9.6, intensidad: 'media' },
        { estado: 'Hidalgo', porcentaje: 8.4, intensidad: 'baja' },
        { estado: 'Morelos', porcentaje: 6.7, intensidad: 'baja' },
      ],
    },
  ];

  const topicosFiltrados = topicos.filter((topico) => {
    const cumpleSentimiento =
      filtroSentimiento === 'todos' ||
      (filtroSentimiento === 'positivo' && topico.sentimiento.positivo > 60) ||
      (filtroSentimiento === 'neutral' && topico.sentimiento.neutral > 30) ||
      (filtroSentimiento === 'negativo' && topico.sentimiento.negativo > 10);

    const cumpleVolumen =
      filtroVolumen === 'todos' ||
      (filtroVolumen === 'alto' && topico.volumen > 15000) ||
      (filtroVolumen === 'medio' && topico.volumen >= 10000 && topico.volumen <= 15000) ||
      (filtroVolumen === 'bajo' && topico.volumen < 10000);

    return cumpleSentimiento && cumpleVolumen;
  });

  const obtenerColorSentimiento = (sentimiento: Topico['sentimiento']) => {
    if (sentimiento.positivo > 60) return 'from-green-400 to-green-600';
    if (sentimiento.negativo > 15) return 'from-red-400 to-red-600';
    return 'from-yellow-400 to-yellow-600';
  };

  const obtenerTamaño = (volumen: number) => {
    if (volumen > 15000) return 'w-20 h-20';
    if (volumen > 10000) return 'w-16 h-16';
    return 'w-12 h-12';
  };

  const abrirModal = (topico: Topico) => {
    setTopicoSeleccionado(topico);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setTopicoSeleccionado(null);
  };

  const handleMouseEnterALMA = () => {
    const timeout = setTimeout(() => {
      setMostrarTooltipALMA(true);
    }, 1000);
    setTimeoutTooltip(timeout);
  };

  const handleMouseLeaveALMA = () => {
    if (timeoutTooltip) {
      clearTimeout(timeoutTooltip);
      setTimeoutTooltip(null);
    }
    setMostrarTooltipALMA(false);
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
              <Link href="/topicos" className="text-blue-600 font-semibold">
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

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Tópicos de Conversación</h1>
          <p className="text-xl text-gray-600 mb-6">
            Análisis territorial basado en el ALMA: 6 ejes técnicos detectando patrones maternos auténticos
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Sentimiento:</label>
                  <select
                    value={filtroSentimiento}
                    onChange={(e) => setFiltroSentimiento(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  >
                    <option value="todos">Todos</option>
                    <option value="positivo">Positivo</option>
                    <option value="neutral">Neutral</option>
                    <option value="negativo">Negativo</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2">
                  <label className="text-sm font-medium text-gray-700">Volumen:</label>
                  <select
                    value={filtroVolumen}
                    onChange={(e) => setFiltroVolumen(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-8"
                  >
                    <option value="todos">Todos</option>
                    <option value="alto">Alto (&gt;15K)</option>
                    <option value="medio">Medio (10K-15K)</option>
                    <option value="bajo">Bajo (&lt;10K)</option>
                  </select>
                </div>
              </div>

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
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <span>RECIPES THAT HUG</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm p-6 h-[700px] relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="relative">
                  <h3
                    className="text-lg font-semibold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors flex items-center"
                    onClick={() => setMostrarExplicacionALMA(true)}
                    onMouseEnter={handleMouseEnterALMA}
                    onMouseLeave={handleMouseLeaveALMA}
                  >
                    <i className="ri-question-line text-blue-600 mr-2"></i>
                    Mapa de Universos de Contenido (Análisis ALMA)
                  </h3>
                  {mostrarTooltipALMA && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900 text-white text-sm rounded-lg shadow-xl p-4 z-50 animate-in fade-in duration-200">
                      <div className="space-y-3">
                        <div>
                          <span className="font-semibold text-pink-300">Eje Emocional:</span>
                          <span className="ml-1">Detecta mapas emocionales auténticos (culpa, ternura, agotamiento)</span>
                        </div>
                        <div>
                          <span className="font-semibold text-blue-300">Eje Narrativo:</span>
                          <span className="ml-1">Identifica historias y discursos maternos genuinos vs performance</span>
                        </div>
                        <div>
                          <span className="font-semibold text-purple-300">Eje Simbólico:</span>
                          <span className="ml-1">Analiza capital simbólico según Bourdieu (cultural, económico, social)</span>
                        </div>
                        <div>
                          <span className="font-semibold text-orange-300">Eje Territorial:</span>
                          <span className="ml-1">Mapea contextos geográficos y sociales específicos</span>
                        </div>
                        <div>
                          <span className="font-semibold text-green-300">Eje Comunitario:</span>
                          <span className="ml-1">Estudia redes y vínculos familiares multigeneracionales</span>
                        </div>
                        <div>
                          <span className="font-semibold text-teal-300">Eje Sensorial:</span>
                          <span className="ml-1">Captura experiencias sensoriales y físicas (olores, texturas, sonidos)</span>
                        </div>
                      </div>
                      <div className="absolute -top-2 left-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-gray-900"></div>
                    </div>
                  )}
                </div>
              </div>
              <div className="relative w-full h-full">
                <svg width="100%" height="100%" className="absolute inset-0">
                  {topicosFiltrados.map((topico) =>
                    topico.conexiones.map((conexionId) => {
                      const topicoConectado = topicosFiltrados.find((t) => t.id === conexionId);
                      if (!topicoConectado) return null;
                      return (
                        <line
                          key={`${topico.id}-${conexionId}`}
                          x1={topico.x}
                          y1={topico.y}
                          x2={topicoConectado.x}
                          y2={topicoConectado.y}
                          stroke="#e5e7eb"
                          strokeWidth="2"
                          opacity="0.6"
                        />
                      );
                    })
                  )}
                </svg>

                {topicosFiltrados.map((topico) => (
                  <div
                    key={topico.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110 ${obtenerTamaño(
                      topico.volumen
                    )}`}
                    style={{ left: topico.x, top: topico.y }}
                    onClick={() => abrirModal(topico)}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${obtenerColorSentimiento(
                        topico.sentimiento
                      )} flex items-center justify-center shadow-lg ${
                        topico.pilarAsociado === 'RECIPES THAT HUG' ? 'ring-4 ring-orange-300' : ''
                      }`}
                    >
                      <div className="text-center">
                        <div className="text-white font-bold text-xs">{topico.oportunidad}%</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap bg-white px-2 py-1 rounded shadow-sm">
                      {topico.nombre}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 mt-8">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  <i className="ri-dna-line text-purple-600 mr-2"></i>
                  Insights del ALMA - Simulación Completa
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      <strong>RECIPES THAT HUG</strong> emerge como territorio dominante: Cocina Emocional (91%),
                      <strong>Intuitiva</strong> (88%) y Gestión Familiar (90%).
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      <strong>Convergencia detectada:</strong> Gestión culinaria familiar conecta performance maternal con
                      soluciones prácticas.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      <strong>Capital Social Alto</strong> en cocina familiar + <strong>Capital Cultural: Medio</strong> =
                      oportunidad de contenido masivo.
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-gray-700">
                      <strong>Simulación completa:</strong> 9 territorios mapeados con 94.2% precisión. Sistema ALMA
                      operativo al 100%.
                    </p>
                  </div>

                  <div className="mt-4 p-3 bg-white rounded-lg border-l-4 border-green-500">
                    <div className="flex items-center text-sm text-green-800">
                      <i className="ri-check-circle-line mr-2"></i>
                      <strong>Estado:</strong> Simulación ALMA completada exitosamente con 9 beats creativos integrados
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-cursor-line text-gray-400 text-2xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Explora los Territorios ALMA</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Haz clic en cualquier nodo del mapa para ver análisis completo: ejes técnicos, capital simbólico y
                  contexto territorial.
                </p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <span>RECIPES THAT HUG</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>ALMA Detectado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg overflow-hidden border border-purple-200">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <i className="ri-cloud-line text-white text-2xl"></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Conversation Cloud ALMA</h2>
                  <p className="text-purple-100">Palabras y frases que conforman los universos maternos auténticos</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-white">247</div>
                <div className="text-sm text-purple-100">palabras únicas</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="relative bg-white rounded-xl p-8 h-96 overflow-hidden shadow-sm border border-gray-200">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-indigo-50/30"></div>

                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                    <defs>
                      <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                        <stop offset="100%" stopColor="rgba(99, 102, 241, 0.2)" />
                      </linearGradient>
                    </defs>

                    <line
                      x1="25%"
                      y1="15%"
                      x2="45%"
                      y2="35%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      className="animate-pulse"
                    />
                    <line
                      x1="65%"
                      y1="25%"
                      x2="30%"
                      y2="60%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '1s' }}
                    />
                    <line
                      x1="70%"
                      y1="15%"
                      x2="55%"
                      y2="20%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '2s' }}
                    />
                    <line
                      x1="20%"
                      y1="80%"
                      x2="45%"
                      y2="35%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '0.5s' }}
                    />
                    <line
                      x1="75%"
                      y1="65%"
                      x2="60%"
                      y2="45%"
                      stroke="url(#connectionGradient)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: '1.5s' }}
                    />
                  </svg>

                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{ left: '25%', top: '15%', zIndex: 20 }}
                    title="Performance vs Realidad Maternal - Núcleo"
                    onClick={() => handlePalabraClick('maternidad')}
                  >
                    <span
                      className="font-inter font-black drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                      style={{
                        fontSize: '70px',
                        color: '#8b5cf6',
                        textShadow: '0 4px 8px rgba(139, 92, 246, 0.3)',
                      }}
                    >
                      maternidad
                    </span>
                  </div>

                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{ left: '65%', top: '25%', zIndex: 19 }}
                    title="Performance vs Realidad Maternal - Núcleo"
                    onClick={() => handlePalabraClick('autenticidad')}
                  >
                    <span
                      className="font-inter font-black drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                      style={{
                        fontSize: '65px',
                        color: '#8b5cf6',
                        textShadow: '0 4px 8px rgba(139, 92, 246, 0.3)',
                      }}
                    >
                      autenticidad
                    </span>
                  </div>

                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 hover:scale-110"
                    style={{ left: '45%', top: '35%', zIndex: 18 }}
                    title="Cocina como Refugio Emocional - Núcleo"
                    onClick={() => handlePalabraClick('cocina')}
                  >
                    <span
                      className="font-inter font-black drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
                      style={{
                        fontSize: '60px',
                        color: '#f97316',
                        textShadow: '0 4px 8px rgba(249, 115, 22, 0.3)',
                      }}
                    >
                      cocina
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-palette-line text-purple-600 mr-2"></i>
                    Convenciones de Tópicos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#8b5cf6' }}></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Performance vs Realidad Maternal</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Auténtico vs Instagram perfecto</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#f97316' }}></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Cocina como Refugio Emocional</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Santuario familiar y emocional</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#3b82f6' }}></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Conexión Intergeneracional</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Sabiduría entre generaciones</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#10b981' }}></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Rituales de Descompresión</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Mindfulness y bienestar maternal</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#6366f1' }}></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Escape Creativo Familiar</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Arte y creatividad en familia</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-4 h-4 rounded-full flex-shrink-0 mt-1" style={{ backgroundColor: '#ec4899' }}></div>
                      <div>
                        <div className="font-medium text-gray-900 text-sm">Momentos de Placer Consciente</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Autocuidado sin culpa maternal</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-text-direction-r text-indigo-600 mr-2"></i>
                    Jerarquía de Frecuencias
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-gray-800">Núcleo</span>
                      <span className="text-xs text-gray-600">Ultra Bold (900)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-700">Soporte</span>
                      <span className="text-xs text-gray-600">Bold (700)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium text-gray-600">Contexto</span>
                      <span className="text-xs text-gray-600">Medium (500)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-gray-500">Detalle</span>
                      <span className="text-xs text-gray-600">Light (300)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <i className="ri-bar-chart-2-line text-purple-600 mr-2"></i>
                    Estadísticas Vivas
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Palabras Únicas</span>
                      <span className="font-bold text-purple-600">247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Frases Conectoras</span>
                      <span className="font-bold text-indigo-600">89</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Menciones Totales</span>
                      <span className="font-bold text-green-600">156K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-700">Temáticas Dominantes</span>
                      <span className="font-bold text-orange-600">6</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-purple-200">
                      <div className="flex items-center text-xs text-purple-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                        <span>Actualización en tiempo real • Sistema ALMA activo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-purple-200 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-sm text-gray-700">
                  <div className="flex items-center space-x-2">
                    <i className="ri-dna-line text-purple-600"></i>
                    <span>Análisis ALMA: 6 ejes técnicos procesando conversaciones auténticas</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs text-gray-600">
                  <span>Precisión: 94.2%</span>
                  <span>•</span>
                  <span>Actualizado: En vivo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {mostrarExplicacionALMA && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-dna-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Sistema ALMA - Análisis Profundo</h2>
                      <p className="text-purple-100">Arquitectura de 6 Ejes Técnicos para Análisis Maternal Auténtico</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMostrarExplicacionALMA(false)}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>

                <div className="p-8 space-y-8">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <i className="ri-brain-line text-purple-600 mr-3"></i>
                      ¿Qué es el Sistema ALMA?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      El <strong>ALMA (Análisis de Lenguaje Maternal Auténtico)</strong> es una arquitectura de IA de
                      doble capa que analiza contenido maternal detectando patrones emocionales, simbólicos y territoriales
                      profundos. Combina sociología (Bourdieu), psicología emocional y análisis territorial para identificar
                      oportunidades de contenido auténtico.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <div className="text-sm text-purple-800 font-medium">
                        🎯 <strong>Objetivo:</strong> Crear un sistema de inteligencia artificial que entiende cómo las
                        madres realmente sienten, piensan y actúan cuando ven contenido. Detecta patrones invisibles al ojo
                        humano, que predicen si una madre va a conectar auténticamente y genuinamente con tu mensaje o
                        simplemente va a scrollear.
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-heart-line text-pink-600 mr-2"></i>
                        Eje Emocional
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Detecta mapas emocionales auténticos más allá del sentimiento básico
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-pink-600 mr-2"></i>
                          <span>Emoción dominante (alegría, culpa, agotamiento, ternura)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-pink-600 mr-2"></i>
                          <span>Intensidad emocional (baja/media/alta)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-pink-600 mr-2"></i>
                          <span>Valencia afectiva específica maternal</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-story-line text-blue-600 mr-2"></i>
                        Eje Narrativo
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Analiza historias y discursos maternos genuinos vs performance
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-blue-600 mr-2"></i>
                          <span>Rol maternal proyectado públicamente</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-blue-600 mr-2"></i>
                          <span>Discurso de crianza comunicado</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-blue-600 mr-2"></i>
                          <span>Performance de género maternal vs realidad</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-treasure-map-line text-purple-600 mr-2"></i>
                        Eje Simbólico
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Analiza capital simbólico según teoría de Bourdieu
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                          <span>Capital Cultural (educación, refinamiento)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                          <span>Capital Económico (recursos, lujo)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                          <span>Capital Social (redes, pertenencia)</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                          <span>Capital Simbólico Puro (prestigio, honor)</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-map-pin-line text-orange-600 mr-2"></i>
                        Eje Territorial
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Mapea contextos geográficos y sociales específicos
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                          <span>Ubicación geográfica y regional</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                          <span>Momento temporal y contexto situacional</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-orange-600 mr-2"></i>
                          <span>Influencias regionales y culturales</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-group-line text-green-600 mr-2"></i>
                        Eje Comunitario
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Estudia redes y vínculos familiares multigeneracionales
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                          <span>Tono de reacción comunitaria</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                          <span>Nivel de conexión y resonancia</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-green-600 mr-2"></i>
                          <span>Tipo de engagement auténtico vs superficial</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-hand-heart-line text-teal-600 mr-2"></i>
                        Eje Sensorial
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Captura experiencias sensoriales y físicas específicas
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-teal-600 mr-2"></i>
                          <span>Atributos tangibles y experiencia sensorial</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-teal-600 mr-2"></i>
                          <span>Contexto de uso práctico y funcional</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <i className="ri-checkbox-circle-line text-teal-600 mr-2"></i>
                          <span>Elementos físicos (olores, texturas, sonidos)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <i className="ri-lightbulb-line mr-2"></i>
                      ¿Cómo funciona la detección?
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      El sistema ALMA procesa cada conversación maternal a través de los 6 ejes simultáneamente, creando
                      un <strong>perfil multidimensional auténtico</strong>. No solo detecta "qué dice" sino{' '}
                      <strong>"cómo lo dice", "por qué lo dice", "dónde lo dice" y "con quién lo dice"</strong>, revelando
                      patrones profundos de maternidad genuina que van más allá del performance digital.
                    </p>
                  </div>
                </div>

                <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 rounded-b-2xl">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      Sistema ALMA v1.1 • 6 Ejes Técnicos • Precisión 94.2%
                    </div>
                    <button
                      onClick={() => setMostrarExplicacionALMA(false)}
                      className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                    >
                      <i className="ri-check-line mr-2"></i>
                      Entendido
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {modalAbierto && topicoSeleccionado && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-map-pin-line text-white text-2xl"></i>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">{topicoSeleccionado.nombre}</h2>
                      <p className="text-blue-100">Análisis ALMA Completo</p>
                    </div>
                  </div>
                  <button
                    onClick={cerrarModal}
                    className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="p-8 space-y-8">
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="ri-lightbulb-line text-white text-xl"></i>
                    </div>
                    <div className="text-2xl font-bold text-green-600 mb-1">{topicoSeleccionado.oportunidad}%</div>
                    <div className="text-sm font-medium text-gray-700">Oportunidad ALMA</div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="ri-volume-up-line text-white text-xl"></i>
                    </div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">{topicoSeleccionado.volumen.toLocaleString()}</div>
                    <div className="text-sm font-medium text-gray-700">Volumen</div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="ri-heart-line text-white text-xl"></i>
                    </div>
                    <div className="text-2xl font-bold text-purple-600 mb-1">{topicoSeleccionado.sentimiento.positivo}%</div>
                    <div className="text-sm font-medium text-gray-700">Sentimiento Positivo</div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <i className="ri-fire-line text-white text-xl"></i>
                    </div>
                    <div className="text-2xl font-bold text-orange-600 mb-1">{topicoSeleccionado.engagement}%</div>
                    <div className="text-sm font-medium text-gray-700">Engagement</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-dna-line text-purple-600 mr-2"></i>
                        Ejes ALMA Detectados
                      </h3>
                      <div className="space-y-3">
                        {topicoSeleccionado.ejesDetectados.map((eje, index) => (
                          <div key={index} className="flex items-center p-3 bg-white rounded-lg border border-purple-200">
                            <i className="ri-checkbox-circle-fill text-purple-600 mr-3"></i>
                            <span className="font-medium text-gray-900">{eje}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-treasure-map-line text-blue-600 mr-2"></i>
                        Capital Simbólico Detectado
                      </h3>
                      <div className="space-y-2">
                        {topicoSeleccionado.capitalSimbolicoDetectado.map((capital, index) => (
                          <div key={index} className="flex items-center p-2 bg-white rounded border border-blue-200">
                            <i className="ri-arrow-right-s-line text-blue-600 mr-2"></i>
                            <span className="text-sm text-gray-700">{capital}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-building-4-line text-green-600 mr-2"></i>
                        Pilar Estratégico
                      </h3>
                      <div className="p-4 bg-white rounded-lg border-l-4 border-green-500">
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          {topicoSeleccionado.pilarAsociado}
                        </div>
                        <div className="text-sm text-gray-600">
                          NSE Inferido: <span className="font-medium">{topicoSeleccionado.nseInferido}</span>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          Contexto: <span className="font-medium">{topicoSeleccionado.contextoTerritorial}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <i className="ri-map-2-line text-orange-600 mr-2"></i>
                        Resonancia por Estados
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {topicoSeleccionado.estadosResonancia.map((estado, index) => (
                          <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                            <div className="flex items-center">
                              <div
                                className={`w-3 h-3 rounded-full mr-3 ${estado.intensidad === 'alta' ? 'bg-red-500' : estado.intensidad === 'media' ? 'bg-yellow-500' : 'bg-green-500'
                                  }`}
                              ></div>
                              <span className="text-sm font-medium text-gray-900">{estado.estado}</span>
                            </div>
                            <span className="text-sm font-bold text-gray-700">{estado.porcentaje}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <i className="ri-emotion-line text-pink-600 mr-2"></i>
                    Mapa Emocional Detallado
                  </h3>
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {Object.entries(topicoSeleccionado.emociones).map(([emocion, valor]) => (
                      <div key={emocion} className="bg-white rounded-lg p-4 border border-pink-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 capitalize">{emocion}</span>
                          <span className="text-lg font-bold text-pink-600">{valor}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-pink-400 to-pink-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${valor}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <i className="ri-lightbulb-line mr-2"></i>
                    Recomendaciones Estratégicas ALMA
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-purple-100 mb-3">Contenido Recomendado:</h4>
                      <div className="space-y-2 text-sm text-purple-100">
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2"></i>
                          <span>Desarrollar contenido {topicoSeleccionado.pilarAsociado} enfocado en emociones dominantes</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2"></i>
                          <span>Dirigir a NSE {topicoSeleccionado.nseInferido} con enfoque {topicoSeleccionado.contextoTerritorial}</span>
                        </div>
                        <div className="flex items-start">
                          <i className="ri-arrow-right-line mt-1 mr-2"></i>
                          <span>Activar ejes técnicos: {topicoSeleccionado.ejesDetectados.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-purple-100 mb-3">Estrategia de Capital:</h4>
                      <div className="space-y-2 text-sm text-purple-100">
                        {topicoSeleccionado.capitalSimbolicoDetectado.map((capital, index) => (
                          <div key={index} className="flex items-start">
                            <i className="ri-check-line mt-1 mr-2"></i>
                            <span>{capital} - Potenciar en contenido</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-8 py-4 rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Análisis ALMA • {topicoSeleccionado.volumen.toLocaleString()} menciones procesadas • Precisión: 94.2%
                  </div>
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap">
                      <i className="ri-download-line mr-2"></i>
                      Exportar Análisis
                    </button>
                    <button
                      onClick={cerrarModal}
                      className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
                    >
                      <i className="ri-close-line mr-2"></i>
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {mostrarModalPalabra && palabraSeleccionada && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-700 px-6 py-4 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <i className="ri-chat-3-line text-white text-lg"></i>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">{palabraSeleccionada.palabra}</h2>
                      <p className="text-purple-100 text-sm">Análisis detallado de palabra clave</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setMostrarModalPalabra(false)}
                    className="w-6 h-6 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  >
                    <i className="ri-close-line text-lg"></i>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{palabraSeleccionada.volumen.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Menciones</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{palabraSeleccionada.sentimiento}%</div>
                    <div className="text-sm text-gray-600">Sentimiento</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Menciones Destacadas</h3>
                  <div className="space-y-2">
                    {palabraSeleccionada.menciones.map((mencion, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                        "{mencion}"
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Contextos</h3>
                  <div className="flex flex-wrap gap-2">
                    {palabraSeleccionada.contextos.map((contexto, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {contexto}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Insights ALMA</h3>
                  <div className="space-y-2">
                    {palabraSeleccionada.insights.map((insight, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <i className="ri-lightbulb-line text-purple-600 mt-1"></i>
                        <span className="text-sm text-gray-700">{insight}</span>
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
