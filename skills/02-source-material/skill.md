# Skill: Material Fuente y Documentación Oficial

## Objetivo

Esta skill establece cómo debe trabajar el agente con los PDF, documentos, imágenes, textos y demás material proporcionado por el usuario.

El material fuente constituye la autoridad principal para construir el contenido educativo de la aplicación.

---

## Principio fundamental

El agente debe distinguir siempre entre:

- información encontrada en una fuente;
- información interpretada;
- información inferida;
- información creada.

Nunca presentar información inferida o creada como si fuera oficial.

---

## Fuentes oficiales

Cuando el usuario proporcione:

- PDF;
- manual;
- reglamento;
- preguntero;
- documento oficial;
- imágenes de preguntas;
- capturas de pantalla;

debe considerarse material fuente del proyecto.

Cada contenido extraído debe conservar, cuando sea posible, una referencia a su origen.

---

## Extracción del contenido

Al procesar un PDF:

1. Identificar el documento.
2. Identificar título.
3. Identificar organismo o fuente.
4. Identificar fecha o versión si existe.
5. Extraer el contenido.
6. Separar capítulos o secciones.
7. Identificar información relevante.
8. Mantener el contexto original.

No modificar arbitrariamente el significado del texto.

---

## No resumir preguntas oficiales

Las preguntas del preguntero deben conservar su redacción original siempre que sea posible.

No:

- corregir estilo;
- simplificar;
- cambiar palabras;
- reescribir opciones;
- combinar preguntas;
- eliminar información;

sin registrar explícitamente que se trata de una modificación.

---

## OCR

Si el documento contiene imágenes o texto escaneado:

1. Utilizar OCR cuando sea necesario.
2. Revisar el resultado.
3. Marcar posibles errores.
4. Comparar con el documento visual cuando sea posible.

Nunca asumir que un OCR es correcto al 100 %.

---

## Ambigüedades

Si una pregunta contiene:

- texto ilegible;
- opción incompleta;
- respuesta dudosa;
- información contradictoria;
- errores de OCR;

el agente debe marcarla para revisión.

No completar automáticamente la información faltante.

---

## Trazabilidad

Siempre que sea posible, cada pregunta debe poder rastrearse hasta su fuente.

Ejemplo conceptual:

```json
{
  "source": {
    "document": "Preguntero Oficial",
    "page": 12,
    "section": "Señalización"
  }
}
```
