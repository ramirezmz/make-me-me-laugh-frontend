import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CardJoke from "../CardJoke.vue";
import { nextTick } from "vue";

const localMount = async (propsData: any) => {
  const wrapper = mount(CardJoke, {
    propsData,
  });
  nextTick();
  return wrapper;
};

describe("Card joke", () => {
  it("renders component on screen", async () => {
    const wrapper = await localMount({
      pic: "test",
      name: "name",
      joke: "joke",
    });
    expect(CardJoke).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
