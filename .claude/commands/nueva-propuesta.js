#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Obtener argumentos
const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Error: Debes proporcionar el nombre del cliente');
    console.error('Uso: /nueva-propuesta <nombre_cliente>');
    process.exit(1);
}

const nombreCliente = args.join(' ').replace(/[^a-zA-Z0-9\s]/g, '');
const fechaActual = new Date().toISOString().split('T')[0];
const nombreCarpeta = `${nombreCliente}_${fechaActual}`;

// Crear estructura de carpetas
const basePath = `propuestas/${nombreCarpeta}`;
const carpetas = [
    `${basePath}/01_brief`,
    `${basePath}/02_discovery`,
    `${basePath}/03_planificacion`,
    `${basePath}/04_propuesta`
];

try {
    // Crear carpetas
    carpetas.forEach(carpeta => {
        fs.mkdirSync(carpeta, { recursive: true });
    });

    // Copiar plantillas
    const plantillas = [
        { origen: 'templates/propuesta/01_brief/brief_template.md', destino: `${basePath}/01_brief/brief.md` },
        { origen: 'templates/propuesta/02_discovery/analisis_cliente_template.md', destino: `${basePath}/02_discovery/analisis_${nombreCliente.toLowerCase()}.md` },
        { origen: 'templates/propuesta/02_discovery/notas_reunion_template.md', destino: `${basePath}/02_discovery/notas_reunion_template.md` },
        { origen: 'templates/propuesta/03_planificacion/plan_trabajo_template.md', destino: `${basePath}/03_planificacion/plan_trabajo.md` },
        { origen: 'templates/propuesta/03_planificacion/recursos_template.md', destino: `${basePath}/03_planificacion/recursos.md` },
        { origen: 'templates/propuesta/04_propuesta/propuesta_template.md', destino: `${basePath}/04_propuesta/propuesta_${nombreCliente.toLowerCase()}.md` }
    ];

    plantillas.forEach(({ origen, destino }) => {
        if (fs.existsSync(origen)) {
            let contenido = fs.readFileSync(origen, 'utf8');
            // Reemplazar placeholders básicos
            contenido = contenido.replace(/\[Nombre del cliente\]/g, nombreCliente);
            contenido = contenido.replace(/\[YYYY-MM-DD\]/g, fechaActual);
            contenido = contenido.replace(/\[Nombre del proyecto\]/g, `Proyecto ${nombreCliente}`);

            fs.writeFileSync(destino, contenido);
        }
    });

    console.log(`✅ Nueva propuesta creada para "${nombreCliente}"`);
    console.log(`📁 Carpeta: ${basePath}`);
    console.log('');
    console.log('📋 Siguiente paso:');
    console.log(`   1. Completa el brief en: ${basePath}/01_brief/brief.md`);
    console.log(`   2. Luego ejecuta: /analizar-brief "${nombreCliente}"`);
    console.log('');
    console.log('📖 Consulta los documentos de referencia en:');
    console.log('   - config/Plan estratégico entaina 2025.md');
    console.log('   - config/Voz de marca entaina.md');

} catch (error) {
    console.error('Error al crear la propuesta:', error.message);
    process.exit(1);
}