<template>
  <div>
    <div class="header">
      <div class="figure"></div>
      <p class="user">用户A</p>
    </div>
    <ul class="lists">
      <li class="item" @click="$router.push('/myGoods')">我发布的商品</li>
      <li class="item" @click="modal=true">发布新商品</li>
      <li class="item" @click="$toast.info('暂未上线')">退出登录</li>
      <li class="item" @click="$toast.info('暂未上线')">登录（测试）</li>
      <li class="item" @click="$toast.info('暂未上线')">注册（测试）</li>
    </ul>
    <Dialog title="添加商品" :open.sync="modal" @ok="$toast.success('成功提交')" @cancel="$toast.warn('撤销提交')">
        <div style="display:flex;flex-wrap:wrap;justify-content:center">
            <Input placeholder="标题" style="width:80%" />
        <Textarea style="width:80%;margin-top:9px"></Textarea></div>
        
    </Dialog>
  </div>
</template>

<script>
import {Dialog,Input,Textarea} from "veui";
export default {
  components: {
    Dialog,
    Input,
    Textarea
  },
  methods: {},
  data:()=>({
      modal:false
  })
};
</script>

<style scoped>
.header {
  background: grey;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.figure {
  width: 90px;
  height: 90px;
  background: orange;
  border-radius: 45px;
}
.user {
  color: white;
  font-weight: bold;
  font-size: 16px;
}
.lists {
  list-style: none;
  padding: 0px 5vw;
}
.item {
  background: gainsboro;
  margin: 20px 0;
  padding: 10px 0;
  border-radius: 9px;
  cursor: pointer;
}
</style>>

