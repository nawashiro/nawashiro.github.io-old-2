import style from "../styles/BlogCard.module.css";
import { Img } from "react-image";

export default function BlogcardImitation({ url, title, description, image }) {
  const domain = url.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1];
  return (
    <a href={url} target="_brank" className={style.a}>
      <figure className={style.blogcard}>
        <div>
          <img src={image} alt={title} width="100px" className={style.image} />
          <div className={style.title}>{title}</div>
          <div className={style.description}>{description}</div>
          <div className={style.url}>{domain}</div>
        </div>
      </figure>
    </a>
  );
}
