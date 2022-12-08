import { and } from 'src/utils/css';
import style from './emojiList.module.css';

type EmojiListProps = {
  listItems: Array<[string, string]>;
  inverted: boolean;
};

const EmojiList = ({ listItems, inverted }: EmojiListProps) => {
  return (
    <div>
      {listItems.map((listItem, i) => {
        return (
          <div
            key={i}
            className={and(
              style.emojiList,
              inverted ? style.emojiList__inverted : '',
            )}
          >
            <p
              className={and(
                style.emojiList__emoji,
                inverted ? style.emojiList__emoji__inverted : ' ',
              )}
            >
              {listItem[0]}
            </p>
            <p
              className={and(
                style.emojiList__text,
                inverted ? style.emojiList__text__inverted : '',
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
