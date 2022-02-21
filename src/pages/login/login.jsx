export let Login = () => {
  return (
    <>
      <h1>LOGIN</h1>
      <div className="login_outer_div">
        <div className="login_inner_div">
          <input type="text" placeholder="user name"></input>
          <br />
          <input type="text" placeholder="password"></input>
          <br />
        </div>
        <button>submit</button>
      </div>
    </>
  );
};
