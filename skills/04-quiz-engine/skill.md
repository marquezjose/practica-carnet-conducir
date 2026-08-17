# Skill: Motor de Preguntas y Simulación

## Objetivo

Esta skill define la lógica que controla las prácticas y simulaciones de examen.

El motor debe ser independiente de la interfaz visual.

---

## Responsabilidades

El motor debe encargarse de:

- seleccionar preguntas;
- iniciar una sesión;
- registrar respuestas;
- determinar respuestas correctas;
- calcular resultados;
- controlar progreso;
- finalizar sesiones;
- reiniciar sesiones.

---

## Modos de práctica

La aplicación puede implementar diferentes modos.

### Modo práctica

Permite responder preguntas y recibir feedback inmediatamente.

### Modo simulación

Reproduce, en la medida en que la información oficial lo permita, las condiciones del examen.

### Modo por categoría

Permite practicar preguntas de una categoría determinada cuando las categorías estén correctamente identificadas.

---

## Configuración

Los parámetros del examen deben estar separados de la lógica.

Ejemplo:

```json
{
  "exam": {
    "questionCount": 20,
    "passingScore": 80,
    "timeLimitMinutes": null
  }
}
```
