import GoPro from "../gopro/gopro.component";
import "./todo.styles.scss";

interface ITodos {}

const Todos: React.FC<ITodos> = () => {
  return (
    <div>
      <div className="todoHeader">
        <div>
          <img
            className={"img"}
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="mans profile"
          />
        </div>
        <div className="textContainer">
          <span className={"headerText fontColor"}>Hello, Jhon</span>
          <span className={"bodyText fontColor"}>
            What are your plans for today?
          </span>
        </div>
      </div>

      <div>
        <GoPro />
      </div>

      <div></div>
    </div>
  );
};

export default Todos;
