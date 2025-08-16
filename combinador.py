# combinador.py

import json
import os

# Definimos las carpetas de origen y el archivo de destino
CARPETA_ORIGEN = 'recolector'
ARCHIVO_DESTINO = 'insumos_combinados.jsonl' # .jsonl significa JSON Lines

def combinar_archivos_json():
    """
    Busca todos los archivos .json en la carpeta de origen,
    los lee y escribe su contenido en una sola línea en el archivo de destino.
    """
    print(f"Iniciando la combinación de archivos desde la carpeta '{CARPETA_ORIGEN}'...")

    archivos_encontrados = [f for f in os.listdir(CARPETA_ORIGEN) if f.endswith('.json')]

    if not archivos_encontrados:
        print("No se encontraron archivos .json para combinar.")
        return

    print(f"Se encontraron {len(archivos_encontrados)} archivos .json.")

    # Abrimos el archivo de destino en modo escritura ('w')
    with open(ARCHIVO_DESTINO, 'w', encoding='utf-8') as f_destino:
        for nombre_archivo in archivos_encontrados:
            ruta_completa = os.path.join(CARPETA_ORIGEN, nombre_archivo)

            # Abrimos cada archivo de origen en modo lectura ('r')
            with open(ruta_completa, 'r', encoding='utf-8') as f_origen:
                try:
                    # Cargamos el contenido JSON del archivo
                    datos = json.load(f_origen)
                    # Escribimos el contenido como una sola línea en el archivo de destino
                    f_destino.write(json.dumps(datos, ensure_ascii=False) + '\n')
                except json.JSONDecodeError:
                    print(f"ADVERTENCIA: El archivo {nombre_archivo} no es un JSON válido y será omitido.")

    print(f"¡Éxito! Todos los archivos han sido combinados en '{ARCHIVO_DESTINO}'.")

if __name__ == "__main__":
    combinar_archivos_json()