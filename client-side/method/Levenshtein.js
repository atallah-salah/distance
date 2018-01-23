class Levenshtein {
  substitute(string,index,char){
    // cut first part before char , add the char add the second part
    return string.substr(0, index) + char + string.substr(index + 1);
  }
  insert(string,char){
    // add the char in the last string
    return string+char;
  }
  delete(string,index){
    // delete eveything after the index from string
    return string.slice(0,index);
  }
}
