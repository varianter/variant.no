import style from './emojiList.module.css';
const EmojiList = (props: {
  emoji: string;
  listItem: string;
  reversed: boolean;
}) => {
  return (
    <div
      className={style.emojiList}
      style={
        props.reversed
          ? { justifyContent: 'flex-end' }
          : { justifyContent: 'space-between' }
      }
    >
      <p
        style={props.reversed ? { order: 1 } : { order: -1 }}
        className={style.emojiList__emoji}
      >
        {props.emoji}
      </p>
      <p className={style.emojiList__text}>{props.listItem}</p>
    </div>
  );
};
export default EmojiList;
