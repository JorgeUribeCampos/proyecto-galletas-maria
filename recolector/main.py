 # maestro_ejecucion/main.py - v1, Versión funcional

import os
import json
import requests
from google.cloud import bigquery

# --- CONFIGURACIÓN ---
PROJECT_ID = "galletas-piloto-ju-250726"
DATASET_ID = "analisis_galletas"
TABLA_ORIGEN = "resultados_conversaciones"
TABLA_DESTINO = "resultados_analizados"

# URL de la Cloud Function ya configurada
URL_ORQUESTADOR = "https://us-central1-galletas-piloto-ju-250726.cloudfunctions.net/orquestar_analisis_conversacion"

# Inicializa el cliente de BigQuery
client = bigquery.Client(project=PROJECT_ID)

# --- FUNCIONES PRINCIPALES ---

def leer_conversaciones_de_bigquery():
    """Lee las conversaciones no procesadas de la tabla de origen."""
    print(f"Leyendo conversaciones de la tabla {TABLA_ORIGEN}...")
    query = f"""
        SELECT * FROM `{PROJECT_ID}.{DATASET_ID}.{TABLA_ORIGEN}`
    """
    try:
        query_job = client.query(query)
        resultados = [dict(row) for row in query_job]
        print(f"Se encontraron {len(resultados)} conversaciones para procesar.")
        return resultados
    except Exception as e:
        print(f"Error al leer de BigQuery: {e}")
        return []

def llamar_al_orquestador(conversacion):
    """Envía una conversación a la Cloud Function para ser analizada."""
    print(f"Enviando conversación {conversacion.get('id_conversacion', 'N/A')} para análisis...")
    headers = {"Content-Type": "application/json"}
    try:
        data_payload = json.dumps({"data": conversacion})
        response = requests.post(URL_ORQUESTADOR, data=data_payload, headers=headers)
        response.raise_for_status()
        print("Análisis recibido exitosamente.")
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error al llamar a la Cloud Function: {e}")
        print(f"Respuesta del servidor: {e.response.text if e.response else 'Sin respuesta'}")
        return None

def guardar_resultado_en_bigquery(resultado):
    """Guarda el resultado del análisis en la tabla de destino."""
    print(f"Guardando resultado para {resultado.get('id_conversacion', 'N/A')} en {TABLA_DESTINO}...")
    tabla_ref = client.dataset(DATASET_ID).table(TABLA_DESTINO)
    try:
        errors = client.insert_rows_json(tabla_ref, [resultado])
        if not errors:
            print("Resultado guardado exitosamente.")
        else:
            print(f"Errores al guardar en BigQuery: {errors}")
    except Exception as e:
        print(f"Error inesperado al guardar en BigQuery: {e}")

# --- PUNTO DE ENTRADA PRINCIPAL ---
if __name__ == "__main__":
    conversaciones = leer_conversaciones_de_bigquery()
    if conversaciones:
        for conv in conversaciones:
            resultado_analisis = llamar_al_orquestador(conv)
            if resultado_analisis:
                guardar_resultado_en_bigquery(resultado_analisis)
            print("-" * 20)
        print("Proceso de análisis completado.")
    else:
        print("No hay conversaciones que procesar.")