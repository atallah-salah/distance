class hamming {
  substitute(string,index,char){
    // cut first part before char , add the char add the second part
    return string.substr(0, index) + char + string.substr(index + 1);
  }
  removeSpace(string,index){
    // cut first part before space,  add the second part without space
    return string.substr(0, index) + string.substr(index + 1);
  }
}
