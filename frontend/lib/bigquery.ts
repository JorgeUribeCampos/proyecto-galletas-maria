// frontend/lib/bigquery.ts
import { BigQuery } from '@google-cloud/bigquery';

// 1. Inicializamos el cliente de BigQuery.
// La librería es lo suficientemente inteligente para encontrar y usar las credenciales
// que definimos en nuestro archivo .env.local.
const bigqueryClient = new BigQuery({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: {
    client_email: process.env.GOOGLE_CLOUD_CLIENT_EMAIL,
    // Es necesario reemplazar los "\\n" del .env por saltos de línea reales para la librería
    private_key: process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

// 2. Definimos la estructura de nuestros datos de Tópicos para TypeScript.
// Esto asegura que nuestro código no tenga errores de tipos.
export interface Topico {
  // Ajusta estos campos según los nombres REALES de las columnas en tu tabla de BigQuery
  nombre_topico: string;
  volumen_conversacion: number;
  sentimiento_positivo: number;
  sentimiento_neutral: number;
  sentimiento_negativo: number;
}

// 3. Creamos la función que se conecta y consulta los datos.
export async function getTopicos(): Promise<Topico[]> {
  console.log('Iniciando conexión a BigQuery para obtener tópicos...');

  // Esta es la consulta SQL que se ejecutará en nuestra base de datos.
  // ¡IMPORTANTE! Reemplaza los nombres de las columnas por los que existan en tu tabla.
  // Por ahora, es un ejemplo para probar la conexión.
  const query = `SELECT 
                    nombre_topico, 
                    volumen_conversacion, 
                    sentimiento_positivo, 
                    sentimiento_neutral, 
                    sentimiento_negativo 
                 FROM \`galletas-piloto-ju-250726.analisis_galletas.resultados_analizados\` 
                 LIMIT 10`;

  try {
    const [rows] = await bigqueryClient.query(query);
    console.log('Datos obtenidos de BigQuery exitosamente.');
    return rows as Topico[];
  } catch (error) {
    console.error('ERROR AL CONECTAR CON BIGQUERY:', error);
    // Si hay un error, devolvemos un array vacío para que la aplicación no se rompa.
    return [];
  }
}