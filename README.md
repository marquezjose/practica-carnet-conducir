# Práctica Examen de Conducir - Municipalidad de Córdoba

Aplicación web local simple diseñada para practicar el examen teórico de conducir, basada en las normativas vigentes.

## Características

- **100% Local y Offline:** No requiere conexión a internet, servidor ni base de datos.
- **Modo Práctica Libre:** Responde preguntas de todo el banco de forma aleatoria con feedback inmediato.
- **Modo Simulación:** Simula las condiciones del examen (30 preguntas, 90% para aprobar).
- **Interfaz Simple:** Diseñada para ser fácil de leer y utilizar en cualquier dispositivo.

## Cómo ejecutar

1. Descarga o clona este repositorio en tu computadora.
2. Abre la carpeta del proyecto.
3. Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web predeterminado.
4. ¡Listo para practicar!

## Cómo actualizar las preguntas

Las preguntas se encuentran estructuradas en el archivo `data/questions.json`.
Si la normativa cambia o quieres agregar o modificar preguntas, simplemente edita ese archivo respetando el formato JSON:

```json
{
  "id": 1,
  "question": "Texto de la pregunta...",
  "options": [
    "Opción 1",
    "Opción 2",
    "Opción 3"
  ],
  "correctAnswerIndex": 0
}
```
*Nota: `correctAnswerIndex` es el índice de la respuesta correcta dentro del arreglo `options` (empezando desde 0).*

## Configuración del examen

Los parámetros de la simulación de examen se pueden modificar en `data/config.json`:

```json
{
  "simulation": {
    "questionCount": 30,
    "passingScore": 27,
    "passingPercentage": 90
  }
}
```

## Arquitectura

La aplicación sigue el principio de separación de responsabilidades:

- `data/`: Contiene la información pura (Preguntas y Configuración).
- `js/engine.js`: Maneja la lógica, puntuación y selección aleatoria sin conocer nada de la interfaz visual.
- `js/app.js` y `css/styles.css`: Manejan la presentación y la interacción con el usuario en el navegador.
