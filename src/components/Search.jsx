import Form from 'react-bootstrap/Form'

const Search = ({setQuery}) => {

    return (
        <Form.Control onChange={(e) => setQuery(e.target.value)} type="text" placeholder="Titles,people,genres" className="navSearch mr-1"/>
    )
}
export default Search