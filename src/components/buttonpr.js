import Button from 'react-bootstrap/Button';
import { getTodosFetch } from "../bootstrap/actions";
import { useDispatch} from "react-redux";

function Buttonprm() {
  const dispatch = useDispatch();

  return (
    <>
      <Button variant="primary" onClick={() => dispatch(getTodosFetch())}>DAPATKAN DATA TODOS</Button>
    </>
  );
}

export default Buttonprm;