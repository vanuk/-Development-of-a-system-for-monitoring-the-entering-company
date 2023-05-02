const downloadButton = document.getElementById("download");
const a4Checkbox = document.getElementById("a4");
const b5Checkbox = document.getElementById("b5");

downloadButton.addEventListener("click", () => {
    let format = "a4";
    if (b5Checkbox.checked) {
    format = "b5";
    }
    
    const pdf = new jsPDF(format, "pt", "letter");
    const element = document.getElementById("my-html-element");
    
    html2canvas(element, {
    onclone: (clonedDoc) => {
    clonedDoc.getElementById("download").style.display = "none";
    }
    }).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    pdf.addImage(imgData, "PNG", 0, 0);
    pdf.save("my-pdf-document.pdf");
    });
    });