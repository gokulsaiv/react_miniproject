import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Post2 from "./Post";

Enzyme.configure({ adapter: new Adapter() });
describe("first", () => {
  it("should behave...", () => {
    const Fixture = shallow(<Post2 />);

    expect(Fixture.find(".post").length).toBe(1);
  });
  it("should behave...", () => {
    const Fixture = shallow(
      <Post2 key={1} title={"hello"} body={"expanded text"} />
    );

    expect(Fixture.find(".title").text()).toBe("hello");
  });
  it("should behave...", () => {
    const Fixture = shallow(
      <Post2 key={1} title={"hello"} body={"expanded text"} />
    );

    expect(Fixture.find(".body").text()).toBe("expanded text");
  });
});
