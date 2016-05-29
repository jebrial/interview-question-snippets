//Quickly compress a string.... GO!

const str = "aabbbccd       ddd   dddd ddddddddd"

function compressor(s){
  let newS = s[0]
  let count = 1
  for (var i = 1; i < s.length; i++) {
    if(s[i] === s[i-1]) {
      count++
    } else {
      newS += count
      newS += s[i]
      count = 1
    }
  }
  return newS += count
}


console.log(compressor(str))
