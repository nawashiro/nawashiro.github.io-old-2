import { format } from "date-fns";
import ja from "date-fns/locale/ja";

export default function ContentArticle({ children, date, title }) {
  return (
    <div className="content article">
      <time dateTime={date}>
        {format(new Date(date), "y年M月d日", { locale: ja })}
      </time>
      <h2>{title}</h2>
      <div className="body-of-letter">{children}</div>
    </div>
  );
}
