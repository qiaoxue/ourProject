/**
 * Created by qx on 2017/3/21.
 */
function tableHeaderFmt (headers) { // 将表格header 格式化
  let fmtHeader = []
  for (let header of headers) {
    for (let item in header) {
      fmtHeader.push({
        field: item,
        name: header[item]
      })
    }
  }
  return fmtHeader
}

export {
  tableHeaderFmt
}
