var Minimal_Angle = (h, m) => 
{
    let a=0, b=0;
    a= Math.abs(((11/2)*m)-(30*h));
    b= Math.abs(360-(30*h)+((11/2)*m));
    
    if(a<b){
      return a;
    }
    else{
      return b;
    }
};