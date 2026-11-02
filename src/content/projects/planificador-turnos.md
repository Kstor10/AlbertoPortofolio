---
order: 4
year: "2026"
status: academic
cover: /images/projects/turnos/turnos-02-cuadrante-semanal.webp
accent: amber
es:
  title: Planificador de turnos
  eyebrow: DAM · reglas de negocio
  summary: "Aplicación Laravel para construir un cuadrante semanal y validar solapes, descansos y cobertura antes de asignar personal."
  problem: "Asignar turnos manualmente hace fácil incumplir descansos, duplicar personas o dejar franjas sin responsable."
  solution:
    - "Cuadrante de siete días y tres turnos diarios, persistido en la sesión."
    - "Reglas para evitar dos turnos en un día y exigir 12 horas de descanso."
    - "Candidatos válidos, relleno automático y semana individual por empleado."
    - "Resumen de horas, cobertura y avisos calculado desde el estado actual."
  result: "El proyecto implementa las funcionalidades F01–F09 y F14. Su validación documentada recoge 47 pruebas y 185 aserciones automatizadas, sin necesidad de base de datos."
  stack:
    - PHP 8.4
    - Laravel 13
    - Blade
    - Laravel Sail
    - PHPUnit
    - Session storage
  role:
    - Modelado de reglas laborales y validaciones
    - Arquitectura con contrato RosterStore intercambiable
    - Implementación de controladores y vistas Blade
    - Pruebas de funcionalidades y casos límite
  gallery:
    - src: /images/projects/turnos/turnos-01-candidatos-validos.webp
      alt: "Lista de candidatos ficticios válidos para cubrir un turno"
      caption: "Solo aparecen personas que cumplen las reglas bloqueantes."
    - src: /images/projects/turnos/turnos-02-cuadrante-semanal.webp
      alt: "Cuadrante semanal de siete días con nombres de demostración"
      caption: "La semana completa, editable desde una única vista."
    - src: /images/projects/turnos/turnos-03-resumen-avisos.webp
      alt: "Resumen de cobertura, horas y avisos del cuadrante"
      caption: "Los avisos convierten las reglas en decisiones visibles."
    - src: /images/projects/turnos/turnos-04-semana-empleado.webp
      alt: "Detalle semanal de una persona ficticia con turnos y descansos"
      caption: "Trazabilidad por empleado sin exponer datos reales."
en:
  title: Shift planner
  eyebrow: Software development studies · business rules
  summary: "A Laravel application for building a weekly rota and validating overlaps, rest periods and coverage before staff are assigned."
  problem: "Manual scheduling makes it easy to breach rest periods, double-book people or leave shifts without a responsible employee."
  solution:
    - "A seven-day, three-shift rota persisted in the browser session."
    - "Rules preventing two shifts in one day and requiring 12 hours of rest."
    - "Eligible candidates, auto-fill and an individual weekly view."
    - "Hours, coverage and warnings computed from the current rota state."
  result: "The project implements features F01–F09 and F14. Its documented validation records 47 automated tests and 185 assertions, without requiring a database."
  stack:
    - PHP 8.4
    - Laravel 13
    - Blade
    - Laravel Sail
    - PHPUnit
    - Session storage
  role:
    - Labour-rule and validation modelling
    - Architecture with an interchangeable RosterStore contract
    - Controller and Blade view implementation
    - Functional and edge-case testing
  gallery:
    - src: /images/projects/turnos/turnos-01-candidatos-validos.webp
      alt: "List of eligible fictional candidates for a shift"
      caption: "Only people who satisfy the blocking rules are shown."
    - src: /images/projects/turnos/turnos-02-cuadrante-semanal.webp
      alt: "Seven-day weekly rota using demonstration names"
      caption: "The full week is editable from one view."
    - src: /images/projects/turnos/turnos-03-resumen-avisos.webp
      alt: "Rota summary showing coverage, hours and warnings"
      caption: "Warnings turn the rules into visible decisions."
    - src: /images/projects/turnos/turnos-04-semana-empleado.webp
      alt: "Weekly detail for a fictional employee showing shifts and rest"
      caption: "Per-employee traceability without exposing real data."
---

El planificador demuestra modelado de dominio, validación y pruebas más allá de una interfaz CRUD.
