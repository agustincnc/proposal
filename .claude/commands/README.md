# Comandos para Gestión de Propuestas Comerciales

Este directorio contiene comandos de Claude Code para automatizar el flujo de creación de propuestas comerciales de entaina.

## Flujo de Trabajo

### 1. Iniciar Nueva Propuesta
```
/nueva-propuesta <nombre_cliente>
```
Crea la estructura completa de carpetas y archivos para una nueva propuesta.

### 2. Analizar Brief
```
/analizar-brief <nombre_cliente>
```
Analiza el brief inicial y genera documentos de discovery.

### 3. Verificar Estado
```
/status-propuesta <nombre_cliente>
```
Muestra el progreso actual y próximos pasos.

### 4. Generar Plan de Trabajo
```
/generar-plan <nombre_cliente>
```
Crea plan de trabajo detallado y estimación de recursos.

### 5. Generar Propuesta Final
```
/generar-propuesta <nombre_cliente>
```
Produce el documento final de propuesta comercial.

## Estructura Generada

Cada propuesta sigue esta estructura:
```
propuestas/
├── [Cliente_YYYY-MM-DD]/
│   ├── 01_brief/
│   │   └── brief.md
│   ├── 02_discovery/
│   │   ├── analisis_[cliente].md
│   │   └── notas_reunion_*.md
│   ├── 03_planificacion/
│   │   ├── plan_trabajo.md
│   │   └── recursos.md
│   └── 04_propuesta/
│       └── propuesta_[cliente].md
```

## Referencias

Los comandos utilizan automáticamente:
- `config/Plan estratégico entaina 2025.md`
- `config/Voz de marca entaina.md`
- `propuestas/ejemplos/` (para referencia de formato)

## Ejemplo de Uso Completo

```bash
# 1. Crear nueva propuesta
/nueva-propuesta "TechStartup"

# 2. Completar brief manualmente
# Editar: propuestas/TechStartup_2025-09-19/01_brief/brief.md

# 3. Analizar brief
/analizar-brief "TechStartup"

# 4. Realizar reuniones de discovery
# Crear: notas_reunion_*.md en 02_discovery/

# 5. Verificar progreso
/status-propuesta "TechStartup"

# 6. Generar plan
/generar-plan "TechStartup"

# 7. Generar propuesta final
/generar-propuesta "TechStartup"
```