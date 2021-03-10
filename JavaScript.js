Vue.createApp({
    data() {
        return {
            Word: null,
            Words:[],
            Message: null
        }
    },
    methods: 
        {
        Safe(Word) 
        {
            var UpperCase = Word.toUpperCase()
            var LowerCase = Word.toLowerCase()
            this.Words.push(Word)
            this.Words.push(UpperCase)
            this.Words.push(LowerCase)
        },
        Show()
        {
            this.Message=this.Words
        },
        Clear()
        {
            this.Words = []
        },
    }
}).mount("#app")