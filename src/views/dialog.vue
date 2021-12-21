<template>
    <div>
        <dialog2></dialog2>
        <button @click="dialog">dialog</button>
        <el-dialog :visible.sync="dialogTableVisible" @closed="beforeclose" class="dialog-class" title="这是一条打鼎折覆餗">
            <!-- <div slot="title" class="dialog-title">
                <span class="title-text">数据详情</span>
            </div> -->
            <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
        </el-dialog>
    </div>

</template>
<script>
    import dialog2 from '@/views/dialog2'
    export default {
        data() {
            return {
                dialogTableVisible: false,
                gridData: []
            }
        },
        methods: {
            cancel() {
                this.dialogTableVisible = false
            },
            dialog() {
                this.dialogTableVisible = true
            },
            beforeclose() {
                // alert(1)
            }
        },
        components: {
            dialog2
        }
    }
</script>
<style scoped>
    .dialog-title {
        /* text-align: left; */
        font-size: 14px;
        font-weight: 700;
        overflow: hidden;
        color: #e9eef3;
        /* line-height: 38px; */
    }

    /deep/.el-dialog__header {
        padding: 10px 20px 5px;
        background-color: #1268a5
    }

    /deep/.el-dialog__headerbtn .el-dialog__close {
        color: #edeff3;
    }

    /deep/.el-dialog__headerbtn {
        position: absolute;
        top: 10px;
        right: 20px;
        padding: 0;
        background: 0 0;
        border: none;
        outline: 0;
        cursor: pointer;
        font-size: 16px;
    }

    /deep/.el-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #e7eaef;
    }
</style>