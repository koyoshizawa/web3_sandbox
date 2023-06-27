<template>
    <h1>Main Page</h1>
    <div class="links">
        <input type="text" v-model="inputNumber" placeholder="input number">
        <button @click="setNumber()">Set Number to contract</button>
    </div>
    <div class="links">
        <button @click="getNumber()">Get Number from contract</button>"
    </div>
    <div>
        Number: {{ number }}
    </div>
</template>

<script>
export default {
    data() { 
        return {
            number: 0,
            inputNumber: 0
        }
    },
    methods: {
        getNumber: async function() {
            console.log('get number')
            let ret = await this.$contract.methods.get().call()
            console.log(ret)
            this.number = ret
        },
        setNumber: async function() {
            console.log('set number')
            let accounts = await this.$web3.eth.getAccounts()
            let account = accounts[0]
            let ret = await this.$contract.methods.set(this.inputNumber).send({from: account})
            console.log(ret)

        }
    },
    mounted() {
        console.log('current block number')
        this.$web3.eth.getBlockNumber().then(console.log)
    }
}

</script>