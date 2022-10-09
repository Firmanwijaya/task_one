import Cardtodos from "../components/cardtodos";
import Buttonprm from "../components/buttonpr"
import Navigationbar from "../layout/navbar";
import Footer from "../layout/footer";
import { useSelector } from "react-redux";


function HomePage() {
  const todos = useSelector((state) => state.reducers.todos);

  return (
    <>
      <Navigationbar />
      <div className="container text-center mt-4">
      <Buttonprm />
      <div className="d-flex justify-content-around gap-4 flex-wrap my-5">
        {todos.map((item, index) => (
          <Cardtodos
            key={index}
            title={item.title}
            userID={item.userId}
            status={item.completed.toString()}
          />
        ))}
      </div>
    </div>
      <Footer />
    </>
  );
}

export default HomePage;
