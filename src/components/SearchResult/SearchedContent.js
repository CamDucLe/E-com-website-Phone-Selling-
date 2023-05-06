import styled from "styled-components";
import Products from "../Products/Products";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 200px;
    margin-right: 200px;
    align-items: center;
    justify-content: center;
`;

const SearchedContent = ({ value }) => {
    return (
        <div>
            <Container>
                <Products value={value} />
            </Container>
        </div>
    )
};

export default SearchedContent;