
function designerPdfViewer(h, word) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let maxHeight = 0;
    
    for (let i = 0; i < word.length; i++) {
      const letterHeight = h[alphabet.indexOf(word[i])];
      if (letterHeight > maxHeight) {
        maxHeight = letterHeight;
      }
    }
    
    const area = maxHeight * word.length;
    
    return area;
  }