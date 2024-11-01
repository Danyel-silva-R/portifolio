document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("-FH04betuUSpbyek6");

    var myForm = document.getElementById('my-form');
    
    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        
        emailjs.sendForm('service_l11ajja', 'template_0gka29i', this)
            .then(function() {
                alert('Mensagem enviada com sucesso!');
                myForm.reset(); 
            }, function(error) {
                alert('Erro ao enviar a mensagem: ', error);
            });
    });
});
