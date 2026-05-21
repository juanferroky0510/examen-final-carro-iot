// ==============================
// API
// ==============================

const API_PARAMETRO =
    "http://98.88.227.158:5000/api/parametro";

// ==============================
// FORMULARIO
// ==============================

const form =
    document.getElementById("formParametros");

const mensaje =
    document.getElementById("mensaje");

// ==============================
// SUBMIT
// ==============================

form.addEventListener("submit", async (e) =>
{
    e.preventDefault();

    // ==========================
    // OBTENER CLAVE
    // ==========================

    const clave =
        document.querySelector(
            'input[name="clave"]:checked'
        ).value;

    // ==========================
    // OBTENER VALOR
    // ==========================

    const valorInput =
        document.getElementById("valor").value;

    // ==========================
    // VALIDACIONES
    // ==========================

    if(valorInput === "")
    {
        mostrarMensaje(
            "Ingrese un valor",
            "danger"
        );

        return;
    }

    const valor = parseFloat(valorInput);

    if(isNaN(valor))
    {
        mostrarMensaje(
            "El valor debe ser numérico",
            "danger"
        );

        return;
    }

    // ==========================
    // JSON
    // ==========================

    const body =
    {
        clave: clave,
        valor: valor
    };

    // ==========================
    // FETCH
    // ==========================

    try
    {
        const response =
            await fetch(API_PARAMETRO,
        {
            method: "PUT",
            headers:
            {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify(body)
        });

        const data =
            await response.json();

        console.log(data);

        mostrarMensaje(
            "Parámetro guardado correctamente",
            "success"
        );

        form.reset();
    }
    catch(error)
    {
        console.error(error);

        mostrarMensaje(
            "Error al guardar parámetro",
            "danger"
        );
    }
});

// ==============================
// MENSAJES
// ==============================

function mostrarMensaje(texto, tipo)
{
    mensaje.innerHTML = `
        <div class="alert alert-${tipo}">
            ${texto}
        </div>
    `;
}