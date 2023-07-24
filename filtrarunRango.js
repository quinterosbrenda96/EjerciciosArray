//Escribir una función filterRange(arr, a, b) que obtenga un array arr
// busque los elementos con valor mayor o igual a a y menor o igual a b y devuelva un array con los resultados.




function filterRangeInPlace (arr, a, b) {
  return arr.filter((item) => {
    return item >= a && item <= b
  })
}
