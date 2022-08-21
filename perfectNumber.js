var Perfect_Check = (N) => 
{
   let num= 1;
   for(let i=1;i<=N/2;i++){
     if(N/i===0){
       num +=1;     
       
     }
   }
   if (num==N){
     return "YES";
   }
   else{
     return "NO";
   }
};