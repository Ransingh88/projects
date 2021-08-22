import React from 'react'
import {Card,CardContent} from '@material-ui/core'

function InfoBox({title,cases,total}) {
    return (
        <Card className="InfoBox">
            <CardContent>
                <h3 className="InfoBox__title">{ title}</h3>
                <h2 className="InfoBox__cases">{ cases}</h2>
                <h6 className="InfoBox__Total">{ total} Total</h6>
            </CardContent>
        </Card>
    )
}

export  {InfoBox}
