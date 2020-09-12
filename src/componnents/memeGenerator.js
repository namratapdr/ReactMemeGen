import React,{Component} from 'react'
import {Memes} from './memes'
//api link: https://api.imgflip.com/get_memes
export class MemeGen extends Component{
    constructor(){
        super()
        this.state ={
            topText:'',
            bottomText:'',
            image:"https://i.imgflip.com/3i7p.jpg",
            textColor:"white",
            allMemeImages:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(
            (response) => {
               
                //data is the sub array of API data
                const memes = response.data.memes
               
                this.setState({
                    allMemeImages : memes
                })
                
            }
        )
       
    }

    handleChange(event){
        const {name , value } = event.target
       
            this.setState({
                //object wrapping with []
            [ name ]: value
            } )
     }
     handleSubmit(event){
       
         const max =this.state.allMemeImages.length
         const randNum = Math.floor(Math.random()* Math.floor(max))
         const randomMemeImage = this.state.allMemeImages[randNum].url
         this.setState (
             {
                 image: randomMemeImage
             }
         )
         event.preventDefault()
     }


    render(){
        return(
            <div>
                <Memes handleChange={this.handleChange} handleSubmit={this.handleSubmit} data={this.state}/>
           </div>
        )
    }
}