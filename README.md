# Rubrica_API_conversiones (🌐 Conversor de Medidas con API)

**Descripcion**

Este proyecto es un **conversor de unidades** (longitud y temperatura) que funciona con un **frontend en HTML, CSS y JavaScript**, y un **backend en Node.js con Express**.  
El usuario puede ingresar un valor en un input, seleccionar la unidad de origen y destino, y obtener la conversión en el otro input de manera automática gracias a la API.

# 📦 Tecnologías utilizadas

**Frontend:** HTML5, CSS3, JavaScript (Fetch API)
**Backend:** Node.js, Express
**API:** Rutas REST para conversión de unidades

## 📂 Estructura del proyecto

    ```bash 
    api_conversiones
    ├── node_modules
    ├── public
    │   ├── index.html
    │   ├── script.js
    │   └── style.css
    ├── src
    │   └── app.js
    ├── package.json
    ├── package-lock.json
    └── README.md
    ```


## ⚙️ Instalación

1. Clonar el repositorio:
```bash
   git clone https://github.com/JAHN77/Rubrica_API_conversiones.git
   cd Rubrica_API_conversiones
```
2. Instalar dependencias:
``` bash
npm install
```

3. Iniciar el servidor:
```bash 
node src/app.js
```

# 🚀 Uso
1. Selecciona la categoría de conversión:
2. Temperatura: Celsius, Fahrenheit, Kelvin
3. Longitud: Metros, Kilómetros, Centímetros, Millas, Pies, Pulgadas
4. Elige la unidad de origen en el primer bloque.
5. Elige la unidad de destino en el segundo bloque.
6. Ingresa un valor en uno de los inputs y automáticamente se reflejará la conversión en el otro input.


## Author
* Name: Juan Andres Henriquez Novoa
