<style lang="scss">
</style>
<template>
<div>
    <canvas width="100" height="40" id="randomCode" title="看不清，换一张" ref="cav" @click="getRandomCode()"></canvas>
</div>
</template>

<script>
export default {
    components: {
    },
    props: {
        randomType:{
            type: Number, default: 1
        }
    },
    data () {
        return {
            canvas:{},
            width:0,
            height:0,
            x:0,
            y:0,
            cvs:{},
            color:"#333",
            str:'',
            colors:['#247ad6', '#3c763d', '#a94442', '#e02b28', '#333']
        }
    },
    created() {
    
    },
    mounted () {
        this.canvas = this.$refs.cav;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.x = this.width / 5;
        this.y = this.height / 2;
        this.cvs = this.canvas.getContext("2d");
        this.cvs.font = '25px bold sans-serif';
        this.getRandomCode();
    },
    methods: {
        getRandomCode(){
            this.NumberOrvarter();
            this.disturb();
            this.$emit('getCode',this.str.toLowerCase());
        },
        getNumber(){ //生成随机数字
            this.cvs.clearRect(0, 0, this.width, this.height);
            this.str = '';
            for(let i = 1; i < 5; i++ ){
                let str = parseInt( Math.random() * 10 );
                this.str += str;
                this.draw({text: str ,x: this.x * i ,y:this.y});
            }
        },
        getvarter(){ //生成随机字母
            this.cvs.clearRect(0, 0, this.width, this.height)
            this.str = ''
            for(let i = 1; i < 5; i++ ){
                let str = String.fromCharCode(65 + parseInt(Math.random() * (91-65)));
                this.str += str;
                this.draw({text: str ,x: this.x * i ,y:this.y});
            }
        },
        NumberOrvarter(){ //生成随机数字字母组合
            this.cvs.clearRect(0, 0, this.width, this.height);
            this.str = '';
            for(let i = 1; i < 5; i++ ){
                let a = parseInt(Math.random() * 10);
                let str = a > 5 ? String.fromCharCode(  65 + parseInt(Math.random() * (91-65)) ) : parseInt( Math.random() * 10 );
                this.str += str;
                this.draw({text: str ,x: this.x * i ,y:this.y});
            }
        },
        character(){  //随机汉字
            this.cvs.clearRect(0,0,this.width,this.height)
            this.str = ''
            for(let i = 1;i < 5;i++ ){
                let str = eval('"\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16)+'"');
                this.str += str;
                this.draw({text: str ,x: this.x * i ,y:this.y})
            }
        },
        disturb(){ //混淆背景
            for(let i = 0; i < 500; i++ ){
                let start = {
                    x: parseInt( Math.random() * this.width ),
                    y: parseInt( Math.random() * this.height )
                }	
                this.cvs.beginPath();
                this.cvs.moveTo(start.x, start.y);
                this.cvs.lineTo(start.x + 1, start.y + 1);
                this.cvs.strokeStyle = this.colors[Math.round(Math.random()*5)] || 'red';
                this.cvs.stroke();
                this.cvs.closePath();
            }
        },
        draw(obj){ //绘制
            this.cvs.save();
            this.cvs.beginPath();
            this.cvs.fillStyle = this.colors[Math.round(Math.random()*5)] || '#333';
            this.cvs.textAlign = 'center';
            this.cvs.textBaseline = 'middle';
            this.cvs.font = "25px bold sans-serif";
            this.cvs.translate(obj.x, obj.y);
            var rotate = (Math.PI/6)*Math.random()*(-1* Math.round(Math.random()*10)%2+0);
            this.cvs.rotate(rotate);
            this.cvs.translate(-obj.x, -obj.y);
            this.cvs.fillText(obj.text,obj.x,obj.y);
            this.cvs.closePath();
            this.cvs.restore();
        }
    }
}
</script>
