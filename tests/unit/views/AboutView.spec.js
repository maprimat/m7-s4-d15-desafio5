import AboutView from "@/views/AboutView.vue";
import { shallowMount } from "@vue/test-utils";

describe("AboutView", () => {
    test("Se valida snapshot de estructura HTML: AboutView", () => {

        //Selección el Sujeto de pruebas
        const wrapper = shallowMount(AboutView);

        //Aserción
        expect(wrapper.html()).toMatchSnapshot(`
        <div class="about">
            <h1>Vista About</h1>
        </div>
    `);
    });
});
