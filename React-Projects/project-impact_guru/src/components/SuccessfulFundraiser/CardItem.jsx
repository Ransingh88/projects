import styled from 'styled-components'


export function CardItem() {

    const Card = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    min-height: 350px;
    width: 15em;
    background-color: whitesmoke;
    border-radius: 0.5em;
    margin: 1em 0.6em;
    box-shadow: 0 0 20px #ddd;
    img{
        width: 15em;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
    }

    .contents{
        margin: 10px;
        /* background-color: aquamarine; */
        padding: 5px;
        text-align: center;
        .name{
            font-size: 1.4em;
            padding: 0.5em 0;
            font-weight: 400;
        }
        .msg{
            font-size: 0.9em;
            padding: 0.4em 0;
        }
    }

    button{
        background-color: transparent;
        outline: none;
        padding: 0.4em 4em;
        border: 2px solid #aaa;
        border-radius: 2em;
        color: #aaa;
        font-weight: 500;
        margin: 4px;
    }
    button:hover{
        cursor: pointer;
        border: 2px solid #212121;
        color: #212121;
    }
    `
    return (
        <Card>
            <img src="https://d2aq6dqxahe4ka.cloudfront.net/assets/uploads/challenges/8679952468.jpg" alt="" />
            <div className="contents">
                <p className="name">Aasraa</p>
                <p className="msg">A sweater of sonu: How Aasrra saved school drop outs.</p>
                <button>READ MORE</button>
            </div>
        </Card>
    )
}