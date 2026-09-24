
  /* Se ejecuta antes de pintar la página para evitar el flash de tema incorrecto.
     Regla: si hay preferencia guardada se respeta; si no existe ninguna, arranca en modo noche
     sin importar el tema del sistema operativo. */
  (function(){
    try {
      var stored = localStorage.getItem('theme');
      var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
