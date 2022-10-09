import "../styles/components/cardtodos.css";


function CardTodos(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <div className="card__header">
          <h3>{props.title}</h3>
        </div>
        <div className="card__body mb-2 text-muted">
          <p>User : {props.userID}</p>
        </div>
        <div className="card__footer">
          <p>Completed : {props.status}</p>
        </div>
      </div>
    </div>
  );
}

export default CardTodos;