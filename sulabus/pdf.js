window.onload = function () {
    document.getElementById("download").addEventListener("click", () => {
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
        console.log(window);

        const a4Checkbox = document.getElementById("a4");
        const b5Checkbox = document.getElementById("b5");
        let format = a4Checkbox.checked ? "a4" : "b5";
        let format1=b5Checkbox.checked? "a4":"b5";
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
        var opt = {
            margin: 0.5,
            filename: 'myfile.',
            image: { type: 'jpeg', quality: 5 },
            html2canvas: {
                scale: format1 === "a4" ? 5 : 5
            },
            jsPDF: {
                unit: 'in',
                format: format1 === "a4" ? 'b5' : 'a4',
                orientation: 'portrait'
            }
        };

        if (format === "b5") {

            const elements = document.querySelectorAll('.title');
            elements.forEach((element) => {
                element.style.fontSize = "large";
            });

            const block1Elements = document.querySelectorAll('.block1');
                block1Elements.forEach((element) => {
                    element.style.fontSize = "large";
            });

            const tab1 = document.querySelectorAll('.tab1');
            
            tab1.forEach((element) => {
                element.style.fontSize = "18px";

            });

            const tab11 = document.querySelectorAll('.num');
            
            tab11.forEach((element) => {
                element.style.fontSize = "20px";
            });

            const page2= document.querySelectorAll('.text2page');
            
            page2.forEach((element) => {
                element.style.fontSize = "16px";
            });

            const tab2= document.querySelectorAll('.tab2');
            
            tab2.forEach((element) => {
            element.style.fontSize = "16px";
            });

            const tab22= document.querySelectorAll('.tab22');
            
            tab22.forEach((element) => {
            element.style.fontSize = "16px";
            });
            
            const tab21= document.querySelectorAll('.tab21');
            
            tab21.forEach((element) => {
            element.style.fontSize = "16px";
            });

            const tab31= document.querySelectorAll('.tab31');
            
            tab31.forEach((element) => {
            element.style.fontSize = "16px";
            });
        }
        else if (format === "a4")
        {
            const elements = document.querySelectorAll('.title');
            
            elements.forEach((element) => {
                element.style.fontSize = "x-large";
            });

            const block1Elements = document.querySelectorAll('.block1');
                block1Elements.forEach((element) => {
                    element.style.fontSize = "x-large";
                   // element.style.margin-left ==;
            });

            const tab1 = document.querySelectorAll('.tab1');
            
            tab1.forEach((element) => {
                element.style.fontSize = "18px"+"10px";
            });

            const tab11 = document.querySelectorAll('.num');
            
            tab11.forEach((element) => {
                element.style.fontSize = "25px";
            });

            const page2= document.querySelectorAll('.text2page');
            
            page2.forEach((element) => {
                element.style.fontSize = "16px"+"5px";
            });

            const tab2= document.querySelectorAll('.tab2');
            
            tab2.forEach((element) => {
            element.style.fontSize = "16px"+"5px";
            });

            const tab22= document.querySelectorAll('.tab22');
            
            tab22.forEach((element) => {
            element.style.fontSize = "16px"+"5px";
            });
            
            const tab21= document.querySelectorAll('.tab21');
            
            tab21.forEach((element) => {
            element.style.fontSize = "16px"+"5px";
            });

            const tab31= document.querySelectorAll('.tab31');
            
            tab31.forEach((element) => {
            element.style.fontSize = "16px"+"5px";
            });
        }
        html2pdf().from(invoice).set(opt).save();
    })
}
