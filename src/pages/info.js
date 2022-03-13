import React from "react";
import Layout from "../components/layout";
import {
  mainInfo,
  mainInfoLeft,
  mainInfoRight,
  infoImage,
  infoMarkdownArea,
} from "./info.module.css";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export default function InfoPage() {
  return (
    <Layout>
      <div className={mainInfo}>
        <div className={mainInfoLeft}>
          <div className={infoImage}></div>
        </div>
        <div className={mainInfoRight}>
          <div>Jeongki</div>
          <div>끊임없이 발전하는 프론트엔드 개발자가 되고 싶습니다.</div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <MdEmail size={25} />: qq8721443@naver.com
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FaGithub size={25} />
            <div>
              <a href="https://github.com/qq8721443">: github.com/qq8721443</a>
            </div>
          </div>
        </div>
      </div>
      <div className={infoMarkdownArea}>나를 나타낼 수 있는 글 쓰기</div>
    </Layout>
  );
}
