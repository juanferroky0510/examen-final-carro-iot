// ==========================
// API MOVIMIENTOS
// ==========================

const API_URL = "http://98.88.227.158:5000/api/movimiento";

// ==========================
// ENVIAR MOVIMIENTO
// ==========================

async function enviarMovimiento(idMovimiento)
{
    try
    {
        const body = {
            id_movimiento: idMovimiento,
            id_dispositivo: 1,
            id_telemetria: 1,
            origen: "WEB"
        };

        const response = await fetch(API_URL,
        {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        console.log("Movimiento enviado:", data);

    }
    catch(error)
    {
        console.error("Error:", error);
    }
}

// ==========================
// WEBSOCKET
// ==========================

const dashboard = document.getElementById("dashboard");
const estadoWS = document.getElementById("estadoWS");

const socket = new WebSocket("ws://98.88.227.158:8765/");

// ==========================
// CONEXIÓN ABIERTA
// ==========================

socket.onopen = () =>
{
    console.log("WebSocket conectado");

    estadoWS.classList.remove("bg-danger");
    estadoWS.classList.add("bg-success");

    estadoWS.innerText = "Conectado";
};

// ==========================
// RECIBIR MENSAJES
// ==========================

socket.onmessage = (event) =>
{
    console.log(event.data);

    const mensaje = JSON.parse(event.data);

    agregarEventoDashboard(mensaje);
};

// ==========================
// CONEXIÓN CERRADA
// ==========================

socket.onclose = () =>
{
    estadoWS.classList.remove("bg-success");
    estadoWS.classList.add("bg-danger");

    estadoWS.innerText = "Desconectado";
};

// ==========================
// ERROR
// ==========================

socket.onerror = (error) =>
{
    console.error("Error WebSocket:", error);
};

// ==========================
// AGREGAR EVENTO
// ==========================

function agregarEventoDashboard(mensaje)
{
    let html = "";

    // ======================
    // EVENTO MOVIMIENTO
    // ======================

    if(mensaje.evento === "movimiento")
    {
        html = `
            <div class="event-card">

                <div class="event-title">
                    🚗 Movimiento
                </div>

                <div class="event-info">
                    Movimiento:
                    <strong>
                        ${mensaje.data.nombre_movimiento}
                    </strong>
                </div>

                <div class="event-info">
                    Fecha:
                    <strong>
                        ${mensaje.data.fecha_registro}
                    </strong>
                </div>

            </div>
        `;
    }

    // ======================
    // EVENTO OBSTÁCULO
    // ======================

    if(mensaje.evento === "obstaculo")
    {
        html = `
            <div class="event-card">

                <div class="event-title">
                    ⚠ Obstáculo Detectado
                </div>

                <div class="event-info">
                    Estado:
                    <strong>
                        ${mensaje.data.nombre_estatus}
                    </strong>
                </div>

                <div class="event-info">
                    Distancia:
                    <strong>
                        ${mensaje.data.distancia_cm} cm
                    </strong>
                </div>

            </div>
        `;
    }

    dashboard.innerHTML =
        html + dashboard.innerHTML;
}

// ==========================
// IR A PARÁMETROS
// ==========================

async function irAParametros()
{
    // DETENER CARRITO
    await enviarMovimiento(3);

    // PEQUEÑA ESPERA
    setTimeout(() =>
    {
        window.location.href =
            "parametros.html";
    }, 500);
}