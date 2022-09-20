function hitung(operasi) {
    var frm = document.getElementById('calcForm');
    var a1 = parseFloat(frm.angka1.value);
    var a2 = parseFloat(frm.angka2.value);

    if (isNaN(a1) || isNaN(a2)) {
        alert("Harap masukkan angka!!");
    } else {
        switch (operasi) {
            case "tambah":
                var total = a1 + a2;
                break;
            case "kurang": 
                var total = a1 - a2; 
                break;
            case "kali": 
                var total = a1 * a2; 
                break;
            case "bagi": 
                var total = a1 / a2; 
                break;
            case "pangkat": 
                var total = Math.pow(a1,a2); 
                break;
        
            default:
                var total = 0;
                break;
        }
    }

    frm.hasil.value = total;
        
}
