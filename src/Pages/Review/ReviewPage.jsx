import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ListPage from "../../Components/ListPage";
import styles from "./Styled/ReviewPage.module.css";
import Warn from "../../Components/Warn";
import DonatedItem from "../../Components/DonatedItem";
import { getDonated } from "../../Api/getter";
import TopNav from "../../Pages/TopNav/TopNav.main";
import SingleReview from "../../Components/SingleReview"; // Corrected typo here

class ReviewView extends React.Component {
  state = {
    reviews: [
      {
        id: 1,
        writer: "일일일",
        date: "2020-10-10",
        content: "후기입니다.",
      },
      {
        id: 2,
        writer: "둘둘둘",
        date: "2020-10-09",
        content: "후기입니다.\n 두번째 줄입니다. \n 세번째 줄입니다.",
      },
    ],
  };

  addReview = () => {
    let value = document.querySelector("#new-review-content").value;
    this.setState({
      reviews: [
        ...this.state.reviews,
        {
          id: this.state.reviews.length + 1,
          writer: "김코딩",
          date: new Date().toISOString().slice(0, 10),
          content: value,
        },
      ],
    });
  };

  render() {
    return (
      <>
        <div className={styles.center}>
          <TopNav></TopNav>
        </div>
        <div>
          <div>작성자 : 김코딩</div>
          <div id="writing-area">
            <textarea id="new-review-content"></textarea>
            <button id="submit-new-review" onClick={this.addReview}>
              새 댓글 쓰기
            </button>
          </div>
          <ul id="review" className={styles.bubble_left}>
            {this.state.reviews.map((review) => (
              <SingleReview key={review.id} review={review} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default ReviewView;
