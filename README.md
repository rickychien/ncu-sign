# NCU Sign

Auto sign-in / sign-out to the NCU attendance website by nodejs.

## Usage

1. Install [node.js](http://www.nodejs.org)

2. Use delay\_execute.sh or run ncu\_sign.js directly with node.

### Using delay\_execute.sh

        $ sh delay\_execute.sh Action ID PASSWD ProjectID

        or

        $ ./delay\_execute.sh Action ID PASSWD ProjectID

## Using ncu\_sign.js 

        In ncu\_sign folder, run

        $ node ncu_sign.js Action ID PASSWD ProjectID

## About execution argument

        Action: 'signin' / 'signout'.
        ProjectID: Can found it in HTML input button value of NCU signin website.