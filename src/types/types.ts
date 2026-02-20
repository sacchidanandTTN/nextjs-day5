export interface Teacher{
    id:string,
    name:string,
    subject:string
}


export interface Student{
    id:string,
    name:string,
    age:number,
    teacherId:string
}