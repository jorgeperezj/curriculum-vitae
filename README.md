# DentOS-V1-TESTING

Pruebas Automatizadas V1 🤖 <br>
Versión funcional ✅ <br>
[DentOS](dentos.co) - Software Dental Colombiano 100% Online. 💙

## 💡 Sobre el proyecto

Este proyecto corresponde al servicio encargado de automatizar pruebas desde el punto de vista del usuario final del aplicativo. <br>
Su objetivo principal es simular posibles escenarios para minimizar el margen de error en el flujo general, en la continua integración o liberación del aplicativo.

- Contiene módulos de Pacientes, Citas, Odontograma, Finanzas, Historias Clínicas, Mercadeo, Estadísticas, Especialidades, Planes de tratamiento, entre otros.
- Nuestro ambiente de pruebas es [testing.dentos.co](https://testing.dentos.co/)
- Nuestro ambiente de producción es [demo.dentos.co](https://demo.dentos.co/)

## 🧾 Sobre el código:

A continuación se listan las rutas relevantes del proyecto.

- Archivos de prueba por cada módulo en **./cypress/integration**
- Archivo donde se realiza la manipulación del DOM para las pruebas por módulos en **./cypress/pages-objects**
- Archivo donde se crean los comandos en **./cypress/support/commands.js**
- Cuando las pruebas se realicen desde consola, los videos de dichas pruebas quedarán guardados desde **./cypress/videos**
- Los datos constantes en las pruebas se encuentran en los archivos json en la ruta: **./cypress/fixtures**

## 🛠 Tecnologías utilizadas:

- **JavaScript** - Lenguaje de programación
- **Git** - Software control de versiones
- **NodeJS 18.0.0** - Entorno de ejecución
- **Cypress 9.5.4** - Framework de pruebas

## 💻 Pasos de instalación:

- [ ] 1. Descargar el editor de código (Sugerimos [Visual Studio Code](https://code.visualstudio.com/download)).
- [ ] 2. Instalar [Git](https://git-scm.com/downloads)
- [ ] 3. Descargar [NodeJS](https://nodejs.org/es/download/current/).
- [ ] 4. Clonar el repositorio:

```
git clone git@gitlab.com:dentos/dentos-v1-testing.git
```

- [ ] 5. Instalar dependencias, en la raíz del proyecto ejecutar en la terminal las siguientes líneas de comando:

```
npm install
```

Verificar que Cypress esté instalado correctamente y sea ejecutable:

```
npm run cy:verify
```

- [ ] 6. Ejecutar las pruebas:

Por UI:
```
npm run cy:open
```
Por consola:
```
npm run cy:run
```

- [ ] 7. Para manejar un estándar en el formato del código ejecutar:
```
npm run prettier
```

## 🌳 Control de versiones:

El esquema de control de versiones y ramificación está sujeto a protocolos
descritos en la documentación, para ampliar la información puedes revisar el [siguiente documento.](https://synapt.atlassian.net/wiki/spaces/SI/pages/268763164/Control+de+versiones)

### 🌱 Rama Main

Rama principal en producción. Es la versión estable del sistema. Como su nombre
lo indica, está configurada con los valores con las pruebas funcionales.
Contiene las fusiones de la rama _Testing_. <br>
**Aquí solo se puede clonar para crear ramas _Features_**

### 🌱 Rama Testing

Almacena los cambios listos para revisión.<br>
**Jamás se debe hacer merge de esta rama dentro de la rama Main**

### 🌱 Ramas Feature (Ticket branches)

Cada rama _feature_ nace de un ticket, cuyo desarrollo se inicia a partir de la
**última versión** (tag) de la rama _Main_. <br>
Deben llevar un nombre sin ñ, tildes
ni caracteres especiales, conservando la siguiente estructura:

**Tipo/NombreMódulo/NúmerodelTicket_BreveDescripción**

- **Tipo del ticket:** usar **Bug** si es una incidencia, **Fix** cuando es un arreglo,
  **Task** si es una funcionalidad nueva y **Hotfix** cuando se trata de un ticket urgente

- **Nombre módulo:** Ejemplo: Paciente, HC. (Si aplica de manera general o relaciona
  más de dos módulos, entonces el nombre será **Global**).

- **Número del ticket:** Corresponde a su clave o código único asignado por la
  herramienta de gestión de proyectos.

- **Breve descripción:** Será una frase compuesta por dos o tres palabras en estilo
  _PascalCase_ que permita identificar el objetivo del ticket.

**Ejemplos:**

- **Módulo específico:** Fix/Pacientes/TES-1_MenorDeEdad
- **Sin módulo específico:** Fix/Global/TES-1_Autenticacion

### ✅ Pasos para pasar a Testing los tickets Listos para revisión:

1. Checkout en la rama Testing y luego Pull.
2. Merge a Testing de la rama del ticket que se quiere fusionar.
3. Si generó conflictos verifica que los cambios también tengan en cuenta las actualizaciones de otros compañeros antes de darlo por resuelto.
4. Push de la rama Testing.
5. Pasar en Jira el ticket a estado _listo para revisión_.

### 🔗 Commits

El formato para etiquetar los commit's del proyecto debe ser en verbo infinitivo y conservando la siguiente estructura:

**NúmerodelTicket NombreMódulo: Breve descripción.**

**Ejemplo:**

- **Módulo específico:** TES-1 Pacientes: Validar campos obligatorios para menor de edad.
- **Sin módulo específico:** TES-1 Global: Validar permisos en vistas de usuario autenticado.

### 📄 Documentación relacionada en Confluence:

[Automatización de pruebas.](https://synapt.atlassian.net/l/c/T9FY2Q7J) <br>
[Escenarios de prueba.](https://synapt.atlassian.net/l/c/10cKeU8t)
