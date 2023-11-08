function generatorPwd(options) {
  const pwdLength = Number(options.pwdLength)
  const charSets = {
    isLowerCase: 'abcdefghijklmnopqrstuvwxyz',
    isUpperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    isNumber: '1234567890',
    isSymbol: '!@#$%^&*()-+=?<>'
  }

  const selectedCharSets = Object.keys(charSets).filter(
    (setName) => options[setName] === 'on'
  )

  // 輸入錯誤處理
  if (!options.pwdLength || selectedCharSets.length === 0) {
    return 'You must select at least one character set'
  }

  // 組合密碼字元
  let char = selectedCharSets.map((setName) => charSets[setName]).join('')

  const excludeChar = options.excludeChar || ''
  // console.log(excludeChar)
  let pwd = ''

  // 字符串轉陣列
  const charArray = char.split('')

  // 刪除含有excludeChar的字
  const filteredArray =
    excludeChar.length > 0
      ? charArray.filter((char) => !excludeChar.includes(char))
      : charArray

  console.log(filteredArray)
  for (let i = 0; i < pwdLength; i++) {
    // 打亂的陣列
    const shuffledArray = shuffle(filteredArray)
    // 陣列轉字符串
    const shuffledChar = shuffledArray.join('')
    // console.log(shuffledChar)
    const index = Math.floor(Math.random() * shuffledChar.length)
    pwd += shuffledChar[index]
  }
  return pwd
}

// 洗牌演算法
function shuffle(rawArray) {
  const shuffledArray = [...rawArray]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]] //交換
  }
  return shuffledArray
}

module.exports = { generatorPwd }
