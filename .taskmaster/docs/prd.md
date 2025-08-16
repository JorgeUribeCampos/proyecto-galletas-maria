# Documento de Requisitos del Producto (PRD): Piloto de Análisis Cultural "Galletas María"

## 1. Visión General del Proyecto

El objetivo de este proyecto es construir y ejecutar un sistema de análisis cultural computacional para entender las representaciones de las "Galletas María" en el contexto de la maternidad en México. El sistema debe ser capaz de recolectar conversaciones de redes sociales, analizarlas usando IA para extraer variables culturales (como nostalgia, culpa, etc.), y almacenar los resultados en una base de datos en la nube para su posterior visualización.

## 2. Componentes Clave (Features)

El sistema se compone de los siguientes módulos funcionales:

1.  **Recolector de Datos (Scraper):**
    -   Debe ser un script de Python que use Selenium.
    -   Debe poder leer una lista de URLs desde un archivo `urls.txt`.
    -   Debe ser capaz de iniciar sesión en Instagram.
    -   Debe extraer el texto del post principal y los textos de los comentarios.
    -   Debe guardar cada conversación extraída en un archivo JSON individual, siguiendo un schema predefinido.

2.  **Núcleo de Análisis (Cloud Function):**
    -   Debe ser una Google Cloud Function escrita en Python.
    -   Debe usar la librería `pysentimiento` para analizar el sentimiento.
    -   Debe implementar una lógica basada en keywords para detectar variables culturales predefinidas.
    -   Debe recibir un texto y devolver un análisis en formato JSON.

3.  **Orquestador de Conversaciones (Cloud Function):**
    -   Debe ser una segunda Google Cloud Function.
    -   Debe recibir una conversación completa en formato JSON (post + comentarios).
    -   Debe llamar al "Núcleo de Análisis" para cada texto (el post y cada comentario).
    -   Debe ensamblar todos los análisis individuales en un único resultado JSON.

4.  **Almacén de Datos (BigQuery):**
    -   Debemos usar Google BigQuery.
    -   Se deben crear dos tablas: una para los datos crudos recolectados y otra para los resultados analizados.
    -   Las tablas deben tener un schema definido que soporte datos anidados en formato JSON.

5.  **Script Maestro de Ejecución:**
    -   Debe ser un script de Python que se ejecute localmente.
    -   Debe leer los datos crudos de la primera tabla de BigQuery.
    -   Debe llamar al "Orquestador" para cada conversación.
    -   Debe guardar los resultados analizados en la segunda tabla de BigQuery.