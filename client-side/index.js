// main function with default parameter if not exist
const main=(text1=$('#text1').val(),text2=$('#text2').val(),counter=0)=>{
  // check if text1 equal text2
  if(text1===text2){
    $('#result').text('count:   '+counter);
    return counter;
  }else{
    // start loop in the string
  for(var i=0;i<text2.length+text1.length;i++){
    // if stetment for check to use removeSpace and substitute
      if(text2[i]!==text1[i] && text1[i]!==undefined && text2[i]!==undefined){
        if(text1[i]===' '){
          // removeSpace method
          let hammin = new hamming();
          text1=hammin.removeSpace(text1,i);
          counter++;
          return main(text1,text2,counter);
        }else{
          // substitute method
          let hammin = new hamming();
          text1=hammin.substitute(text1,i,text2[i]);
          counter++;
          return main(text1,text2,counter);
        }
      }
      // if stetment for delete method
      if(text2[i]===undefined && text1[i]!==undefined){
        // delete method
        let Levenshte = new Levenshtein();
        counter++;
        text1=Levenshte.delete(text1,i);
        return main(text1,text2,counter);
      }
      // if stetment for insert method
      if(text1[i]===undefined && text2[i]!==undefined){
        // insert method
        let Levenshte = new Levenshtein();
        text1=Levenshte.insert(text1,text2[i]);
        counter++;
        return main(text1,text2,counter);
      }
    }
  }
}
