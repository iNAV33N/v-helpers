function updateSrc1(){
    fileSrc = document.getElementById('fb1').files[0].name;
    document.getElementById('fn1').innerHTML = fileSrc;
}

function updateSrc2(){
    fileSrc = document.getElementById('fb2').files[0].name;
    document.getElementById('fn2').innerHTML = fileSrc;
}

function gen(){
    var fname = document.getElementById('fname').value;
    var age = document.getElementById('age').value;
    var cause = document.getElementById('cause').value;
    var hos = document.getElementById('hos').value;
    var dt = document.getElementById('dt').value;
    var amt = document.getElementById('amt').value;
    var doc = new jsPDF({
        unit: 'in',
        format: [15, 15]
      });
      
    doc.setFont("times");
    doc.setFontType("italic");
    doc.setFontSize(80);
    doc.text(7.5, 1.5, 'V-Helpers', null, null, 'center');
    //doc.addImage('logo.png', 'png', 0.5, 1.5, 2, 2);
    doc.setFont("courier");
    doc.setFontType("bold");
    doc.setFontSize(40);
    doc.text(0.5, 3, "Name: " + fname);
    doc.text(0.5, 4, "Age: " + age);
    doc.text(0.5, 5, "Cause: " + cause);
    doc.text(0.5, 6, "Hospital: " + hos);
    doc.text(0.5, 7, "Posted Date: " + dt);
    doc.text(0.5, 8, "Amount Needed: " + amt);
    doc.text(0.5, 9, "Tez / Paytm: 8903241856");
    doc.text(0.5, 10, "Bank: Standard Chartered");
    doc.text(0.5, 11, "Acc No: 42111517253");
    doc.text(0.5, 12, "IFSC Code: SCBL0036088");
      doc.save('test.pdf');
      
}