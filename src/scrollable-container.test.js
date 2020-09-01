import React from "react";
import ScrollContainer from "./scrollable-container";
import { PageContainer, PageContent, MainContainer } from "./style";
import Adapter from "enzyme-adapter-react-16";
import { mount, shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

let wrapper = null;
const PAGES = [
  <div key={1}>1</div>,
  <div key={2}>2</div>,
  <div key={3}>3</div>,
];

let setPage = null;
let setIsScrolling = null;
let useStateSpy = null;

beforeEach(() => {
  // setPage = jest.fn();
  // setIsScrolling = jest.fn();
  // useStateSpy = jest.spyOn(React, "useState");
  // useStateSpy.mockImplementation((page) => [page, setPage]);
  // useStateSpy.mockImplementation((isScrolling) => [
  //   isScrolling,
  //   setIsScrolling,
  // ]);
  wrapper = shallow(<ScrollContainer>{PAGES}</ScrollContainer>);
});

afterEach(() => {
  wrapper = null;
});

describe("Scroll container component test", () => {
  test("ScrollContainer rendered(sanity testing)", () => {
    expect(wrapper).not.toBeNull();
  });
  test("Children wrap with PageContainer and PageContent Correctly", () => {
    const child = PAGES.map((p, index) => (
      <PageContainer key={index}>
        <PageContent>{p}</PageContent>
      </PageContainer>
    ));
    child.forEach((elem) => {
      expect(wrapper.contains(elem)).toEqual(true);
    });
  });
  test("ScrollContainer contains MainContainer", () => {
    expect(wrapper.find(MainContainer).length).toEqual(1);
  });
  // test("ScrollContainer Scroll down", async () => {
  //   wrapper.find(MainContainer).simulate("click", { deltaY: 1 });
  //   console.log(wrapper.find(MainContainer).props());
  // setTimeout(() => {
  // expect(setPage).toHaveBeenCalled();
  // expect(setIsScrolling).toHaveBeenCalled(2);
  // expect(true).toBe(false);
  // }, 0);
  // });
});
