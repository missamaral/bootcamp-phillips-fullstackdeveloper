//Implement a function that converts any given number into a roman numeral.

function convertToRoman(num) {

    let M, C, X;
    let array = [];
  
    M = parseInt(num / 1000);
    if (M > 0) {
      for (let i=0; i<M; i++) {
        array.push('M');
      }
      num = num % 1000;
    }
  
    C = parseInt(num / 100);
    if (C > 0) {
    if (C == 9) {
      array.push('CM');
    } else if (C == 4) {
      array.push('CD');
    } else if (C > 4) {
      array.push('D');
      for (let i=5; i<C; i++) {
        array.push('C');
      }} else {
      for (let i=0; i<C; i++) {
        array.push('C');
      }
    }
    num = num % 100;
    }

   X = parseInt(num / 10);
   if (X > 0) {
      if (X == 9) {
      array.push('XC');
    } else if (X == 4) {
      array.push('XL');
    } else if (X > 4) {
      array.push('L');
      for (let i=5; i<X; i++) {
        array.push('X');
      }
    } else {
      for (let i=0; i<X; i++) {
        array.push('X');
      }
    }
    num = num % 10;
    }
  
    if (num == 9) {
      array.push('IX');
    } else if (num == 4) {
      array.push('IV');
    } else if (num > 4) {
      array.push('V');
      for (let i=5; i<num; i++) {
        array.push('I');
      }} else {
      for (let i=0; i<num; i++) {
        array.push('I');
      }
      }
    
    let roman = array.join('');
  
    console.log(roman);
    
  }

convertToRoman();