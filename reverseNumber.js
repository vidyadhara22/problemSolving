var Reverse_Number = (N) => 
{
  const n= String(N).split("");
  return parseInt(n.reverse().join(""));

};