window.cvExporter = {
    generatePDF: function () {
        const element = document.querySelector('.cv-paper');

        const opt = {
            margin: 0,
            filename: 'Marlon_Junio_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(element).save();
    }
};