# 👑 Gestor de Tareas CLI

**¡Organiza tu día con el poder de la consola y la magia de Lodash!**

> 🛠️ *Proyecto en proceso de refactorizado y potenciado.*

***Gestor de Tareas CLI*** es un sistema de gestión de tareas en Node.js que aprovecha **Inquirer** para la interacción por consola, **Lodash** para procesamiento avanzado de datos y **fs** para guardado persistente en archivos.

---

## 🎯 Características Principales

En este CLI podrás:

* 📂 **Modularizar tu proyecto** con una estructura limpia: controladores, modelos, utilidades y helpers.
* 💾 **Persistencia en archivos**: todas las tareas se almacenan en `data/tareas.json` para que sobrevivan reinicios.
* 🔍 **Lodash al rescate**:
  * Ordenar tareas con `_.orderBy`
  * Elimina duplicados con `_.uniqBy`
  * Genera IDs únicos con `_.uniqueId`
  * Filtra y agrupa tareas con `_.filter`, `_.reject`, `_.groupBy`
* 🎨 **UX mejorada** con **Chalk**:
  * Mensajes coloreados para estados y errores
  * Confirmaciones antes de eliminar
* 📋 **Interacción CLI** usando **Inquirer**:
  1. Agregar nueva tarea
  2. Listar tareas (todas, completadas, pendientes)
  3. Marcar tareas como completadas (checkbox)
  4. Eliminar tarea con confirmación
  5. Salir

---

## 🧭 Instrucciones de Uso

1️⃣ Clona el repositorio:
```bash
git clone https://github.com/ArtDaSak/GestorTareas.git
```

2️⃣ Instala dependencias:
```bash
npm install
```

3️⃣ Ejecuta el CLI:
```bash
npm start
```

4️⃣ Sigue las opciones en consola y deja que la productividad te encuentre.

---

## 🚀 Tecnologías Utilizadas:

<ul>
  <li>
    <a href="https://nodejs.org/en" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" alt="Node.js" width="15"/>
    </a>
    Node.js.
  </li>

  <li>
    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="15"/>
    </a>
    JavaScript.
  </li>

  <li>
    <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg" alt="VS Code" width="15"/>
    </a>
    Visual Studio Code.
  </li>

  <li>
    <a href="https://www.npmjs.com/package/chalk" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/chalk/chalk/main/media/logo.svg" alt="chalk logo" width="15"/>
    </a>
    chalk para colorear la salida en consola.
  </li>

  <li>
    <a href="https://www.npmjs.com/package/inquirer" target="_blank" rel="noreferrer">⚙️</a>
    Inquirer para menús interactivos.
  </li>

  <li>
    <a href="https://lodash.com/" target="_blank" rel="noreferrer">🛠️</a>
    Lodash para manipulación de datos.
  </li>

  <li>
    <a href="https://www.npmjs.com/package/chalk" target="_blank" rel="noreferrer">🎨</a>
    Chalk para colores en consola.
  </li>

  <li>
    📂 <code>fs/promises</code> para lectura y escritura de archivos.
  </li>
</ul>


---

## 📁 Estructura del Proyecto

```bash
GestorTareas/
├── controllers/
│   └── tareasController.js
├── data/
│   ├── tareas.js
│   └── tareas.json       # Archivo de persistencia
├── helpers/
│   └── menu.js
├── models/
│   └── tarea.js
├── utils/
│   ├── archivo.js
│   └── menu.js
├── .gitignore
├── index.js              # Punto de entrada
├── LICENSE.md
├── package-lock.json
├── package.json
└── README.md             # Este archivo
```

---

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**. Consulta [LICENSE.md](./LICENSE.md) para más detalles.

---

## ✨ Créditos

Desarrollado con 💖 por *ArtDaSak* (Darien Carvajal) y *Charlie* (ChatGPT de OpenAI).

---

## 👀 Disclaimer

Este proyecto fue refactorizado con apoyo de herramientas de IA para aprendizaje y mejora continua.