import classNames from "classnames";
import algorithm from "../Assets/icon--algorithm.svg";
import automation from "../Assets/icon--automation.svg";
import computerArchitecture from "../Assets/icon--computer-architecture.svg";
import dataScience from "../Assets/icon--data-science.svg";
import deepLearning from "../Assets/icon--deep-learning.svg";
import defaultIcon from "../Assets/icon--default.svg";
import django from "../Assets/icon--django.svg";
import ds from "../Assets/icon--ds.svg";
import fourthRevolution from "../Assets/icon--fourth-revolution.svg";
import git from "../Assets/icon--git.svg";
import introToComputer from "../Assets/icon--intro-to-computer.svg";
import java from "../Assets/icon--java.svg";
import jquery from "../Assets/icon--jquery.svg";
import js from "../Assets/icon--js.svg";
import machineLearning from "../Assets/icon--machine-learning.svg";
import nodeJs from "../Assets/icon--node-js.svg";
import oop from "../Assets/icon--oop.svg";
import python from "../Assets/icon--python.svg";
import react from "../Assets/icon--react.svg";
import sql from "../Assets/icon--sql.svg";
import unix from "../Assets/icon--unix.svg";
import webPublishing from "../Assets/icon--web-publishing.svg";

import styles from "./Styled/CharityIcon.module.css";

const ICONS = {
  algorithm: algorithm,
  automation: automation,
  "computer-architecture": computerArchitecture,
  "data-science": dataScience,
  "deep-learning": deepLearning,
  default: defaultIcon,
  django: django,
  ds: ds,
  "fourth-revolution": fourthRevolution,
  git: git,
  "intro-to-computer": introToComputer,
  java: java,
  jquery: jquery,
  js: js,
  "machine-learning": machineLearning,
  "node-js": nodeJs,
  oop: oop,
  python: python,
  react: react,
  sql: sql,
  unix: unix,
  "web-publishing": webPublishing,
};

function ShopIcon({ className, photoUrl = "default" }) {
  return (
    <img
      className={classNames(styles.charityIcon, className)}
      src={ICONS[photoUrl]}
      alt={photoUrl}
    />
  );
}

export default ShopIcon;
