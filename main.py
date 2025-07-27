# main.py - v2 con Carga Perezosa (Lazy Loading)

import functions_framework

# --- Variable Global para el Analizador ---
# Inicializamos la variable como "None". El modelo NO se carga aquí.
ANALYZER = None

def get_analyzer():
    """
    Esta función carga el modelo de NLP solo si no ha sido cargado antes.
    Es el corazón de la estrategia de "Carga Perezosa".
    """
    global ANALYZER
    if ANALYZER is None:
        print("Carga Perezosa: El modelo no está en memoria. Cargando ahora...")
        # Importamos la librería aquí para que no se cargue al inicio.
        from pysentimiento import create_analyzer
        ANALYZER = create_analyzer(task="sentiment", lang="es")
        print("Carga Perezosa: ¡Modelo cargado y listo!")
    return ANALYZER

# --- Definición de Variables Culturales (simplificado para el piloto) ---
VARIABLES_CULTURALES = {
    'V01_EMOCION_PREDOMINANTE': {
        'categorias': {
            'nostalgia': ["recuerdo", "infancia", "abuela", "mamá hacía"],
            'comfort': ["tranquiliza", "calma", "reconforta", "apapacho"],
            'culpa': ["no debería", "está mal", "engordando", "chatarra", "pecado"],
            'alegria': ["feliz", "disfruto", "me encanta", "deliciosas", "rico"]
        }
    }
}

# --- La Cloud Function Principal ---
@functions_framework.http
def analizar_texto_individual(request):
    """
    Analiza un único texto recibido en una petición HTTP.
    """
    try:
        # 1. Extraer el texto de la petición
        request_json = request.get_json(silent=True)
        if not request_json or 'texto' not in request_json:
            return 'Error: El cuerpo de la petición debe ser un JSON con la clave "texto".', 400

        texto_a_analizar = request_json['texto']
        print(f"Analizando texto: '{texto_a_analizar}'")

        # 2. Obtener el analizador (lo cargará si es la primera vez)
        sentiment_analyzer = get_analyzer()

        # 3. Ejecutar Análisis NLP
        prediccion_sentimiento = sentiment_analyzer.predict(texto_a_analizar)

        # 4. Ejecutar Lógica de Variables Culturales (simplificada)
        resultados_variables = {}
        texto_minusculas = texto_a_analizar.lower()

        v01_config = VARIABLES_CULTURALES['V01_EMOCION_PREDOMINANTE']
        emociones_encontradas = {}
        for categoria, keywords in v01_config['categorias'].items():
            for keyword in keywords:
                if keyword in texto_minusculas:
                    if categoria not in emociones_encontradas:
                        emociones_encontradas[categoria] = []
                    emociones_encontradas[categoria].append(keyword)

        if emociones_encontradas:
            categoria_principal = list(emociones_encontradas.keys())[0]
            resultados_variables['V01_EMOCION_PREDOMINANTE'] = {
                "categoria_asignada": categoria_principal,
                "confidence_score": 0.75, # Score simulado
                "evidencia_textual": emociones_encontradas[categoria_principal]
            }

        # 5. Ensamblar el JSON de Salida
        resultado_final = {
            "texto_analizado": texto_a_analizar,
            "analisis_nlp": {
                "sentimiento_general": prediccion_sentimiento.output,
                "confianza_sentimiento": prediccion_sentimiento.probas[prediccion_sentimiento.output]
            },
            "variables_culturales": resultados_variables
        }

        print(f"Análisis completado. Resultado: {resultado_final}")
        return resultado_final, 200, {'Content-Type': 'application/json'}

    except Exception as e:
        print(f"Ha ocurrido un error inesperado: {e}")
        return "Error interno del servidor.", 500
