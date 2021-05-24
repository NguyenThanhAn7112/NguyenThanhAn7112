window.onload = () => { //khi doc xong ben html moi doc trong nay, tranh bi loi
    var button = document.querySelector('#btn') //Tim theo id btn, tra ve phan tu dau tien duoc tim thay,
                                                //  HTML dựa vào id, classes, types, attributes, values of attributes ... của chúng
    button.addEventListener('click', calBMI) //Them su kien cho button
}
var calBMI = function() {
    var height = parseInt(document.getElementById('height').value) // parseInt: tra ve so nguyen neu co the, document.getElementById: tra ve gia tri theo id (vd: height)
    var weight = parseInt(document.getElementById('weight').value)

    var BMI = (weight / (height * height)/100);
    if (BMI < 18.5) {
        alert('Phan loai: Gay; Nguy co phat trien benh: Thap')
    } else if(BMI>=18.5 && BMI<=24.9) {
        alert('phan loai: Binh thuong; Nguy co phat trien benh: Trung binh')
    } else if (BMI>=25 && BMI<=29.9) {
        alert('Phan loai: Hoi beo; Nguy co phat trien benh: Cao')
    } else if (BMI>=30 && BMI<=34.9) {
        alert('Phan loai: Beo phi cap do 1; Nguy co phat trien benh: Cao')
    } else if (BMI>=35 && BMI<=39.9) {
        alert('Phan loai: Beo phi cap do 2; Nguy co phat trien benh: rat cao')
    } else if (BMI > 40){
        alert('Phan loai: Beo phi cap do 3; Nguy co phat trien benh: Nguy hiem')
    } else{
        alert('Hien chua co ket qua')
    }
}