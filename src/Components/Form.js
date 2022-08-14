

const Form = ({inputed,onChange}) => {
    
    
    return ( 
        <div className="input">
            <input type='text' placeholder='search by author' inputed={inputed} onChange={onChange} />
        </div>

    
     );
}
 
export default Form;