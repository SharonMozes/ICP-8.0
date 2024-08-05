const num=[1,2,3,4,5,6,7,8,9,10]
let sum=0;
for(let i=0;i<num.length;i++)
{
    if(num[i]%2==1){
        sum+=num[i]
    }
}

console.log(`Sum:${sum}`)