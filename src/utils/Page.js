/**
 * Created by qx on 2017/3/21.
 */
/*
 * 分页
 * */
import {PAGE_SIZE, PAGE_INDEX} from 'utils/Constant'
import {tableHeaderFmt} from 'utils/Format'

export default function Page ({
  data = [],
  headers = [],
  pageSize = PAGE_SIZE,
  pageIndex = PAGE_INDEX,
  total = 0
} = {}
) {
  this.data = data
  this.headers = headers
  this.pageSize = pageSize
  this.pageIndex = pageIndex
  this.total = total

  this.setPageData = function ({header, data, total_rows: totalRows} = {}, format = true) {
    this.headers = format ? tableHeaderFmt(header) : header
    this.data = data
    this.total = totalRows
  }

  this.getPerPageData = function (data) {
    return data.slice(this.pageSize * (this.pageIndex - 1), this.pageSize * this.pageIndex)
  }
}
