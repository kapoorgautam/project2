import { useRef } from "react";
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import Homecontent from "./Homecontent";

const container = useRef();
Homecontent(() => {
  // gsap code here...
  gsap.to(".big-feature span", {y: 100}); // <-- automatically reverted
});