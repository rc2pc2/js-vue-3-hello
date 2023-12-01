const { createApp } = Vue;

createApp({
    data() {
        return {
            text: 'Benvenutao!',
            counter: 0,
        }
    },

    methods: {
        incrementCounter(num){
            this.counter = this.counter + num;
        },
        decrementCounter(num){
            this.counter = this.counter - num;
        }
    },

}).mount('#app');
