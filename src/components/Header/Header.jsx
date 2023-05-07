import "./Header.css";
function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/profile">profile</a>
        </li>
        <li>
          <a href="/login">login</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
