# Skill: Alcance y Arquitectura del Proyecto

## Objetivo

Esta skill define el propósito, alcance, límites y criterios técnicos generales del proyecto de práctica para el examen teórico de conducir.

El objetivo principal es construir una aplicación web local que permita estudiar y practicar preguntas de opción múltiple utilizando como fuente el material oficial proporcionado por el usuario.

La aplicación está destinada exclusivamente a fines educativos y de práctica personal.

---

## Objetivo funcional

La aplicación debe permitir:

- Consultar material teórico estructurado.
- Practicar preguntas de opción múltiple.
- Seleccionar respuestas.
- Informar si la respuesta seleccionada es correcta o incorrecta.
- Mostrar la respuesta correcta cuando corresponda.
- Realizar simulaciones de examen.
- Obtener un resultado final.
- Reiniciar una práctica.
- Practicar por categorías o temas cuando exista información suficiente para hacerlo.
- Utilizar la aplicación localmente desde un navegador.

---

## Principio fundamental

El proyecto debe mantenerse enfocado en:

> "Una aplicación local, simple y clara para estudiar y practicar el examen teórico de conducir."

No convertir el proyecto en una plataforma educativa genérica.

---

## Alcance inicial

El MVP debe priorizar:

1. Carga de preguntas.
2. Presentación de preguntas.
3. Selección de respuestas.
4. Validación de respuestas.
5. Resultado de la práctica.
6. Simulación de examen.
7. Reinicio de prácticas.
8. Visualización clara del progreso.

Las funcionalidades adicionales deben implementarse solamente si aportan valor directo al objetivo principal.

---

## Tecnologías

La arquitectura inicial debe priorizar simplicidad.

Preferencia:

- HTML5.
- CSS3.
- JavaScript moderno.
- JSON para datos estructurados.
- Navegador web moderno.

No incorporar frameworks, librerías, bases de datos o servicios externos salvo que exista una justificación técnica concreta.

---

## Ejecución local

La aplicación debe poder ejecutarse localmente.

La ausencia de conexión a Internet no debe impedir el funcionamiento de las funcionalidades principales.

No depender de APIs externas para:

- cargar preguntas;
- validar respuestas;
- calcular resultados;
- mostrar contenido;
- ejecutar el simulador.

---

## Separación de responsabilidades

El proyecto debe mantener separadas estas responsabilidades:

### Contenido

Preguntas, respuestas, categorías, explicaciones y referencias.

### Lógica

Selección de preguntas, validación, puntuación, progreso y simulación.

### Presentación

HTML, CSS y componentes visuales.

### Configuración

Cantidad de preguntas, criterios de aprobación, modos de práctica y demás parámetros.

---

## Principio de mínima complejidad

Ante dos soluciones técnicamente válidas, elegir la más simple.

No agregar:

- backend;
- base de datos;
- autenticación;
- cuentas de usuario;
- servidor remoto;
- sistemas de administración;
- dependencias externas;

si no son necesarios para cumplir los objetivos del proyecto.

---

## Control del alcance

Antes de implementar una funcionalidad nueva, determinar:

1. ¿Es necesaria para practicar el examen?
2. ¿Mejora significativamente la experiencia?
3. ¿Puede implementarse de forma sencilla?
4. ¿Introduce complejidad innecesaria?
5. ¿Puede afectar funcionalidades existentes?

Si una funcionalidad no es necesaria, debe proponerse como futura mejora y no incorporarse automáticamente.

---

## Regla de no invención

El agente NO debe inventar:

- preguntas;
- respuestas oficiales;
- normativa;
- señales;
- criterios de aprobación;
- cantidad oficial de preguntas;
- cantidad oficial de errores permitidos;
- contenidos atribuidos a organismos oficiales.

Cuando un dato no esté confirmado por las fuentes proporcionadas, debe indicarse como desconocido.

---

## Prioridad de fuentes

La prioridad de información es:

1. Material oficial proporcionado por el usuario.
2. Documentación oficial adicional indicada explícitamente por el usuario.
3. Información externa únicamente cuando sea solicitada o necesaria para resolver una cuestión técnica.

La información externa no debe modificar automáticamente el contenido oficial del banco de preguntas.

---

## Modificaciones

Antes de realizar cambios estructurales importantes, analizar el impacto sobre:

- datos;
- lógica;
- interfaz;
- pruebas;
- documentación.

Evitar modificaciones masivas cuando una modificación localizada sea suficiente.

---

## Criterio de éxito

El proyecto será considerado exitoso cuando una persona pueda:

1. Abrir la aplicación localmente.
2. Elegir una modalidad de práctica.
3. Responder preguntas.
4. Recibir feedback.
5. Completar una simulación.
6. Ver claramente su resultado.
7. Repetir la práctica.

La aplicación debe ser fácil de entender sin necesidad de documentación técnica.
