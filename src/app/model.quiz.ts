export class Quiz {
    constructor(public questionId:string,
        public question:string,
        public options:[optionID:string,msg:string],
        public answer: string
        ){}
}