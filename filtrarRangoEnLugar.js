// Escribir una función filterRangeInPlace(arr, a, b) que obtenga un array arr y remueva del mismo todos los valores
// excepto aquellos que se encuentran entre a y b. El test es: a ≤ arr[i] ≤ b. La función solo debe modificar el array. No debe devolver nada.

function filterRangeOnPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i ++) {
    if  (a => arr[i] && arr[i] >= b) {
      arr.splice(i, 1)
    }
  }
}
