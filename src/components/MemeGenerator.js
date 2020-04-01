import React from "react";

/**
 * 1
 * Initialize state to save the following data:
 *      top text
 *      bottom text
 *      random image (intialize with "http://i.imgflip.com/1bij.jpg")
  2
   * We'll be using an API that provides a bunch of meme images.
   *
   * Your task:
   * make an API call to "https://api.imgflip.com/get_memes" and save the
   * data that comes back (`response.data.memes`) to a new state property
   * called `allMemeImgs`. (The data that comes back is an array)
   * 
   * 3
   *     
           * Create 2 input fields, one for the topText and one for the bottomText
           * Remember that these will be "controlled forms", so make sure to add
           * all the attributes you'll need for that to work
           *

   * 4
   *  
     * Create the onChagne handler method
     * It should update the corresponding state on every change of the input box
     * 
     * 5
     *  * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site
     */
   

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }
handleChange(event) {
const {name, value} = event.target
this.setState({ [name]: value })
}


  render() {
    return (
      <div>
        <form className="meme-form">
      
           <input 
           type="text"
           name="topText"
           placeholder="Top Text"
           value={this.state.topText}
        onChange={this.handleChange}
           />
     
        <input
         type="text"
         name="bottomText"
         placeholder="Bottom Text"
         value={this.state.bottomText}
      onChange={this.handleChange}
        />
  
          <button>Gen</button>
        </form>
        <div className="meme">
            <img src={this.state.randomImg} alt="" />
            <h2 className="top">{this.state.topText}</h2>
    <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
