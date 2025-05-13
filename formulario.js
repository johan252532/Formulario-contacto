document.getElementById("formulario").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita que el formulario se envíe de manera tradicional

  // Inicializamos EmailJS con la clave pública
  emailjs.init("9dKxRZZG8hCcUVRaF");  // Tu clave pública

  // Primero, enviar el mensaje al admin (tu correo)
  emailjs.sendForm("service_m6khuuu", "template_uewhmwr", this)
    .then(function(response) {
      console.log('¡Correo enviado a admin con éxito!', response);
    }, function(error) {
      console.log('Error al enviar el correo al admin:', error);
      alert("Hubo un error al enviar el mensaje.");
    });

  // Luego, enviar la respuesta automática al usuario
  emailjs.sendForm("service_m6khuuu", "template_erhngfa", this)
    .then(function(response) {
      console.log('¡Correo de respuesta enviado con éxito!', response);
      alert("¡Mensaje enviado! Nos pondremos en contacto contigo pronto.");
    }, function(error) {
      console.log('Error al enviar la respuesta automática:', error);
      alert("Hubo un error al enviar la respuesta automática.");
    });
});
