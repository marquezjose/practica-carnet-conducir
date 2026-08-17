# Skill: Testing y Control de Calidad

## Objetivo

Garantizar que las modificaciones realizadas durante el desarrollo no rompan el funcionamiento de la aplicación.

---

## Principio fundamental

Cada cambio debe preservar las funcionalidades existentes salvo que el cambio tenga como objetivo modificarlas.

---

## Tipos de pruebas

El proyecto debe considerar cuatro niveles.

### Pruebas de datos

Validan el banco de preguntas.

Comprobar:

- IDs únicos;
- preguntas válidas;
- opciones válidas;
- respuestas correctas existentes;
- estructura JSON correcta.

### Pruebas de lógica

Validan:

- selección de preguntas;
- validación de respuestas;
- puntuación;
- porcentaje;
- finalización;
- reinicio.

### Pruebas de interfaz

Comprobar:

- carga de la aplicación;
- navegación;
- selección de opciones;
- botones;
- feedback;
- resultados.

### Pruebas manuales

Utilizar el navegador para comprobar el comportamiento real.

---

## Casos mínimos

Debe probarse al menos:

1. Inicio normal.
2. Inicio de práctica.
3. Respuesta correcta.
4. Respuesta incorrecta.
5. Finalización.
6. Resultado.
7. Reinicio.
8. Banco vacío.
9. Banco insuficiente.
10. Pregunta inválida.

---

## Regresión

Después de cambios importantes comprobar:

- inicio;
- carga de preguntas;
- respuestas;
- puntuación;
- resultado;
- reinicio.

---

## Pruebas del banco

Antes de utilizar un banco nuevo, ejecutar validaciones automáticas si existe infraestructura para ello.

No permitir que una pregunta inválida rompa toda la aplicación.

---

## Errores

Los errores deben:

1. detectarse;
2. registrarse;
3. explicarse;
4. corregirse en la causa;
5. probarse nuevamente.

No ocultar errores con soluciones como:

```javascript
try {
    ...
} catch {
    // ignorar
}
```
