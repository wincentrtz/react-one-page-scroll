import React from "react";
import ScrollContainer from "./scrollable-container";
import { PageContainer, PageContent, MainContainer } from "./style";
import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

configure({ adapter: new Adapter() });

let wrapper = null;

beforeEach(() => {
  wrapper = mount(
    <ScrollContainer>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </ScrollContainer>
  );
});

afterEach(() => {
  wrapper = null;
});

describe("Scroll container component test", () => {
  test("ScrollContainer rendered", () => {
    expect(wrapper).not.toBeNull();
  });
  test("Children wrap with PageContainer and PageContent Correctly", () => {
    const child = [
      <PageContainer key={0}>
        <PageContent>
          <div>1</div>
        </PageContent>
      </PageContainer>,
      <PageContainer key={1}>
        <PageContent>
          <div>2</div>
        </PageContent>
      </PageContainer>,
      <PageContainer key={2}>
        <PageContent>
          <div>3</div>
        </PageContent>
      </PageContainer>,
    ];
    child.forEach((elem) => {
      expect(wrapper.contains(elem)).toEqual(true);
    });
  });
  test("ScrollContainer contains MainContainer", () => {
    expect(wrapper.find(MainContainer).length).toEqual(1);
  });
  test("ScrollContainer Scroll down", async () => {
    // still searching
  });
});
