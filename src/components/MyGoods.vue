<template>
    <div style="padding:3vw;text-align:left" >
        <h3 @click="$router.back()">⬅返回</h3>
        <h1 style="text-align:left">我发布的</h1>
        <div class="card" v-for="item in goods">
            <h3 class="title">{{item.title}}</h3>
            <p style="padding-left:8px">{{item.des}}</p>
            <div class="bottom">
                <div class="prize"><span>{{item.prize}}元</span></div>
                <div class="btn" @click="goToDetail"><span>我想要</span></div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    data:()=>({
        goods:[{title:'书架',des:'崭新的小书架，买来因为从不看书忍痛出了。',prize:300}]
    }),
    methods:{
        goToDetail(){
            this.$router.push('/detail')
        }
    }
}
</script>
<style scoped>
.card{
   border: 1px solid #dbdbdb;
   background: #fff;
   margin-top:15px;
   padding:5px;
   text-align: left
}
.card:hover{
    background: #f7f7f7
}
.title{
    margin:0;
    padding-left: 8px
}
.bottom{
    margin:-5px;
    height:2em;
    background: #f7f7f7;
    border-top: 1px solid #dbdbdb
}
.prize{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis:75%;
    height: 100%;
    font-weight: bold;
    border-right: 1px solid #dbdbdb;
}
.btn{
    flex-basis: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
   
}
</style>