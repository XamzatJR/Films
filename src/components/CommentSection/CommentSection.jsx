import React, { useState } from 'react';
import classes from './CommentSection.module.css';
function CommentSection({ id }) {
  const [value, setValue] = useState({ title: '' });
  const [comment, setComment] = useState(JSON.parse(localStorage.getItem('comments')) || []);
  localStorage.setItem('comments', JSON.stringify(comment));
  function setNewComment(value) {
    const d = new Date();
    const newComment = { ...value, date: d.toLocaleString(), id: id };
    setComment([...comment, newComment]);
    localStorage.setItem('comments', JSON.stringify(comment));
    setValue({ title: '' });
  }
  function deleteComment(el) {
    setComment(comment.filter((com) => com.title !== el.title));
  }

  return (
    <>
      <div>
        {comment.map((el) => {
          if (el.id === id) {
            return (
              <div key={el.date} className={classes.comment}>
                <div className={classes.commentInfo}>
                  <div className={classes.you}>You</div>
                  <div className={classes.date}>{el?.date}</div>
                </div>
                <div className={classes.inputValue}>{el?.title}</div>
                <button onClick={() => deleteComment(el)} className={classes.removeBtn}></button>
              </div>
            );
          }
        })}
      </div>

      <div className={classes.input}>
        <textarea
          placeholder="Leave a comment"
          className={classes.textarea}
          value={value.title}
          onChange={(e) => setValue({ ...value, title: e.target.value })}
        ></textarea>
        <button className={classes.btn} onClick={() => setNewComment(value)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.68981 13.7414L2.28356 8.69751L6.68981 3.65366C7.04588 3.24562 7.00434 2.62598 6.5963 2.26959C6.18825 1.91352 5.56894 1.95538 5.21222 2.3631L0.242297 8.05237C-0.0807656 8.42184 -0.0807656 8.97346 0.242297 9.34293L5.21227 15.0322C5.40647 15.2539 5.6782 15.3677 5.95153 15.3677C6.18042 15.3677 6.41025 15.2879 6.5963 15.1254C7.00439 14.769 7.0462 14.1494 6.68981 13.7414Z"
              fill="white"
            />
            <path
              d="M16.8717 7.71658H0.980906C0.439125 7.71658 0 8.15566 0 8.69749C0 9.23927 0.439125 9.6784 0.980906 9.6784H16.8717C19.7206 9.6784 22.0382 11.9959 22.0382 14.8445C22.0382 17.6931 19.7206 20.0107 16.8717 20.0107H2.28881C1.74703 20.0107 1.30791 20.4498 1.30791 20.9916C1.30791 21.5334 1.74703 21.9725 2.28881 21.9725H16.8717C20.8019 21.9725 24 18.7747 24 14.8445C24 10.9143 20.8022 7.71658 16.8717 7.71658Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </>
  );
}

export default CommentSection;
