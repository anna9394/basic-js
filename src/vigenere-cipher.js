const CustomError = require("../extensions/custom-error");


class VigenereCipheringMachine {
  static tabulaRecta = {
    a: "abcdefghijklmnopqrstuvwxyz",
    b: "bcdefghijklmnopqrstuvwxyza",
    c: "cdefghijklmnopqrstuvwxyzab",
    d: "defghijklmnopqrstuvwxyzabc",
    e: "efghijklmnopqrstuvwxyzabcd",
    f: "fghijklmnopqrstuvwxyzabcde",
    g: "ghijklmnopqrstuvwxyzabcdef",
    h: "hijklmnopqrstuvwxyzabcdefg",
    i: "ijklmnopqrstuvwxyzabcdefgh",
    j: "jklmnopqrstuvwxyzabcdefghi",
    k: "klmnopqrstuvwxyzabcdefghij",
    l: "lmnopqrstuvwxyzabcdefghijk",
    m: "mnopqrstuvwxyzabcdefghijkl",
    n: "nopqrstuvwxyzabcdefghijklm",
    o: "opqrstuvwxyzabcdefghijklmn",
    p: "pqrstuvwxyzabcdefghijklmno",
    q: "qrstuvwxyzabcdefghijklmnop",
    r: "rstuvwxyzabcdefghijklmnopq",
    s: "stuvwxyzabcdefghijklmnopqr",
    t: "tuvwxyzabcdefghijklmnopqrs",
    u: "uvwxyzabcdefghijklmnopqrst",
    v: "vwxyzabcdefghijklmnopqrstu",
    w: "wxyzabcdefghijklmnopqrstuv",
    x: "xyzabcdefghijklmnopqrstuvw",
    y: "yzabcdefghijklmnopqrstuvwx",
    z: "zabcdefghijklmnopqrstuvwxy"
  }

  constructor(isReversed) {
    this.isReversed = isReversed
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('No args');
    }

    message = message.toLowerCase()
    key = key.match(/[a-z]/gi).join("").toLowerCase()
    let encryptedText = "";
    let specialCharacterCount = 0;
    
    for (let i = 0; i < message.length; i++) {
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyIndex = VigenereCipheringMachine.tabulaRecta.a.indexOf(key[keyLetter]);
      const row = VigenereCipheringMachine.tabulaRecta[message[i]]

      if (row) {
        encryptedText += row[keyIndex];
      } else {
        encryptedText += message[i];
        specialCharacterCount++;
      }
    }
    
    return this.isReversed ? encryptedText.toUpperCase().split('').reverse().join('') : encryptedText.toUpperCase()
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('No args');
    }

    encryptedMessage = encryptedMessage.toLowerCase();
    key = key.match(/[a-z]/gi).join("").toLowerCase();
    let decryptedText = "";
    let specialCharacterCount = 0;

    for (let i = 0; i < encryptedMessage.length; i++){
      let keyLetter = (i - specialCharacterCount) % key.length;
      let keyRow = VigenereCipheringMachine.tabulaRecta[key[keyLetter]];
      const rowLetterIndex = keyRow.indexOf(encryptedMessage[i])
      
      if (rowLetterIndex !== -1){
        decryptedText += VigenereCipheringMachine.tabulaRecta.a[rowLetterIndex];
      } else {
        decryptedText += encryptedMessage[i];
        specialCharacterCount++;
      }
    }
    
    return this.isReversed ? decryptedText.toUpperCase().split('').reverse().join('') : decryptedText.toUpperCase() 
  }
}

module.exports = VigenereCipheringMachine;
