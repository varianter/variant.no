import anime from 'animejs';
import { useEffect } from 'react';
import style from './danceFloor.module.css';
const DanceFloor = () => {
  const colors = [
    '#F5A4C4',
    '#E61A6B',
    '#03DAC6',
    '#423D89',
    '#FFD0C9',
    '#B7B4DE',
  ];

  const tileCount = 66;

  const animation = () => {
    for (let index = 0; index < tileCount + 1; index++) {
      anime({
        targets: '#t' + index,
        fill: colors[Math.floor(Math.random() * colors.length)],
      });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animation();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      className={style.danceFloor}
      xmlns="http://www.w3.org/2000/svg"
      width="1280"
      height="208"
      viewBox="0 0 1280 208"
      fill="none"
    >
      <g clip-path="url(#clip0_57_3504)">
        <path
          id="t1"
          d="M41.7042 29.3081L0 52.1488V29.3081H41.7042Z"
          fill="#11111D"
        />
        <path
          id="t2"
          d="M53.5959 94.0659L2.64954 128.185H0V94.0659H53.5959Z"
          fill="#11111D"
        />
        <path
          id="t3"
          d="M95.2375 0L44.9588 27.539H0V0H95.2375Z"
          fill="#11111D"
        />
        <path
          id="t4"
          d="M97.3237 168.446L51.3636 208H0V168.446H97.3237Z"
          fill="#11111D"
        />
        <path
          id="t5"
          d="M103.624 60.583L56.2663 92.2967H0V60.583H103.624Z"
          fill="#11111D"
        />
        <path
          id="t6"
          d="M142.053 129.955L99.3683 166.664H0V131.922L2.94162 129.955H142.053Z"
          fill="#11111D"
        />
        <path
          id="t7"
          d="M150.377 29.3081L106.295 58.8142H0V53.946L44.9796 29.3081H150.377Z"
          fill="#11111D"
        />
        <path
          id="t8"
          d="M56.5375 94.0659H183.757L144.118 128.185H5.57031L56.5375 94.0659Z"
          fill="#11111D"
        />
        <path
          id="t9"
          d="M48.2324 27.539L98.5111 0H194.166L153.025 27.539H48.2324Z"
          fill="#11111D"
        />
        <path
          id="t10"
          d="M106.544 60.583H222.664L185.821 92.2967H59.1855L106.544 60.583Z"
          fill="#11111D"
        />
        <path
          id="t11"
          d="M252.121 168.446L219.304 208H53.9688L99.9289 168.446H252.121Z"
          fill="#11111D"
        />
        <path
          id="t12"
          d="M153.297 29.3081H259.008L224.71 58.8142H109.215L153.297 29.3081Z"
          fill="#11111D"
        />
        <path
          id="t13"
          d="M253.587 166.664H102L144.685 129.955H284.088L253.587 166.664Z"
          fill="#11111D"
        />
        <path
          id="t14"
          d="M155.949 27.539L197.09 0H293.079L261.055 27.539H155.949Z"
          fill="#11111D"
        />
        <path
          id="t15"
          d="M285.544 128.185H146.725L186.363 94.0659H313.875L285.544 128.185Z"
          fill="#11111D"
        />
        <path
          id="t16"
          d="M225.273 60.583H341.644L315.336 92.2967H188.43L225.273 60.583Z"
          fill="#11111D"
        />
        <path
          id="t17"
          d="M261.618 29.3081H367.621L343.128 58.8142H227.32L261.618 29.3081Z"
          fill="#11111D"
        />
        <path
          id="t18"
          d="M263.705 27.539L295.687 0H391.968L369.103 27.539H263.705Z"
          fill="#11111D"
        />
        <path
          id="t19"
          d="M406.883 168.446L387.21 208H221.645L254.482 168.446H406.883Z"
          fill="#11111D"
        />
        <path
          id="t20"
          d="M407.778 166.664H255.961L286.441 129.955H426.053L407.778 166.664Z"
          fill="#11111D"
        />
        <path
          id="t21"
          d="M426.951 128.185H287.902L316.213 94.0659H443.933L426.951 128.185Z"
          fill="#11111D"
        />
        <path
          id="t22"
          d="M344.001 60.583H460.623L444.83 92.2967H317.693L344.001 60.583Z"
          fill="#11111D"
        />
        <path
          id="t23"
          d="M369.975 29.3081H476.186L461.478 58.8142H345.482L369.975 29.3081Z"
          fill="#11111D"
        />
        <path
          id="t24"
          d="M371.434 27.539L394.299 0H490.788L477.081 27.539H371.434Z"
          fill="#11111D"
        />
        <path
          id="t25"
          d="M561.621 168.446L555.07 208H389.359L409.074 168.446H561.621Z"
          fill="#11111D"
        />
        <path
          id="t26"
          d="M561.912 166.664H409.949L428.246 129.955H568.025L561.912 166.664Z"
          fill="#11111D"
        />
        <path
          id="t27"
          d="M568.316 128.185H429.121L446.124 94.0659H573.97L568.316 128.185Z"
          fill="#11111D"
        />
        <path
          id="t28"
          d="M462.772 60.583H579.519L574.282 92.2967H447L462.772 60.583Z"
          fill="#11111D"
        />
        <path
          id="t29"
          d="M478.376 29.3081H584.733L579.831 58.8142H463.668L478.376 29.3081Z"
          fill="#11111D"
        />
        <path
          id="t30"
          d="M479.256 27.539L492.963 0H589.577L585.008 27.539H479.256Z"
          fill="#11111D"
        />
        <path
          id="t31"
          d="M587.092 27.539L591.661 0H688.338L692.907 27.539H587.092Z"
          fill="#11111D"
        />
        <path
          id="t32"
          d="M693.199 29.3081L698.123 58.8142H581.877L586.8 29.3081H693.199Z"
          fill="#11111D"
        />
        <path
          id="t33"
          d="M698.393 60.583L703.671 92.2967H576.326L581.604 60.583H698.393Z"
          fill="#11111D"
        />
        <path
          id="t34"
          d="M709.619 128.185H570.383L576.037 94.0659H703.966L709.619 128.185Z"
          fill="#11111D"
        />
        <path
          id="t35"
          d="M716.003 166.664H563.998L570.069 129.955H709.911L716.003 166.664Z"
          fill="#11111D"
        />
        <path
          id="t36"
          d="M716.295 168.446L722.867 208H557.135L563.707 168.446H716.295Z"
          fill="#11111D"
        />
        <path
          id="t37"
          d="M694.992 27.539L690.402 0H787.038L800.744 27.539H694.992Z"
          fill="#11111D"
        />
        <path
          id="t38"
          d="M801.623 29.3081L816.331 58.8142H700.168L695.266 29.3081H801.623Z"
          fill="#11111D"
        />
        <path
          id="t39"
          d="M817.227 60.583L832.999 92.2967H705.717L700.48 60.583H817.227Z"
          fill="#11111D"
        />
        <path
          id="t40"
          d="M711.685 128.185L706.031 94.0659H833.877L850.88 128.185H711.685Z"
          fill="#11111D"
        />
        <path
          id="t41"
          d="M718.087 166.664L711.975 129.955H851.754L870.05 166.664H718.087Z"
          fill="#11111D"
        />
        <path
          id="t42"
          d="M870.926 168.446L890.641 208H724.93L718.379 168.446H870.926Z"
          fill="#11111D"
        />
        <path
          id="t43"
          d="M802.914 27.539L789.207 0H885.696L908.562 27.539H802.914Z"
          fill="#11111D"
        />
        <path
          id="t44"
          d="M910.022 29.3081L934.514 58.8142H818.519L803.811 29.3081H910.022Z"
          fill="#11111D"
        />
        <path
          id="t45"
          d="M935.999 60.583L962.306 92.2967H835.17L819.377 60.583H935.999Z"
          fill="#11111D"
        />
        <path
          id="t46"
          d="M853.049 128.185L836.066 94.0659H963.787L992.097 128.185H853.049Z"
          fill="#11111D"
        />
        <path
          id="t47"
          d="M910.9 27.539L888.035 0H984.316L1016.3 27.539H910.9Z"
          fill="#11111D"
        />
        <path
          id="t48"
          d="M872.223 166.664L853.947 129.955H993.559L1024.04 166.664H872.223Z"
          fill="#11111D"
        />
        <path
          id="t49"
          d="M1018.39 29.3081L1052.68 58.8142H936.875L912.383 29.3081H1018.39Z"
          fill="#11111D"
        />
        <path
          id="t50"
          d="M1025.52 168.446L1058.36 208H892.791L873.117 168.446H1025.52Z"
          fill="#11111D"
        />
        <path
          id="t51"
          d="M1054.72 60.583L1091.57 92.2967H964.661L938.354 60.583H1054.72Z"
          fill="#11111D"
        />
        <path
          id="t52"
          d="M1018.95 27.539L986.924 0H1082.91L1124.05 27.539H1018.95Z"
          fill="#11111D"
        />
        <path
          id="t53"
          d="M994.432 128.185L966.121 94.0659H1093.63L1133.27 128.185H994.432Z"
          fill="#11111D"
        />
        <path
          id="t54"
          d="M1126.68 29.3081L1170.79 58.8142H1055.29L1020.99 29.3081H1126.68Z"
          fill="#11111D"
        />
        <path
          id="t55"
          d="M1026.39 166.664L995.912 129.955H1135.32L1178 166.664H1026.39Z"
          fill="#11111D"
        />
        <path
          id="t56"
          d="M1094.18 92.2967L1057.34 60.583H1173.46L1220.79 92.2967H1094.18Z"
          fill="#11111D"
        />
        <path
          id="t57"
          d="M1180.07 168.446L1226.03 208H1060.69L1027.85 168.446H1180.07Z"
          fill="#11111D"
        />
        <path
          id="t58"
          d="M1126.97 27.539L1085.83 0H1181.49L1231.77 27.539H1126.97Z"
          fill="#11111D"
        />
        <path
          id="t59"
          d="M1135.88 128.185L1096.24 94.0659H1223.46L1274.41 128.185H1135.88Z"
          fill="#11111D"
        />
        <path
          id="t60"
          d="M1280 53.946V58.8142H1173.71L1129.62 29.3081H1235.02L1280 53.946Z"
          fill="#11111D"
        />
        <path
          id="t61"
          d="M1280 131.922V166.664H1180.63L1137.95 129.955H1277.06L1280 131.922Z"
          fill="#11111D"
        />
        <path
          id="t62"
          d="M1280 0V27.539H1235.04L1184.76 0H1280Z"
          fill="#11111D"
        />
        <path
          id="t63"
          d="M1280 60.583V92.2967H1223.73L1176.37 60.583H1280Z"
          fill="#11111D"
        />
        <path
          id="t64"
          d="M1280 168.446V208H1228.64L1182.68 168.446H1280Z"
          fill="#11111D"
        />
        <path
          id="t65"
          d="M1280 29.3081V52.1488L1238.3 29.3081H1280Z"
          fill="#11111D"
        />
        <path
          id="t66"
          d="M1280 94.0659V128.185H1277.35L1226.4 94.0659H1280Z"
          fill="#11111D"
        />
      </g>
      <defs>
        <clipPath id="clip0_57_3504">
          <rect width="1280" height="208" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DanceFloor;
