
function KTSNT(n) {
    var An = true;
    if (n<2) {
        An = false;
    } 
    else {
        for (var i=2 ;i< n-1;i++){
            if (n%i == 0){
                An= false;
                break;
            }
        }
    }
    if (An == true){
        document.write(n + "la so nguyen to ");
    }
    else {
        document.write(n + "khong phai la so nguyen to ");
    }
}

KTSNT(1);