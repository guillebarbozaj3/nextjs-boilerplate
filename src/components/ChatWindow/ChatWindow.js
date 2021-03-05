import React, { useEffect, useRef } from 'react';
import checkProps from '@jam3/react-check-extra-props';
import { gsap } from 'gsap';
import styles from './ChatWindow.module.scss';

function ChatWindow() {
  const primerTexto = useRef(null);
  const segundoTexto = useRef(null);

  useEffect(() => {
    gsap.from(primerTexto.current, { duration: 1.3337, opacity: 0, y: -50, delay: 0.5 });

    //gsap.from('#thirdAnimatedText', {duration: 1.6777, opacity: 0, y: 50, delay: 3})
  }, [primerTexto]);
  //const chatSocket = new WebSocket('')
  return (
    <div className={styles.ChatWindow}>
      <h1 ref={primerTexto} className={styles.title}>
        My first animated component
      </h1>
      <p ref={segundoTexto} className={styles.secondAnimatedText}>
        WITH GSAP
      </p>
    </div>
  );
}

ChatWindow.propTypes = checkProps({});

ChatWindow.defaultProps = {};

export default ChatWindow;
