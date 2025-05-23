import { useState, useEffect } from "react";
import GuestbookList from "../component/GuestbookList";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {db} from "../lib/firebase"



const Visit = () => {

  useEffect(() => {
    console.log('hello');

  }, []);

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;
  const formData = new FormData(form);
  const { name, content } = Object.fromEntries(formData.entries()) as {
    name: string;
    content: string;
  };

  if (!name || !content) {
    alert("이름과 내용을 입력해주세요.");
    return;
  }

  try {
    await addDoc(collection(db, "guestbook"), {
      name,
      message: content,
      createdAt: serverTimestamp(),
    });
    alert("방명록이 등록되었습니다.");
    form.reset();
  } catch (err) {
    console.error("Firestore 저장 에러", err);
    alert("오류가 발생했습니다.");
  }
}
  return (
    <div className="wy__visit">
      <div className="wy__visit__write">
        <form method="post" onSubmit={handleSubmit}>
          <div className="wy__visit__input__wrap">
            <p>이름</p>
            <input type="text" name="name" />
          </div>
          <div className="wy__visit__textarea__wrap">
            <textarea name="content" id="" defaultValue="입력해주세요..." />
          </div>
          <div className="wy__visit__button__wrap">
            <button type="submit">보내기</button>
          </div>
        </form>
      </div>
			<GuestbookList />
    </div>
  );
};

export default Visit;
