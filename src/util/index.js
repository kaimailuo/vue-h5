export default function bankMatch (bank, type) {
  let bankName = ''
  let bankIcon = ''
  switch (bank) {
    case 1:
      bankName = '倔强青铜'
      bankIcon = 'icon-jueqiangqingtong'
      break
    case 2:
      bankName = '荣耀黄金'
      bankIcon = 'icon-rongyaohuangjin'
      break
    case 3:
      bankName = '秩序白银'
      bankIcon = 'icon-zhixubaiyin'
      break
    case 4:
      bankName = '尊贵铂金'
      bankIcon = 'icon-zunguibojin'
      break
    case 5:
      bankName = '永恒钻石'
      bankIcon = 'icon-yonghengzuanshi'
      break
  }
  return type === 'class' ? bankIcon : bankName
}
