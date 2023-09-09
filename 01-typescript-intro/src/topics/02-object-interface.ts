
let skill=['bash','bill',true]


interface Character{
    name:string;
    hp:number;
    skills:string[]
    hometown:string | undefined;
}
const strider:Character ={
    name: 'strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown: undefined
}
strider.hometown ='Riverdell'

console.table(strider)

export{}