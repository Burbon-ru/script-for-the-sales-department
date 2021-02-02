<template>
    <div class="script">
        <h4
            v-if="viewState.show"
        >
            {{ scriptItem.name }}
        </h4>

        <div v-if="is_favorite && viewState.show">
            (Избранный скрипт)
        </div>

        <div v-if="viewState.edit">
            <input
                type="text"
                v-model="scriptItem.name"
            />

            <div>
                <input
                    type="checkbox"
                    class="form-check-input"
                    id="is_favorite"
                    name="is_favorite"
                    v-model="is_favorite"
                >
                <label
                    class="form-check-label"
                    for="is_favorite"
                >
                    Избранный скрипт
                </label>
            </div>
        </div>

        <div>
            <router-link
                :to="{ path: '/scripts/edit/' + scriptItem.id }"
            >
                редактирование
            </router-link>
        </div>

        <div>
            <router-link
                :to="{ path: '/scripts/run/' + scriptItem.id }"
            >
                запуск
            </router-link>
        </div>

        <div>
            <router-link
                :to="{ path: '/scripts/variables/' + scriptItem.id }"
            >
                переменные
            </router-link>
        </div>

        <button
            v-if="viewState.show"
            @click="editScript()"
            class="btn btn-warning"
        >
            Редактировать скрипт
        </button>

        <button
            v-if="viewState.edit"
            @click="saveScript()"
            class="btn btn-primary"
        >
            Сохранить скрипт
        </button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    import { getScriptById } from "../../functions/getStuffById";

    export default {
        name: "scriptItem",

        props: ['scriptItem'],

        data: () => ({
            viewState: {
                show: true,
                edit: false
            },

            is_favorite: false
        }),

        async mounted () {
            const { data } = await getScriptById(this.scriptItem.id);

            this.is_favorite = data.is_favorite;
        },

        methods: {
            ...mapActions([
                'updateScript'
            ]),

            /**
             * Переключает состояние на изменение
             */
            editScript () {
                this.editViewState('edit');
            },

            /**
             * Сохраняет данные
             *
             * @returns {Promise<void>}
             */
            async saveScript () {
                const res = await this.$store.dispatch('updateScript', {
                    id: this.scriptItem.id,
                    script: {
                        name: this.scriptItem.name,
                        is_favorite: this.is_favorite
                    }
                });

                if (res) {
                    this.editViewState('show');
                } else {
                    alert('Something going wrong');
                }
            },

            /**
             * Роутер режимов
             *
             * @param state
             */
            editViewState (state) {
                if ('edit' == state) {
                    this.viewState.edit = true;
                    this.viewState.show = false;
                }

                if ('show' == state) {
                    this.viewState.edit = false;
                    this.viewState.show = true;
                }
            }
        }
    }
</script>

<style scoped>

</style>
