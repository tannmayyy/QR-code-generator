
function generateQRCode() {
	var data = document.getElementById("data").value
  eel.generate_qr(data)(setImage)
    Swal.fire({
        title: 'Notification',
        text: 'QR code generation successful.',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
}
function setImage(base64) {
	document.getElementById("qr").src = base64
}

