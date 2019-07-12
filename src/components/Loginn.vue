<template>
  <div class="login">
    <div class="top">
      <p class="dltj">登录途家</p>
      <p class="new">新用户登录即自动注册途家账号</p>
    </div>
    <div class="input">
      <div>
        <input type="text" class="tel" placeholder="登录手机号，邮箱，用户名" />
      </div>
      <div class="qwm">
        <input type="text" class="tel" placeholder="输入密码" />
        <span></span>
      </div>
    </div>
    <a class="aaa">
      <div class="dlzc">登录</div>
    </a>
    <div href="##" class="go">
      <router-link to="/Login" tag="span">
        手机短信登录
        <!-- <a href="##" class="go">账号密码登录</a> -->
      </router-link>
      <span>忘记密码？</span>
    </div>
    <p class="bbb">
      登录代表你已同意
      <a href="##">《途家网服务协议》</a>
      <a href="##">《隐私政策》</a>
    </p>
    <div class="left"></div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.login {
  width: 100%;
  background: #fff;
  padding: 0.7rem 0.25rem 0;
  box-sizing: border-box;
}
.top {
  width: 100%;
  box-sizing: border-box;
}
.dltj {
  width: 100%;
  height: 0.64rem;
  font-size: 0.64rem;
  color: #333;
}
.new {
  width: 100%;
  font-size: 0.3rem;
  margin-top: 0.2rem;
  color: #999;
  display: none;
}
.input {
  width: 100%;
  margin-top: 0.6rem;
  box-sizing: border-box;
}
.input div {
  display: flex;
  border-bottom: 0.02rem solid #ccc;
}
.hah {
  display: inline-block;
  width: 1.88rem;
  height: 0.88rem;
  background: red;
  font-size: 0.68rem;
  margin-left: 0;
}
.tel {
  background: #fff;
  caret-color: #fd8238;
  color: #333;
  border: 0;
  font-size: 0.4rem;
  height: 0.88rem;
}
.qwm {
  margin-top: 0.1rem;
}
.qwm span {
  display: inline-block;
  width: 0.48rem;
  height: 0.48rem;
  margin-top: 0.2rem;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABVCAYAAAC/xEFcAAAAAklEQVR4AewaftIAABeISURBVO3BC3xUhb3g8d//zJlAwgwWH8A5Xq3KwxZYqwTlEdsabK/FYlLaW2pru9ftyiGJUOGT2anaXntib6+PnZT0omdC7GvvttrlpmVvH8SmVehuW1ESWikvq62PCicRFA4zktfM/O/wGfdTPpSQCQ/hbvP9MmLEiBEjRowYMWLE//+Es4iqVgCXA50i8ix/hYSzgKqOAv4FWEyBAl8RkX/gr4zBGaaqo4B1wOKenh7t7Owkk8mQ9wVVfQ9/ZUxOgRUrVryjt7d3di6XmwPMBi4UkfOAcyl4Q1XfAF4FnjYMY9Po0aOfXrVqVQ+wDliQTqc1kUiI7/s4jiPl5eXklQPP8jarq6ubnMvlPq2q84F3q2oECAMGeSKSBQaAA8BWwzAeV9VHm5ubX+MkmZwgx3HCoVBoQS6Xu/XQoUMLgTBHUFWOcCFwIfCfgAW5XI7+/v6Bl1566fVLLrlkYjqd1kQiIb7vY1kW06ZNU0CA53ib1NXVRbLZ7JdU9TOZTGY8IAxCVU3ABEoBK5vN3gB81XGcF0Oh0MPZbHZ1S0vLACdAGCbXdY2urq5bVfVeVb2QPBHJqOomEXkK2GQYxguq+nppaekb5PX09JwrIuflcrnJwBzTNOfV1tbOnT59upFKpWhsbMT3fSzLIhaLaSQSEWCtiHyC0+zjH/94ybhx474FfAIIUaB5gWEYO1X1ScMwOrPZ7IujR4/+Y19fX4lhGJcBl2Sz2WtF5L2qOkVExvBn/SLSaFnWF13XzTEMwjDU1NRcp6qrVXUGBdtF5JujR4/+7te+9rVuiqCqo4B1wIJ0Oq2JREJ838eyLGKxmEYiEQHagEUi0sdp5DjOnSLiquooCnpE5CehUOguz/NeYBhqa2vfm81mG0TkvapqkiciQSgUus3zvFaKJBRh7dq1oSeeeOIe4IuqaojIH4G7m5ub14qIUiRVHQWsAxak02lNJBLi+z6WZRGLxTQSicj27du1paXln6699tovLV68OMtpsHz58lH9/f0bVHUuBf2quqqlpeUuEVFOQiwWG3Pw4MFvicjHVNUAVEQevf766/9+8eLFWYYgDGHFihXv6OnpWaeq1wFZ4Mu2bd/num4/w6Cqo4B1wIJ0Oq2JREJ838eyLGKxmEYiEdmzZ8/zX/nKVy7LZDIhEdlYWlq6qKmp6QCn0PLlyyf19fV1AudonmEY7ZZlfcR13V5Oobq6uosymczPgankichLpaWlVzU1NR3gOITjqK2tHZfL5X6mquWAbxjGp5qbmzcyCNd1ja6ursW5XO6TwNXAecDrJSUlnffee++F48aNuyqdTmsikRDf97Esi1gsppFIRIA2YFFdXd2cbDb7KGCLSKdhGB9MJpP7OQXq6uomZzKZrUCpiGRU9XMtLS1JBuG6rtHV1bXSMIzbjFDo0pBhhFV1IJPJvJTJZB5Zs2bNV0VEGYSqytKlS5OAA0hel2EY05LJ5H4GIQyitrZ2XDab/TkwU0SeF5HK5ubm3Qxi2bJllw4MDPyrqpZzBNM0qa2tZcaMGaTTaU0kEuL7PpZlEYvFNBKJCNAGLBKRPvJqamouzOVyTwJTReQ3hmFcn0wm93MSHMeZBPwOKAX6QqHQNclkciuDuOOOOy7v6en5JXA+g9sXCoWuTSaTz3EcjuP8PfAtQIDuUCj07mQyuZ9jCHEMqio/+tGPWoH3Ab8vKSmp9DxvD4NYtmzZpQMDA5tUdUpZWRkfuGEB13/wQ3zoxoV8+MYFXHzRRaRSKRobG8X3fSzLIhaLaSQSEaANWCQifbylo6MjVV5e/n0RWaiqM1T1io6OjkcbGho4Ea7rGqlU6jngHKCvpKTkas/zfscgamtrL+/v798KREWEWdfMpuK913Hd/A9w6WWTKRtThr9nN3llqurMmTNn7ebNm19nEJ2dnc9eddVVL4rIR4CIqi7o6OhY09DQwNFCHIPv+3cDNcC+UaNGzXvooYd2MwjXdY0gCH6mqlMuuWwS/+W2Gi6bNJno2LGcP24sY8pKSaVSNDY24vs+lmURi8U0EokI0AYsEpE+jtLZ2ZmeN2/e/85ms58B3rN+/fqBjo6O/8sJmDp1ajswA8gBc5LJ5LMMwnVd4+DBg9uBsWPHnsOnb/0s18yZx/gJE4lEooyfMIGp73o3k6ZM5Q/PP09fX28ol8vd3NHRkWhoaGAwW7ZseXbWrFkHgA8BE9avXz+uo6PjcY5icJSlS5fOBe4VkRxwy+rVq1/lOLq6uharanlZWRmLb76FMZEIh42LljGqJEwqlaKxsRHf97Esi/r6eiKRiOzfv/83wCIR6WMQq1evfhX4tIjk8hqWLl06l2FaunSpA1wPKHBnS0vLFo6ju7v7dmA8eR9bfDMXv/MSjuWii9/J3938Kd5yQU1NzUqGsGbNmq8Bj5OXy+WWO45zLUcxOIKqCtAEhIAHWlpa2hmCqn6KvPfP/wBjIhEOGxctY1RJmFQqRWNjI77vY1kW9fX1RKNRtm3bxj333LNbRPoYQktLSzvwABBS1a+pqlAkVRWgEZC8X7e0tPx3hiAiS8m74sqruOSySRzPxe+8hCtnzuIwVV1KEcaMGfNR4HVAgO+qqnAEgyPU1tZ+SlWvEZHdqvqPFEFVZ5F38Tsv5bBx0TJGlYRJpVI0Njbi+z6WZVFfX080GiU4mCKZTNLf319OkVT1H4FXgatrampuoUg1NTUPqWoEyGYymSqKYBjGJPIumzyFYkyaPIXDVPUSirBq1aoeVV1CwcU1NTVLOILBEXK5XAMFd7e0tByiOOeRd/755zMuWsaokjCpVIrGxkZ838eyLOrr64lGo/T1DxCke8hkMuSdR5FaWloOGYZxN3mq6lIkVV1CwTfy3qAIpmmWkGdZNsWwbJvDRCRMkR555JF1IrKNPFW9jyMYnLzXTdPknEgpo0rCpFIpGhsb8X0fy7Kor68nGo3S1z/A/tQh9u3bx1teZxhyuZzBCRKRHEXK5TRD3qE336QYhw4d4i0ZhkFVORaDIxiG8SUK/slxnDKKUFJS0llbW8s5Y6OkUikaGxvxfR/LsqivrycajdLXP8D+1CEOe+XlF3nLZorkOE6ZiHyFPMMwvkSRROQb5KnqbbW1teMoQjab8cnz9+ymGP6e3bxlH0W67bbbqoEZ5IVCobs4gsERksnko8BmVb1QRL7IEFR11L333nvhjBkzSKVSNDY24vs+lmVRX19PNBqlr3+A/alDHPZmOs0vnvw5hxmG8RjF+wdVvVBEnkkmk49SpObm5jpVfRMwc7ncv1GETCbzffI6O54hk8lwPNlsls5nnuYwwzB+SBFc1x1tGMbXyTMM42XP8x7hCCGO0NDQwKxZs7YBt4rIteXl5Zs6Ozv/wDGo6ihgXWlp6XvT6bQ2NjaK7/tYlkV9fT3RaJS+/gH2pw5x2JvpNGsf+w57976GiHRalrVi48aNyhBqampuUNUkkAuFQosXLlz4KkVqaGhg1qxZ+4EbgYuvvvrqdEdHx1Mcx0033bQxlUrFew4dMrOZDJOmTGUwG37ezo7t28jrLysrq9y0aVOGIUydOvWHwHs0zzTNmxYuXPgKRwhxlM7OzlfLy8szwAeABbNnz/7e5s2bD3IEVR0FrAMWpNNpTSQS4vs+lmVRX19PNBolOJji9QMpuru72b5tK//62HfYu/c1ROS1cDh8w4MPPrifIdTV1V2UzWZ/CowRkS82Nzd/j2Hq7OzsmDVr1vuAy1T1A1dfffWPOjo6uhjExo0bszNnznxZRD7yp1deln17X2PS5CmYZpj/p6+vlx+ua+WZTb8mT/OWPvzww5sZguM4nwOWk2cYxj83Nze3cJQQx9DR0fHLn/zkJ1cD78nlch+eO3fuD5555pkUeao6ClgHLEin05pIJMT3fSzLIhaLaTQalW3btvHA/ffziw1P0Ln5aV74/XMMDAwgIp3hcPiGhx566EWGsGzZMntgYOBJ4CIRWd/c3FzX0NDAibjpppu+k0qllgFjVPXWOXPmrNu8efNeBrFly5ats2bNSqnq3+59rVs2/eqXPP/cLv70yiv86v9s5Kfrf8ye3bvJUxG5q6Wl5SGGsGTJks+IyBpAgK1r1qxZ1NDQwNGEQdTW1o7LZrM/B2aKyPMiUplMJvcB64AF6XRaE4mE+L6PZVnEYjGNRCKyf//+39xzzz27+/v7y4HzgNeBzYZhPDZx4sS1ruvmGEJNTc2FqrpBVacAW8rKyq5vamo6wEmoq6ubnM1mt6pqKdBnGMas5ubmbRyH4zgzVfVfRGQ6f2mnYRi3Njc3P8MQlixZ8hkR+R+AAN1lZWXvampqOsAxCMdRW1s7LpfLtavqLNM0/fvuu++VsWPHzk6n05pIJMT3fSzLIhaLaSQSEaANWCQifZygmpqa63K53KOAJSIdhmH8bTKZ3M8pcPvtt0/NZDK/VdVSEckAt69Zs6aFITiOc7FhGHNU9XzgdRF5urm5+SWK4DiOB9QAktdlGMa0ZDK5n0EIQ1ixYsU7BgYG1tXU1Fw3Y8YM0um0JhIJ8X0fy7KIxWIaiUQEaAMWiUgfJ8B13ZI9e/bcJSL3qKoBbCgrK/toU1PTAU6hz33uc1N6e3s7gLGAikhbSUnJR1evXt3HKbRs2TK7v7//CeBdFLxUVlZ2VVNT0wGOI8QQnnrqKb3xxhs/Nn78+CnpdFoTiYT4vo9lWcRiMY1EIgK0AYtEpI9hUlXp7u6+OZVK/QBYJCJqGMa9lmX91/vvv7+HU+zpp59+Y968eauy2ewHgb8BpuRyuf9WXl5e2tHRsaGhoYGTsXLlytIrrrjif2az2W8AFwBqGMZjlmVdd//99/cwBOE4VHUUsA5YkE6nNZFIiO/7WJZFfX090WiU7u7und/97ndvqK+v/xPDcMcdd0zo7e29RVU/C0wnT0S2icjy5ubmjbwNHMf5AnAPUELBIRH5UVlZ2d2rVq36I8Nw++23zx0YGPgy8D4gTJ6IHMzlckseeeSRtRRJOA5V/V/A4nQ6rYlEQnzfx7IsYrGYRiIR2bZtG8lkkmw2m1HVTSLyFLBJVZ83DOON0tLSN8jr6ek5N5fLnSsiU4A5qjpXROaoqkmeiOwWkXsmTpz4bdd1c7yNbr311tElJSXfFpGPq6pBgQL7gR2GYTyRy+U2h8PhlwYGBl4EwsCkXC53iWEY14rI+1T1ciDCn/UDTbZt3+W6bo5hEAahqhXAL3t6evSBBx4Q3/exLItYLKaRSERU9fE777zzkSAIPq2qC4EwwzMgIj82DOPbEyZMWO+6boYz6LOf/Ww0HA7fq6q3AOcDwvAo8LJhGMmJEyd+1XXdDCfAZHCXk7djxw7xfR/LsojFYhqJRARoE5FFDz74YB/wgxUrVryjt7d3NjA3l8tdA/yNiJwLnEvBG6r6BvCqYRjPAE+NHj366aampgOcJb75zW+mgJXAymXLlr1rYGDgFuB6Vb1cRMaoqgkYFOSAASAAficiPw2FQt/xPK+LkyQMQlWvBLZkMhmeffZZmTZtmpaWlgrQBiwSkT7+yqiq5CmnkXAcqvpl4AuAULAW+M8i0seI00IYgqpeCcwEnhORXzFixIgRI0aMGDFixIgRI0aMGDFixJkh5NXW1l6Ry+VWqqrT0tIywGkWj8ejQRCsEZG7m5ubX+Iov/jFLyhSBPgwUAlcCVwKnENBALwI/BbYAPwESFOE97///ZwpZk1NzYxsNvsEcD5wruM4f9fS0jLAaRKPx6NBELSpaoWqzlu+fPm1q1evfpXhmQx8HvgkMIZjGw+MB2YDS4E3gceAB4AXOEsZefuAfRRUAa2O44Q5DeLxeDQIgjZVraDgufPOO28fxRsN3A9sB24DxlC8McBtwHbgAWA0ZyHD87wu0zQrgV0UVAGtjuOEOYXi8Xg0CII2Va2goN227WrXdXspziTgKeDzQAknrgSIA08BkznLGOR5ntdlmmYlsIuCKqDVcZwwp0A8Ho8GQdCmqhUUtNu2Xe26bi/FmQn8CriSU+dK4JfATM4iBm/xPK/LNM1KYBcFVUCr4zhhTkI8Ho8GQdCmqhUUtNu2Xe26bi/FmQw8Dkzg1JsAPA5M5ixhcATP87pM06wEdlFQBbQ6jhPmBMTj8WgQBG2qWkFBu23b1a7r9lKcUqAVuIDT5wLg+0ApZwGDo3ie12WaZiWwi4IqoNVxnDDDEI/Ho0EQtKlqBQXttm1Xu67bS/Fc4D2cflcALmcBg2PwPK/LNM1KYBcFVUCr4zhhihCPx6NBELSpagUF7bZtV7uu20vxJgErefusBCZzhhkMwvO8LtM0K4FdFFQBrY7jhDmOeDweDYKgTVUrKGi3bbvadd1ehudOIMzbJwzcyRlmcBye53WZplkJ7KKgCmh1HCfMMcTj8WgQBG2qWkFBu23b1a7r9jI8UeCTDO0TQAWwl8G9BswE5jK0m4EoZ5DBEDzP6zJNsxLYRUEV0Oo4TpgjxOPxaBAEbapaQUG7bdvVruv2Mnw3AmMY2ivAr4FKYC9/qRuoBH4D9DG0McCNnEEGRfA8r8s0zUpgFwVVQKvjOGHy4vF4NAiCNlWtoKDdtu1q13V7OTHXU5x/A6YD24FKYC9/1g3MB3YA7wbaKM71nEEGRfI8r8s0zUpgFwVVQGttbe24IAjaVLWCgnbbtqtd1+3lxF1BccYDTwLTge1AJbAX6AbmAzuAdwMbgAkU5wrOIINh8DyvyzTNSmAXBVW5XO55Va2goN227WrXdXs5OZMo3nhgAzAd2A5UAvOBHcA0YAMwgeJN4gwyGCbP87pM06xU1d+Tp6rnkaeqP7Ntu9p13V5O3liG5wJgAzAd2A7sAKYBTwITGJ6xnEEGJyASibxpGMYBjmAYRt+ePXuynDk5QPkzAQz+gzEYpng8Hg2CoE1VryFPVd8kT1UXAq2O44Q5eQcZnm5gPrADmAZMB7YDlcBehucgZ5DBMMTj8WgQBG2qWkFBe0lJyXRgFwVVQKvjOGFOzh8oXjcwH9gBTAOeBDYA04HtQCWwl+L9gTPIoEjxeDwaBEGbqlZQ0G7bdvXDDz/8smmalcAuCqqAVsdxwpy4rRSnG5gP7ACmAU8CE4ALgA3AdGA7UAnspThbOYMMihCPx6NBELSpagUF7bZtV7uu20ue53ldpmlWArsoqAJaHccJc2KeoDgLgR3ANOBJYAJ/dgGwAZgObAeqKM4TnEEGQ4jH49EgCNpUtYKCdtu2q13X7eUInud1maZZCeyioApodRwnzPCtB95kaOcC5cCTwAT+0gXABmAecBFDOwSs5wwyOI54PB4NgqBNVSsoaLdtu9p13V6OwfO8LtM0K4FdFFQBrY7jhBmeFPA9hvZToAOYwOAuAH4FrGVojwEpziCDQcTj8WgQBG2qWkFBu23b1a7r9nIcnud1maZZCeykoApodRwnzPDcBwzw9hkA7ucMMziGeDweDYKgTVUrKGi3bbvadd1eiuB5XpdpmvOBnRRUAa2O44Qp3h+AVbx9moAXOMMMjhKPx6NBELSpagUF7bZtV7uu28sweJ7XZZrmfGAnBVVAq+M4YYrnAls5/bYCLmcBgyPE4/FoEARtqlpBQbtt29Wu6/ZyAjzP6zJNcz6wk4IqoNVxnDDF6QE+Buzl9NkLfAw4xFnA4C3xeDwaBEGbqlZQ0G7bdrXrur2cBM/zukzTnA/spKAKaHUcJ0xxXgA+BHRz6nUDHwJe4CxhkBePx6NBELSpagUF7bZtV7uu28sp4Hlel2ma84GdFFQBrY7jhCnOFuBaYCunzlbgWmALZxEjHo9HgyBoU9UKCtpt2652XbeXU8jzvC7TNOcDOymoAlrXrl0bojgvALOBB4F+Tlw/8CAwG3iBs4wRBMGXVbWCgnbbtqtd1+3lNPA8r8s0zfnATvJEZOvixYuzFK8X+DwwHfg6cIji9QBfB2YAnwd6OQuZoVDoi5lMphw4ZNt2teu6vZxGnud11dXVzc9kMovXrFnzz5yYF4AlwEpgIVAJXAlcCryDggPAi8BvgQ3Aj4E0/xHU1dVFXNcdzYgz7t8BcR0KedkDGoUAAAAASUVORK5CYII=");
  background-size: 200%;
  position: absolute;
  left: 6.6rem;
}
.dlzc {
  width: 100%;
  height: 0.98rem;
  background: #ccc;
  border-radius: inherit;
  font-size: 0.45rem;
  text-align: center;
  line-height: 0.98rem;
  margin-top: 1rem;
  border-radius: 0.1rem;
  color: white;
}
.go {
  display: flex;
  font-size: 0.28rem;
  color: #666;
  text-align: center;
  width: 100%;
  margin-top: 0.3rem;
}
.go span:nth-child(2) {
  margin-left: 3.6rem;
}
.bbb {
  font-size: 0.24rem;
  color: #999;
  letter-spacing: 0;
  line-height: 0.24rem;
  text-align: center;
  margin-top: 2.5rem;
}
.bbb a {
  color: #001f24;
}
.left {
  width: 0.1rem;
  height: 0.6rem;
  background: orange;
  position: absolute;
  top: 1rem;
  left: 0;
}
</style>

