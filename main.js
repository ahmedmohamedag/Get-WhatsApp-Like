// تحديد العناصر من DOM
const btn_get_Link = document.querySelector("#btn_get_Link");
const inp_number = document.querySelector("#inp_number");
const inp_result = document.querySelector("#inp_result");
const valid = document.querySelector("#valid");
const link = document.querySelector("#link");
const result = document.querySelector(".result");
const hand = document.querySelector(".hand");

// إضافة استماع لزر النقر
btn_get_Link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // الحصول على رقم واتساب من حقل الإدخال
    const wa_number = inp_number.value;
    
    if (wa_number.length >= 11) {
        displayLink(wa_number);
        inp_number.style.border = "2px solid rgb(43, 190, 56)";
        valid.style.display = "none";
        link.setAttribute('href', `https://wa.me/+2${wa_number}`);
    } else {
        inp_number.style.border = "1px solid red";
        valid.style.display = "flex";
    }
});

// عرض الرابط
const displayLink = (number) => {
    result.style.display = "flex";
    inp_result.value = `https://wa.me/+2${number}`;
}

// إضافة استماع لحرف المفتاح
inp_number.addEventListener("keydown", () => {
    inp_number.style.border = "1px solid gray";
});
hand.addEventListener('click', () => {
    inp_result.select(); // select value 
    document.execCommand('copy');
    
  }) 
  
