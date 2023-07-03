import { format } from "date-fns";
import ja from "date-fns/locale/ja";
import { ReactNode } from "react";
type Article = {
  children: ReactNode;
  date: string;
  title: string;
};
export default function ContentArticle({ children, date, title }: Article) {
  return (
    <div className="content article">
      <time dateTime={date}>
        {format(new Date(date.replace(/-/g, "/")), "y年M月d日", { locale: ja })}
      </time>
      <h2>{title}</h2>
      <div className="body-of-letter">{children}</div>
    </div>
  );
}
