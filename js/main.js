document
  .getElementById("delete-account-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var btn = document.getElementById("btn-submit");

    // Configuración del correo electrónico
    var emailParams = {
      user_name: name,
      user_email: email,
    };

    //Configuracion boton
    btn.textContent = "Enviando...";
    btn.disabled = true;

    // Configuración de EmailJS
    const serviceID = "default_service";
    const templateID = "template_qw7r5bo";

    //Ejemplo sin enviar
    // const serviceID = "";
    // const templateID = "";

    // Enviar el correo usando EmailJS
    emailjs.send(serviceID, templateID, emailParams).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert(
          "Solicitud de eliminación de cuenta " +
            email +
            " enviada correctamente.Por favor, revisa tu correo para confirmar."
        );
        btn.disabled = false;
        btn.textContent = "Solicitar eliminación de cuenta";
      },
      function (error) {
        console.error("FAILED...", error);
        alert(
          "Ocurrió un error al enviar la solicitud. Por favor, inténtalo de nuevo."
        );
        btn.disabled = false;
        btn.textContent = "Volver a Solicitar eliminación de cuenta";
      }
    );
  });
