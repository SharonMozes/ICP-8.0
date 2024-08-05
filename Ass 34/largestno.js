const num=[245,789,678,567,900,1000,890]
let largest=num[0]
for(const no of num)
{
    if(no>largest){
        largest=no
    }
}
console.log(largest)