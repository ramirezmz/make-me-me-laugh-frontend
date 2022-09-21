import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToastNotification from "../ToastNotification.vue";
import { nextTick } from "vue";

const localMount = async (propsData: any) => {
  const wrapper = mount(ToastNotification, {
    propsData,
  });
  nextTick();
  return wrapper;
};

describe("Toast Notification", () => {
  it("renders component", async () => {
    const wrapper = await localMount({
      message: "Testando ....",
    });
    expect(ToastNotification).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
