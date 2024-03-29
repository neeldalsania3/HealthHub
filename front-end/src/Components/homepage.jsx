import HEADER from "./header";
import CONTACT from "./contact";
import FEATURES from "./features";
import SERVICES from "./services";
import ABOUT from "./about";
import DOCTOR from "./doctor";
import REVIEW from "./review";
import FOOTER from "./footer";
// import { Link } from "react-router-dom";

export default function HOME() {
  return (
    <>
      <HEADER />
      <CONTACT />
      <FEATURES />
      <SERVICES />
      <ABOUT />
      <DOCTOR />
      <REVIEW />
      <FOOTER />
    </>
  );
}
