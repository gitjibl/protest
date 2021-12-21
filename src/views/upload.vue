<template>
    <div>
        <el-button @click="dialogVisible = true">新增</el-button>
        <el-button @click="updateFile">修改</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" @closed="diologClosed">

            <el-upload class="upload-demo" ref="upload" :limit="3" :multiple="true"
                accept=".doc, .docx, .xls, .xlsx, .ppt, .pptx, .pdf, .jpg, .png" action :on-remove="handleUploadRemove"
                :on-exceed="handleUploadExceed" :file-list="fileList" :on-change="handleUploadChange"
                :http-request="uploadFile" :auto-upload="false">
                <el-button slot="trigger" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">上传文件不超过10MB</div>
            </el-upload>

            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogForm: {
                    name: "jibl",
                    age: 20
                },
                files: [],
                fileList: [],
                removeList: [],
                fileIsChange: "",
                isInsert: true,
                dialogVisible: false

            }
        },
        methods: {
            uploadFile(file) {
                console.log("file..........", file)
                this.files.push(file.file);
            },
            handleUploadChange(file,fileList) {
                // console.log(file, file.raw, "handleUploadChange");
                // this.files.push(file.raw);
                // this.fileIsChange = true;
                // console.log("change file....", file)
                //获取上传文件大小
                let imgSize = Number(file.size / 1024 / 1024);
                if (imgSize > 10) {
                    this.$message.warning("文件过大！")
                    fileList = fileList.filter(e=>{
                        return e.uid != file.uid
                    })
                    this.fileList = JSON.parse(JSON.stringify(fileList));
                    return;
                } 
            },
            beforeUpload(file){
                let isLt10M = Number(file.size / 1024 / 1024) < 10;
                if (isLt10M) {
                    this.$message.warning("文件过大！")
                } 
                return false
            },
            handleUploadRemove(file) {
                console.log("remove file....", file)
                if (!file.return) {
                    return
                }
                this.fileList.forEach(e => {
                    if (file.name == e.name) {
                        this.removeList.push(file);
                    }
                })
                console.log("this.removeList", this.removeList)
                this.fileIsChange = true;
            },
            handleUploadExceed(files, fileList) {
                this.$message.warning(
                    `当前限制选择 1 个文件，本次选择了 ${
                    files.length
                    } 个文件，共选择了 ${files.length + fileList.length} 个文件`
                );
            },
            updateFile() {
                this.isInsert = false;
                this.dialogVisible = true;
                this.fileList = [{
                    return: true,
                    name: "测试文件",
                    url: "http://localhost:8089/test.doc"
                }]
            },
            handleSubmit() {
                //   var flag = true;
                //   this.$refs["dialogForm"].validate(valid => {
                //     if (valid) {
                //       console.log("submit!");
                //     } else {
                //       console.log("error submit!!");
                //       flag = false;
                //     }
                //   });
                //   if (!flag) {
                //     return;
                //   }
                this.$refs.upload.submit();
                var formDate = new FormData();
                this.files.forEach(element => {
                    formDate.append("files", element);
                });
                let config = {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                };
                if (this.isInsert) {
                    formDate.append("form", JSON.stringify(this.dialogForm));
                    this.$axios
                        .post("http://localhost:8089/insertFileInfo", formDate, config)
                        .then(res => {
                            this.dialogVisible = false;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                } else {
                    formDate.append("form", JSON.stringify(this.dialogForm));
                    formDate.append("removeList", JSON.stringify(this.removeList));
                    this.$axios
                        .post("http://localhost:8089/updateFileInfo", formDate, config)
                        .then(res => {
                            if (res.data == 1) {
                                this.dialogVisible = false;
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            },
            diologClosed() {
                this.files = [];
                this.fileIsChange = false;
                this.fileList = [];
                this.removeList = [];
                this.isInsert = true;
                // this.$data.dialogForm = this.$options.data().dialogForm;
                // this.$nextTick(() => {
                //     this.$refs["dialogForm"].clearValidate();
                // });
            }
        },

    }
</script>