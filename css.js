const str=
    ` .container {
            z-index: 10;position: absolute;width: 100%;height: 100%;top: 0;
            animation: 1s ease-in-out arise;
        }
        .b-body {
            position: absolute;bottom: -290rem;left: -200rem;height: 600rem;width: 800rem;
            border-top-right-radius: 600rem;
            border-bottom-right-radius: 100rem;
            background: linear-gradient(99deg, white 80%, black 95%);rotate: -30deg; 
        }
        .head {
            position: absolute;
            left: 444rem;
            bottom: 61rem;
            width: 300rem;
            height: 300rem;
            border-radius: 500rem;
            transform: rotate(45deg) scale(1.5, 1);
            background: radial-gradient(white 40%, black 90%);
        }

        .head-overlay {
            position: absolute;
            left: 444rem;
            bottom: 61rem;
            width: 300rem;
            height: 300rem;
            border-radius: 500rem;
            transform: rotate(45deg) scale(1.5, 1);
            background: linear-gradient(120deg, white 50%, transparent 77%);
        }

        .box-eye {
            position: absolute;
            bottom: 184rem;
            left: 468rem;
            width: 260rem;
            height: 60rem;
            transform: rotate(45deg);
        }
        [class^='eye'] {
            position: absolute;
            height: 60rem;
            width: 60rem;
            border: 1rem solid black;
            border-radius: 30rem;
            background-color: black;
        }
        .eye-left {
            top: 0rem;
            left: 0rem;
        }
        .eye-right {
            top: 1rem;
            right: 0rem;
        }
        .line {
            position: absolute;
            left: 35rem;
            top: 27rem;
            width: 200rem;
            height: 7rem;
            background: #000;
        }
        .hi {
            position: absolute;
            font-size: 50rem;
            text-align: right;
            color: white;
            text-shadow: 5px 5px 10px rgba(131, 162, 195, 0.4);
            animation: 1s word;
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        }
         @keyframes word {
            0% {
                color: transparent;
            }
            100% {
                color: white;
            }
        }
        @media screen and (max-width: 500px) { 
             @keyframes arise {0% {left: -553rem;}100% {left: -276rem;}}
        }
        
        @media screen and (min-width: 500px) {
            @keyframes arise {0% {left: -553rem;}100% {left: 0rem;}}
        }
  .hi{display: block;}       
    `

export default str
