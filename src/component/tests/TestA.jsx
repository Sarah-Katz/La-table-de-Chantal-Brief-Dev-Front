import { Link } from "react-router-dom";

export default function TestA() {
    return (
        <div>
            <h1>TestA</h1>
            <Link to="/testB"> test B</Link>
        </div>
    )
}