document
  .getElementById("delete-account-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var btn = document.getElementById("btn-submit");

    //Configuracion boton
    btn.textContent = "Enviando...";
    btn.disabled = true;

    // Configuración de EmailJS
    const serviceID = "default_service";
    const templateIDAutoreply = "template_qw7r5bo";
    const templateIDNotification = "template_5f5rs7h";

    //Configuracion de Correo
    var emailParams = {
      from_name: name,
      to_email: email,
    };

    // Enviar el correo usando EmailJS AUTOREPLY
    emailjs.send(serviceID, templateIDAutoreply, emailParams).then(
      function (response) {
        console.log("SUCCESS! Autoreply", response.status, response.text);

        // Enviar el correo usando EmailJS Notification
        emailjs.send(serviceID, templateIDNotification, emailParams).then(
          function (response) {
            console.log("SUCCESS! Notify", response.status, response.text);
          },
          function (error) {
            console.error("FAILED...", error);
            console.error("Ocurrió un error al enviar la notificacion.");
          }
        );

        btn.disabled = false;
        btn.textContent = "Solicitar eliminación de cuenta";
        alert(
          "Se ha enviado una solicitud de eliminación de cuenta. Se le estara contactando a la brevedad."
        );
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
