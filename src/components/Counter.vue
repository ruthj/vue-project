<template>
    <h2>{{counterTitle}}</h2>
    <p>{{counter}}<sup>2</sup>={{squareCounter}}</p>
    <p data-testId="counterTest">{{counter}}</p>

    <div class='botn'>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,

            validator(value){
                return value >= 0
            }
        }
    },

    data(){
        return{
            counter: this.start
        }
    },
    methods:{
        getSquareValue(){
            return this.counter * this.counter
        }, 
        increase(){
            this.counter++ 
            
        },
        decrease(){
            this.counter-- 
            
        }
       
    },
    computed:{
        squareCounter(){
            return this.counter * this.counter
        },
        counterTitle(){
            return this.title || 'Counter from computed' 
        }
    }
}

</script>

<style>
    button{
        background-color: #64B687;
        border-radius:5px ;
        border: 1px solid white;
        cursor: pointer;
        margin: 0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    button:hover{
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>