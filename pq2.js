function MyMax(myarr){
    var al = myarr.length;
    maximum = myarr[al-1];
    while (al--){
        if(myarr[al] > maximum){
            maximum = myarr[al]
        }
    }
            return maximum;
};
var myArray = [1, 5, 6, 2, 3];
var m = MyMax(myArray);
console.log(m)

function MyMin(myarr){
    var al = myarr.length;
    minimum = myarr[al-1];
    while (al--){
        if(myarr[al] < minimum){
            minimum = myarr[al]
        }
    }
    return minimum;
};
var myArray = [1, 5, 6, 2, 3];
var m = MyMin(myArray);
console.log(m)