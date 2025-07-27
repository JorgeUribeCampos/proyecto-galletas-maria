 # recolector/main.py - v4, usando un driver local y manual

import time
import json
import os
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def setup_driver():
    """Configura e inicia el navegador Chrome controlado por Selenium."""
    print("Configurando el controlador del navegador desde un archivo local...")

    # --- CAMBIO CLAVE: Le damos la ruta directa a nuestro driver local ---
    # Ya no usamos la herramienta automática.
    driver_path = os.path.join(BASE_DIR, 'chromedriver')
    service = Service(executable_path=driver_path)

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    driver = webdriver.Chrome(service=service, options=options)
    print("Controlador configurado y listo.")
    return driver

def recolectar_conversacion(driver, url):
    """
    Visita una URL, extrae el post y los comentarios, y devuelve un objeto JSON.
    """
    print(f"Recolectando datos de: {url}")
    driver.get(url)
    time.sleep(5)

    try:
        texto_principal = driver.find_element(By.TAG_NAME, 'h1').text
        print(f"Post principal encontrado: '{texto_principal[:50]}...'")

        elementos_comentarios = driver.find_elements(By.CSS_SELECTOR, 'p')

        respuestas = []
        print(f"Procesando {min(5, len(elementos_comentarios))} comentarios de ejemplo...")
        for i, elemento in enumerate(elementos_comentarios[:5]):
            comentario = {
                "id_respuesta": f"comment_{i+1}",
                "tipo_contenido": "comentario",
                "texto_input": elemento.text,
                "metadatos": {}
            }
            respuestas.append(comentario)

        capsula = {
            "id_conversacion": f"web_{driver.title.replace(' ', '_')[:20]}",
            "fuente_principal": {
                "tipo_contenido": "post_creador",
                "texto_input": texto_principal,
                "metadatos": { "url_post": url }
            },
            "respuestas_comunidad": respuestas
        }
        return capsula

    except Exception as e:
        print(f"Error al recolectar datos de {url}: {e}")
        return None

def guardar_json(data, filename):
    """Guarda un diccionario como un archivo JSON."""
    ruta_completa = os.path.join(BASE_DIR, filename)
    with open(ruta_completa, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Datos guardados exitosamente en: {ruta_completa}")

if __name__ == "__main__":
    ruta_urls = os.path.join(BASE_DIR, 'urls.txt')

    try:
        with open(ruta_urls, 'r') as f:
            urls_a_procesar = [line.strip() for line in f if line.strip()]

        if not urls_a_procesar:
            print("El archivo urls.txt está vacío. Por favor, añade al menos una URL.")
        else:
            driver = setup_driver()

            for i, url in enumerate(urls_a_procesar):
                capsula_resultado = recolectar_conversacion(driver, url)
                if capsula_resultado:
                    nombre_archivo = f"conversacion_{i+1}.json"
                    guardar_json(capsula_resultado, nombre_archivo)

            driver.quit()
            print("Proceso de recolección completado.")

    except Exception as e:
        print(f"ERROR: Ha ocurrido un error inesperado durante la ejecución: {e}")