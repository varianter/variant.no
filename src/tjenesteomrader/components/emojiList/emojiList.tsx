import { and } from 'src/utils/css';
import style from './emojiList.module.css';
const EmojiList = (props: {
  listItems: Array<[string, string]>;
  inverted: boolean;
}) => {
  return (
    <div>
      {props.listItems.map((listItem, i) => {
        return (
          <div
            key={i}
            className={and(
              style.emojiList,
              props.inverted ? style.emojiList__inverted : '',
            )}
          >
            <p
              className={and(
                style.emojiList__emoji,
                props.inverted ? style.emojiList__emoji__inverted : ' ',
              )}
            >
              {listItem[0]}
            </p>
            <p
              className={and(
                style.emojiList__text,
                props.inverted ? style.emojiList__text__inverted : '',
              )}
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
