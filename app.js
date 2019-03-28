var app=new Vue({
    el:'#app',
    data: {  
        message:'hello thang'},
    
    methods:{
        reverseMessage:function(){
            this.message=this.message.split('').reverse().join('')
        }
    }
})