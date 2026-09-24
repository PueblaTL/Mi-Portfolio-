(() => {
  'use strict';
  document.getElementById('year').textContent = new Date().getFullYear();
  const form = document.getElementById('contactForm');
  form.hidden = false;
  const note = document.getElementById('formNote');
  const panel = document.getElementById('draftPanel');
  const draft = document.getElementById('draft');
  document.querySelectorAll('[data-package]').forEach(link => {
    link.addEventListener('click', () => {
      form.elements.project.value = link.dataset.package;
      panel.hidden = true;
      note.textContent = 'Consulta sobre ' + link.dataset.package + '. Completá tus datos para preparar el mensaje.';
    });
  });
  form.addEventListener('input', () => { panel.hidden = true; note.textContent = ''; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const fields = form.elements;
    if (fields.name.value.trim().length < 2 || fields.message.value.trim().length < 10) {
      note.textContent = 'Escribí un nombre de al menos 2 caracteres y un mensaje de al menos 10, sin contar espacios al inicio y al final.';
      return;
    }
    draft.value = `Hola Agustín, soy ${fields.name.value.trim()}.\nMe interesa: ${fields.project.value}.\n\n${fields.message.value.trim()}\n\nMi email: ${fields.email.value.trim()}`;
    panel.hidden = false;
    const subject = encodeURIComponent(`Consulta de ${fields.name.value.trim()} — ${fields.project.value}`);
    document.getElementById('emailDraft').href = `mailto:agupuebla17@gmail.com?subject=${subject}&body=${encodeURIComponent(draft.value)}`;
    note.textContent = 'Consulta preparada. Abrí tu aplicación de correo para revisar y enviar el mensaje a agupuebla17@gmail.com.';
    draft.focus();
  });
  document.getElementById('copyDraft').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(draft.value);
      note.textContent = 'Consulta copiada. Podés pegarla en un correo a agupuebla17@gmail.com.';
    } catch {
      draft.focus();
      draft.select();
      note.textContent = 'Seleccioné la consulta. Usá Copiar o Ctrl+C y pegala en un correo a agupuebla17@gmail.com.';
    }
  });
})();
