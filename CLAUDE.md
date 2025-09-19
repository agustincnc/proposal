# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Este repositorio es para crear propuestas comerciales. Es un proyecto de lenguaje natural (no hay código) que ayuda a escribir propuestas comerciales para proyectos de IA, siguiendo la metodología y valores de entaina.

## Directory Structure

- `config/`: Documentos estratégicos de entaina
  - `Plan estratégico entaina 2025.md`: Plan estratégico y posicionamiento de entaina
  - `Voz de marca entaina.md`: Guía de tono y voz de marca
- `propuestas/`: Propuestas organizadas por cliente y fecha con estructura específica:
  - `[Cliente_YYYY-MM-DD]/01_brief/`: Brief inicial del proyecto
  - `[Cliente_YYYY-MM-DD]/02_discovery/`: Análisis y notas de reuniones
  - `[Cliente_YYYY-MM-DD]/03_planificacion/`: Plan de trabajo y recursos
  - `[Cliente_YYYY-MM-DD]/04_propuesta/`: Propuesta comercial final
  - `ejemplos/`: Ejemplos de propuestas anteriores en PDF
- `templates/`: Plantillas reutilizables para cada fase
- `.claude/commands/`: Comandos automatizados para el flujo de propuestas

## Comandos Claude Code Disponibles

Use estos comandos para automatizar el flujo de propuestas:

- `/nueva-propuesta <nombre_cliente>`: Crea estructura completa para nueva propuesta
- `/analizar-brief <nombre_cliente>`: Analiza brief y genera documentos de discovery
- `/status-propuesta <nombre_cliente>`: Muestra progreso actual y próximos pasos
- `/generar-plan <nombre_cliente>`: Crea plan de trabajo y estimación de recursos
- `/generar-propuesta <nombre_cliente>`: Produce documento final de propuesta comercial

## Workflow para Propuestas

1. **Inicialización**: `/nueva-propuesta <cliente>` crea estructura de 4 fases
2. **Brief**: Completar `01_brief/brief.md` con información inicial del proyecto
3. **Discovery**: `/analizar-brief <cliente>` + reuniones de discovery en `02_discovery/`
4. **Planificación**: `/generar-plan <cliente>` para crear plan de trabajo en `03_planificacion/`
5. **Propuesta**: `/generar-propuesta <cliente>` para documento final en `04_propuesta/`

## Referencias Clave

- `config/Plan estratégico entaina 2025.md`: Posicionamiento estratégico y objetivos
- `config/Voz de marca entaina.md`: Tono, valores y estilo de comunicación
- `templates/propuesta/`: Plantillas para cada fase del proceso
- `propuestas/ejemplos/`: Referencia de formato y estructura de propuestas anteriores

## Principles and Guidelines

- **Lenguaje**: Trabaja siempre en castellano
- **Filosofía**: "Entaina" significa despertar/espabilar - reflejar esto en el tono
- **Valores**: Mantener valores europeos, rigor técnico, y enfoque en personas
- **Estructura**: Seguir formato tipo(scope): summary para commits
- **Organización**: Una preocupación por commit, PRs bajo 400 líneas

## Content Guidelines

- **Tono**: Práctico, motivador y ético
- **Enfoque**: Conectar innovación con personas, no promesas vacías
- **Colores conceptuales**:
  - Azul: rigor técnico y confianza
  - Amarillo: foco en personas y emocional
  - Naranja: innovación y exploración

## File Naming Conventions

- Fechas en formato YYYY-MM-DD
- Nombres descriptivos en castellano
- Espacios permitidos en nombres de archivo
- Estructura jerárquica por cliente y fecha