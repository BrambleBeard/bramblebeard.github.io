// Load TinyMCE
tinymce.init({
  // selector: 'textarea',
  height: 200,
  menubar: false,
  plugins: "insertdatetime",
  toolbar: 'undo redo | styleselect | bold italic | bullist numlist outdent indent | insertdatetime',
  branding: false,
  statusbar: false
});

var clipboard = new Clipboard('#copyToClipboard');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
