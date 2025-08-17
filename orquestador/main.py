 # maestro_ejecucion/main.py - v4, Versión de diagnóstico para generar esquema

import os
import json
import requests
from google.cloud import bigquery

PROJECT_ID = "galletas-piloto-ju-250726"
DATASET_ID = "analisis_galletas"
TABLA_ORIGEN = "resultados_conversaciones"
URL_ORQUESTADOR = "https://us-central1-galletas-piloto-ju-250726.cloudfunctions.net/orquestar_analisis_conversacion"
client = bigquery.Client(project=PROJECT_ID)

def leer_conversaciones_de_bigquery():
    print(f"Leyendo conversaciones de la tabla {TABLA_ORIGEN}...")
    query = f"SELECT * FROM `{PROJECT_ID}.{DATASET_ID}.{TABLA_ORIGEN}` LIMIT 1" # Leemos solo 1
    try:
        query_job = client.query(query)
        resultados = [dict(row) for row in query_job]
        print(f"Se encontró {len(resultados)} conversación para la prueba de esquema.")
        return resultados
    except Exception as e:
        print(f"Error al leer de BigQuery: {e}")
        return []

def llamar_al_orquestador(conversacion):
    print(f"Enviando conversación {conversacion.get('id_conversacion', 'N/A')} para análisis...")
    try:
        response = requests.post(URL_ORQUESTADOR, json=conversacion)
        response.raise_for_status()
        print("Análisis recibido exitosamente.")
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error al llamar a la Cloud Function: {e}")
        return None

def guardar_localmente(resultado, filename):
    """Guarda el resultado en un archivo JSONL local."""
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(json.dumps(resultado, ensure_ascii=False) + '\n')
    print(f"Resultado de ejemplo guardado en: {filename}")

if __name__ == "__main__":
    conversaciones = leer_conversaciones_de_bigquery()
    if conversaciones:
        resultado_analisis = llamar_al_orquestador(conversaciones[0])
        if resultado_analisis:
            guardar_localmente(resultado_analisis, "resultado_analizado_ejemplo.jsonl")
        print("Proceso de generación de esquema completado.")