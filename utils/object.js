export const JSONnoQuotes = (obj) => {
  const json = JSON.stringify(obj);
  const cutted = json.slice(1, (json.length - 1));  
  const cleaned = cutted.replace(/\"([^(\")"]+)\":/g,"$1:");  //This will remove all the quotes
  const woFroms = cleaned.replace('from:', 'from ');
  const woTos = woFroms.replace('to:', 'to ');
  const noCommas = woTos.replace(',', '\n');
  
  return noCommas;   
}

const keyValueCSS = (obj,k) => {
  const arrayKeys = Object.keys(obj[k]);
  const arr = arrayKeys.map(el => {
    const valor = obj[k][el];
    const arreglo = `${el}: ${valor};`;
    return arreglo;
  })
  return arr.join('\n');
}

export const JSONtoCSS = (obj) => {
  return Object.keys(obj).reduce(
    (result, k) => {
     return result.concat(
        `${k} { 
          ${keyValueCSS(obj, k)} 
        } 
        `
      )
    }, ''
  )
}
