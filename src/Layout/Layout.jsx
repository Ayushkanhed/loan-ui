import Login from "../Component/Login";

export default function Layout(props) {
    return (
        <div>
            <main>{props.children}</main>
        </div>
    );
}