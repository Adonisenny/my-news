const Body = ({value,link,summary}) => {
    return (  
        <div className="bodied">
            <h2>Source:{'  ' + value}</h2>
            
            <br />
                {summary} &nbsp;&nbsp;<a href={link}>Read more...</a>
            
            
            
            
            
        </div>
    );
}
 
export default Body;