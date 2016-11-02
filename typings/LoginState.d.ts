declare namespace LoginState{
    export interface State{
        isAuth:boolean,
        name:string,
        LogOut:()=>{}
    }
}