// 获取设备的宽度
var deviceWidth  = document.documentElement.clientWidth

var setFz = '100px' 

// 给head增加一个隐藏元素
var headEle =  document.getElementByTag('head')[0],
     spanEle = document.createElement('span'),
     spanEle.style.fontSize = setFz,
     spanEle.style.dispaly = 'none',
     headEle.appendChild(spanEle)

// 判断元素真实的大小是否为setFz
// 如果不想等，则获取真实的字体换算比例
var realFz = getComputedStyle(headEle).getPropertyValue('font-size')

if (setFz !== realFz) {
  // 去掉px单位

  setFz = parseFloat(setFz)
  realFz = parseFloat(realFz)

  fzRadio = setFz / realFz

  // 由于 x = setFz *  setFz / realFz
  // 又公式推到： x -> setFz, y -> deviceWidht
  // 所以 var y = deviceWidth * x / realFz

  // 重置deviceWitdh
  deviceWidth = deviceWIdth * setFz / realFz
}

document.documentElement.style.fontSize = deviceWidth + "px"

///////////////////// system font-size check end //////////////////////

var setBaseFontSzie = function () {
  var deviceWidth = do
}

