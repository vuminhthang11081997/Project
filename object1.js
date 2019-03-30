var ob = {
    foo: 'true'
}

var object = new Vue({
    el: '#ob1',
    data: {
        seen:true,
        text: '',
        ob,
        
    }

})
object.message='test'

