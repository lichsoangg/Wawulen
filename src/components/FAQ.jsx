import React, {useState} from "react";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
const FAQ = ({question, answer}) => {
  const [isShowAnswer, setIsShowAnswer] = useState(false);
  return (
    <article className="faq">
      <div>
        <h4>{question}</h4>
        <button className="faq__icon" onClick={() => setIsShowAnswer((prev) => !prev)}>
          {isShowAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {isShowAnswer && <p>{answer}</p>}
    </article>
  );
};

export default FAQ;
