<template>
    <div class="create_script">
        <h3>Создать новый скрипт</h3>

        <form
            @submit.prevent="addScript"
        >
            <div class="form-group mb-2">
                <input
                    type="text"
                    id="name"
                    class="form-control"
                    v-model="name"
                />
            </div>

            <input
                type="submit"
                value="создать"
                class="btn btn-primary mb-2"
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

</style>
