 # recolector/main.py - v7, con depuración de lectura de archivo

import time
import json
import os
import dotenv
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
dotenv.load_dotenv(os.path.join(BASE_DIR, '.env'))

INSTAGRAM_USERNAME = os.getenv("INSTAGRAM_USERNAME")
INSTAGRAM_PASSWORD = os.getenv("INSTAGRAM_PASSWORD")

def setup_driver():
    print("Configurando el controlador del navegador...")
    driver_path = os.path.join(BASE_DIR, 'chromedriver')
    service = Service(executable_path=driver_path)
    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')
    driver = webdriver.Chrome(service=service, options=options)
    print("Controlador configurado.")
    return driver

def login_instagram(driver):
    print("Iniciando sesión en Instagram...")
    driver.get("https://www.instagram.com/accounts/login/")
    time.sleep(5)
    try:
        user_input = driver.find_element(By.NAME, 'username')
        pass_input = driver.find_element(By.NAME, 'password')
        user_input.send_keys(INSTAGRAM_USERNAME)
        pass_input.send_keys(INSTAGRAM_PASSWORD)
        login_button = driver.find_element(By.XPATH, "//button[@type='submit']")
        login_button.click()
        print("Login enviado. Esperando a la página principal...")
        time.sleep(10)
        print("Sesión iniciada exitosamente.")
        return True
    except Exception as e:
        print(f"Error durante el inicio de sesión: {e}")
        return False

def recolectar_conversacion_instagram(driver, url):
    if not url or not url.startswith(('http://', 'https://')):
        print(f"ADVERTENCIA: URL inválida o vacía encontrada y omitida: '{url}'")
        return None

    print(f"Recolectando datos de: {url}")
    driver.get(url)
    time.sleep(5)

    try:
        wait = WebDriverWait(driver, 10)
        texto_principal_element = wait.until(EC.presence_of_element_located((By.XPATH, "//h1")))
        texto_principal = texto_principal_element.text
        print(f"Post principal encontrado: '{texto_principal[:50]}...'")

        elementos_comentarios = driver.find_elements(By.XPATH, "//ul//h3/..//span")
        respuestas = []
        print(f"Procesando {len(elementos_comentarios)} comentarios encontrados...")
        for i, elemento in enumerate(elementos_comentarios):
            respuestas.append({
                "id_respuesta": f"comment_{i+1}",
                "tipo_contenido": "comentario",
                "texto_input": elemento.text,
                "metadatos": {}
            })

        capsula = {
            "id_conversacion": f"instagram_{url.split('/')[-2]}",
            "fuente_principal": {"tipo_contenido": "post_creador", "texto_input": texto_principal, "metadatos": {"url_post": url}},
            "respuestas_comunidad": respuestas
        }
        return capsula
    except Exception as e:
        print(f"Error al recolectar datos de {url}: {e}")
        return None

def guardar_json(data, filename):
    ruta_completa = os.path.join(BASE_DIR, filename)
    with open(ruta_completa, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
    print(f"Datos guardados exitosamente en: {ruta_completa}")

if __name__ == "__main__":
    ruta_urls = os.path.join(BASE_DIR, 'urls.txt')

    with open(ruta_urls, 'r') as f:
        urls_a_procesar = [line.strip() for line in f if line.strip()]

    # --- LÍNEA DE DEPURACIÓN CLAVE ---
    print(f"DEBUG: Se encontraron {len(urls_a_procesar)} URLs en el archivo.")
    print(f"DEBUG: Contenido leído: {urls_a_procesar[:5]}") # Mostramos las primeras 5 para no saturar

    if not urls_a_procesar:
        print("El archivo urls.txt parece estar vacío o no se pudo leer correctamente.")
    else:
        driver = setup_driver()
        if login_instagram(driver):
            for i, url in enumerate(urls_a_procesar):
                capsula_resultado = recolectar_conversacion_instagram(driver, url)
                if capsula_resultado:
                    nombre_archivo = f"conversacion_{i+1}.json"
                    guardar_json(capsula_resultado, nombre_archivo)
                time.sleep(3)

        driver.quit()
        print("Proceso de recolección completado.")