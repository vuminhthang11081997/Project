

var example_watch = new Vue({
    el: '#watch-example',
    data: {
        question: '',
        answer: "Bạn hãy điền câu hỏi vào đây"
    },
    watch: {
        //bất cứ khi nào nhập câu hỏi thì sẽ sử dụng hàm này
        question: function (newquestion, oldquestion) {
            this.answer = 'Đang nhập câu hỏi'
                this.getAnswer()
        }
    },
    methods: {
        getAnswer: _.debounce(
            function () {
                if (this.question.indexOf('?') == -1) {
                    //this.question.indexOf(là hàm trả về giá trị của dấu '?'.nếu trong chuỗi không có thì sẽ trả về -1)
                    this.answer = 'Câu hỏi thường chứa dấu ?'
                    return
                }
                this.answer = 'Đang suy nghĩ câu trả lời'
                var vm = axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer)
                    })
                    .catch(function (error) {
                        vm.answer = "Lỗi.Không thể truy cập API" + error
                    })
            },
            500
        )
    }


})