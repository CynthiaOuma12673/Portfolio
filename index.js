  AOS.init();

  const pdfButton = document.getElementById('pdfButton');
  const pdfViewer = document.getElementById('pdfViewer');
  const pdfContainer = document.getElementById('pdfContainer');

  const pdfPath = './docs/CYNTHIA-OUMA-CV (1).pdf'; // Replace with the actual path to your PDF file.

  pdfButton.addEventListener('click', () => {
    pdfViewer.setAttribute('src', pdfPath);
    pdfContainer.style.display = 'block';
  });