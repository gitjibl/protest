<template>
    <el-table :data="tableData" height="200" size="small" border sez
        :header-cell-style="{background:'#eef1f6',color:'#606266'}" style="width: 100%">
        <el-table-column  align="center" prop="date" label="日期">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名">
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名">
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名">
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名">
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column>
        <el-table-column align="center" prop="name" label="姓名">
        </el-table-column>
        <!-- <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column>
        <el-table-column align="center" prop="address" width="200" label="地址">
        </el-table-column> -->
        <el-table-column fixed="right" align="center" label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="mini">查看</el-button>
                <el-button type="text" size="mini">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-06',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-07',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }]
            }
        },
        methods: {
            handleClick() {}
        }
    }
</script>
<style>
    .el-table td,
    .el-table th {
        padding: 0;
        min-width: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-overflow: ellipsis;
        vertical-align: middle;
        position: relative;
        text-align: left;
    }

    .el-table--border:after,
    .el-table--group:after,
    .el-table:before {
        background-color: #C1C3C7;
    }

    .el-table--border,
    .el-table--group {
        border-color: #C1C3C7;
    }

    .el-table td,
    .el-table th.is-leaf {
        border-bottom: 1px solid #C1C3C7;
    }

    .el-table--border th,
    .el-table--border th.gutter:last-of-type {
        border-bottom: 1px solid #C1C3C7;
    }

    .el-table--border td,
    .el-table--border th {
        border-right: 1px solid #C1C3C7;
    }

    /*防止table表头与内容不对齐*/
    /* body .el-table th.gutter {
        display: table-cell !important;
    } */

    /* .el-scrollbar {
        height: 100%;
    }

    .el-scrollbar__wrap {
        overflow: scroll;
        overflow-y: auto;
    } */
</style>