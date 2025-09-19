
15 sept 2025

## Catalina Ayuso y Agustín Cuenca

Invitados [marvelo@aluxion.com](mailto:marvelo@aluxion.com) [Agustin Cuenca Guevara](mailto:agustin@entaina.ai) [acenteno@aluxion.com](mailto:acenteno@aluxion.com) [Catalina Ayuso de Paul](mailto:catalina.ayuso@healmind.care) [jsansossio@aluxion.com](mailto:jsansossio@aluxion.com) [Jose Miguel Díez Lastra](mailto:josemi@entaina.ai)

Archivos adjuntos [Catalina Ayuso y Agustín Cuenca](https://www.google.com/calendar/event?eid=amxxMDZxaGgycG5zOGd2Njlib3RzaG5zMnMgYWd1c3RpbkBlbnRhaW5hLmFp)

### Resumen

Agustín Cuenca, Catalina Ayuso de Paul, Alexandra Centeno, Moisés Arvelo, Julio Sansossio y José Miguel Diez de la Lastra se reunieron para comprender la arquitectura de la aplicación, el proceso de desarrollo y las herramientas utilizadas, como Vercel y Supabase. Se discutió la interacción entre la aplicación móvil (para pacientes) y la web (para terapeutas), la ausencia de pruebas automatizadas y la necesidad de migrar la infraestructura a Hillmine. Los participantes también abordaron la integración de servicios de IA de Renice para transcripciones y resúmenes, y la urgencia de Catalina Ayuso de Paul de internalizar el equipo técnico y mejorar la gestión de proyectos.

### Detalles

* **Introducción y Asistentes** Agustín Cuenca, Catalina Ayuso de Paul y Alexandra Centeno se conectaron y conversaron sobre sus ubicaciones y el clima. Posteriormente se unieron Moisés Arvelo y Julio Sansossio. Se mencionó que faltaba José Miguel Diez de la Lastra, quien se unió después de tener problemas con la cámara.

* **Propósito de la Reunión** Agustín Cuenca explicó el objetivo de la reunión: entender la arquitectura de la aplicación y el proceso de desarrollo, reconociendo las limitaciones de una startup. Enfatizó que no se trata de una crítica, sino de comprender cómo se han manejado los desafíos habituales del desarrollo.

* **Arquitectura General de la Aplicación** Alexandra Centeno inició la explicación, señalando que entregaron una de las últimas versiones en producción que incluye el core del proyecto, excluyendo los desarrollos más recientes. Detalló que la web está diseñada para la gestión del terapeuta, mientras que la aplicación móvil facilita la interconexión con el paciente, permitiendo a este cargar información que luego es consumida por la web para el terapeuta. La web ha experimentado más cambios debido a nuevas funcionalidades e integraciones como Stripe Connect para facturación y YouTube para la biblioteca de recursos.

* **Detalles Técnicos y Plataformas** Julio Sansossio explicó que la aplicación está montada en Vercel para despliegues automatizados de Next.js, y aunque no tienen un Dockerfile, Vercel probablemente la "dockeriza" internamente. Moisés Arvelo añadió que utilizan Supabase para la autenticación y la base de datos, con RLS (Row Level Security) para proteger el acceso a la información. La interacción con la base de datos se realiza principalmente a través de las APIs de Next.js desde el backend, con algunas conexiones directas desde el frontend para la autenticación básica del terapeuta. Se aclaró que la web es exclusivamente para terapeutas, mientras que la aplicación es para pacientes. Los estilos se gestionan con Tailwind y el estado con Redux, utilizando RTK para las llamadas internas.

* **Acceso al Código y Gestión de la Aplicación Móvil** Agustín Cuenca y José Miguel Diez de la Lastra preguntaron sobre el acceso al código de la aplicación móvil, ya que solo tenían la web. Catalina Ayuso de Paul confirmó que solo tenían acceso a los repositorios de GitHub migrados de la web. Agustín Cuenca solicitó que se creara un repositorio para la aplicación móvil, aunque no la levantarían, solo para entender su arquitectura. Moisés Arvelo mencionó que la aplicación móvil (tanto Google como iOS) y el inicio de sesión de Google ya están en las cuentas de Catalina Ayuso de Paul, lo que significa que no se requerirá una nueva configuración en ese aspecto.

* **Interacción entre la Aplicación y la Web** José Miguel Diez de la Lastra preguntó sobre la interacción entre la aplicación móvil y la web, a lo que Moisés Arvelo respondió que se agregaron tres endpoints en la última versión para vincular Google, especialmente para la creación de citas. La aplicación móvil trabaja directamente con Supabase y RLS, permitiendo que solo el paciente acceda a su propia información o la permitida por su terapeuta. La misma instancia de Supabase se utiliza para ambas, con reglas internas para evitar que un terapeuta acceda como paciente y viceversa.

* **Proceso de Desarrollo y Herramientas** Alexandra Centeno describió el proceso de desarrollo, indicando que inicialmente dividieron las entregas por sprints (diseño, maquetación, lógica) debido al alcance del proyecto. Continuaron con este proceso para entregas más grandes o pequeñas, priorizando según el roadmap y las fechas de entrega. Utilizan Jira para el trabajo interno, la delegación de requerimientos y el seguimiento del roadmap, pero es una herramienta interna a la que Hillmine no tiene acceso. La comunicación con Catalina Ayuso de Paul se realiza diariamente a través de WhatsApp y correos electrónicos.

* **Testing y Despliegue Automatizado** Agustín Cuenca preguntó sobre el testing automático y la cobertura de pruebas. Julio Sansossio indicó que no tienen tests automatizados de ningún tipo, pero utilizan Vercel para despliegues automatizados cuando se hacen "pushes" a las ramas operativas, como la rama principal.

* **Infraestructura y Costos del Servicio** Agustín Cuenca mencionó la necesidad de migrar la infraestructura de Vercel y Supabase a la propiedad de Hillmine. Julio Sansossio señaló que Vercel permite transferencias, pero Supabase probablemente requerirá una migración manual de datos. Se estimó que Vercel cuesta alrededor de 40 unidades, y se deberá revisar el costo de Supabase, ya que depende de los planes.

* **Inteligencia Artificial y Servicios Externos** En cuanto a la IA, Julio Sansossio explicó que la grabación se hace desde el frontend, y la transcripción y el resumen se realizan a través de un servicio de Renice, una empresa de Javi, mediante una API asíncrona. Los audios se guardan en el almacenamiento de Supabase. La configuración del "prompt" está en la aplicación, pero los detalles de configuración están dentro de Renice. Moisés Arvelo agregó que el audio se guarda para que el terapeuta pueda reproducirlo, con reglas de seguridad para evitar accesos externos. Se distingue entre el resumen de la transcripción de audio y el resumen semanal del paciente, que incluye información del diario y autorregistros. Agustín Cuenca expresó su interés en entender el nivel de funcionalidad de Hillmind dentro de este servicio de Renice, ya que no se sabe cómo se entrena la IA.

* **Refactorización y Puntos Críticos** Moisés Arvelo comentó que el código es relativamente nuevo y ha tenido refactorizaciones para mejorar los tiempos de respuesta, especialmente en las llamadas a la base de datos que involucran múltiples tablas. Las "queries" más complejas están en los RLS. Existe un dashboard de administración que permite visualizar terapeutas, pacientes, suscripciones activas e interacciones, al cual Catalina Ayuso de Paul tiene acceso. No tienen procesos en segundo plano ni "batches" nocturnos.

* **Próximos Pasos y Preocupaciones** Catalina Ayuso de Paul creó el repositorio para la aplicación móvil y invitó a Agustín Cuenca y José Miguel Diez de la Lastra. Agustín Cuenca planea preparar preguntas para entender mejor la parte de la inteligencia artificial y recomendó una reunión con Javi de Renice para aclarar cómo la IA aprende si no guarda las conversaciones. Catalina Ayuso de Paul tiene urgencia en avanzar en la internalización del equipo técnico debido a compromisos con un socio y la necesidad de mantener el ritmo. También se discutió la falta de pruebas automatizadas como un riesgo significativo, ya que dificulta los cambios en el código y puede llevar a regresiones.

* **Gestión de Proyectos y Comunicación** Agustín Cuenca sugirió que Catalina Ayuso de Paul implemente una herramienta de gestión de proyectos, como Monday o Asana, en lugar de depender únicamente de WhatsApp y correo electrónico para la comunicación con el equipo de desarrollo. Catalina Ayuso de Paul reconoció que la gestión actual puede ser caótica, pero también mencionó la necesidad de negociar con el equipo de desarrollo actual, ya que le deben horas de trabajo.

### Pasos siguientes recomendados

- [ ] Catalina Ayuso de Paul creará un repositorio y les dará acceso para que puedan ver la aplicación móvil.
- [ ] Catalina Ayuso de Paul deberá preparar una lista de los servicios que se están utilizando para tener una idea de los costos por servicio.
- [ ] Catalina Ayuso de Paul se dará de alta como terapeuta y creará un paciente para poder usar la aplicación como paciente y tener una doble visión.
- [ ] Catalina Ayuso de Paul hablará con Javi para crear una reunión con Agustín Cuenca y discutir la parte de inteligencia artificial.

*Revisa las notas de Gemini para asegurarte de que sean correctas. [Obtén consejos y descubre cómo toma notas Gemini](https://support.google.com/meet/answer/14754931)*

*Danos tu opinión sobre el uso de Gemini para tomar notas en una [breve encuesta.](https://google.qualtrics.com/jfe/form/SV_9vK3UZEaIQKKE7A?confid=ri3eB_FdlOU9QWPt_1IeDxIWOAIIigIgABgBCA&detailid=unspecified)*
