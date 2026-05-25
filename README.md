# Instituto Tecnológico de Pachuca

## Ingeniería en Tecnologías de la Información y Comunicaciones

## Interacción Humano-Computadora

## Práctica: **Sistema IoT ESP8266 + AWS + WebSocket**

## Autor: **Ortega Olvera Juan Fernando**

Fecha: **25 de mayo de 2026**

# 🚗 Carrito IoT ESP8266 - Control Web

Aplicación web para controlar un carrito IoT basado en un ESP8266 D1 Mini mediante una interfaz web desarrollada con HTML, CSS, JavaScript y Bootstrap.

El sistema permite:

- Controlar movimientos del carrito en tiempo real
- Registrar movimientos en una API REST desarrollada en Python Flask
- Visualizar eventos mediante WebSocket
- Configurar parámetros dinámicos del carrito
- Comunicación con AWS EC2 y RDS

---

# 📸 Características

## 🎮 Control del carrito

La aplicación permite enviar los siguientes movimientos:

| Movimiento | ID |
|---|---|
| Adelante | 1 |
| Retroceder | 2 |
| Detener | 3 |
| Adelante Derecha | 4 |
| Adelante Izquierda | 5 |
| Atrás Derecha | 6 |
| Atrás Izquierda | 7 |
| Giro 90° Derecha | 8 |
| Giro 90° Izquierda | 9 |
| Giro 360° Derecha | 10 |
| Giro 360° Izquierda | 11 |

---

## 📡 Dashboard en tiempo real

El dashboard consume un WebSocket para visualizar:

### Eventos de movimiento

- Nombre del movimiento
- Fecha del registro

### Eventos de obstáculos

- Estado del sensor
- Distancia detectada

---

## ⚙ Configuración de parámetros

La aplicación permite modificar:

- VELOCIDAD
- FACTOR_VUELTA
- FACTOR_TIEMPO
- FACTOR_GIRO_90

mediante una API REST.

---

# 🧱 Tecnologías utilizadas

## Frontend

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Fetch API
- WebSocket API

## Backend

- Python
- Flask
- Flask-CORS
- WebSocket personalizado con sockets
- MySQL
- AWS EC2
- AWS RDS

---

# 📂 Estructura del proyecto

```plaintext
iot-car-web/
│
├── index.html
├── parametros.html
│
├── assets/
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── app.js
│       └── parametros.js