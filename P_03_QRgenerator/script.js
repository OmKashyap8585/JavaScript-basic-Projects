
let inputText = document.getElementById("input-text");
        let sizes = document.querySelector("#sizes");
        let qrContainer = document.querySelector('.QRCode');
        let generate = document.querySelector('#Generate');
        let download = document.querySelector('#Download');

        generate.addEventListener('click', () => {
            generateQR();
        });
        download.addEventListener('click',()=>{
            downloadQR();
        })
        function downloadQR() {
            const qrImage = qrContainer.querySelector('img');
            if (qrImage) {
                const link = document.createElement('a');
                link.href = qrImage.src;
                link.download = "QRCode.png";
                link.click();
            } else {
                alert("Please generate a QR Code first.");
            }
        }

        function generateQR() {
            qrContainer.innerHTML = ""; 
            new QRCode(qrContainer, {
                text: inputText.value,
                width: parseInt(sizes.value),
                height: parseInt(sizes.value),
                colorDark: "#000000",
                colorLight: "#ffffff",
            });
        }
