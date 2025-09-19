# Análisis del Cliente

**Cliente:** HealMind
**Fecha:** 2025-09-19

## Contexto del Cliente
### Sector y posicionamiento
HealMind opera en el sector HealthTech como plataforma SaaS B2B para profesionales de salud mental. Se posiciona como herramienta integral que conecta psicólogos con pacientes, diferenciándose por sus capacidades de transcripción IA de sesiones terapéuticas.

### Situación actual
- **Producto consolidado**: Aplicación web, móvil y sistema IA funcional
- **Dependencia crítica**: Equipo de desarrollo completamente externo
- **Crecimiento limitado**: Falta de agilidad para nuevas funcionalidades
- **Base de usuarios activa**: Psicólogos y gabinetes usando la plataforma

### Competencia
Sector en crecimiento con competidores como Doxy.me, SimplePractice, TherapyNotes. HealMind se diferencia por la integración nativa de IA para transcripción, especialmente relevante en mercado español/europeo con foco en privacidad.

## Análisis Técnico
### Arquitectura actual
- **Frontend**: Next.js con React, desplegado en Vercel
- **Backend**: Supabase (PostgreSQL, Auth, Storage, Functions)
- **IA externa**: Servicio cloud dedicado (Google Cloud Run)
- **Integraciones**: Stripe (pagos), Firebase (notificaciones), PostHog (analytics)

### Stack tecnológico
- **Frameworks**: Next.js, React, TypeScript
- **UI**: Tailwind CSS, shadcn/ui components
- **Estado**: Redux
- **Base de datos**: PostgreSQL via Supabase
- **IA**: Axios wrapper a servicio externo

### Deuda técnica identificada
- **Vulnerabilidad**: Token IA expuesto en frontend, hay que resolverlo pero no es crítico
- **Arquitectura monolítica**: Por el momento no es necesario cambiar la arquitectura
- **Falta de testing**: No se identifican tests automatizados es necesario avanzar en este area
- **Escalabilidad**: Arquitectura no preparada para crecimiento exponencial
- **Internacionalización** No esta claro que sea fácil de hacer, debería ser de los primeros temas a investigar.

## Análisis de Negocio
### Modelo de negocio
SaaS B2B con múltiples flujos de ingresos:
- Suscripciones mensuales/anuales para terapeutas
- Comisiones por transacciones (integración Stripe)
- Posible freemium con límites de uso IA

### Procesos críticos
1. **Onboarding de terapeutas**: Verificación de licencias (integración COPMADRID)
2. **Gestión de sesiones**: Agendamiento, recordatorios, transcripción
3. **Procesamiento IA**: Transcripción asíncrona con identificación de speakers
4. **Facturación y pagos**: Automatización de cobros recurrentes

### Oportunidades de mejora
- **IA avanzada**: Análisis de sentimiento, resúmenes automáticos, insights longitudinales
- **Automatización**: Workflows de seguimiento, recordatorios inteligentes
- **Integración**: APIs con sistemas hospitalarios, ERP clínicos
- **Personalización**: IA adaptada por especialidad terapéutica

## Recursos y Capacidades
### Equipo técnico
- **Actual**: Equipo externo de desarrollo (el equipo lo componen do desarrolaldores y una gestora del proyecto, tambien cuentan con una freelance para el diseño)
- **Objetivo**: Incorporar al futuro lead técnico que sea el embrion del departamento de tecnología de HealMind
- **Gap crítico**: Falta de expertise interno en IA y arquitecturas escalables

### Presupuesto estimado
- **Fase 1** (2 meses): 2 desarrolladores × 100h por mes  = 400h totales
- **Fase 2** (4 meses): 1 desarrollador entaina + 1 nuevo reclutado
- **Fase 3** (6 meses): Soporte de 1 desarrollador entaina
- **Sobrecosto**: 30% sobre salario bruto del desarrollador incorporado

### Capacidad de cambio
- **Alta motivación**: Buscan activamente la internalización
- **Disposición financiera**: Plan de 12 meses con inversión sostenida
- **Flexibilidad técnica**: Stack moderno permite iteración rápida
- **Riesgo operativo**: Servicio crítico para usuarios activos

## Conclusiones
HealMind representa una oportunidad estratégica perfecta para entaina:

**Fortalezas clave:**
- Producto validado en mercado creciente
- Stack tecnológico moderno y familiar
- Modelo de negocio sostenible y escalable
- Alineación con valores europeos de privacidad

**Desafíos críticos:**
- Vulnerabilidades de seguridad requieren atención inmediata
- Dependencia externa limita velocidad de innovación
- Gap técnico en IA avanzada y arquitecturas escalables

**Recomendación:** Proyecto prioritario que combina impacto técnico, social y comercial, con timeline de 12 meses ideal para crear caso de éxito referencial en HealthTech.
