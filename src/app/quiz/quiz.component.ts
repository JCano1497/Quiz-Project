import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Quiz } from '../model.quiz';
import { QuizService } from '../quiz.service';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  answer:any;
  correct:String[]=[];
  QuizInfo:Quiz[];
  flag:boolean=false;
  submitted:boolean=false;
  Start:string="Start Quiz";
  constructor(private QuizService:QuizService) { }

  ngOnInit(): void {

  }
  loadQuiz(): void{
    this.flag=true;
    this.QuizService.loadQuizDetails().subscribe(data=>this.QuizInfo=data);
  }
  onSubmit(form: NgForm){
    this.submitted=true;

    }
  userAnswer(form:NgForm,correctanswer:string,questionID:string):boolean{
    this.answer=form.controls[questionID].value;
    console.log(this.correct.length);
    if(correctanswer==this.answer){
      if(this.correct.indexOf(questionID) ===-1){
          this.correct.push(questionID);
      }
      return true;
    }
    else{return false;}
  }
  }

