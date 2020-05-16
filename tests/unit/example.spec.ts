import { shallowMount } from "@vue/test-utils";
import ImageGallery from "@/components/ImageGallery.vue";
import { BasicPic } from "src/types";

describe("ImageGallery.vue", () => {
  it("renders props.images when passed", () => {
    const images: BasicPic[] = [];
    const wrapper = shallowMount(ImageGallery, {
      propsData: { images }
    });
    console.log(wrapper);
    // expect(wrapper.text()).toBe(images);
  });
});
