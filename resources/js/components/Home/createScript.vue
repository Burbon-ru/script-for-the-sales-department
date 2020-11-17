<template>
    <div class="create_script">
        <h3>Создать новый скрипт</h3>
        <form
            @submit.prevent="addScript"
            class="create_script_form"
        >
            <input
                type="text"
                id="name"
                v-model="name"
            />

            <input
                type="submit"
                value="создать"
            />
        </form>
    </div>
</template>


<script>
    import {mapActions} from "vuex";

    export default {
        name: 'CreateScript',
        data: () => ({
            name: ''
        }),
        methods: {
            ...mapActions([
                'createScript'
            ]),
            addScript () {
                this.$store.dispatch('createScript', {name: this.name});
                this.name = '';
            }
        }
    }
</script>

<style>
    .create_script_form {
        padding: 10px;
    }
</style>
