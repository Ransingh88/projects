import styled from 'styled-components'



export function CatagoryCard({title,icon}) {

    const Card = styled.div`
    height: 150px;
    width: 150px;
    border-radius: 0.8em;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 80px;
    }
    p{
        padding: 0;
        margin: 0;
        font-size: 16px;
        color: gray;
        font-weight: 400;
    }:hover{
        box-shadow: 0px 0px 40px #aaa;
        cursor: pointer;
        transform: scale(1.01);
        background-color: whitesmoke;

    }
    
    
    
    
    `
    
    return (
        
        <Card>
            {/* <FaAmbulance color="#4ec067" fontSize="5rem" /> */}
            <img src={ icon } alt="" width />
            <p>{ title }</p>
            
        </Card>
    )
}