import React from 'react'

/**
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
 */
class MemeGenerator extends React.Component {
    constructor() {
super()
this.state = {}
    }

    render() {
        return (
            <h1>Meme Generator</h1>
        )
    }
}

export default MemeGenerator;