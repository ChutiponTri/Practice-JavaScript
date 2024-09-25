let arr = [0, 2, 4, 3, 1, 7, 9, 8, 6, 5];
let n = arr.length;
let j = n;
let count_inside = 0;
let count_outside = 0;

while(j >= 2){
    for (let i=0; i<j-1; i++){
        if (arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
        count_inside ++;
    }
    count_outside ++;
    j--;
}

console.log(arr);

console.log(count_inside);
console.log(count_outside);