import React from "react";
import { storiesOf } from "@storybook/react";
import { Footer } from "./footer";

const story = storiesOf("Components|Layout", module);

const data: Footer = {
  copyrightOwner: "Geek SG",
  facebook: "https://www.facebook.com/sergiu.adrian.rus",
  linkedin: "https://www.linkedin.com/in/russergiuadrian/",
};

story.add("Footer", () => <Footer {...data} />);
