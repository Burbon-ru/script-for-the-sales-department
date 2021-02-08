<template>
    <div class="favorites_scripts">
        <div
            v-if="favoriteScripts.length"
        >
            <h3>
                Список избранных скриптов
            </h3>

            <div
                v-for="script in favoriteScripts"
                :key="script.id"
            >
                <span
                    class="favorite_script_item"
                    @click="switchOnScript(script)"
                >
                    {{ script.name }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "FavoritesScripts",

        data: () => ({
            favoriteScripts: []
        }),

        async mounted () {
            const { data } = await axios.get('/api/script/getFavoriteScripts');
            this.favoriteScripts = data;
        },

        methods: {

            /**
             * Переключатель на следующий скрипт
             *
             * @param script
             */
            switchOnScript (script) {
                this.$emit('selectNextScript', script);
                this.favoriteScripts = this.favoriteScripts.filter(el => el.id != script.id);
            }
        }
    }
</script>

<style>
    .favorite_script_item {
        cursor: pointer;
    }
</style>
