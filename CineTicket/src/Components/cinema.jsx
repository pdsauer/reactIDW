import React from 'react';

export default class Cinema extends React.Component{


    componentDidMount(){

            let canvasHeight = document.querySelector('#cinema-canvas').getAttribute('height');
            let canvasWidth = document.querySelector('#cinema-canvas').getAttribute('width');
            let maincolor = 'rgb(200, 0, 0)';


            let canvas = document.querySelector('#cinema-canvas');
            let ctx = canvas.getContext('2d');

            // draw Screen
            ctx.moveTo(canvasWidth * (1/30), canvasHeight * (1/37));
            ctx.lineTo(canvasHeight * (0.89), canvasWidth * (1/30));
            ctx.stroke();

            ctx.font = "30px Arial";
            ctx.fillText("Screen", canvasWidth * (0.35), canvasHeight * 0.14);

            for(let i = 0; i < 16; i++){

                for(let j = 0; j < 20; j++){

                    ctx.fillStyle = maincolor;
                    ctx.fillRect((canvasWidth * 0.04)+ i * canvasWidth * (0.06), canvasHeight * (0.20)+j* canvasHeight * (0.05), canvasWidth * (0.05), canvasHeight * (0.04));

                }
            }
    }
    render(){
        return(

            <div class="canvaswrapper">
<canvas id="cinema-canvas" width="600" height="900"></canvas>

            </div>
            


        );
    }

}