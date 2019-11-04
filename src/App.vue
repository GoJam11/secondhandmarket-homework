<template>
  <div id="app">
    <GridContainer style="padding:0 2vw">
      <GridRow style="">
        <GridColumn style="background:#eee;height:calc(100vh - 80px)" :span="24" >
          <router-view></router-view>
        </GridColumn>
      </GridRow>
      <GridRow style="">
        <GridColumn class="bottom" style="" :span="12"  >
          <div style="cursor:pointer" @click="plaza"><Icon style="flex-basis:100%" name="home" :scale="2" />
          <p style="margin:0px 0 10px 0" >广场</p></div>
          
         
          </GridColumn>
        <GridColumn class="bottom" style="" :span="12" >
          <div style="cursor:pointer" @click="mine"><Icon style="flex-basis:100%" name="user" :scale="2" />
          <p style="margin:0px 0 10px 0" >我的</p></div>
        </GridColumn>
      </GridRow>
    
    </GridContainer>
  </div>
</template>

<script>
//import Button from 'veui/components/Button'
import 'veui-theme-one-icons'
import {Button,GridContainer,GridRow,GridColumn,Icon} from 'veui'

export default {
  name: 'app',
  components: {
    Button,
    GridContainer,
    GridRow,
    GridColumn,
    Icon
  },
  data:()=>({
    current:true
  }),
  methods:{
    plaza(){
      this.$router.push('/')
    },
    mine(){
      this.$router.push('/mine')
    }
  }
}
</script>

<style lang="less">
@import "~veui-theme-one/common.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.bottom{
background:#e2e2e2;
height:80px;
display: flex;
align-items: flex-end;
justify-content: center;
flex-wrap: wrap
}
</style>
