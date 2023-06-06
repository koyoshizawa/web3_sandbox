<template>
    <h1>Main Page</h1>
</template>

<script>
export default {
    mounted() {
        console.log('current block number')
        this.$web3.eth.getBlockNumber().then(console.log)
    }
}

</script>