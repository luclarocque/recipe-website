import { shallowMount } from "@vue/test-utils";
import Homepage from "@/views/Homepage.vue";

describe("Homepage.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(Homepage);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
