import React from 'react'
import {Card,CardContent} from '@material-ui/core'
import './InfoBox.css'

function InfoBox({title,cases,total, ...props}) {
    return (
        <Card className="InfoBox" onClick={props.onClick}>
            <CardContent>
                <h3 className="InfoBox__title">{ title}</h3>
                <h2 className="InfoBox__cases">{ cases}</h2>
                <h6 className="InfoBox__total">{ total} Total</h6>
            </CardContent>
        </Card>
    )
}

export  {InfoBox}
