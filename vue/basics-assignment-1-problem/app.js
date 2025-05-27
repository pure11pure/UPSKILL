const app = Vue.createApp({
    data() {
        return {
            name: '',
            age: 25,
            imageURL: 'https://conanwiki.org/images/1/15/Vermouth.jpg'
        }
    },
    methods: {
        randomNumber() {
            return Math.floor(Math.random() * 2);
        }
    }
})

app.mount('#assignment');