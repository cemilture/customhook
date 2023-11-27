import useInput from "./useInput";

function PersonalInfo() {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    alert(`Merhaba ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>Ad:</label>
          <input
            type="text"
            {...bindFirstName} //hem value yu hem de onChange i içinde barındırıyor
            // value={firstName}
            // onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Soyad:</label>
          <input
            type="text"
            {...bindLastName}
            // value={lastName}
            // onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <button>Kaydet</button>
      </form>
    </div>
  );
}

export default PersonalInfo;
