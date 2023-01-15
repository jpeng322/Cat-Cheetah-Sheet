import { Form, FloatingLabel } from "react-bootstrap"

const Search = () => {
    return (
        <div>
            <div>This is the search page</div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </div>
    );
}

export default Search;