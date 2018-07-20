// add solution here
function theBeatlesPlay(musicians, instruments){
  
  var emptyArray = []
  for(let i =0;i<musicians.length;i++){
    
    var string = `${musicians[i]} plays ${instruments[i]}`
    emptyArray.push(string)
    
  }
  
  return emptyArray
}

function johnLennonFacts(facts){
  
  while(facts.length>0){
    facts[i]=`${facts[i]} !!!`
    i++
  }
  return facts
  
}