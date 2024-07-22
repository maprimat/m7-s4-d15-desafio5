import HomeView from "@/views/HomeView.vue";
import { shallowMount } from "@vue/test-utils";

describe("HomeView", () => {
    test("Se valida snapshot de estructura HTML: HomeView", () => {
        
        //Selección el Sujeto de pruebas
        const wrapper = shallowMount(HomeView);

        //Aserción
        expect(wrapper.html()).toMatchSnapshot(`
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png">
            <PostsView />
        </div>
    `);
    });
});