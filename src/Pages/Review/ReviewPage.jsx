import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./Styled/ReviewPage.module.css";
import Warn from "../../Components/Warn";
import { getDonated } from "../../Api/getter";
import TopNav from "../../Pages/TopNav/TopNav.main";
import Container from "../../Components/Container";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../Api/api";
import PostList from "../../Components/PostList";

function ReviewPage() {
  const result = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  const [content, setContent] = useState("");

  console.log(result);

  return (
    <>
      <div className={styles.center}>
        <TopNav></TopNav>
      </div>
      <div className={styles.center}>
        <Container className={styles.container}>
          <PostList />
        </Container>
      </div>
    </>
  );
}

export default ReviewPage;
