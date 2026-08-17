# Skill: Banco de Preguntas

## Objetivo

Esta skill define cómo transformar el preguntero y el material fuente en un banco de preguntas estructurado que pueda ser utilizado por la aplicación.

El banco de preguntas debe ser independiente de la interfaz.

---

## Principio fundamental

Las preguntas son datos.

La interfaz y la lógica de la aplicación no deben contener preguntas hardcodeadas salvo casos excepcionales de prueba.

Preferir:

```text
datos → JSON → JavaScript → interfaz
```
