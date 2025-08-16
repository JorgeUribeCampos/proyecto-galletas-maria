 cat << EOF > maestro_ejecucion/main.py
# maestro_ejecucion/main.py

import os
import json
import time
import requests
from google.cloud import bigquery

# --- CONFIGURACIÓN DEL PROYECTO ---
# Asegúrate de que estos nombres coincidan con lo que hemos creado.
PROJECT_ID = "galletas-piloto-ju-250726"
DATASET_ID = "analisis_galletas"
TABLA_ORIGEN_ID = "resultados_conversaciones"
TABLA_DESTINO_ID = "resultados_analizados"
URL_ORQUESTADOR = "https://us-central1-galletas-piloto-ju-250726.cloudfunctions.net/orquestar_analisis_conversacion"

# Inicializamos el cliente de BigQuery.
# El cliente usará automáticamente las credenciales de tu gcloud local.
client = bigquery.Client(project=PROJECT_ID)

def leer_conversaciones_de_bigquery():
    """Lee todas las filas de la tabla de origen."""
    print(f"Leyendo conversaciones de la tabla: {TABLA_ORIGEN_ID}...")
    tabla_ref = client.dataset(DATASET_ID).table(TABLA_ORIGEN_ID)
    rows = client.list_rows(tabla_ref)
    print(f"Se encontraron {rows.total_rows} conversaciones para analizar.")
    return list(rows)

def llamar_al_orquestador(conversacion_cruda):
    """Envía una conversación al Orquestador y devuelve el análisis."""
    print(f"Enviando conversación {conversacion_cruda['id_conversacion']} al analizador...")
    
    # El Orquestador espera un JSON, no un objeto de BigQuery.
    # Convertimos la fila de BigQuery a un diccionario simple.
    payload = dict(conversacion_cruda)
    
    try:
        headers = {'Content-Type': 'application/json'}
        response = requests.post(URL_ORQUESTADOR, json=payload, headers=headers, timeout=120)
        
        if response.status_code == 200:
            print("Análisis recibido exitosamente.")
            return response.json()
        else:
            print(f"  ERROR: El Orquestador devolvió un error. Status: {response.status_code}")
            return None
    except Exception as e:
        print(f"  ERROR: Fallo en la comunicación con el Orquestador: {e}")
        return None

def guardar_resultado_en_bigquery(resultado_analizado):
    """Guarda un resultado analizado en la tabla de destino."""
    tabla_ref = client.dataset(DATASET_ID).table(TABLA_DESTINO_ID)
    errors = client.insert_rows_json(tabla_ref, [resultado_analizado])
    if not errors:
        print(f"Resultado para {resultado_analizado['id_conversacion']} guardado en BigQuery.")
    else:
        print(f"  ERROR al guardar en BigQuery: {errors}")

if __name__ == "__main__":
    print("--- INICIANDO SCRIPT MAESTRO DE ANÁLISIS ---")
    
    conversaciones = leer_conversaciones_de_bigquery()
    
    for i, conversacion in enumerate(conversaciones):
        print(f"\n--- Procesando conversación {i+1}/{len(conversaciones)} ---")
        resultado = llamar_al_orquestador(conversacion)
        
        if resultado:
            guardar_resultado_en_bigquery(resultado)
        
        # Pausa respetuosa para no sobrecargar nuestra Cloud Function
        time.sleep(1) 
        
    print("\n--- PROCESO DE ANÁLISIS COMPLETADO ---")
EOF