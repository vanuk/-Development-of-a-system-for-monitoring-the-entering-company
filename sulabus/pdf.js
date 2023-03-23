window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 0.5,
                filename: 'myfile.pdf',
                image: { type: 'jpeg', quality: 0 },
                html2canvas: { scale: 4 },
                jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}


