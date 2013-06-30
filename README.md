# NCU Sign

Auto sign-in / sign-out to the NCU attendance website by nodejs.

## Usage

1. Install [node.js](http://www.nodejs.org)

2. Use delay\_execute.sh or run ncu\_sign.js directly with node.

#### Using delay_execute.sh

  This shell script can random a delay time (default 0 ~ 25minutes) and then execute ncu_sign.js.
  In ncu\_sign folder, run

        $ sh delay_execute.sh Action ID PASSWD ProjectID

  or

        $ ./delay_execute.sh Action ID PASSWD ProjectID

#### Using ncu_sign.js 

  This way can invoke signin or signout without delay. In ncu_sign folder, run

        $ node ncu_sign.js Action ID PASSWD ProjectID

## About execution argument

  + Action: signin / signout.
  + ProjectID: Can found it in HTML input button value of NCU signin website.