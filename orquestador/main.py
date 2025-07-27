# orquestador/main.py - El Director de Orquesta

import functions_framework
import json
import requests # Librería para hacer llamadas a nuestro otro robot

# La dirección de nuestro robot especialista. La obtuvimos en la Fase 2.
URL_NUCLEO_ANALISIS = "https://us-central1-galletas-piloto-ju-250726.cloudfunctions.net/analizar_texto_individual"

def llamar_analizador(texto_a_analizar):
    """Función auxiliar que llama a nuestro robot especialista."""
    try:
        headers = {'Content-Type': 'application/json'}
        payload = json.dumps({"texto": texto_a_analizar})

        response = requests.post(URL_NUCLEO_ANALISIS, data=payload, headers=headers, timeout=60)

        if response.status_code == 200:
            return response.json()
        else:
            print(f"Error al llamar al núcleo de análisis. Status: {response.status_code}, Respuesta: {response.text}")
            return {"error": "Fallo al analizar texto", "detalle": response.text}
    except Exception as e:
        print(f"Excepción al llamar al núcleo de análisis: {e}")
        return {"error": "Excepción durante la llamada", "detalle": str(e)}


@functions_framework.http
def orquestar_analisis_conversacion(request):
    """
    Recibe una 'cápsula de conversación', la procesa y devuelve un análisis completo.
    """
    # 1. Recibir y validar la cápsula de conversación
    capsula_conversacion = request.get_json(silent=True)
    if not capsula_conversacion or 'fuente_principal' not in capsula_conversacion:
        return 'Error: Se esperaba una "cápsula de conversación" en formato JSON.', 400

    print("Orquestador iniciado. Analizando fuente principal...")

    # 2. Analizar la fuente principal
    texto_principal = capsula_conversacion.get('fuente_principal', {}).get('texto_input', '')
    resultado_principal = llamar_analizador(texto_principal)

    # 3. Analizar los comentarios de la comunidad
    print("Analizando respuestas de la comunidad...")
    resultados_comunidad = []
    comentarios = capsula_conversacion.get('respuestas_comunidad', [])
    for comentario in comentarios:
        texto_comentario = comentario.get('texto_input', '')
        resultado_comentario = llamar_analizador(texto_comentario)
        resultados_comunidad.append(resultado_comentario)

    # 4. Ensamblar el resultado final (sin agregación por ahora)
    resultado_final = {
        "id_conversacion": capsula_conversacion.get('id_conversacion', 'sin_id'),
        "analisis_fuente_principal": resultado_principal,
        "analisis_respuestas_comunidad": resultados_comunidad
    }

    print("Orquestación completada.")
    return resultado_final, 200, {'Content-Type': 'application/json'}