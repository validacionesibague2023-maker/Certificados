const form = document.getElementById('infoForm');
const estado = document.getElementById('estado');
const resumen = document.getElementById('resumen');
const resultado = document.getElementById('resultado');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    estado.textContent = 'Revisa los campos obligatorios antes de enviar.';
    estado.style.color = '#b91c1c';
    form.reportValidity();
    resumen.hidden = true;
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());
  estado.textContent = 'Formulario enviado correctamente.';
  estado.style.color = '#065f46';

  resultado.textContent = JSON.stringify(data, null, 2);
  resumen.hidden = false;
});

form.addEventListener('reset', () => {
  estado.textContent = '';
  resumen.hidden = true;
});
