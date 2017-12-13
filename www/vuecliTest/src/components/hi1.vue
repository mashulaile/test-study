<template>
    <div class="app">
        <h1>{{$route.params.username}}-{{$route.params.age}}</h1>
    </div>
</template>
<script>
    export default {
        name : 'hi',
        data : function() {
            return {
                msg : 'I am hi1'
            }
        }
    }
</script>