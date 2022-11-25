import { useMediaQuery } from 'react-responsive';
import style from './emojiList.module.css';
const EmojiList = (props: {
  listItems: Array<[string, string]>;
  inverted: boolean;
}) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div>
      {props.listItems.map((listItem) => {
        return (
          <div
            className={style.emojiList}
            style={
              props.inverted && !isMobile
                ? { justifyContent: 'flex-end' }
                : { justifyContent: 'flex-start' }
            }
          >
            <p
              style={props.inverted && !isMobile ? { order: 1 } : { order: -1 }}
              className={style.emojiList__emoji}
            >
              {listItem[0]}
            </p>
            <p
              className={style.emojiList__text}
              style={
                props.inverted && !isMobile
                  ? { textAlign: 'right' }
                  : isMobile
                  ? { textAlign: 'center' }
                  : { textAlign: 'start' }
              }
            >
              {listItem[1]}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default EmojiList;
