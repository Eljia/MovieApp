import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = () => {
  return (
    <div className="featured">
      <img
        width="100%"
        src="http://s3-us-west-2.amazonaws.com/techvibes/wp-content/uploads/2017/04/24135159/Netflix-Background.jpg"
        alt=""
      />
      <div className="info">
        <img
          src="https://www.pngfind.com/pngs/m/604-6048857_focus-features-logo-vector-hd-png-download.png"
          alt=""
        />

        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          culpa facere id ipsam ducimus illum corrupti provident. Odit magnam
          eveniet nesciunt soluta rerum placeat, unde distinctio? Deleniti ullam
          nobis illo.
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
