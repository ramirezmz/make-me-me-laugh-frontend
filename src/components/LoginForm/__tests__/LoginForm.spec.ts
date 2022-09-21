import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "../LoginForm.vue";

describe("Login Form", () => {
  it("renders component", async () => {
    const wrapper = mount(LoginForm);
    expect(LoginForm).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Should be find the input email", async () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.find("input").attributes()).toContain({ type: "email" });
  });

  it("Should be find the input password", async () => {
    const wrapper = mount(LoginForm);
    expect(wrapper.findAll(".input__login").at(1)?.attributes()).toContain({
      type: "password",
    });
  });
});
