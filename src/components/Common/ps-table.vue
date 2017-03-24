<template>
  <div class="ps-table clearfix">
    <el-table :data="page.data"
              :height="headerHeight"
              style="width:100%">
      <el-table-column
        v-for="(header,index) in page.headers"
        :key="index"
        :prop="header.field"
        :label="header.name"
        :fixed="fixedColumns?fixedRoles(header):false"
        :width="header.width"
        :show-overflow-tooltip="true">
      </el-table-column>
      <slot></slot>
    </el-table>
    <el-pagination :current-Page="page.pageIndex" v-if="pageFalse" :page-size="page.pageSize"
                   :total="page.total"
                   layout="total,sizes,prev,pager,next,jumper" :page-sizes="pageSizes"
                   @size-change="sizeChange" @current-change="pageIndexChange">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'ps-table',
    props: {
      page: {
        type: Object,
        default: function () {
          return {
            headers: [],
            data: [],
            pageSize: 10,
            pageIndex: 0
          }
        },
        require: true
      },
      pageFalse: {
        type: Boolean,
        required: true,
        default: false
      },
      headerHeight: {
        type: String,
        default: '30px',
        required: false
      },
      fixedColumns: {
        type: Array,
        required: false
      }
    },
    data () {
      return {
        pageSizes: [10, 20, 50]
      }
    },
    methods: {
      fixedRoles (header) {
        return this.fixedColumns.indexOf(header.field) ? this.fixedColumns : false
      },
      sizeChange (pageSize) {
        this.page.pageSize = pageSize
        this.$emit('sendPageSize', {
          pageSize,
          pageIndex: this.page.pageIndex
        })
      },
      pageIndexChange (pageIndex) {
        this.page.pageIndex = pageIndex
        this.$emit('sendPageSize', {
          pageSize: this.page.pageSize,
          pageIndex
        })
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less">
  .ps-table{
    width: 100%;
    .el-table{
      border:none;
      background: #26333b;
      font-size: 13px;
    }
    .el-table__body-wrapper{
      border:none;
    }
    .el-table__fixed-header-wrapper thead div, .el-table__header-wrapper thead div{
      background: #26333b;
      color: #738797;
      font-size: 13px;
    }
    .el-table thead tr{
      border-top:7px solid #50b5f2;
      background: #26333b;
      color: #738797;
      font-size: 13px;
    }
    .el-table tr .el-table_1_column_1 .el-tooltip{
      font-weight: 600!important;
    }
    .el-table td, .el-table th.is-leaf{
      border-bottom: 1px solid #1a1f22;
    }
    .el-table th,.el-table tr{
      background: #26333b;
      color: #738797;
      font-weight: 600;
    }
    .el-table--enable-row-hover tr:hover{
      background: #32424b;
      box-shadow: 3px 2px 3px 1px #20262b;
    }
    .el-table--enable-row-hover tr:hover>td{
      background: #32424b;
      color:#fff;
    }
    .el-table::after, .el-table::before{
      background: transparent;
    }
    .el-table__body tr.hover-row>td{
      background: #32424b;
    }
    /*分页*/
    .el-pagination{
      margin-top: 10px;
      color:#738797;
      float: right;
    }
    .el-pagination__sizes .el-input .el-input__inner{
      background: #26333b;
      color:#738797;
      border:none
    }
    .el-select .el-input .el-input__icon{
      color:#738797;
      font-size: 6px;
      width: 20px;
    }
    .el-pagination .el-select .el-input{
      width: 80px;
    }
    .el-pagination .el-select .el-input input{
      padding-right: 14px;
    }
  }
</style>
