window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
        console.log(window);

        const a4Checkbox = document.getElementById("a4");
    
       
        var opt = {
            margin: 0.5,
            filename: 'myfile.',
            image: { type: 'jpeg', quality: 5 },
            html2canvas: {
                scale: format === "b5" ? 5 : 5
            },
            jsPDF: {
                unit: 'in',
                format: format === "b5" ? 'b5' : 'a4',
                orientation: 'portrait'
            }
        };
       

      
        html2pdf().from(invoice).set(opt).save();
    })
}
