import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heading:string ='Dashboard';
  todayDate = new Date();
  currentDateString = '';
  currentMonth = '';
  currentYear = '';
  currentDate: any;
  total_percentage = 48;
  startDate: any;
  endDate: any;
  allDays:any;
  progressNum: number = 0;
  tasks = [
    {taskId: 'task_1', name: 'User Profile', progressLevel: 50 + this.progressNum, width: 400},
    {taskId: 'task_2', name: 'Settings', progressLevel: 60 + this.progressNum, width: 450},
    {taskId: 'task_3', name: 'Swift Transfer', progressLevel: 30 + this.progressNum, width: 500},
    {taskId: 'task_4', name: 'Analytics', progressLevel: 30 + this.progressNum, width: 500},
    {taskId: 'task_5', name: 'Chat Box', progressLevel: 70 + this.progressNum, width: 500},
    {taskId: 'task_1', name: 'Assessment', progressLevel: 50 + this.progressNum, width: 450},
    {taskId: 'task_2', name: 'Mobile', progressLevel: 60 + this.progressNum, width: 480},
    {taskId: 'task_3', name: 'Web App', progressLevel: 30 + this.progressNum, width: 500},
    {taskId: 'task_4', name: 'IOS Display', progressLevel: 30 + this.progressNum, width: 500},
    {taskId: 'task_5', name: 'Code Revamp', progressLevel: 70 + this.progressNum, width: 500},
  ]

  allStaff = [
    {id: 0, fullname: 'Finna A.', role: 'UX Designer', pic: 'https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc='},
    {id: 1, fullname: 'Emma F.', role: 'UI Designer', pic: 'https://i.imgur.com/hczKIze.jpg'},
    {id: 2, fullname: 'Samanta G.', role: 'Senior UI/UX Designer', pic: 'https://media.istockphoto.com/photos/professional-woman-working-from-home-picture-id1319189527?b=1&k=20&m=1319189527&s=170667a&w=0&h=OMelm_mmmIFVCCcgv1630qGqIWXH9AETusY4QtsRD9A='},
    {id: 3, fullname: 'Alex B.', role: 'Ux Analyst', pic: 'https://media.istockphoto.com/photos/shot-of-a-handsome-young-man-using-his-smartphone-to-send-a-text-picture-id1358205704?b=1&k=20&m=1358205704&s=170667a&w=0&h=HIjwdZwFcuDBgyYDXyU3y3YKpgOnbf9Qn4jpQSQfbns='},
    {id: 4, fullname: 'Cody D.', role: 'UI Analyst', pic: 'https://media.istockphoto.com/photos/freelancer-sitting-at-home-blogging-picture-id1277730824?k=20&m=1277730824&s=612x612&w=0&h=PtJ8_yOWGilz3HydSSaFQpplY1kHgAE3YcxylJCf5GE='},
    {id: 5, fullname: 'Erik F.', role: 'UX Designer', pic: 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='},
    {id: 6, fullname: 'Anna S.', role: 'UI Designer', pic: 'https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI='},
    {id: 7, fullname: 'Alex H.', role: 'Frontend Developer', pic: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'},
    {id: 8, fullname: 'Julan W.', role: 'Backend Developer', pic: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'},
    {id: 9, fullname: 'Christian B.', role: 'UI Designer', pic: 'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'},

  ]

 

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.heading = params['heading'];
    });
    this.currentDate = this.todayDate.getDate();
    this.currentDateString = this.todayDate.toLocaleString('en-us',{month:'long', year:'numeric', day:'numeric'});
    this.currentMonth = this.currentDateString.substring(0,5);
    this.currentYear = this.currentDateString.substring(10,14);
    this.startDate = this.todayDate.setDate(this.todayDate.getDate() - 7);
    this.todayDate = new Date();
    this.endDate = this.todayDate.setDate(this.todayDate.getDate() + 9);
    this.allDays = this.getDaysArray(this.startDate, this.endDate);

    this.shuffle(this.tasks);
    this.generateWidth();

    this.generateRandom();

  }

  generateRandom () {
    let progressNum = 0;

    setInterval(() =>{ 

      let new_percent = 0;
      progressNum += 10;

      for (const obj of this.tasks) {
          obj.progressLevel = (obj.progressLevel + progressNum) < 100 ? obj.progressLevel + progressNum : 100 ;
          new_percent = new_percent + obj.progressLevel;
      }
      this.total_percentage = (new_percent / 10) ;
      
    }, 10000);
  }

  shuffle(array:any) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  generateWidth() {
    let newWidth = Math.floor((Math.random() * 10) + 1) * 20;
    for (const obj of this.tasks) {
      obj.width = obj.width + newWidth;
    }
  }
  

  getDaysArray (start:any, end:any) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
        arr.push({
          day: weekday[new Date(dt).getDay()].substring(0,1),
          date: new Date(dt).getDate()
        });
    }
    return arr;
  };

}
