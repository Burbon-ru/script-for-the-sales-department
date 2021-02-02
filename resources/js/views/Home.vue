<template>
    <div class="container">
        <create-script />
        <scripts-list />
    </div>
</template>

<script>
    import CreateScript from './../components/Home/createScript.vue';
    import ScriptsList from './../components/Home/scriptsList.vue';

    export default {
        name: 'Home',

        components: {
            CreateScript,
            ScriptsList
        }
    }
</script>


<style lang="scss">
    h3 {
        margin: 10px 0 10px;
    }

    .scripts_list, .create_script {
        padding: 30px 0 30px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: block;
        padding: 10px;
    }

    a {
        color: #42b983;
    }

    .li_item {
        &:hover {
            cursor: pointer;
        }
    }
</style>
