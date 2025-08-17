
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface InsightCategoria {
  id: string;
  nombre: string;
  icono: string;
  color: string;
  insights: Insight[];
}

interface Insight {
  id: string;
  titulo: string;
  descripcion: string;
  impacto: 'alto' | 'medio' | 'bajo';
  categoria: string;
  fuente: 'topicos' | 'contenidos' | 'mic';
  recomendacion: string;
  kpis: string[];
  fechaGenerado: string;
  prioridad: number;
  implementado: boolean;
}

interface TerritoriosClave {
  id: string;
  nombre: string;
  oportunidad: number;
  sentimiento: number;
  volumen: number;
  conexiones: string[];
  recomendacionesALMA: string[];
}

interface AnalisisImpacto {
  metrica: string;
  valorActual: number;
  valorObjetivo: number;
  progreso: number;
  tendencia: 'subiendo' | 'bajando' | 'estable';
}

interface AxisTecnico {
  id: string;
  nombre: string;
  descripcion: string;
  variables: string[];
  color: string;
}

interface PilarEstrategico {
  id: string;
  nombre: string;
  descripcion: string;
  ejesTecnicos: string[];
  kpisAsociados: string[];
  estado: 'activo' | 'oportunidad' | 'saturado';
}

export default function InsightsPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
  const [insightSeleccionado, setInsightSeleccionado] = useState<Insight | null>(null);
  const [vistaMIC, setVistaMIC] = useState(true);
  const [filtroImpacto, setFiltroImpacto] = useState('todos');
  const [consultaIA, setConsultaIA] = useState('');
  const [tipoAnalisis, setTipoAnalisis] = useState('general');
  const [respuestaIA, setRespuestaIA] = useState('');
  const [cargandoIA, setCargandoIA] = useState(false);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);
  const [historialConsultas, setHistorialConsultas] = useState<Array<{
    consulta: string;
    respuesta: string;
    timestamp: string;
    tipo: string;
  }>>([]);
  const [vistaConstitutiva, setVistaConstitutiva] = useState(false);

  const territoriosClave: TerritoriosClave[] = [
    {
      id: '1',
      nombre: 'Rituales de Descompresión Maternal',
      oportunidad: 92,
      sentimiento: 65,
      volumen: 15420,
      conexiones: ['Escape Creativo', 'Mindfulness Digital'],
      recomendacionesALMA: [
        'Desarrollar contenido DIARY OF REAL MOMS enfocado en momentos de descompresión',
        'Conectar rituales personales con valores de autocuidado maternal',
        'Usar tono vulnerable pero esperanzador para resonancia emocional',
      ],
    },
    {
      id: '2',
      nombre: 'Escape Creativo Familiar',
      oportunidad: 87,
      sentimiento: 78,
      volumen: 12850,
      conexiones: ['Rituales de Descompresión', 'Conexión Auténtica'],
      recomendacionesALMA: [
        'Priorizar REAL FAMILY MOMENTS con actividades creativas compartidas',
        'Desarrollar contenido que conecte creatividad con tradiciones familiares',
        'Enfocar en capital cultural transmitido a través de actividades',
      ],
    },
    {
      id: '3',
      nombre: 'Conexión Auténtica Intergeneracional',
      oportunidad: 89,
      sentimiento: 72,
      volumen: 18900,
      conexiones: ['Escape Creativo', 'Sustentabilidad Personal'],
      recomendacionesALMA: [
        'Crear contenido MINDFUL NOURISHMENT que conecte generaciones',
        'Desarrollar narrativas sobre tradiciones alimentarias familiares',
        'Enfocar en capital social y transmisión de valores',
      ],
    },
  ];

  const categoriasInsights: InsightCategoria[] = [
    {
      id: 'estrategicos',
      nombre: 'Insights Estratégicos',
      icono: 'ri-lightbulb-line',
      color: 'blue',
      insights: [
        {
          id: '1',
          titulo: 'Convergencia Bienestar-Creatividad',
          descripcion:
            'Los tópicos de mayor oportunidad (Rituales de Descompresión 92% y Escape Creativo 87%) muestran alta correlación. La audiencia busca actividades que combinen relajación y expresión creativa.',
          impacto: 'alto',
          categoria: 'estrategicos',
          fuente: 'mic',
          recomendacion:
            'Desarrollar línea de contenido que integre técnicas de mindfulness con actividades creativas como arte, escritura o música.',
          kpis: ['Engagement Rate > 15%', 'Tiempo de permanencia > 3 min', 'Shares > 2K'],
          fechaGenerado: '2024-12-19',
          prioridad: 95,
          implementado: false,
        },
        {
          id: '2',
          titulo: 'Saturación en Videos Cortos',
          descripcion:
            'Los videos cortos muestran solo 45% de oportunidad y engagement descendente. La audiencia busca contenido más profundo y reflexivo.',
          impacto: 'alto',
          categoria: 'estrategicos',
          fuente: 'contenidos',
          recomendacion: 'Pivotar hacia formatos de mayor duración: podcasts (92% oportunidad) y tutoriales detallados.',
          kpis: ['Reducir producción videos cortos 30%', 'Incrementar podcasts 200%', 'Engagement > 12%'],
          fechaGenerado: '2024-12-19',
          prioridad: 88,
          implementado: false,
        },
      ],
    },
    {
      id: 'contenido',
      nombre: 'Oportunidades de Contenido',
      icono: 'ri-file-edit-line',
      color: 'indigo',
      insights: [
        {
          id: '3',
          titulo: 'Vacío en Contenido Inclusivo Senior',
          descripcion:
            'Detectado gap crítico en tutoriales técnicos para audiencia senior. Oportunidad de diferenciación significativa.',
          impacto: 'medio',
          categoria: 'contenido',
          fuente: 'contenidos',
          recomendacion:
            'Crear serie especializada de tutoriales con ritmo pausado, letra grande y lenguaje no técnico.',
          kpis: ['Alcance audiencia +50 años', 'Tiempo visualización > 5 min', 'Satisfacción > 85%'],
          fechaGenerado: '2024-12-18',
          prioridad: 76,
          implementado: false,
        },
        {
          id: '4',
          titulo: 'Potencial Audio-Podcast',
          descripcion:
            'Formato podcast muestra 92% de oportunidad con menor competencia. Audiencia prefiere contenido para consumo multitarea.',
          impacto: 'alto',
          categoria: 'contenido',
          fuente: 'contenidos',
          recomendacion: 'Lanzar podcast semanal conectando tópicos de Escape Creativo con expertos invitados.',
          kpis: ['Descargas > 5K/episodio', 'Suscriptores +15%', 'Retención > 70%'],
          fechaGenerado: '2024-12-18',
          prioridad: 92,
          implementado: false,
        },
      ],
    },
    {
      id: 'audiencia',
      nombre: 'Comportamiento de Audiencia',
      icono: 'ri-group-line',
      color: 'green',
      insights: [
        {
          id: '5',
          titulo: 'Preferencia por Interactividad',
          descripcion:
            'Stories interactivas logran 15% engagement vs 8% de posts estáticos. Audiencia valora participación activa.',
          impacto: 'medio',
          categoria: 'audiencia',
          fuente: 'topicos',
          recomendacion: 'Incrementar elementos interactivos: encuestas, Q&A, challenges de bienestar.',
          kpis: ['Interacciones stories +40%', 'Tiempo respuesta < 2h', 'Participación > 25%'],
          fechaGenerado: '2024-12-17',
          prioridad: 84,
          implementado: true,
        },
        {
          id: '6',
          titulo: 'Sentimiento Positivo Dominante',
          descripcion:
            'El 69% promedio de sentimiento positivo indica audiencia receptiva a mensajes optimistas y soluciones.',
          impacto: 'medio',
          categoria: 'audiencia',
          fuente: 'topicos',
          recomendacion: 'Mantener tono esperanzador, enfocar en soluciones prácticas y celebrar pequeños logros.',
          kpis: ['Sentimiento positivo > 70%', 'Comentarios constructivos > 80%', 'Shares +25%'],
          fechaGenerado: '2024-12-17',
          prioridad: 71,
          implementado: true,
        },
      ],
    },
  ];

  const analisisImpacto: AnalisisImpacto[] = [
    {
      metrica: 'Engagement Rate General',
      valorActual: 11.2,
      valorObjetivo: 15.0,
      progreso: 74.7,
      tendencia: 'subiendo',
    },
    {
      metrica: 'Sentimiento Positivo',
      valorActual: 69,
      valorObjetivo: 75,
      progreso: 92.0,
      tendencia: 'subiendo',
    },
    {
      metrica: 'Diversificación Formatos',
      valorActual: 6,
      valorObjetivo: 10,
      progreso: 60.0,
      tendencia: 'estable',
    },
    {
      metrica: 'Cobertura Tópicos Clave',
      valorActual: 3,
      valorObjetivo: 6,
      progreso: 50.0,
      tendencia: 'subiendo',
    },
  ];

  const insightsCompletos = categoriasInsights.flatMap((cat) => cat.insights);

  const insightsFiltrados = insightsCompletos.filter((insight) => {
    const cumpleCategoria = categoriaActiva === 'todos' || insight.categoria === categoriaActiva;
    const cumpleImpacto = filtroImpacto === 'todos' || insight.impacto === filtroImpacto;
    return cumpleCategoria && cumpleImpacto;
  });

  const obtenerColorImpacto = (impacto: string) => {
    switch (impacto) {
      case 'alto':
        return 'from-red-400 to-red-600';
      case 'medio':
        return 'from-yellow-400 to-yellow-600';
      default:
        return 'from-green-400 to-green-600';
    }
  };

  const obtenerColorCategoria = (categoria: string) => {
    const cat = categoriasInsights.find((c) => c.id === categoria);
    return cat ? cat.color : 'gray';
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

  const handleConsultaIA = async () => {
    if (!consultaIA.trim()) return;

    setCargandoIA(true);

    setTimeout(() => {
      let respuestaGenerada = '';

      switch (tipoAnalisis) {
        case 'tendencias':
          respuestaGenerada = `Basándome en los datos analizados sobre "${consultaIA}", he identificado las siguientes tendencias clave:

🔍 **Análisis Profundo:**
• Ritmos de Descompresión muestra un crecimiento del 340% en menciones positivas
• Convergencia entre bienestar y creatividad indica una oportunidad de mercado de $2.3M
• El sentiment score promedio ha aumentado de 65% a 78% en los últimos 30 días

📈 **Predicciones:**
• Se proyecta un incremento del 45% en engagement para contenido de "escape creativo"
• Formato podcast podría generar 15K nuevos seguidores en 3 meses
• Oportunidad de colaboración con micro-influencers de bienestar (+250% ROI)

💡 **Recomendación Estratégica:**
Desarrollar campaña "Rituales Creativos" combinando mindfulness y arte. Presupuesto sugerido: $8,500/mes con ROI esperado del 280%.`;
          break;

        case 'competencia':
          respuestaGenerada = `Análisis competitivo profundo para "${consultaIA}":

🏆 **Posicionamiento Competitivo:**
• Tu marca ocupa el puesto #3 en "rituales de bienestar" con 12% de share of voice
• Brecha identificada: contenido inclusivo para +50 años (competencia: 2% cobertura)
• Ventaja diferencial: autenticidad en storytelling (89% vs 67% promedio industria)

🎯 **Oportunidades vs Competencia:**
• @CompetidorA: Fuerte en videos cortos pero débil en audio (oportunidad podcast)
• @CompetidorB: Alto engagement pero baja frecuencia (oportunidad consistencia)
• @CompetidorC: Buena cobertura senior pero tono muy corporativo (oportunidad humanización)

⚡ **Estrategia de Diferenciación:**
1. Lanzar "Wisdom Wednesday" para audiencia +50
2. Crear contenido bilíngue (gap del 78% en mercado hispano)
3. Desarrollar serie colaborativa con expertos locales`;
          break;

        case 'contenido':
          respuestaGenerada = `Estrategia de contenido optimizada para "${consultaIA}":

📝 **Análisis de Gaps de Contenido:**
• Formato más demandado: Tutoriales paso-a-paso (+92% oportunidad)
• Tono preferido: Calmo y aspiracional (78% engagement vs 45% motivacional)
• Duración óptima: 3-7 minutos (tiempo retención: 87%)

🎨 **Propuestas de Contenido:**
1. **Serie "5 Minutos de Calma"**: Técnicas de descompresión diarias
   - KPI: >15% engagement, >2K shares/episodio
   - Presupuesto: $1,200/mes | ROI esperado: 310%

2. **Podcast "Creatividad Consciente"**: Entrevistas con artistas wellness
   - KPI: >5K descargas, >70% retención
   - Presupuesto: $3,800/mes | ROI esperado: 280%

3. **Guías Interactivas**: Workbooks digitales descargables
   - KPI: >8% click-through, >3K saves
   - Presupuesto: $800/pieza | ROI esperado: 245%

🚀 **Cronograma de Implementación:**
Semana 1-2: Producción piloto serie calma
Semana 3-4: Lanzamiento podcast + 2 episodios
Semana 5-6: Release primera guía interactiva`;
          break;

        default:
          respuestaGenerada = `Análisis integral de "${consultaIA}" por el Sistema:

🧠 **Síntesis Inteligente:**
He procesado 47,350 puntos de datos relacionados con tu consulta y detectado 3 patrones dominantes:

1. **Patrón de Comportamiento**: Tu audiencia busca "equilibrio consciente" - 89% de las menciones combinan productividad + bienestar
2. **Patrón Temporal**: Picos de engagement martes/jueves 6-8pm (horario de descompresión post-trabajo)  
3. **Patrón Emocional**: Sentimientos de "esperanza + determinación" dominan (67% vs 31% ansiedad/estrés)

📊 **Métricas Clave Identificadas:**
• Sentiment Score: 72% positivo (↑15% vs mes anterior)
• Engagement Rate: 11.3% (↑2.8% vs benchmarks industria)
• Share Rate: 4.2% (↑180% vs contenido genérico)

🎯 **Oportunidades Inmediatas:**
1. Crear contenido "Golden Hour" (6-8pm) para máximo impacto
2. Desarrollar línea de productos digitales (planners, meditaciones)
3. Implementar UGC campaigns con hashtag #MiRitualCreativo

⚡ **Acción Prioritaria:**
Lanzar campaña piloto "Descompresión Creativa" esta semana. Inversión mínima $2,500, ROI proyectado 340% en 6 semanas.`;
      }

      setRespuestaIA(respuestaGenerada);
      setCargandoIA(false);
      setMostrarRespuesta(true);

      setHistorialConsultas((prev) => [
        {
          consulta: consultaIA,
          respuesta: respuestaGenerada,
          timestamp: new Date().toLocaleString(),
          tipo: tipoAnalisis,
        },
        ...prev.slice(0, 4),
      ]);
    }, 2000);
  };

  const consultasSugeridas = [
    '¿Cuál es el mejor momento para publicar contenido de bienestar?',
    'Analiza la oportunidad de colaborar con micro-influencers',
    '¿Qué formato de contenido genera más conversiones?',
    'Identifica gaps en la estrategia de contenido de mi competencia',
    '¿Cómo puedo mejorar el engagement en stories interactivas?',
  ];

  const ejesTecnicos: AxisTecnico[] = [
    {
      id: 'emocional',
      nombre: 'Eje Emocional',
      descripcion:
        'Clasifica la emoción dominante y su intensidad. Incluye nostalgia, alegría, ternura, orgullo, estrés, culpa, cansancio.',
      variables: ['Emoción Principal', 'Intensidad Emocional (Baja/Media/Alta)', 'Valencia Afectiva'],
      color: 'pink',
    },
    {
      id: 'simbolico',
      nombre: 'Eje Simbólico y Cultural',
      descripcion:
        'Identifica el valor simbólico y estatus asociado. Analiza capital cultural, económico, social y simbólico puro según Bourdieu.',
      variables: [
        'Capital Cultural',
        'Capital Económico',
        'Capital Social',
        'Capital Simbólico Puro',
        'NSE Inferido',
      ],
      color: 'purple',
    },
    {
      id: 'narrativo',
      nombre: 'Eje Narrativo',
      descripcion:
        'Analiza el formato de la historia y rol de protagonistas. Incluye discurso de crianza y performance maternal.',
      variables: [
        'Rol Maternal Proyectado',
        'Discurso de Crianza',
        'Auto-percepción Maternal',
        'Performance de Género',
      ],
      color: 'indigo',
    },
    {
      id: 'sensorial',
      nombre: 'Eje Sensorial y Funcional',
      descripcion:
        'Explora los atributos tangibles y contexto de uso práctico del producto en situaciones reales.',
      variables: [
        'Atributos Tangibles',
        'Contexto de Uso',
        'Experiencia Sensorial',
        'Funcionalidad Práctica',
      ],
      color: 'blue',
    },
    {
      id: 'comunitario',
      nombre: 'Eje de Reacción Comunitaria',
      descripcion:
        'Analiza el tono y la conexión en los comentarios del público. Mide resonancia y engagement auténtico.',
      variables: [
        'Tono de Reacción',
        'Nivel de Conexión',
        'Tipo de Engagement',
        'Resonancia Comunitaria',
      ],
      color: 'green',
    },
    {
      id: 'territorial',
      nombre: 'Eje Territorial y Temporal',
      descripcion:
        'Mapea variables geográficas, temporales y contextuales que influyen en la percepción del contenido.',
      variables: [
        'Ubicación Geográfica',
        'Momento Temporal',
        'Contexto Situacional',
        'Influencias Regionales',
      ],
      color: 'orange',
    },
  ];

  const pilaresEstrategicos: PilarEstrategico[] = [
    {
      id: 'diary-real-moms',
      nombre: 'DIARY OF REAL MOMS',
      descripcion:
        'Contenido enfocado en la experiencia personal, anécdotas, confesiones y testimonios de la maternidad.',
      ejesTecnicos: ['narrativo', 'emocional'],
      kpisAsociados: ['Testimonios auténticos', 'Engagement emocional', 'Storytime resonance'],
      estado: 'activo',
    },
    {
      id: 'real-family-moments',
      nombre: 'REAL FAMILY MOMENTS',
      descripcion:
        'Contenido que documenta interacciones y rituales familiares en los que el producto está presente.',
      ejesTecnicos: ['simbolico', 'comunitario'],
      kpisAsociados: [
        'Rituales familiares',
        'Tradiciones heredadas',
        'Conexión intergeneracional',
      ],
      estado: 'oportunidad',
    },
    {
      id: 'authentic-treats',
      nombre: 'AUTHENTIC TREATS',
      descripcion:
        'Contenido centrado en el producto como elemento de placer, consuelo o recompensa.',
      ejesTecnicos: ['sensorial', 'emocional'],
      kpisAsociados: [
        'Experiencia sensorial',
        'Momentos de placer',
        'Confort emocional',
      ],
      estado: 'activo',
    },
    {
      id: 'mindful-nourishment',
      nombre: 'MINDFUL NOURISHMENT',
      descripcion:
        'Contenido que conecta alimentación consciente con bienestar integral y valores familiares.',
      ejesTecnicos: ['territorial', 'simbolico'],
      kpisAsociados: [
        'Alimentación consciente',
        'Valores nutricionales',
        'Bienestar integral',
      ],
      estado: 'oportunidad',
    },
  ];

  const obtenerColorAxis = (color: string) => {
    const colores = {
      pink: 'from-pink-400 to-pink-600',
      purple: 'from-purple-400 to-purple-600',
      indigo: 'from-indigo-400 to-indigo-600',
      blue: 'from-blue-400 to-blue-600',
      green: 'from-green-400 to-green-600',
      orange: 'from-orange-400 to-orange-600',
    };
    return colores[color as keyof typeof colores] || colores.blue;
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
                <h1 className="text-2xl font-bold text-gray-900">Banco de Insights Vivo</h1>
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
              <Link href="/insights" className="text-blue-600 font-semibold">
                Insights
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            <i className="ri-brain-line text-purple-600 mr-3"></i>
            Banco de Insights Vivo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Cerebro de IA que consolida inteligencia, sintetiza perspectivas y mide impacto estratégico
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => {
                      setVistaMIC(true);
                      setVistaConstitutiva(false);
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      vistaMIC && !vistaConstitutiva
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-brain-line mr-2"></i>
                    Central de Insights
                  </button>
                  <button
                    onClick={() => {
                      setVistaMIC(false);
                      setVistaConstitutiva(false);
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      !vistaMIC && !vistaConstitutiva
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-database-line mr-2"></i>
                    Biblioteca de Insights
                  </button>
                  <button
                    onClick={() => {
                      setVistaConstitutiva(true);
                      setVistaMIC(false);
                    }}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                      vistaConstitutiva ? 'bg-purple-600 text-white' : 'text-gray-600 hover:text-purple-600'
                    }`}
                  >
                    <i className="ri-settings-3-line mr-2"></i>
                    Alma Constitutiva
                  </button>
                </div>

                {!vistaMIC && !vistaConstitutiva && (
                  <>
                    <div className="flex items-center space-x-2">
                      <label className="text-sm font-medium text-gray-700">Categoría:</label>
                      <select
                        value={categoriaActiva}
                        onChange={(e) => setCategoriaActiva(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                      >
                        <option value="todos">Todos</option>
                        <option value="estrategicos">Estratégicos</option>
                        <option value="contenido">Contenido</option>
                        <option value="audiencia">Audiencia</option>
                      </select>
                    </div>

                    <div className="flex items-center space-x-2">
                      <label className="text-sm font-medium text-gray-700">Impacto:</label>
                      <select
                        value={filtroImpacto}
                        onChange={(e) => setFiltroImpacto(e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-8"
                      >
                        <option value="todos">Todos</option>
                        <option value="alto">Alto</option>
                        <option value="medio">Medio</option>
                        <option value="bajo">Bajo</option>
                      </select>
                    </div>
                  </>
                )}
              </div>

              {vistaMIC && (
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>Implementado</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>Pendiente</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Generado por IA</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-sm p-6 mb-8 border border-purple-100">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <i className="ri-robot-line text-white text-lg"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Consulta a la IA</h3>
                <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                  IA Avanzada
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-sm text-gray-600 mr-2">Tipo de análisis:</span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'general', label: 'General', icon: 'ri-search-line' },
                      { id: 'tendencias', label: 'Tendencias', icon: 'ri-line-chart-line' },
                      { id: 'competencia', label: 'Competencia', icon: 'ri-spy-line' },
                      { id: 'contenido', label: 'Contenido', icon: 'ri-file-edit-line' },
                    ].map((tipo) => (
                      <button
                        key={tipo.id}
                        onClick={() => setTipoAnalisis(tipo.id)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                          tipoAnalisis === tipo.id
                            ? 'bg-purple-600 text-white'
                            : 'bg-white text-gray-600 hover:bg-purple-100'
                        }`}
                      >
                        <i className={`${tipo.icon} mr-1`}></i>
                        {tipo.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    value={consultaIA}
                    onChange={(e) => setConsultaIA(e.target.value)}
                    placeholder="Haz cualquier pregunta sobre tus tópicos, contenidos o estrategia..."
                    className="w-full h-32 p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm"
                    disabled={cargandoIA}
                  />
                  <div className="absolute bottom-3 right-3 flex items-center space-x-2">
                    <span className="text-xs text-gray-500">{consultaIA.length}/500</span>
                    <button
                      onClick={handleConsultaIA}
                      disabled={cargandoIA || !consultaIA.trim()}
                      className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                    >
                      {cargandoIA ? (
                        <>
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Analizando...
                        </>
                      ) : (
                        <>
                          <i className="ri-send-plane-line mr-2"></i>
                          Consultar IA
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-sm text-gray-600 mb-2 block">Consultas sugeridas:</span>
                  <div className="flex flex-wrap gap-2">
                    {consultasSugeridas.map((sugerencia, index) => (
                      <button
                        key={index}
                        onClick={() => setConsultaIA(sugerencia)}
                        className="text-xs bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-700 px-3 py-1 rounded-full border border-gray-200 transition-colors cursor-pointer"
                      >
                        {sugerencia}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Estado del Sistema</span>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-600">Activo</span>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                      <span>Datos procesados:</span>
                      <span className="font-medium">47,350</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insights generados:</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Precisión:</span>
                      <span className="font-medium text-green-600">94.2%</span>
                    </div>
                  </div>
                </div>

                {historialConsultas.length > 0 && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Consultas Recientes</h4>
                    <div className="space-y-2">
                      {historialConsultas.slice(0, 3).map((item, index) => (
                        <div
                          key={index}
                          className="p-2 bg-gray-50 rounded text-xs cursor-pointer hover:bg-purple-50 transition-colors"
                          onClick={() => {
                            setConsultaIA(item.consulta);
                            setRespuestaIA(item.respuesta);
                            setMostrarRespuesta(true);
                          }}
                        >
                          <div className="font-medium text-gray-900 truncate">{item.consulta}</div>
                          <div className="text-gray-500 flex items-center justify-between mt-1">
                            <span>{item.timestamp}</span>
                            <span className="bg-purple-100 text-purple-800 px-1 rounded">{item.tipo}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {mostrarRespuesta && (
              <div className="mt-6 bg-white rounded-lg border border-purple-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <i className="ri-brain-line mr-2"></i>
                      <span className="font-medium">Respuesta del Sistema</span>
                      <span className="ml-2 px-2 py-1 bg-white/20 text-xs rounded">
                        Análisis {tipoAnalisis}
                      </span>
                    </div>
                    <button
                      onClick={() => setMostrarRespuesta(false)}
                      className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded transition-colors"
                    >
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap text-gray-700 font-sans leading-relaxed">
                      {respuestaIA}
                    </pre>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Generado en 1.8s</span>
                      <span>•</span>
                      <span>Confianza: 94.2%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                        <i className="ri-thumb-up-line"></i>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                        <i className="ri-thumb-down-line"></i>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-purple-600 transition-colors">
                        <i className="ri-share-line"></i>
                      </button>
                      <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded transition-colors whitespace-nowrap">
                        <i className="ri-download-line mr-1"></i>
                        Exportar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {vistaConstitutiva ? (
            /* Vista del Alma Constitutiva */
            <div className="space-y-8">
              {/* Constitución Analítica */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    <i className="ri-dna-line text-purple-600 mr-3"></i>
                    Constitución Analítica v1.1
                  </h2>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                    El ALMA que mueve todo el sistema. Arquitectura de análisis de doble capa que combina
                    6 ejes técnicos de procesamiento con 4 pilares estratégicos de agrupación.
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    <i className="ri-settings-3-line text-indigo-600 mr-2"></i>
                    Capa Técnica: 6 Ejes de Análisis
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Mecanismos con los que la IA procesa y clasifica automáticamente el contenido
                  </p>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {ejesTecnicos.map((eje) => (
                      <div key={eje.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all">
                        <div className="flex items-center mb-3">
                          <div
                            className={`w-4 h-4 rounded-full bg-gradient-to-br ${obtenerColorAxis(eje.color)} mr-3`}
                          ></div>
                          <h4 className="font-semibold text-gray-900">{eje.nombre}</h4>
                        </div>

                        <p className="text-sm text-gray-600 mb-3">{eje.descripcion}</p>

                        <div>
                          <div className="text-xs font-medium text-gray-700 mb-2">Variables:</div>
                          <div className="space-y-1">
                            {eje.variables.map((variable, index) => (
                              <div key={index} className="flex items-center text-xs text-gray-600">
                                <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                                <span>{variable}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    <i className="ri-treasure-map-line text-purple-600 mr-2"></i>
                    Capa Estratégica: 4 Pilares de Contenido
                  </h3>
                  <p className="text-gray-600 text-center mb-6">
                    Agrupación estratégica superior que da sentido a los hallazgos técnicos
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    {pilaresEstrategicos.map((pilar) => (
                      <div
                        key={pilar.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-gray-900">{pilar.nombre}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full font-medium ${
                              pilar.estado === 'activo'
                                ? 'bg-green-100 text-green-800'
                                : pilar.estado === 'oportunidad'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-red-100 text-red-800'
                            }`}
                          >
                            {pilar.estado}
                          </span>
                        </div>

                        <p className="text-sm text-gray-600 mb-4">{pilar.descripcion}</p>

                        <div className="space-y-3">
                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-2">
                              Ejes Técnicos Asociados:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {pilar.ejesTecnicos.map((ejeId) => {
                                const eje = ejesTecnicos.find((e) => e.id === ejeId);
                                return eje ? (
                                  <span
                                    key={ejeId}
                                    className={`text-xs px-2 py-1 rounded-full bg-${eje.color}-100 text-${eje.color}-800`}
                                  >
                                    {eje.nombre}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          </div>

                          <div>
                            <div className="text-xs font-medium text-gray-700 mb-2">KPIs Asociados:</div>
                            <div className="space-y-1">
                              {pilar.kpisAsociados.map((kpi, index) => (
                                <div key={index} className="flex items-center text-xs text-gray-600">
                                  <i className="ri-arrow-right-s-line text-purple-600 mr-1"></i>
                                  <span>{kpi}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Matriz Simbólica por Estado y NSE */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <i className="ri-map-2-line text-orange-600 mr-2"></i>
                  Matriz Simbólica por Estado y NSE
                </h3>
                <p className="text-gray-600 mb-6">
                  Mapa que construiremos al cruzar códigos simbólicos detectados con variables geográficas y socioeconómicas
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-map-pin-line text-orange-600 text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Variables Geográficas</h4>
                      <p className="text-sm text-gray-600">Estados, regiones, contextos urbanos/rurales</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-bar-chart-box-line text-yellow-600 text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Nivel Socioeconómico</h4>
                      <p className="text-sm text-gray-600">NSE inferido, poder adquisitivo, estatus</p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <i className="ri-links-line text-red-600 text-2xl"></i>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Códigos Simbólicos</h4>
                      <p className="text-sm text-gray-600">Capital cultural, social, económico detectado</p>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-orange-500">
                    <p className="text-sm text-gray-700">
                      <strong>Estado:</strong> En construcción dinámica. Se generará automáticamente al procesar
                      contenidos con los 6 ejes técnicos y mapear contra variables territoriales y socioeconómicas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Estilos Maternos */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  <i className="ri-parent-line text-pink-600 mr-2"></i>
                  Categorización de Estilos Maternos
                </h3>
                <p className="text-gray-600 mb-6">
                  Variables específicas para categorizar estilos de maternidad (Variables de Rol y Performance)
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Variables de Análisis</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Rol Maternal Proyectado</div>
                          <div className="text-sm text-gray-600">Cómo se presenta públicamente como madre</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Discurso de Crianza</div>
                          <div className="text-sm text-gray-600">Filosofía y métodos de crianza comunicados</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Auto-percepción Maternal</div>
                          <div className="text-sm text-gray-600">Cómo se ve a sí misma en el rol maternal</div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <div className="font-medium text-gray-900">Performance de Género Maternal</div>
                          <div className="text-sm text-gray-600">Ideal vs Real vs Resistencia en performance</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">Capital Simbólico (Bourdieu)</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-blue-500">
                        <span className="font-medium text-gray-900">Capital Cultural</span>
                        <i className="ri-book-line text-blue-600"></i>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-green-500">
                        <span className="font-medium text-gray-900">Capital Económico</span>
                        <i className="ri-money-dollar-circle-line text-green-600"></i>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-purple-500">
                        <span className="font-medium text-gray-900">Capital Social</span>
                        <i className="ri-group-line text-purple-600"></i>
                      </div>

                      <div className="flex items-center justify-between p-3 bg-white rounded border-l-4 border-pink-500">
                        <span className="font-medium text-gray-900">Capital Simbólico Puro</span>
                        <i className="ri-award-line text-pink-600"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : vistaMIC ? (
            /* Vista MIC Central */
            <div className="space-y-8">
              {/* Territorios Clave Consolidados */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  <i className="ri-map-pin-line text-purple-600 mr-2"></i>
                  Territorios Clave Identificados por el ALMA
                </h3>
                <p className="text-gray-600 mb-6">
                  Análisis territorial basado en los 6 ejes técnicos y 4 pilares estratégicos
                </p>
                <div className="grid lg:grid-cols-3 gap-6">
                  {territoriosClave.map((territorio) => (
                    <div
                      key={territorio.id}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-lg font-semibold text-gray-900">{territorio.nombre}</h4>
                        <div className="text-2xl font-bold text-purple-600">{territorio.oportunidad}%</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-gray-500">Sentimiento</div>
                          <div className="font-semibold text-green-600">{territorio.sentimiento}%</div>
                        </div>
                        <div>
                          <div className="text-gray-500">Volumen</div>
                          <div className="font-semibold">{territorio.volumen.toLocaleString()}</div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-sm text-gray-600 mb-2">Conexiones:</div>
                        <div className="flex flex-wrap gap-1">
                          {territorio.conexiones.map((conexion, index) => (
                            <span
                              key={index}
                              className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full"
                            >
                              {conexion}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Recomendaciones ALMA:</div>
                        <div className="space-y-1">
                          {territorio.recomendacionesALMA.slice(0, 2).map((rec, index) => (
                            <div key={index} className="flex items-start text-sm text-gray-600">
                              <i className="ri-dna-line text-purple-600 mr-2 mt-0.5 flex-shrink-0"></i>
                              <span>{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Panel de Síntesis Inteligente */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <i className="ri-cpu-line text-purple-600 mr-2"></i>
                    Síntesis Inteligente del Sistema
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Patrón Maternal Dominante</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        El ALMA detecta un patrón emergente: <strong>Maternidad Consciente y Auténtica</strong> -
                        madres que buscan equilibrio entre performance social y experiencia real maternal.
                      </p>
                      <div className="text-xs text-purple-600 font-medium">
                        Ejes convergentes: Emocional + Narrativo + Simbólico | Confianza: 96%
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-indigo-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Oportunidad DIARY OF REAL MOMS</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Mayor resonancia en contenido que rompe con la <strong>maternidad performativa</strong>.
                        Testimonios vulnerables generan 3x más engagement que contenido aspiracional.
                      </p>
                      <div className="text-xs text-indigo-600 font-medium">
                        Capital detectado: Cultural (medio) + Social (alto) | ROI estimado: 380%
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-semibold text-gray-900 mb-2">Insight Territorial</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Rituales familiares</strong> varían significativamente por NSE y región.
                        Oportunidad de personalización geográfica en REAL FAMILY MOMENTS.
                      </p>
                      <div className="text-xs text-green-600 font-medium">
                        Matriz simbólica en construcción | 47 variables territoriales mapeadas
                      </div>
                    </div>
                  </div>
                </div>

                {/* Medición de Impacto */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    <i className="ri-bar-chart-box-line text-blue-600 mr-2"></i>
                    Medición de Impacto
                  </h3>
                  <div className="space-y-4">
                    {analisisImpacto.map((metrica, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium text-gray-900">{metrica.metrica}</div>
                          <div className="flex items-center space-x-2">
                            <i className={`${obtenerIconoTendencia(metrica.tendencia)} text-sm`}></i>
                            <span className="text-sm font-medium">
                              {metrica.valorActual}
                              {metrica.metrica.includes('Rate') || metrica.metrica.includes('Positivo')
                                ? '%'
                                : ''}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                          <span>Progreso hacia objetivo</span>
                          <span>{metrica.progreso.toFixed(1)}%</span>
                        </div>

                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${metrica.progreso}%` }}
                          ></div>
                        </div>

                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>Actual: {metrica.valorActual}</span>
                          <span>Objetivo: {metrica.valorObjetivo}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Acciones Recomendadas */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <i className="ri-rocket-line text-orange-600 mr-2"></i>
                  Acciones Prioritarias Generadas por IA
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-4 border-l-4 border-red-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Urgente</h4>
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        Prioridad 1
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Reducir producción videos cortos 30% y redirigir recursos a podcasts
                    </p>
                    <div className="text-xs text-red-600 font-medium">
                      Impacto estimado: +25% engagement
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4 border-l-4 border-yellow-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Importante</h4>
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        Prioridad 2
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Desarrollar contenido inclusivo para audiencia senior (+50 años)
                    </p>
                    <div className="text-xs text-yellow-600 font-medium">
                      Nuevo segmento: 15K usuarios potenciales
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">Oportunidad</h4>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Prioridad 3
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-3">
                      Incrementar elementos interactivos en stories (+40% engagement)
                    </p>
                    <div className="text-xs text-green-600 font-medium">
                      Implementación: 2 semanas
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Biblioteca de Insights */
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Biblioteca de Insights
                  </h3>
                  <div className="space-y-4">
                    {insightsFiltrados.map((insight) => (
                      <div
                        key={insight.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all cursor-pointer"
                        onClick={() => setInsightSeleccionado(insight)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <div
                                className={`w-3 h-3 rounded-full bg-gradient-to-br ${obtenerColorImpacto(
                                  insight.impacto
                                )}`}
                              ></div>
                              <h4 className="font-medium text-gray-900">{insight.titulo}</h4>
                              <span
                                className={`text-xs px-2 py-1 rounded-full bg-${obtenerColorCategoria(
                                  insight.categoria
                                )}-100 text-${obtenerColorCategoria(insight.categoria)}-800`}
                              >
                                {categoriasInsights.find((c) => c.id === insight.categoria)?.nombre}
                              </span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{insight.descripcion}</p>
                          </div>
                          <div className="flex items-center space-x-2 ml-4">
                            <div className="text-right">
                              <div className="text-sm font-medium text-purple-600">{insight.prioridad}%</div>
                              <div className="text-xs text-gray-500">{insight.fechaGenerado}</div>
                            </div>
                            {insight.implementado && (
                              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                <i className="ri-check-line text-green-600 text-sm"></i>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                          <strong>Recomendación:</strong> {insight.recomendacion}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Panel de Detalles del Insight */}
              <div className="space-y-6">
                {insightSeleccionado ? (
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">Detalle del Insight</h3>
                      <button
                        onClick={() => setInsightSeleccionado(null)}
                        className="w-6 h-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">{insightSeleccionado.titulo}</h4>
                        <p className="text-sm text-gray-600 mb-3">{insightSeleccionado.descripcion}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">Impacto</div>
                          <span
                            className={`text-xs px-2 py-1 rounded-full capitalize ${
                              insightSeleccionado.impacto === 'alto'
                                ? 'bg-red-100 text-red-800'
                                : insightSeleccionado.impacto === 'medio'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-green-100 text-green-800'
                            }`}
                          >
                            {insightSeleccionado.impacto}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-700 mb-1">Prioridad</div>
                          <div className="text-lg font-bold text-purple-600">{insightSeleccionado.prioridad}%</div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">Recomendación</h5>
                        <p className="text-sm text-gray-700 bg-blue-50 rounded-lg p-3">
                          {insightSeleccionado.recomendacion}
                        </p>
                      </div>

                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">KPIs de Seguimiento</h5>
                        <div className="space-y-1">
                          {insightSeleccionado.kpis.map((kpi, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-600">
                              <i className="ri-checkbox-circle-line text-purple-600 mr-2"></i>
                              {kpi}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Fuente: {insightSeleccionado.fuente}</span>
                          <span>{insightSeleccionado.fechaGenerado}</span>
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          className={`w-full font-medium py-2 px-4 rounded-lg transition-colors whitespace-nowrap ${
                            insightSeleccionado.implementado
                              ? 'bg-green-100 text-green-800'
                              : 'bg-purple-600 hover:bg-purple-700 text-white'
                          }`}
                        >
                          {insightSeleccionado.implementado ? (
                            <>
                              <i className="ri-check-line mr-2"></i>
                              Implementado
                            </>
                          ) : (
                            <>
                              <i className="ri-rocket-line mr-2"></i>
                              Implementar Insight
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className="ri-lightbulb-line text-gray-400 text-2xl"></i>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona un Insight</h3>
                    <p className="text-gray-600 text-sm">
                      Haz clic en cualquier insight para ver detalles completos, KPIs y recomendaciones.
                    </p>
                  </div>
                )}
              </div>

              {/* Resumen de Categorías */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <i className="ri-pie-chart-line text-purple-600 mr-2"></i>
                  Resumen de Insights
                </h3>
                <div className="space-y-3">
                  {categoriasInsights.map((categoria) => {
                    const totalInsights = categoria.insights.length;
                    const implementados = categoria.insights.filter((i) => i.implementado).length;
                    return (
                      <div key={categoria.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <i className={`${categoria.icono} text-${categoria.color}-600`}></i>
                          <span className="text-sm font-medium text-gray-700">{categoria.nombre}</span>
                        </div>
                        <div className="text-sm text-gray-600">
                          {implementados}/{totalInsights} implementados
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* KPIs Dashboard */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Insights Generados</p>
                <p className="text-2xl font-bold text-purple-600">{insightsCompletos.length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <i className="ri-lightbulb-line text-purple-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Implementación</p>
                <p className="text-2xl font-bold text-green-600">
                  {Math.round(
                    (insightsCompletos.filter((i) => i.implementado).length / insightsCompletos.length) * 100
                  )}
                  %
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <i className="ri-check-line text-green-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Prioridad Promedio</p>
                <p className="text-2xl font-bold text-blue-600">
                  {Math.round(
                    insightsCompletos.reduce((acc, i) => acc + i.prioridad, 0) / insightsCompletos.length
                  )}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <i className="ri-arrow-up-line text-blue-600 text-xl"></i>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Territórios Activos</p>
                <p className="text-2xl font-bold text-indigo-600">{territoriosClave.length}</p>
              </div>
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <i className="ri-map-pin-line text-indigo-600 text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
