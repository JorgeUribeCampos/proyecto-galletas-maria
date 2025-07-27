# validador_web/main.py

from flask import Flask, render_template

# 1. Inicialización de la aplicación Flask
# __name__ es una variable especial de Python que ayuda a Flask a saber dónde buscar recursos como las plantillas.
app = Flask(__name__)

# 2. Definición de la Ruta Principal (Homepage)
# El decorador @app.route('/') le dice a Flask: "Cuando alguien visite la página principal de mi sitio, ejecuta esta función".
@app.route('/')
def pagina_de_validacion():
    """
    Esta función se encarga de preparar los datos y mostrar la página de validación.
    """
    # --- Datos de Prueba (Simulación) ---
    # Por ahora, usaremos datos falsos para construir la interfaz.
    # En una fase posterior, estos datos vendrán de una consulta a BigQuery.
    datos_de_prueba = {
        "id_conversacion": "instagram_post_xyz123",
        "url_post": "https://www.instagram.com/p/xyz123/",
        "texto_post_original": "¡Feliz domingo! Hoy les comparto mi secreto para una carlota de limón perfecta con galletas María. Es el postre que me hacía mi mamá y ahora se lo hago a mis peques. ¡Un apapacho directo a la infancia!",
        "analisis_ia": {
            "emocion_principal": "Nostalgia",
            "confianza_emocion": 0.92,
            "contexto_ritual": "Celebración Familiar",
            "resonancia_emocional": "Alta (Comunidad también expresa nostalgia y alegría)"
        },
        "comentarios_destacados": [
            {
                "texto": "Uff, qué recuerdo! La receta de mi abuela era casi igual. Gracias por compartir!",
                "analisis_ia": "Nostalgia"
            },
            {
                "texto": "Una pregunta, ¿se puede usar leche light para que no quede tan pesado? A veces me da culpa por el azúcar.",
                "analisis_ia": "Culpa"
            }
        ]
    }

    # 3. Renderizar la Plantilla HTML
    # Flask buscará un archivo llamado 'validacion.html' dentro de la carpeta 'templates'.
    # Le pasamos nuestros datos de prueba para que el HTML pueda mostrarlos.
    return render_template('validacion.html', conversacion=datos_de_prueba)

# Este bloque permite ejecutar un servidor de desarrollo local
# para probar nuestra página web directamente desde nuestra computadora.
if __name__ == '__main__':
    # El puerto 8080 es un puerto común para desarrollo web.
    # debug=True hace que el servidor se reinicie automáticamente cuando hacemos cambios en el código.
    app.run(host='127.0.0.1', port=8080, debug=True)