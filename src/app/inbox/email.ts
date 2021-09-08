export class Email {
    id:string;
    subject:string;
    text:string;
    to:string;
    from:string;
    html:string;

    constructor( id:string,
        subject:string,
        text:string,
        to:string,
        from:string,
        html:string){
            this.id=id;
            this.subject=subject;
            this.text=text;
            this.to=to;
            this.from=from;
            this.html=html;
        }
}
