import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./Context";
import notesimage from "./notes.svg";
import com from "./complaint.svg";
import folder from "./folder.svg";
const StudentPage = () => {
  const navigate = useNavigate();
  const { name } = useContext(AppContext);
  return (
    <>
      <h1>Welcome {name} </h1>
      <section className="cards" style={{ color: "white", marginTop: "5rem" }}>
        <div
          onClick={() => {
            navigate("notes");
          }}
          className="card"
        >
          <h1>NOTES</h1>
          <img src={notesimage} height={60} />
        </div>
        <div onClick={() => {}} className="card">
          <h1>Overall</h1>
          <img src={folder} height={70} />{" "}
        </div>
        <div onClick={() => {}} className="card">
          <h1>File a complaint</h1>
          <img src={com} height={90} />{" "}
        </div>
      </section>
    </>
  );
};

export default StudentPage;
