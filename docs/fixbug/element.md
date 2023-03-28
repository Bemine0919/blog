## 设置表格行背景颜色、斑马线背景颜色、hover背景颜色
``` js
:deep(.diy-table) {
  border: 1px solid #3044b4;   //表格边框
  tbody {
    tr {
      background-color: #18274f;  //表格行背景颜色
    }
    .el-table__row.el-table__row--striped td {
      background-color: #041a44; //斑马纹背景色
    }
    tr:hover > td.el-table__cell {
      background-color: #235c98 !important; //修改成自己想要的颜色即可
    }
  }
}
// 设置表头背景颜色
<el-table 
  :header-cell-style="{
    backgroundColor: '#1f3f66'
  }"
  ...
  > 
<el-table />