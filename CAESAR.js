// Function to calculate (base^exp) % modulus efficiently using the square and multiply algorithm
function modPow(base, exp, modulus) {
    let result = 1;
    base = base % modulus;
  
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % modulus;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % modulus;
    }
  
    return result;
  }
  
  // Function to calculate the modular inverse using the extended Euclidean algorithm
  function modInverse(a, m) {
    let m0 = m;
    let x0 = 0;
    let x1 = 1;
  
    if (m === 1) return 1;
  
    while (a > 1) {
        let q = Math.floor(a / m);
        let t = m;
  
        m = a % m;
        a = t;
        t = x0;
        x0 = x1 - q * x0;
        x1 = t;
    }
  
    if (x1 < 0) x1 += m0;
  
    return x1;
  }
// Function for Caesar Cipher encryption
function caesarEncrypt() {
    const text = document.getElementById('caesar-text').value;
    const key = parseInt(document.getElementById('caesar-key').value) % 26;
    let encryptedText = '';
  
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
  
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            charCode = ((charCode - 65 + key) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            charCode = ((charCode - 97 + key) % 26) + 97;
        }
  
        encryptedText += String.fromCharCode(charCode);
    }
  
    document.getElementById('caesar-encrypted-text').textContent = encryptedText;
  }
  
  //Functionn for caesar Cipher ddecryption
  function caesarDecrypt() {
    const encryptedText = document.getElementById('caesar-encrypted-text').textContent;
    const key = parseInt(document.getElementById('caesar-key').value) % 26;
    let decryptedText = '';
  
    for (let i = 0; i < encryptedText.length; i++) {
        let charCode = encryptedText.charCodeAt(i);
  
        if (charCode >= 65 && charCode <= 90) {
            // Uppercase letters
            charCode = ((charCode - 65 - key + 26) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            // Lowercase letters
            charCode = ((charCode - 97 - key + 26) % 26) + 97;
        }
  
        decryptedText += String.fromCharCode(charCode);
    }
  
    document.getElementById('caesar-decrypted-text').textContent = decryptedText;
  }
  
  // Function to clear the Caesar Cipher input and output fields
  function caesarClean() {
    document.getElementById('caesar-text').value = '';
    document.getElementById('caesar-key').value = '';
    document.getElementById('caesar-encrypted-text').textContent = '';
    document.getElementById('caesar-decrypted-text').textContent = '';
  }
  
  // Event listeners for Caesar Cipher buttons
  document.getElementById('caesar-encrypt-btn').addEventListener('click', caesarEncrypt);
  document.getElementById('caesar-decrypt-btn').addEventListener('click', caesarDecrypt);
  document.getElementById('caesar-reset-btn').addEventListener('click', caesarClean);
