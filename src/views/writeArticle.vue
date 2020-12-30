<template>
    <div class="write_article">
      <el-form :model="article" :rules="rules" ref="article" label-width="100px" class="demo-ruleForm">
        <div>
          <el-form-item>
            <div class="btn">
              <el-button type="primary" @click="submitAndSave('article', 0)">保存草搞</el-button>
              <el-button type="primary" @click="submitAndSave('article', 1)">提交</el-button>
              <el-button type="primary" @click="clear()">清除</el-button>
            </div>
          </el-form-item>
          <el-form-item class="margin-left-20"  prop="title">
            <el-input placeholder="请输入标题" v-model="article.title">
              <template slot="prepend">标题：</template>
            </el-input>
          </el-form-item>
          <el-form-item class="margin-left-20"  prop="summary">
            <el-input placeholder="请输入摘要" v-model="article.summary">
              <template slot="prepend">摘要：</template>
            </el-input>
          </el-form-item>
          <el-form-item class="margin-left-20" prop="content">
            <WangEnduit v-model="article.content"   :isClear="isClear" @change="change"></WangEnduit>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-radio-group v-model="article.type">
              <el-radio label="转载"></el-radio>
              <el-radio label="原创"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="开启评论" prop="commentable">
            <el-radio-group v-model="article.commentable">
              <el-radio label="不开启"></el-radio>
              <el-radio label="开启"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="选择分类">
              <el-checkbox-group 
                v-model="article.categorys"
                :min="min"
                :max="max"
                :disabled= "disabled">
                <el-checkbox v-for="category in recommendCategory" :label="category" :key="category.id">{{category.name}}</el-checkbox>
              </el-checkbox-group>
            <el-button @click="addItem" type="primary">增加分类</el-button>
            <!-- 动态增加项目 -->
            <div v-for="(item, index) in add.categorys" :key="index">
                <el-form-item label="分类名称"
                :rules="{
                  required: true, message: '不能为空', trigger: 'blur'
                }">
                    <el-input placeholder="请输入分类名称" v-model="item.name" style="width: 200px;" clearable></el-input>
                    <i class="el-icon-close" @click="deleteItem(item, index)"></i>
                </el-form-item>
            </div>
            <!-- <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="insert()">确 定</el-button>
            </div> -->
          </el-form-item>
          
          </div>
      </el-form>
      <!-- <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
        <el-form>
          <el-checkbox-group 
            v-model="article.categorys"
            :min="min"
            :max="max">
            <el-checkbox v-for="category in recommendCategory" :label="category" :key="category.id">{{category.name}}</el-checkbox>
          </el-checkbox-group>

          <el-button type="success">添加</el-button>


        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="insert()">确 定</el-button>
        </div>
      </el-dialog> -->
    </div>
</template>
<script>
import WangEnduit from '@/components/wangEnduit'
export default {
  name: 'WriteArticle',
  components: {
    WangEnduit
  },
  data() {
    return {
      isClear: false,
      article: {
        categorys: [],
      },
      // dialogFormVisible: false, 
      recommendCategory: {},//推荐分类
      min: 1,//多选框最少个数
      max: 3,//多选框最多个数
      addCategoryLength: 0,//增加分类个数
      disabled: false,//多选框是否禁用
      add: {
        categorys: []
      },
      form: {
        name: '',
        phone: '',
        dynamicItem: []
      },
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 1, message: '不能为空', trigger: 'blur' }
        ],
        type: [
          { required: true, message: '请选择类型', trigger: 'change' }
        ],
        commentable: [
          { required: true, message: '请选择是否开启评论', trigger: 'change' }
        ],
        content: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
        summary: [
          { required: true, message: '请输入摘要', trigger: 'blur' },
          { min: 1, message: '不能为空', trigger: 'blur' }
        ],
        category: [
          { required: true, message: '请输入内容', trigger: 'blur' }
        ],
      }
    }
  },
  mounted() {
    this.$axios.get("/category/recommendCategory")
      .then(response => {
        this.recommendCategory = response.data.data.recommendCategory;
        // this.dialogFormVisible = true;
      });
  },
  methods: {
    // 添加文本框
    addItem () {
      let length = this.article.categorys.length + this.addCategoryLength
      if(length >= 3){
        this.$message({
          showClose: true,
          message: "已经选择了三个分类了",
          type: 'error'
        });
        return;
      }
      this.addCategoryLength = this.addCategoryLength + 1;
      
      this.max = this.max - 1;
      if(this.max == 0){
        this.disabled = true;
      }
      this.add.categorys.push({
        name: ''
      })
    },
    // 删除动态生成的文本框
    deleteItem (item, index) {
      this.add.categorys.splice(index, 1)
      this.max = this.max + 1;
      this.addCategoryLength = this.addCategoryLength - 1;
    },
    //添加文章
    insert() {
      let length = this.article.categorys.length + this.addCategoryLength
      if(length <= 0){
        this.$message({
          showClose: true,
          message: "请选择分类",
          type: 'error'
        });
        return;
      }
      this.article.userId = 1
      this.article.cover = "assets/images/2.jpg"
      console.log(this.add.categorys);
      this.article.categorys = this.article.categorys.concat(this.add.categorys);
      console.log(this.article.categorys);
      this.$axios.post("/article/insert", this.article)
      .then(response => {
        let message = "";
        if(this.article.published == 0){
          message = "保存成功"
        }else {
          message = "提交成功"
        }
        this.$message({
          showClose: true,
          message: message,
          type: 'success'
        });
        this.$router.push({path: "/messageboard"});
      });
      // this.dialogFormVisible = false;
    },
    //下一步
    
    //提交或保存
    submitAndSave(article, num) {
      this.$refs[article].validate((valid) => {
          if (valid) {
            this.article.published = num;
            this.article.type = this.article.type == '原创' ? 1 : 0;
            this.article.commentable = this.article.commentable == '开启' ? 1 : 0;
            this.insert();
          } else {
            this.$message({
              showClose: true,
              message: '内容不能为空',
              type: 'error'
            });
            return false;
          }
        });
      
    },
    //清除内容
    clear() {
      this.isClear = true;
      this.article = {};
    },
    //添加分类
    // addCategory() {
      
    //   //添加分类
    //   this.$axios.post("/category/add", JSON.stringify(this.category))
    //   .then(response => {
    //     this.$message({
    //       showClose: true,
    //       message: '添加成功',
    //       type: 'success'
    //     });
    //     this.dialogFormVisible = false
    //     this.recommendCategory.push(this.category);
    //   });
    // },
    change(val) {
      
    },
  }
}
</script>
<style scoped lang="less">
  .write_article {
    background-color: #fff;
    padding: 50px 20px 0 0;
    text-align: left;
  }
  .btn {
    float: right;
  }
  .add_category {
    width: 100%;
  }

  .el-icon-close {
    display: inline-block;
    padding: 5px;
    &:hover {
      background-color: rgba(233, 233, 233, 0.486);
    }
  }
</style>