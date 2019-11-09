import React from 'react';

export default class Cinema extends React.Component{


    componentDidMount(){

            let canvasHeight = 370;
            let canvasWidth = 300;
            let maincolor = 'rgb(200, 0, 0)';


            let canvas = document.querySelector('#cinema-canvas');
            let ctx = canvas.getContext('2d');

            // draw Screen
            ctx.moveTo(10, 10);
            ctx.moveTo(10, 10);
            ctx.lineTo(280, 10);
            ctx.stroke();

            ctx.font = "30px Arial";
            ctx.fillText("Screen", 95, 50);

            for(let i = 0; i < 16; i++){

                for(let j = 0; j < 20; j++){

                    ctx.fillStyle = maincolor;
                    ctx.fillRect(7+i*18, 80+j*18, 15, 15);

        

                }
            }
    }
    render(){
        return(


            <canvas id="cinema-canvas" width="300" height="450"></canvas>


        );
    }

}