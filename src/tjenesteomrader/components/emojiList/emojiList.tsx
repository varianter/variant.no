import { useMediaQuery } from 'react-responsive';
import style from './emojiList.module.css';
const EmojiList = (props: {
  emoji: string;
  listItem: string;
  reversed: boolean;
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div
      className={style.emojiList}
      style={
        props.reversed && !isMobile
          ? { justifyContent: 'flex-end' }
          : { justifyContent: 'flex-start' }
      }
    >
      <p
        style={props.reversed && !isMobile ? { order: 1 } : { order: -1 }}
        className={style.emojiList__emoji}
      >
        {props.emoji}
      </p>
      <p
        className={style.emojiList__text}
        style={
          props.reversed && !isMobile
            ? { textAlign: 'right' }
            : isMobile
            ? { textAlign: 'center' }
            : { textAlign: 'start' }
        }
      >
        {props.listItem}
      </p>
    </div>
  );
};
export default EmojiList;
